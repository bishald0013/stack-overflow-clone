import {useParams} from "react-router-dom" 

function DisplayAnswer({a}) {

  return (
    <div className="container">
      <h1 className="fs-5">{a.answerBody}</h1>
      <h1 className="fs-5">{a.userAnswered}</h1>
      <h1 className="fs-5">{a.asnweredOn}</h1>
      <hr></hr>
    </div>
  )
}

export default DisplayAnswer