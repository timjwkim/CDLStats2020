import Link from 'next/link'

export default function NY() {
  return (
    <div className="NY">
      New York Subliners
      <div className="Back">
        <Link href='/teams'>
          <a>Back</a>
        </Link>
      </div>
    </div>
  )
}
