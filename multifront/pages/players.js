import Link from 'next/link'

export default function Players() {
  return (
    <div className="Players">
      Players
      <div className="Back">
        <Link href='/'>
          <a>Back</a>
        </Link>
      </div>
    </div>
  )
}
