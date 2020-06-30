import Link from 'next/link'

export default function SEA() {
  return (
    <div className="SEA">
      Seattle Surge
      <div className="Back">
        <Link href='/teams'>
          <a>Back</a>
        </Link>
      </div>
    </div>
  )
}
