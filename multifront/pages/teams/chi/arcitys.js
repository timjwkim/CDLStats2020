import Link from 'next/link'

export default function Arcitys() {
  return (
    <div className="Arcitys">
      Arcitys
      <div className="Back">
        <Link href='/teams/chi'>
          <a>Back</a>
        </Link>
      </div>
    </div>
  )
}
