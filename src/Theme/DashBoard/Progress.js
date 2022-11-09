import React from "react";




const Progress = (props) => {
  const {
    color = '',
    title,
    completed,
  } = props


  return (

    <div className="card card-xl-stretch mb-xl-1" style={{
      border: '1px solid #eeeeee',
      display: 'inlineblock', width: '100%', borderRadius: '8px'
    }}>
      {/*begin::Body*/}
      <div className="card-body d-flex flex-column" >

        <span className="text-muted me-2 fs-7 fw-bold" >{title}</span>
        {/* </div> */}

        <div className="progress h-10px w-100" >
          <div className={`progress-bar striped variant bg-${color}`} role="progressbar" 
            style={{ width: `${completed}%`, alignItems: "center" }} aria-valuenow={completed}
            aria-valuemin={0} aria-valuemax={100}> {completed}%
          </div>
        </div>
 
      </div>




    </div>
  )
}

export default Progress;