import Link from 'next/link'

export default function ATL() {
  return (
    <div className="ATL">
      <header>
        <h1>Atlanta FaZe</h1>
      </header>
      <div className="toPlayer">
        <Link href='/teams/atl/abezy'>
          aBeZy
        </Link>
      </div>
      <div className="toPlayer">
        <Link href='/teams/atl/cellium'>
          Cellium
        </Link>
      </div>
      <div className="toPlayer">
        <Link href='/teams/atl/majormaniak'>
          MajorManiak
        </Link>
      </div>
      <div className="toPlayer">
        <Link href='/teams/atl/priestahh'>
          Priestahh
        </Link>
      </div>
      <div className="toPlayer">
        <Link href='/teams/atl/simp'>
          Simp
        </Link>
      </div>
      <div className="Back">
        <Link href='/teams'>
          <a>Back</a>
        </Link>
      </div>
    </div>
  )
}
