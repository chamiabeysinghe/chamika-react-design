import React from "react";

function Form(){
    return(
        <div className="card-body">
        <div className="tab-content pt-3">
          {/*begin::Tab pane*/}
          <div className="tab-pane active" id="kt_builder_main">
            {/*begin::Row*/}
            <div className="row mb-10">
              <label className="col-lg-3 col-form-label text-lg-end">Loader:</label>
              <div className="col-lg-9 col-xl-4">
                <div className="form-check form-check-custom form-check-solid form-switch mb-2">
                  <input className="form-check-input" type="checkbox" name="layout-builder[layout][loader][display]" defaultValue="true" />
                </div>
                <div className="form-text text-muted">Display page loading</div>
              </div>
            </div>
            {/*end::Row*/}
            {/*begin::Row*/}
            <div className="row mb-10">
              <label className="col-lg-3 col-form-label text-lg-end">Loader Type:</label>
              <div className="col-lg-9 col-xl-4">
                <select className="form-select form-select-solid" name="layout-builder[layout][loader][type]" data-control="select2" data-hide-search="true" data-allow-clear="true" data-placeholder="Disabled">
                  <option value />
                  <option value="default" selected="selected">Spinner</option>
                  <option value="spinner-message">Spinner &amp; Message</option>
                  <option value="spinner-logo">Spinner &amp; Logo</option>
                </select>
                <div className="form-text text-muted">Select page loader type</div>
              </div>
            </div>
            {/*end::Row*/}
            {/*begin::Row*/}
            <div className="row mb-10">
              {/*begin::Label*/}
              <label className="col-lg-3 col-form-label text-lg-end">Illustration Set:</label>
              {/*end::Label*/}
              {/*begin::Col*/}
              <div className="col-lg-8 pe-10">
                {/*begin::Row*/}
                <div className="row g-9 mb-3" data-kt-buttons="true" data-kt-buttons-target="[data-kt-button]">
                  {/*begin::Col*/}
                  <div className="col-6">
                    {/*begin::Label*/}
                    <label className="btn btn-outline btn-outline-dashed btn-outline-default d-flex flex-column text-start p-6" data-kt-button="true">
                      {/*begin::Wrapper*/}
                      <span className="d-flex mb-2">
                        {/*begin::Radio button*/}
                        <span className="form-check form-check-custom form-check-solid form-check-sm me-5">
                          <input className="form-check-input" type="radio" name="layout-builder[layout][illustrations][set]" defaultValue="sketchy-1" />
                        </span>
                        {/*end::Radio button*/}
                        {/*begin::Title*/}
                        <span className="fs-4 fw-bolder">Sketchy</span>
                        {/*end::Title*/}
                      </span>
                      {/*end::Wrapper*/}
                      {/*begin::Thumbnail*/}
                      <span style={{backgroundImage: 'url("assets/media/illustrations/sketchy-1/1.png")'}} className="d-block h-200px w-100 bgi-no-repeat bgi-size-contain bgi-position-center" />
                      {/*begin::Thumbnail*/}
                    </label>
                    {/*end::Label*/}
                  </div>
                  {/*end::Col*/}
                  {/*begin::Col*/}
                  <div className="col-6">
                    {/*begin::Label*/}
                    <label className="btn btn-outline btn-outline-dashed btn-outline-default d-flex flex-column text-start p-6" data-kt-button="true">
                      {/*begin::Wrapper*/}
                      <span className="d-flex mb-2">
                        {/*begin::Radio button*/}
                        <span className="form-check form-check-custom form-check-solid form-check-sm me-5">
                          <input className="form-check-input" type="radio" name="layout-builder[layout][illustrations][set]" defaultValue="sigma-1" />
                        </span>
                        {/*end::Radio button*/}
                        {/*begin::Title*/}
                        <span className="fs-4 fw-bolder">Sigma</span>
                        {/*end::Title*/}
                      </span>
                      {/*end::Wrapper*/}
                      {/*begin::Thumbnail*/}
                      <span style={{backgroundImage: 'url("assets/media/illustrations/sigma-1/1.png")'}} className="d-block h-200px w-100 bgi-no-repeat bgi-size-contain bgi-position-center" />
                      {/*begin::Thumbnail*/}
                    </label>
                    {/*end::Label*/}
                  </div>
                  {/*end::Col*/}
                  {/*begin::Col*/}
                  <div className="col-6">
                    {/*begin::Label*/}
                    <label className="btn btn-outline btn-outline-dashed btn-outline-default d-flex flex-column text-start p-6 active" data-kt-button="true">
                      {/*begin::Wrapper*/}
                      <span className="d-flex mb-2">
                        {/*begin::Radio button*/}
                        <span className="form-check form-check-custom form-check-solid form-check-sm me-5">
                          <input className="form-check-input" type="radio" name="layout-builder[layout][illustrations][set]" defaultValue="dozzy-1" defaultChecked="checked" />
                        </span>
                        {/*end::Radio button*/}
                        {/*begin::Title*/}
                        <span className="fs-4 fw-bolder">Dozzy</span>
                        {/*end::Title*/}
                      </span>
                      {/*end::Wrapper*/}
                      {/*begin::Thumbnail*/}
                      <span style={{backgroundImage: 'url("assets/media/illustrations/dozzy-1/1.png")'}} className="d-block h-200px w-100 bgi-no-repeat bgi-size-contain bgi-position-center" />
                      {/*begin::Thumbnail*/}
                    </label>
                    {/*end::Label*/}
                  </div>
                  {/*end::Col*/}
                  {/*begin::Col*/}
                  <div className="col-6">
                    {/*begin::Label*/}
                    <label className="btn btn-outline btn-outline-dashed btn-outline-default d-flex flex-column text-start p-6" data-kt-button="true">
                      {/*begin::Wrapper*/}
                      <span className="d-flex mb-2">
                        {/*begin::Radio button*/}
                        <span className="form-check form-check-custom form-check-solid form-check-sm me-5">
                          <input className="form-check-input" type="radio" name="layout-builder[layout][illustrations][set]" defaultValue="unitedpalms-1" />
                        </span>
                        {/*end::Radio button*/}
                        {/*begin::Title*/}
                        <span className="fs-4 fw-bolder">United Palms</span>
                        {/*end::Title*/}
                      </span>
                      {/*end::Wrapper*/}
                      {/*begin::Thumbnail*/}
                      <span style={{backgroundImage: 'url("assets/media/illustrations/unitedpalms-1/1.png")'}} className="d-block h-200px w-100 bgi-no-repeat bgi-size-contain bgi-position-center" />
                      {/*begin::Thumbnail*/}
                    </label>
                    {/*end::Label*/}
                  </div>
                  {/*end::Col*/}
                </div>
                {/*end::Row*/}
                {/*begin::Hint*/}
                <div className="form-text text-muted">Select one of our in-house designed illustration set and apply globally for all apps and pages</div>
                {/*end::Hint*/}
              </div>
              {/*end::Col*/}
            </div>
            {/*end::Row*/}
          </div>
          {/*end::Tab pane*/}
          <div className="tab-pane fade" id="kt_builder_header">
            <div className="row mb-10">
              <label className="col-lg-3 col-form-label text-lg-end">Fixed Header:</label>
              <div className="col-lg-9 col-xl-4">
                <input type="hidden" name="layout-builder[layout][header][fixed][desktop]" defaultValue="false" />
                <input type="hidden" name="layout-builder[layout][header][fixed][tablet-and-mobile]" defaultValue="false" />
                <label className="form-check form-check-custom form-check-solid form-switch mb-5">
                  <input className="form-check-input" type="checkbox" name="layout-builder[layout][header][fixed][desktop]" defaultValue="true" />
                  <span className="form-check-label text-muted">Desktop</span>
                </label>
                <label className="form-check form-check-custom form-check-solid form-switch mb-3">
                  <input className="form-check-input" type="checkbox" name="layout-builder[layout][header][fixed][tablet-and-mobile]" defaultValue="true" />
                  <span className="form-check-label text-muted">Tablet &amp; Mobile</span>
                </label>
                <div className="form-text text-muted">Enable fixed header</div>
              </div>
            </div>
            <div className="row mb-10">
              <label className="col-lg-3 col-form-label text-lg-end">Width:</label>
              <div className="col-lg-9 col-xl-4">
                <select className="form-select form-select-solid" name="layout-builder[layout][header][width]" data-control="select2" data-hide-search="true">
                  <option value="fluid">Fluid</option>
                  <option value="fixed" selected="selected">Fixed</option>
                </select>
                <div className="form-text text-muted">Select header width type.</div>
              </div>
            </div>
          </div>
          <div className="tab-pane fade" id="kt_builder_content">
            <div className="row mb-10">
              <label className="col-lg-3 col-form-label text-lg-end">Width:</label>
              <div className="col-lg-9 col-xl-4">
                <select className="form-select form-select-solid" name="layout-builder[layout][content][width]" data-control="select2" data-hide-search="true">
                  <option value="fluid">Fluid</option>
                  <option value="fixed" selected="selected">Fixed</option>
                </select>
                <div className="form-text text-muted">Select content layout width type.</div>
              </div>
            </div>
          </div>
          <div className="tab-pane fade" id="kt_builder_sidebar">
            <div className="row mb-10">
              <label className="col-lg-3 col-form-label text-lg-end">Display:</label>
              <div className="col-lg-9 col-xl-4">
                <span className="switch switch-icon">
                  <input type="hidden" name="layout-builder[layout][sidebar][display]" defaultValue="false" />
                  <div className="form-check form-check-custom form-check-solid form-switch mb-2">
                    <input className="form-check-input" type="checkbox" name="layout-builder[layout][sidebar][display]" defaultValue="true" defaultChecked="checked" />
                  </div>
                </span>
                <div className="form-text text-muted">Display sidebar</div>
              </div>
            </div>
          </div>
          <div className="tab-pane fade" id="kt_builder_footer">
            <div className="row mb-10">
              <label className="col-lg-3 col-form-label text-lg-end">Width:</label>
              <div className="col-lg-9 col-xl-4">
                <select className="form-select form-select-solid" name="layout-builder[layout][footer][width]" data-control="select2" data-hide-search="true">
                  <option value="fluid">Fluid</option>
                  <option value="fixed" selected="selected">Fixed</option>
                </select>
                <div className="form-text text-muted">Select footer layout width type.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
} export default Form;