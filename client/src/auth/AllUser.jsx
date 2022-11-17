import { useState } from 'react'
import {useEffect} from 'react'
import Leftbar from '../components/content/Leftbar'
import {useGetAllUserQuery} from "../services/userAuthApi"
import User from './User'
import Users from './Users'

function AllUser() {

  const {data, isSuccess} = useGetAllUserQuery()

  const [ allUsers, setAllUsers] = useState({
    name: "",
    email: ""
  })
 
   useEffect(() => {
    if(data && isSuccess){
      setAllUsers({
        name: data.users.name,
        email: data.users.email
      })
    }
  }, [data, isSuccess])
  console.log(data)


  return (
    <div className='container my-5'>
        <div className="row">
            <div className="col-lg-3">
                <Leftbar/>
            </div>
            <div className="col-lg-9">
               {/* {allUsers.map((user) => {
                return (<User user= {user}/>)
               })} */}
            </div>
        </div>
    </div>
  )
}

export default AllUser