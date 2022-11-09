import React from "react";

function Header(){
    return(
        <div className="card-header card-header-stretch overflow-auto">
                <ul className="nav nav-stretch nav-line-tabs fw-bold border-transparent flex-nowrap" role="tablist" id="kt_layout_builder_tabs">
                  <li className="nav-item">
                    <a className="nav-link active" data-bs-toggle="tab" href="#kt_builder_main" role="tab">Main</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" data-bs-toggle="tab" href="#kt_builder_header" role="tab">Header</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" data-bs-toggle="tab" href="#kt_builder_sidebar" role="tab">Sidebar</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" data-bs-toggle="tab" href="#kt_builder_content" role="tab">Content</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" data-bs-toggle="tab" href="#kt_builder_footer" role="tab">Footer</a>
                  </li>
                </ul>
              </div>
    )
}export default Header;