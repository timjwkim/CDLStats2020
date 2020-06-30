import Link from 'next/link'

export default function FL() {
  return (
    <div className="FL">
      Florida Mutineers
      <div className="Back">
        <Link href='/teams'>
          <a>Back</a>
        </Link>
      </div>
    </div>
  )
}
