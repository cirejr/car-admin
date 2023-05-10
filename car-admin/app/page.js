import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
	<div>
		<h1>This is home Page</h1>
		<h2>Click on this login button </h2>
		<Link href="/login">login</Link>
	</div>
  )
}
