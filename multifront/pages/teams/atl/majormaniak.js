import Link from 'next/link'

export default function Majormaniak() {
  return (
    <div className="Player">
      <header className="Playername">
        <h1>MajorManiak</h1>
      </header>
      <img className="PlayerIMG" src="/images/atl/majormaniak.png"/>
      <div className="Back">
        <Link href='/teams/atl'>
          <a>Back</a>
        </Link>
      </div>
    </div>
  )
}
