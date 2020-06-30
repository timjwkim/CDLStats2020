import Link from 'next/link'

export default function LAG() {
  return (
    <div className="LAG">
      Los Angeles Guerillas
      <div className="Back">
        <Link href='/teams'>
          <a>Back</a>
        </Link>
      </div>
    </div>
  )
}
