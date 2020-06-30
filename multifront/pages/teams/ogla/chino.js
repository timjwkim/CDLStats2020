import Link from 'next/link'

export default function Chino() {
  return (
    <div className="Chino">
      Chino
      <div className="Back">
        <Link href='/teams/ogla'>
          <a>Back</a>
        </Link>
      </div>
    </div>
  )
}
