import Link from 'next/link'

export default function Apathy() {
  return (
    <div className="Apathy">
      Apathy
      <div className="Back">
        <Link href='/teams/sea'>
          <a>Back</a>
        </Link>
      </div>
    </div>
  )
}
