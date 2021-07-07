import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import { AuthContext } from '../providers/AuthProvider'
import CardContainer from '../style_components/CardContainer'

const Home = () =>{

    const [test, setTest] = useState([])
    const {user} = useContext(AuthContext)

    useEffect(()=>{
        getTest()
    },[])
    const getTest = async() => {
        try { 
        let res = await axios.get('/monsters')
        setTest(res.data)
        console.log(res)
            
        } catch (error) {
            alert(error)
            
        }
    }
    return(
        <div>
        <h1>Home Page Here</h1>
       {user && <CardContainer>
            <h1>Welcome back!</h1>
            <h3>How are you today {user.nickname}?</h3>
        </CardContainer> }
        {JSON.stringify(test)}
        
        </div>
    )
}
export default Home