import Link from 'next/link'

export default function Denz() {
  return (
    <div className="Denz">
      Denz
      <div className="Back">
        <Link href='/teams/par'>
          <a>Back</a>
        </Link>
      </div>
    </div>
  )
}
