import Link from 'next/link'

export default function Alexx() {
  return (
    <div className="Alexx">
      Alexx
      <div className="Back">
        <Link href='/teams/min'>
          <a>Back</a>
        </Link>
      </div>
    </div>
  )
}
