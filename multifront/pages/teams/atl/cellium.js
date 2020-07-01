import Link from 'next/link'
import BasicStats from '../components/BasicStats.js'

export default function Cellium() {
  return (
    <div className="Player">
      <img className="PlayerIMG" src="/images/atl/cellium.png"/>
      <header className="Playername">
        <h1>Cellium</h1>
      </header>
      <BasicStats/>
      <div className="Back">
        <Link href='/teams/atl'>
          <a>Back</a>
        </Link>
      </div>
    </div>
  )
}
