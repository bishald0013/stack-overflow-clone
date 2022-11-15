import AllQuestion from './AllQuestion'
import Leftbar from './Leftbar'
import Rightbar from "./Rightbar"


function Home() {
  return (
    <div className='container my-5'>
        <div className="row">
            <div className="col-lg-3 ">
               <Leftbar />
            </div>
            <div className="col-lg-6">
              <AllQuestion />
            </div>
            <div className="col-lg-3">
              <Rightbar />
            </div>
        </div>
       
    </div>
  )
}

export default Home