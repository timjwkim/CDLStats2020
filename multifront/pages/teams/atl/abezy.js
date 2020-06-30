import Link from 'next/link';

export default function Abezy() {
  return (
    <div className="Abezy">
      aBeZy
      <div className="Back">
        <Link href='/teams/atl'>
          <a>Back</a>
        </Link>
      </div>
    </div>
  )
}
