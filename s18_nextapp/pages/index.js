import Image from "next/image";
import Link from "next/link";
import Coffee from "../public/coffee.png"

export default function Home() {
  return (
    <div>
      <Link href="/chanchitos">iR A CHANCHITOS</Link>
      <p>Home</p>
      {/* <Image
        src="/coffee.png"
        width={400}
        height={400}
      /> */}
      <Image 
        src={Coffee}
        width={400}
        height={400}
      />
    </div>
  )
}
