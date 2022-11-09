import React from "react";
import Header from "./Header";
import LayOutNotice from "./LayOutNotice";
import LeftNavBar from './LeftNavBar'
import UserPanel from "./UserPanel";
import LayoutModel from './LayoutModel';
import LayoutBody from "./LayoutBody";
import Footer from './Footer';


function LayoutBuilder(){
    return(
        <div>
  {/*begin::Body*/}
  {/*begin::Main*/}
  {/*begin::Root*/}
  <div className="d-flex flex-column flex-root">
    {/*begin::Page*/}
    <div className="page d-flex flex-row flex-column-fluid">
      {/*begin::Aside*/}
      <div id="kt_aside" className="aside py-9" data-kt-drawer="true" data-kt-drawer-name="aside" data-kt-drawer-activate="{default: true, lg: false}" data-kt-drawer-overlay="true" data-kt-drawer-width="{default:'200px', '300px': '250px'}" data-kt-drawer-direction="start" data-kt-drawer-toggle="#kt_aside_toggle">
        {/*begin::Brand*/}
        <div className="aside-logo flex-column-auto px-9 mb-9" id="kt_aside_logo">
          {/*begin::Logo*/}
          <a href="index.html">
            <img alt="Logo" src="assets/media/logos/logo-demo3-default.svg" className="h-20px logo" />
          </a>
          {/*end::Logo*/}
        </div>
        {/*end::Brand*/}
        {/*begin::Aside menu*/}
        <LeftNavBar/>
        {/*end::Aside menu*/}
        {/*begin::Footer*/}
        <div className="aside-footer flex-column-auto px-9" id="kt_aside_footer">
          {/*begin::User panel*/}
          <UserPanel/>
          {/*end::User panel*/}
        </div>
        {/*end::Footer*/}
      </div>
      {/*end::Aside*/}
      {/*begin::Wrapper*/}
      <div className="wrapper d-flex flex-column flex-row-fluid" id="kt_wrapper">
        {/*begin::Header*/}
       <Header/>
        {/*end::Header*/}
        {/*begin::Content*/}
        <div className="content d-flex flex-column flex-column-fluid" id="kt_content">
          {/*begin::Container*/}
          <div className="container-xxl" id="kt_content_container">
            {/*begin::Layout Builder Notice*/}
           <LayOutNotice/>
            {/*end::Layout Builder Notice*/}
            {/*begin::Layout Builder Modal*/}
           <LayoutModel/>
            {/*end::Layout Builder Modal*/}
            {/*begin::Card*/}
            <LayoutBody/>
            {/*end::Card*/}
          </div>
          {/*end::Container*/}
        </div>
        {/*end::Content*/}
        {/*begin::Footer*/}
       <Footer/>
        {/*end::Footer*/}
      </div>
      {/*end::Wrapper*/}
     </div>
     </div>
     </div>

    )
} export default LayoutBuilder;
