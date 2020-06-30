import Link from 'next/link'

export default function PAR() {
  return (
    <div className="PAR">
      Paris Legion
      <div className="Back">
        <Link href='/teams'>
          <a>Back</a>
        </Link>
      </div>
    </div>
  )
}
