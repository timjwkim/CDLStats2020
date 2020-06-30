import Link from 'next/link'

export default function DAL() {
  return (
    <div className="DAL">
      Dallas Empire
      <div className="Back">
        <Link href='/teams'>
          <a>Back</a>
        </Link>
      </div>
    </div>
  )
}
