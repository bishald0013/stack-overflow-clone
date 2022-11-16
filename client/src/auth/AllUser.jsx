import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import Leftbar from '../components/content/Leftbar'

function AllUser() {

  return (
    <div className='container my-5'>
        <div className="row">
            <div className="col-lg-3">
                <Leftbar/>
            </div>
            <div className="col-lg-9">
                <h1 className='fs-2'>Users</h1>
            </div>
        </div>
    </div>
  )
}

export default AllUser