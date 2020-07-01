import Link from 'next/link';
import Head from 'next/head';

export default function Home() {
  return (
    <div className="Home">
      <header className="Header">
        <h1>Call of Duty League 2020 Stats</h1>
      </header>
      <div className="Navigation">
        <div className="toTeams">
          <Link href="/teams">
            <a>Teams</a>
          </Link>
        </div>
        <div className="toPlayers">
          <Link href="/players">
            <a>Players</a>
          </Link>
        </div>
      </div>
    </div>
  )
}
