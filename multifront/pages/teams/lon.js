import Link from 'next/link'

export default function LON() {
  return (
    <div className="LON">
      London Royal Ravens
      <div className="Back">
        <Link href='/teams'>
          <a>Back</a>
        </Link>
      </div>
    </div>
  )
}
