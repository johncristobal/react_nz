import Image from "next/image"
import Link from "next/link"

const Pokemon = ({data}) => {
    console.log(data)
    return(
        <div>
            <h1>{data.name} numero {data.id}</h1>
            <Image src={data.sprites.front_default} width={400} height={400} />
            <Link href="/"> Volver al inicio </Link>
        </div>
    )
}

export default Pokemon

export const getServerSideProps = async ({params}) => {
    console.log(params)
    const resp = await fetch(`https://pokeapi.co/api/v2/pokemon/${params.id}`)
    const data = await resp.json();

    return {
        props: { data }
    }
}
