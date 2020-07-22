const express = require('express');
const app = express();
const port = 5000;

var players = [];
var overalls = [];
var hps = [];
var snds = [];
var doms = [];

// GOOGLE SHEETS API STUFF
const fs = require('fs');
const readline = require('readline');
const {google} = require('googleapis');

const SCOPES = ['https://www.googleapis.com/auth/spreadsheets.readonly'];
const TOKEN_PATH = 'token.json';

// Load client secrets from a local file.
fs.readFile('credentials.json', (err, content) => {
  if (err) return console.log('Error loading client secret file:', err);
  // Authorize a client with credentials, then call the Google Sheets API.
  authorize(JSON.parse(content), listMajors);
});

/**
 * Create an OAuth2 client with the given credentials, and then execute the
 * given callback function.
 * @param {Object} credentials The authorization client credentials.
 * @param {function} callback The callback to call with the authorized client.
 */
function authorize(credentials, callback) {
  const {client_secret, client_id, redirect_uris} = credentials.installed;
  const oAuth2Client = new google.auth.OAuth2(
      client_id, client_secret, redirect_uris[0]);

  // Check if we have previously stored a token.
  fs.readFile(TOKEN_PATH, (err, token) => {
    if (err) return getNewToken(oAuth2Client, callback);
    oAuth2Client.setCredentials(JSON.parse(token));
    callback(oAuth2Client);
  });
}

/**
 * Get and store new token after prompting for user authorization, and then
 * execute the given callback with the authorized OAuth2 client.
 * @param {google.auth.OAuth2} oAuth2Client The OAuth2 client to get token for.
 * @param {getEventsCallback} callback The callback for the authorized client.
 */
function getNewToken(oAuth2Client, callback) {
  const authUrl = oAuth2Client.generateAuthUrl({
    access_type: 'offline',
    scope: SCOPES,
  });
  console.log('Authorize this app by visiting this url:', authUrl);
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  rl.question('Enter the code from that page here: ', (code) => {
    rl.close();
    oAuth2Client.getToken(code, (err, token) => {
      if (err) return console.error('Error while trying to retrieve access token', err);
      oAuth2Client.setCredentials(token);
      // Store the token to disk for later program executions
      fs.writeFile(TOKEN_PATH, JSON.stringify(token), (err) => {
        if (err) return console.error(err);
        console.log('Token stored to', TOKEN_PATH);
      });
      callback(oAuth2Client);
    });
  });
}

var list = [];

/**
 * Prints the names and majors of students in a sample spreadsheet:
 * @see https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/edit
 * @param {google.auth.OAuth2} auth The authenticated Google OAuth client.
 */
function listMajors(auth) {
  const sheets = google.sheets({version: 'v4', auth});
  sheets.spreadsheets.values.get({
    spreadsheetId: '12AoKsQXSRzSozwcR_zsDZo21rP6XJIzcKZ2utv04nR4',
    range: 'B6:DC79',
  }, (err, res) => {
    if (err) return console.log('The API returned an error: ' + err);
    const rows = res.data.values;
    if (rows.length) {
      // Print columns A and E, which correspond to indices 0 and 4.
      rows.map((row) => {
        var basic = {playerName:`${row[0]}`, team:`${row[2]}`, role: `${row[3]}`,
                       overallKD: `${row[6]}`, hpKD: `${row[25]}`,
                       sndKD: `${row[51]}`, domKD: `${row[93]}`};
        players.push(basic);

        var overall = {playerName:`${row[0]}`, team:`${row[2]}`, role: `${row[3]}`,
                       kills: `${row[4]}`, deaths: `${row[5]}`, kd: `${row[6]}`,
                       plusMinus: `${row[7]}`, aKD: `${row[8]}`, slayRate: `${row[9]}`};
        overalls.push(overall);

        var hp = {playerName: `${row[0]}`, team: `${row[2]}`, role: `${row[3]}`,
                  hiKills: `${row[16]}`, kp10m: `${row[18]}`, ep10m: `${row[20]}`,
                  kd: `${row[25]}`, htpgt: `${row[34]}`, trueES: `${row[36]}`, games: `${row[37]}`};
        hps.push(hp);

        var snd = {playerName: `${row[0]}`, team: `${row[2]}`, kpg: `${row[44]}`,
                   hiKills: `${row[46]}`, dpg: `${row[48]}`, kd: `${row[51]}`,
                   opDuels: `${row[60]}`, opDP: `${row[62]}`, games: `${row[74]}`, rounds: `${row[75]}`};
        snds.push(snd);

        var dom = {playerName: `${row[0]}`, team: `${row[2]}`, role: `${row[3]}`,
                   kpg: `${row[82]}`, hiKills: `${row[83]}`, epg: `${row[90]}`,
                   kd: `${row[93]}`, cpg: `${row[98]}`, trueES:`${row[102]}`};
        doms.push(dom);
      });
    } else {
      console.log('No data found.');
    }
  });
}

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.get('/players', (req, res) => {
  res.send(players);
});

app.get('/overall', (req, res) => {
  res.send(overalls);
});

app.get('/hardpoint', (req, res) => {
  res.send(hps);
});

app.get('/search', (req, res) => {
  res.send(snds);
});

app.get('/domination', (req, res) => {
  res.send(doms);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
