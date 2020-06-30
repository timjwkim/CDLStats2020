import Link from 'next/link'

export default function ATL() {
  return (
    <div className="ATL">
      <header>
        <h1>Atlanta FaZe</h1>
      </header>
      <div className="toAbezy">
        <Link href='/teams/atl/abezy'>
          aBeZy
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
