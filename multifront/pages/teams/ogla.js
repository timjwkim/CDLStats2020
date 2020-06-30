import Link from 'next/link'

export default function OGLA() {
  return (
    <div className="OGLA">
      OpTic Gaming Los Angeles
      <div className="Back">
        <Link href='/teams'>
          <a>Back</a>
        </Link>
      </div>
    </div>
  )
}
