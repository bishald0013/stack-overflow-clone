import { useState, useEffect } from 'react'
import Leftbar from '../components/content/Leftbar'
import {useGetAllUserQuery} from "../services/userAuthApi"
import Users from './Users'
function AllUser() {

  const {data, isSuccess} = useGetAllUserQuery()

  const [users, setUsers] = useState({
    allUser: []
  })
  
  useEffect(() =>{
    if(data && isSuccess){
      setUsers({
        allUser: data.users, 
        tags : data.tags
      })
    }
  }, [data, isSuccess])

  const {allUser} = users

  console.log(users)

  
  return (
    <div className='container my-5'>
        <div className="row">
            <div className="col-lg-3">
                <Leftbar/>
            </div>
            <div className="col-lg-9">
              {allUser.map((user) =>{
                return <Users user={user} key={user._id}/>
                
              })}
            </div>
        </div>
    </div>
  )
}

export default AllUser