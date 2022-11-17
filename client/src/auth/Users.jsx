import React from 'react'

function Users({user}) {
  return (
    <div>
      <h1>{user.name}</h1>
      <h1>{user.tags}</h1>
    </div>
  )
}

export default Users