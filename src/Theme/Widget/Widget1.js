import React from "react";

const Widget1 = (props) => {
    const{
    color='',
    title,     
    number,    
    bgcolor } = props

    return(
        <div>
           {/*begin::Col*/}
             {/*begin::Mixed Widget 13*/}
                <div className="card card-xl-stretch mb-xl-10" style={{backgroundColor:bgcolor, border:'1px solid #eeeeee',
                        display:'inlineblock', width:'100%',borderRadius:'4px'}}>
                  {/*begin::Body*/}
                  <div className="card-body d-flex flex-column" >
                    {/*begin::Wrapper*/}
                    {/* <div className="d-flex flex-column flex-grow-1 " >               
                    </div> */}  
                     {/*end::Wrapper*/}
                     {/*begin::Number*/}               
                      <span className="text-dark fs-5 ">{number}</span>
                     {/*end::Number*/}
                     {/*begin::text*/}
                      <span className="text-hover-primary " style={{color:color, fontWeight:'bold'}}>{title}</span>
                      {/*end::text*/}
                    </div>
                {/*end::Body*/}                
                {/*end::Mixed Widget 13*/}
              </div>
             
          {/*end::Col*/}
        </div>
    )
}
export default Widget1;