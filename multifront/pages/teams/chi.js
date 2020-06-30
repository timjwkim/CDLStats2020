import Link from 'next/link'

export default function CHI() {
  return (
    <div className="CHI">
      Chicago Huntsmen
      <div className="Back">
        <Link href='/teams'>
          <a>Back</a>
        </Link>
      </div>
    </div>
  )
}
