import { useRouter } from "next/router"

const Desc = () => {
    const router = useRouter()
    console.log(router);
    return(
        <p>Descripcion de pokemnon</p>
    )
}

export default Desc