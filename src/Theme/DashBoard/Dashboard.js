import React from "react";
import '../css/style.css';
import LeftNavBar from "./LeftNavBar";
import Footer from "./Footer";
// import Header from "./Header";
import Widget from "./Widget";
// import TableView from "./TableView";
// import ListActivity from "./ListActivity";
// import ListTrends from "./ListTrends";
import UserPanel from "./UserPanel";
import Widget1 from "../Widget/Widget1";
import Widget2 from "../Widget/Widget2";
import Table from "../Table";
import Progress from './Progress';

function DashBoard (){

 //*******Example code*********


//  const h=[
//   {
//     title:'First Name'
//   },
//   {
//     title:'Last Name'
//   },

//  ]

//  const c=['firstName','lastName'];
//  const r=[
//    {
//      id:'1',
//      firstName:'chamika',
//     lastName:'Abey'
//    },
//    {
//      id:'2',
//      firstName:'kushani',
//     lastName:'chathu'
//    },
//  ]
 //******* end-Example code*********

//Progress Bar
const testData = [
   {color: "bg-danger", completed: 50,title:'Unpaid' },
  { color: "bg-success", completed: 80,title:'Paid' },
  { color: "bg-warning", completed: 35,title:'Overdue' },
  { color: "bg-default", completed: 75,title:'Partially Paid' }
];

const progress=[ 
   
  {
    title:'Unpaid'
  },
  {
    title:'Paid'
  },
  {
    title:'Overdue'
  },
  {
    title:'Partially Paid'
  }
 ]

//Table data
const heading=[
  {
    title:'Authors'
  },
  {
    title:'Company'
  },
  {
    title:'Progress'
  },
  
 ]

const columns=['author','company','progress'];

 const rows=[
  { 
    id:'1',
    author:'Ana Simmons',
    company:'Intertico',
    progress:'50%',
   },
   { 
    id:'2',
    author:'Jessie Clarcson',
    company:'Agoda',
    progress:'70%',
   },
   { 
    id:'3',
    author:'Lebron Wayde',
    company:'RoadGee',
    progress:'60%',
   },
   { 
    id:'4',
    author:'Natali Goodwin',
    company:'The Hill',
    progress:'50%',
   },
   { 
    id:'5',
    author:'Kevin Leonard',
    company:'RoadGee',
    progress:'90%',
   },
   {id:'6',
   author:'Ana Simmons',
   company:'Intertico',
   progress:'50%',
  },
  { 
   id:'2',
   author:'Jessie Clarcson',
   company:'Agoda',
   progress:'70%',
  },
  { 
   id:'3',
   author:'Lebron Wayde',
   company:'RoadGee',
   progress:'60%',
  },
  { 
   id:'4',
   author:'Natali Goodwin',
   company:'The Hill',
   progress:'50%',
  },
  { 
   id:'5',
   author:'Kevin Leonard',
   company:'RoadGee',
   progress:'90%',
  },
  { id:'1',
  author:'Ana Simmons',
  company:'Intertico',
  progress:'50%',
 },
 { 
  id:'2',
  author:'Jessie Clarcson',
  company:'Agoda',
  progress:'70%',
 },
 { 
  id:'3',
  author:'Lebron Wayde',
  company:'RoadGee',
  progress:'60%',
 },
 { 
  id:'4',
  author:'Natali Goodwin',
  company:'The Hill',
  progress:'50%',
 },
 { 
  id:'5',
  author:'Kevin Leonard',
  company:'RoadGee',
  progress:'90%',
 }
 ]

//Navigation Bar topics
const topic=[
  {
    title: "Knowledge Based",
    link:"/knowledge-based"
  },
  {
    title: "Project",
    link:"/project"
  },
  {
    title: "Applications",
    link:"/applications"
  },
  {
    title: "Layout Builder",
    link:"/layoutbuilder"
  },
  {
    title: "Components",
    link:"/components"
  },
  {
    title: "Documentation",
    link:"/documentation"
  },
  {
    title: "Changelog v8.0.24",
    link:"/changelogv"
  }
]

 

return (

  <div>
  {/*begin::Body*/}
  {/*begin::Main*/}
  {/*begin::Root*/}
  <div className="d-flex flex-column flex-root">
    {/*begin::Page*/}
    <div className="page d-flex flex-row flex-column-fluid">
      {/*begin::Aside*/}
      <div id="kt_aside" className="aside py-9" data-kt-drawer="true" data-kt-drawer-name="aside" data-kt-drawer-activate="{default: true, lg: false}" data-kt-drawer-overlay="true" data-kt-drawer-width="{default:'200px', '300px': '250px'}" data-kt-drawer-direction="start" data-kt-drawer-toggle="#kt_aside_toggle">
       
        {/*begin::Aside menu*/}
        <LeftNavBar item={topic}/> 
    
        {/*end::Aside menu*/}
             </div>
      {/*end::Aside*/}
      
      {/*begin::Wrapper*/}
      <div className="wrapper d-flex flex-column flex-row-fluid" id="kt_wrapper">
        {/*begin::Header*/}
         {/* <Header name='Paul' subtopic="You've got 24 New Sales"/> */}
        {/*end::Header*/}
        {/*begin::Content*/}
        <div className="content d-flex flex-column flex-column-fluid" id="kt_content">
          {/*begin::Container*/}
          <div className="container-xxl" id="kt_content_container">
            {/*begin::Row*/}
            {/* <Widget/> */}
            <div className="row gy-5 g-xl-10">
                <div className="col-xl-4">  <Widget1 color='#F7D9E3' chart='mixed-widget-13-chart' title='Earning' symbol='$' number='560' test=' + 28% this week'/></div>
                <div className="col-xl-4">  <Widget1 color='#CBF0F4'  title='Contributors'  symbol='' number='47' test='- 12% this week'/></div>
                <div className="col-xl-4">  <Widget2 color='#CBD4F4' title='Summary' amount='$50K' sale='Sales' revenuAmount='$4,5K' revenu='Revenue' 
                num='40' task='Tasks' value='$5.8M' /> </div>
            </div>
            {/*end::Row*/}
            <br/>     <br/>
            {/*begin::Row*/}
            {/* <Progress Bar/> */}
            <div className="row gy-5 g-xl-10">
              <div className="col">
              <Progress data={testData} />
               </div>
                    
            </div>
            <br/>  <br/>  <br/>     <br/>
            {/*end::Row*/}
            {/*begin::Tables Widget 9*/}
            <div className="row gy-5 g-xl-10">
            {/* <TableView/> */}
            <Table heading={heading} columns={columns} rows={rows}/>
             {/* <Table heading={h} columns={c} rows={r}/>  */}
             </div>
            {/*end::Tables Widget 9*/}
            {/*begin::Row*/}
            <div className="row gy-5 g-xl-10">
              {/*begin::Col*/}
           
              {/*end::Col*/}
              {/*begin::Col*/}
             {/* <ListTrends/> */}
              {/*end::Col*/}
            </div>
            {/*end::Row*/}
          </div>
          {/*end::Container*/}
        </div>
        {/*end::Content*/}
        <br/> <br/> <br/>
        {/*begin::Footer*/}
       <Footer/>
        {/*end::Footer*/}
      </div>
      {/*end::Wrapper*/}
    
    </div>
    {/*end::Page*/}
  </div>
  {/*end::Root*/}
  </div>

    )
}
export default DashBoard;