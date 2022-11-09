import React,{useEffect} from "react";
import 'jquery/dist/jquery.min.js';
 //Datatable Modules
import "datatables.net-dt/js/dataTables.dataTables"
import "datatables.net-dt/css/jquery.dataTables.min.css"
import $ from 'jquery'; 



 const Table =(props) =>{
  useEffect(()=>{
    //initialize datatable
   setTimeout(()=>{
    $(document).ready(function () {
      $('#example').DataTable();
  });
  },2000)

  },[])
// console.log(props.rows)
    return(
        <div>
              <table id='example' className="table table-row-dashed table-row-gray-300 align-middle gs-0 gy-4">
                
        <thead>
        <tr className="fw-bolder text-muted">
         {props.heading.map((row,i)=>{
            return(
                <th key={i} className="min-w-150px">{row.title}</th>
            )

         })}
         
        </tr>
      </thead>

      <tbody>
        {props.rows && props.rows.map((row,i)=>{
            return(
                <tr key={i}>
               {props.columns.map((column,index)=>{
                return(
                    <td key={index}>
                    <div className="d-flex align-items-center">
                      
                      <div className="d-flex justify-content-start flex-column">
                         <span className="text-muted fw-bold text-muted d-block fs-7">{row[column]}</span>
                         
                      </div>
                    </div>
                  </td>

                )

               })}
               
                
              </tr>

            )
        })}
       
       
      </tbody>

    </table>
        </div>
    )
}
export default Table;