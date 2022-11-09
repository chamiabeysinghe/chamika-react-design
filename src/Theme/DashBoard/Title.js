import React from "react";

function Title(props){
  const{
    name='',
    subtopic='',
     } = props


    return(
        <div id="kt_header" className="header">
        {/*begin::Container*/}
        <div className="d-flex align-items-center justify-content-between" id="kt_header_container">
          {/*begin::Page title*/}
          <div className="page-title d-flex flex-column align-items-start justify-content-center flex-wrap me-lg-2 pb-5 pb-lg-0" data-kt-swapper="true" data-kt-swapper-mode="prepend" data-kt-swapper-parent="{default: '#kt_content_container', lg: '#kt_header_container'}">
            {/*begin::Heading*/}
            <h1 className="d-flex flex-column text-dark fw-bolder my-0 fs-1">{name} 
              <small className="text-muted fs-6 fw-bold ms-1 pt-1">{subtopic}</small></h1>
            {/*end::Heading*/}
          </div>
          {/*end::Page title=*/}
          {/*begin::Wrapper*/}
        
          {/*end::Wrapper*/}
          {/*begin::Topbar*/}
        
          {/*end::Topbar*/}
        </div>
        {/*end::Container*/}
      </div>
    )
}
export default Title;