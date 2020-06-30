import Link from 'next/link'

export default function Clayster() {
  return (
    <div className="Clayster">
      Clayster
      <div className="Back">
        <Link href='/teams/dal'>
          <a>Back</a>
        </Link>
      </div>
    </div>
  )
}
