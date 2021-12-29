import useIsMounted from "../../hooks/ismounted";
import { useRouter } from "next/router"

const ChanchitoDinamico = () => {

    const isMounted = useIsMounted()
    const router = useRouter();

    if(!isMounted){
        return null
    }

    console.log(router.query.id);
    return(
        <div>
            <p>Dinamico chancito</p>
        </div>
    )
}

export default ChanchitoDinamico