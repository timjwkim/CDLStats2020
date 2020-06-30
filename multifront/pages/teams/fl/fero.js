import Link from 'next/link'

export default function Fero() {
  return (
    <div className="Fero">
      Fero
      <div className="Back">
        <Link href='/teams/fl'>
          <a>Back</a>
        </Link>
      </div>
    </div>
  )
}
