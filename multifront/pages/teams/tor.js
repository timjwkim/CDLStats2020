import Link from 'next/link'

export default function TOR() {
  return (
    <div className="TOR">
      Toronto Ultra
      <div className="Back">
        <Link href='/teams'>
          <a>Back</a>
        </Link>
      </div>
    </div>
  )
}
