import Link from 'next/link'

export default function MIN() {
  return (
    <div className="MIN">
      Minnesota Røkkr
      <div className="Back">
        <Link href='/teams'>
          <a>Back</a>
        </Link>
      </div>
    </div>
  )
}
