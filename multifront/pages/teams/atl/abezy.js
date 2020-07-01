import Link from 'next/link'
import BasicStats from '../components/BasicStats.js'

export default function Abezy() {
  return (
    <div className="Player">
      <div className="PlayerIMG">
        <img src="/images/atl/abezy.png"/>
      </div>
      <div className="Playercomponent">
        <header className="Playername">
          <h1>aBeZy</h1>
        </header>
        <BasicStats/>
      </div>
      <div className="Back">
        <Link href='/teams/atl'>
          <a>Back</a>
        </Link>
      </div>
    </div>
  )
}
