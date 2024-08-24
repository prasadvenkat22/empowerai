import Link from 'next/link'

const UniqueHomeLink = () => {
  return (
    <Link href="/" className="fixed top-4 left-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
      Home
    </Link>
  )
}

export default UniqueHomeLink
