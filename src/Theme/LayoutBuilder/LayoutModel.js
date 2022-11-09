import React from "react";

function LayoutModel(){
    return(
        <div className="modal fade" id="kt_layout_builder_recaptcha_modal" tabIndex={-1} role="dialog">
        <div className="modal-dialog modal-lg" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h3 className="modal-title" id="exampleModalLabel">reCaptcha Verification</h3>
              <button className="btn btn-sm btn-icon btn-light btn-hover-primary" data-bs-dismiss="modal" aria-label="Close">
                <i className="ki ki-close fs-4 text-muted" />
              </button>
            </div>
            <div className="modal-body">
              <form className="form">
                <div className="form-group">
                  <div className="g-recaptcha" data-sitekey="6Lf92jMUAAAAANk8wz68r73rA2uPGr4_e0gn96BL" />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-primary me-2" id="kt_layout_builder_verify">Submit</button>
              <button type="button" className="btn btn-hover-light btn-text-muted fw-bold" data-bs-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>
    )
}export default LayoutModel;