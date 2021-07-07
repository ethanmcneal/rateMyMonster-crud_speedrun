import axios from "axios"
import { useEffect, useState } from "react"

const MonstersPage = () => {

    const [monsters, setMonsters] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getMonsters()
    },[])

    const getMonsters = async() => {
        try {
            let res = await axios.get('/monsters')
            setMonsters(res.data)
            setLoading(false)
        } catch (error) {
            console.error(error)
        }
    }

    if(loading){
        return <h1>Loading...</h1>;
    }
    return(
        <div>
            Monsters Page
            {JSON.stringify(monsters, null, 2)}
        </div>
    )
}

export default MonstersPage