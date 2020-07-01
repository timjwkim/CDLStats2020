import Link from 'next/link'

export default function Priestahh() {
  return (
    <div className="Player">
      <header className="Playername">
        <h1>Priestahh</h1>
      </header>
      <img className="PlayerIMG" src="/images/atl/priestahh.png"/>
      <div className="Back">
        <Link href='/teams/atl'>
          <a>Back</a>
        </Link>
      </div>
    </div>
  )
}
