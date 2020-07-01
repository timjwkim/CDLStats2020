import Link from 'next/link'

export default function Simp() {
  return (
    <div className="Player">
      <header className="Playername">
        <h1>Simp</h1>
      </header>
      <img className="PlayerIMG" src="/images/atl/simp.png"/>
      <div className="Back">
        <Link href='/teams/atl'>
          <a>Back</a>
        </Link>
      </div>
    </div>
  )
}
