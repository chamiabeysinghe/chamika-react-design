import React from "react";

function ListTrends(){
    return(
        <div className="col-xxl-6">
        {/*begin::List Widget 4*/}
        <div className="card card-xl-stretch mb-5 mb-xl-10">
          {/*begin::Header*/}
          <div className="card-header border-0 pt-5">
            <h3 className="card-title align-items-start flex-column">
              <span className="card-label fw-bolder text-dark">Trends</span>
              <span className="text-muted mt-1 fw-bold fs-7">Latest tech trends</span>
            </h3>
            <div className="card-toolbar">
              {/*begin::Menu*/}
              <button type="button" className="btn btn-sm btn-icon btn-color-primary btn-active-light-primary" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">
                {/*begin::Svg Icon | path: icons/duotune/general/gen024.svg*/}
                <span className="svg-icon svg-icon-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24">
                    <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                      <rect x={5} y={5} width={5} height={5} rx={1} fill="#000000" />
                      <rect x={14} y={5} width={5} height={5} rx={1} fill="#000000" opacity="0.3" />
                      <rect x={5} y={14} width={5} height={5} rx={1} fill="#000000" opacity="0.3" />
                      <rect x={14} y={14} width={5} height={5} rx={1} fill="#000000" opacity="0.3" />
                    </g>
                  </svg>
                </span>
                {/*end::Svg Icon*/}
              </button>
              {/*begin::Menu 3*/}
              <div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg-light-primary fw-bold w-200px py-3" data-kt-menu="true">
                {/*begin::Heading*/}
                <div className="menu-item px-3">
                  <div className="menu-content text-muted pb-2 px-3 fs-7 text-uppercase">Payments</div>
                </div>
                {/*end::Heading*/}
                {/*begin::Menu item*/}
                <div className="menu-item px-3">
                  <a href="#" className="menu-link px-3">Create Invoice</a>
                </div>
                {/*end::Menu item*/}
                {/*begin::Menu item*/}
                <div className="menu-item px-3">
                  <a href="#" className="menu-link flex-stack px-3">Create Payment 
                    <i className="fas fa-exclamation-circle ms-2 fs-7" data-bs-toggle="tooltip" title="Specify a target name for future usage and reference" /></a>
                </div>
                {/*end::Menu item*/}
                {/*begin::Menu item*/}
                <div className="menu-item px-3">
                  <a href="#" className="menu-link px-3">Generate Bill</a>
                </div>
                {/*end::Menu item*/}
                {/*begin::Menu item*/}
                <div className="menu-item px-3" data-kt-menu-trigger="hover" data-kt-menu-placement="right-end">
                  <a href="#" className="menu-link px-3">
                    <span className="menu-title">Subscription</span>
                    <span className="menu-arrow" />
                  </a>
                  {/*begin::Menu sub*/}
                  <div className="menu-sub menu-sub-dropdown w-175px py-4">
                    {/*begin::Menu item*/}
                    <div className="menu-item px-3">
                      <a href="#" className="menu-link px-3">Plans</a>
                    </div>
                    {/*end::Menu item*/}
                    {/*begin::Menu item*/}
                    <div className="menu-item px-3">
                      <a href="#" className="menu-link px-3">Billing</a>
                    </div>
                    {/*end::Menu item*/}
                    {/*begin::Menu item*/}
                    <div className="menu-item px-3">
                      <a href="#" className="menu-link px-3">Statements</a>
                    </div>
                    {/*end::Menu item*/}
                    {/*begin::Menu separator*/}
                    <div className="separator my-2" />
                    {/*end::Menu separator*/}
                    {/*begin::Menu item*/}
                    <div className="menu-item px-3">
                      <div className="menu-content px-3">
                        {/*begin::Switch*/}
                        <label className="form-check form-switch form-check-custom form-check-solid">
                          {/*begin::Input*/}
                          <input className="form-check-input w-30px h-20px" type="checkbox" defaultValue={1} defaultChecked="checked" name="notifications" />
                          {/*end::Input*/}
                          {/*end::Label*/}
                          <span className="form-check-label text-muted fs-6">Recuring</span>
                          {/*end::Label*/}
                        </label>
                        {/*end::Switch*/}
                      </div>
                    </div>
                    {/*end::Menu item*/}
                  </div>
                  {/*end::Menu sub*/}
                </div>
                {/*end::Menu item*/}
                {/*begin::Menu item*/}
                <div className="menu-item px-3 my-1">
                  <a href="#" className="menu-link px-3">Settings</a>
                </div>
                {/*end::Menu item*/}
              </div>
              {/*end::Menu 3*/}
              {/*end::Menu*/}
            </div>
          </div>
          {/*end::Header*/}
          {/*begin::Body*/}
          <div className="card-body pt-5">
            {/*begin::Item*/}
            <div className="d-flex align-items-sm-center mb-7">
              {/*begin::Symbol*/}
              <div className="symbol symbol-50px me-5">
                <span className="symbol-label">
                  <img src="assets/media/svg/brand-logos/plurk.svg" className="h-50 align-self-center" alt="" />
                </span>
              </div>
              {/*end::Symbol*/}
              {/*begin::Section*/}
              <div className="d-flex align-items-center flex-row-fluid flex-wrap">
                <div className="flex-grow-1 me-2">
                  <a href="#" className="text-gray-800 text-hover-primary fs-6 fw-bolder">Top Authors</a>
                  <span className="text-muted fw-bold d-block fs-7">Mark, Rowling, Esther</span>
                </div>
                <span className="badge badge-light fw-bolder my-2">+82$</span>
              </div>
              {/*end::Section*/}
            </div>
            {/*end::Item*/}
            {/*begin::Item*/}
            <div className="d-flex align-items-sm-center mb-7">
              {/*begin::Symbol*/}
              <div className="symbol symbol-50px me-5">
                <span className="symbol-label">
                  <img src="assets/media/svg/brand-logos/telegram.svg" className="h-50 align-self-center" alt="" />
                </span>
              </div>
              {/*end::Symbol*/}
              {/*begin::Section*/}
              <div className="d-flex align-items-center flex-row-fluid flex-wrap">
                <div className="flex-grow-1 me-2">
                  <a href="#" className="text-gray-800 text-hover-primary fs-6 fw-bolder">Popular Authors</a>
                  <span className="text-muted fw-bold d-block fs-7">Randy, Steve, Mike</span>
                </div>
                <span className="badge badge-light fw-bolder my-2">+280$</span>
              </div>
              {/*end::Section*/}
            </div>
            {/*end::Item*/}
            {/*begin::Item*/}
            <div className="d-flex align-items-sm-center mb-7">
              {/*begin::Symbol*/}
              <div className="symbol symbol-50px me-5">
                <span className="symbol-label">
                  <img src="assets/media/svg/brand-logos/vimeo.svg" className="h-50 align-self-center" alt="" />
                </span>
              </div>
              {/*end::Symbol*/}
              {/*begin::Section*/}
              <div className="d-flex align-items-center flex-row-fluid flex-wrap">
                <div className="flex-grow-1 me-2">
                  <a href="#" className="text-gray-800 text-hover-primary fs-6 fw-bolder">New Users</a>
                  <span className="text-muted fw-bold d-block fs-7">John, Pat, Jimmy</span>
                </div>
                <span className="badge badge-light fw-bolder my-2">+4500$</span>
              </div>
              {/*end::Section*/}
            </div>
            {/*end::Item*/}
            {/*begin::Item*/}
            <div className="d-flex align-items-sm-center mb-7">
              {/*begin::Symbol*/}
              <div className="symbol symbol-50px me-5">
                <span className="symbol-label">
                  <img src="assets/media/svg/brand-logos/bebo.svg" className="h-50 align-self-center" alt="" />
                </span>
              </div>
              {/*end::Symbol*/}
              {/*begin::Section*/}
              <div className="d-flex align-items-center flex-row-fluid flex-wrap">
                <div className="flex-grow-1 me-2">
                  <a href="#" className="text-gray-800 text-hover-primary fs-6 fw-bolder">Active Customers</a>
                  <span className="text-muted fw-bold d-block fs-7">Mark, Rowling, Esther</span>
                </div>
                <span className="badge badge-light fw-bolder my-2">+686$</span>
              </div>
              {/*end::Section*/}
            </div>
            {/*end::Item*/}
            {/*begin::Item*/}
            <div className="d-flex align-items-sm-center mb-7">
              {/*begin::Symbol*/}
              <div className="symbol symbol-50px me-5">
                <span className="symbol-label">
                  <img src="assets/media/svg/brand-logos/kickstarter.svg" className="h-50 align-self-center" alt="" />
                </span>
              </div>
              {/*end::Symbol*/}
              {/*begin::Section*/}
              <div className="d-flex align-items-center flex-row-fluid flex-wrap">
                <div className="flex-grow-1 me-2">
                  <a href="#" className="text-gray-800 text-hover-primary fs-6 fw-bolder">Bestseller Theme</a>
                  <span className="text-muted fw-bold d-block fs-7">Disco, Retro, Sports</span>
                </div>
                <span className="badge badge-light fw-bolder my-2">+726$</span>
              </div>
              {/*end::Section*/}
            </div>
            {/*end::Item*/}
          </div>
          {/*end::Body*/}
        </div>
        {/*end::List Widget 4*/}
      </div>
    )
}export default ListTrends;