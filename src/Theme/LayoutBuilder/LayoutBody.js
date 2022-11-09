import React from "react";
import Footer from './LayoutBody/Footer';
import Header from './LayoutBody/Header';
import Form from './LayoutBody/Form';


function LayoutBody(){
    return(
        <div className="card">
              {/*begin::Header*/}
              <Header/>
              {/*end::Header*/}
              {/*begin::Form*/}
              <form className="form" method="POST" id="kt_layout_builder_form" action="https://preview.keenthemes.com/metronic8/demo3/index.php">
                {/*begin::Body*/}
               <Form/>
                {/*end::Body*/}
                {/*begin::Footer*/}
                <Footer/>
                {/*end::Footer*/}
              </form>
              {/*end::Form*/}
            </div>
    )
}export default LayoutBody;