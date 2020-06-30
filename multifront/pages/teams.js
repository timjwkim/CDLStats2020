import Link from 'next/link'

export default function Teams() {
  return (
    <div className="Teams">
      <header>
        <h1>Teams</h1>
      </header>
      <div className="toATL">
        <Link href='/teams/atl'>
          <a>Atlanta Faze</a>
        </Link>
      </div>
      <div className="toCHI">
        <Link href='/teams/chi'>
          <a>Chicago Huntsmen</a>
        </Link>
      </div>
      <div className="toDAL">
        <Link href='/teams/dal'>
          <a>Dallas Empire</a>
        </Link>
      </div>
      <div className="toFL">
        <Link href='/teams/fl'>
          <a>Florida Mutineers</a>
        </Link>
      </div>
      <div className="toLAG">
        <Link href='/teams/lag'>
          <a>Los Angeles Guerillas</a>
        </Link>
      </div>
      <div className="toLON">
        <Link href='/teams/lon'>
          <a>London Royal Ravens</a>
        </Link>
      </div>
      <div className="toMIN">
        <Link href='/teams/min'>
          <a>Minnesota Røkkr</a>
        </Link>
      </div>
      <div className="toNY">
        <Link href='/teams/ny'>
          <a>New York Subliners</a>
        </Link>
      </div>
      <div className="toOGLA">
        <Link href='/teams/ogla'>
          <a>OpTic Gaming Los Angeles</a>
        </Link>
      </div>
      <div className="toPAR">
        <Link href='/teams/par'>
          <a>Paris Legion</a>
        </Link>
      </div>
      <div className="toSEA">
        <Link href='/teams/sea'>
          <a>Seattle Surge</a>
        </Link>
      </div>
      <div className="toTOR">
        <Link href='/teams/tor'>
          <a>Toronto Ultra</a>
        </Link>
      </div>
      <div className="Back">
        <Link href='/'>
          <a>Back</a>
        </Link>
      </div>
    </div>
  )
}
