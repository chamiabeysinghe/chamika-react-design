import React from "react";

function Footer(){
    return(
        <div className="card-footer py-8">
                  <div className="row">
                    <div className="col-lg-3" />
                    <div className="col-lg-9">
                      <input type="hidden" id="kt_layout_builder_tab" name="layout-builder[tab]" defaultValue />
                      <input type="hidden" id="kt_layout_builder_action" name="layout-builder[action]" />
                      <button type="button" id="kt_layout_builder_preview" className="btn btn-primary me-2">
                        <span className="indicator-label">Preview</span>
                        <span className="indicator-progress">Please wait... 
                          <span className="spinner-border spinner-border-sm align-middle ms-2" /></span>
                      </button>
                      <button type="button" id="kt_layout_builder_export" className="btn btn-light me-2">
                        <span className="indicator-label">Export</span>
                        <span className="indicator-progress">Please wait... 
                          <span className="spinner-border spinner-border-sm align-middle ms-2" /></span>
                      </button>
                      <button type="button" id="kt_layout_builder_reset" className="btn btn-active-light btn-color-muted">
                        <span className="indicator-label">Reset</span>
                        <span className="indicator-progress">Please wait... 
                          <span className="spinner-border spinner-border-sm align-middle ms-2" /></span>
                      </button>
                    </div>
                  </div>
                </div>
    )
}export default Footer;