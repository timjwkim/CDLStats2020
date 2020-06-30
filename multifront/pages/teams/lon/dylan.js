import Link from 'next/link'

export default function Dylan() {
  return (
    <div className="Dylan">
      Dylan
      <div className="Back">
        <Link href='/teams/lon'>
          <a>Back</a>
        </Link>
      </div>
    </div>
  )
}
