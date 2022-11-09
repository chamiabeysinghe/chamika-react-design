import React from "react";

function UserPanel(){
    return(
        <div className="d-flex flex-stack">
            {/*begin::Wrapper*/}
            <div className="d-flex align-items-center">
              {/*begin::Avatar*/}
              <div className="symbol symbol-circle symbol-40px">
                <img src="assets/media/avatars/150-26.jpg" alt="photo" />
              </div>
              {/*end::Avatar*/}
              {/*begin::User info*/}
              <div className="ms-2">
                {/*begin::Name*/}
                <a href="#" className="text-gray-800 text-hover-primary fs-6 fw-bolder lh-1">Paul Melone</a>
                {/*end::Name*/}
                {/*begin::Major*/}
                <span className="text-muted fw-bold d-block fs-7 lh-1">Python Dev</span>
                {/*end::Major*/}
              </div>
              {/*end::User info*/}
            </div>
            {/*end::Wrapper*/}
            {/*begin::User menu*/}
            <div className="ms-1">
              <div className="btn btn-sm btn-icon btn-active-color-primary position-relative me-n2" data-kt-menu-trigger="click" data-kt-menu-overflow="true" data-kt-menu-placement="top-end">
                {/*begin::Svg Icon | path: icons/duotune/coding/cod001.svg*/}
                <span className="svg-icon svg-icon-1">
                  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                    <path opacity="0.3" d="M22.1 11.5V12.6C22.1 13.2 21.7 13.6 21.2 13.7L19.9 13.9C19.7 14.7 19.4 15.5 18.9 16.2L19.7 17.2999C20 17.6999 20 18.3999 19.6 18.7999L18.8 19.6C18.4 20 17.8 20 17.3 19.7L16.2 18.9C15.5 19.3 14.7 19.7 13.9 19.9L13.7 21.2C13.6 21.7 13.1 22.1 12.6 22.1H11.5C10.9 22.1 10.5 21.7 10.4 21.2L10.2 19.9C9.4 19.7 8.6 19.4 7.9 18.9L6.8 19.7C6.4 20 5.7 20 5.3 19.6L4.5 18.7999C4.1 18.3999 4.1 17.7999 4.4 17.2999L5.2 16.2C4.8 15.5 4.4 14.7 4.2 13.9L2.9 13.7C2.4 13.6 2 13.1 2 12.6V11.5C2 10.9 2.4 10.5 2.9 10.4L4.2 10.2C4.4 9.39995 4.7 8.60002 5.2 7.90002L4.4 6.79993C4.1 6.39993 4.1 5.69993 4.5 5.29993L5.3 4.5C5.7 4.1 6.3 4.10002 6.8 4.40002L7.9 5.19995C8.6 4.79995 9.4 4.39995 10.2 4.19995L10.4 2.90002C10.5 2.40002 11 2 11.5 2H12.6C13.2 2 13.6 2.40002 13.7 2.90002L13.9 4.19995C14.7 4.39995 15.5 4.69995 16.2 5.19995L17.3 4.40002C17.7 4.10002 18.4 4.1 18.8 4.5L19.6 5.29993C20 5.69993 20 6.29993 19.7 6.79993L18.9 7.90002C19.3 8.60002 19.7 9.39995 19.9 10.2L21.2 10.4C21.7 10.5 22.1 11 22.1 11.5ZM12.1 8.59998C10.2 8.59998 8.6 10.2 8.6 12.1C8.6 14 10.2 15.6 12.1 15.6C14 15.6 15.6 14 15.6 12.1C15.6 10.2 14 8.59998 12.1 8.59998Z" fill="black" />
                    <path d="M17.1 12.1C17.1 14.9 14.9 17.1 12.1 17.1C9.30001 17.1 7.10001 14.9 7.10001 12.1C7.10001 9.29998 9.30001 7.09998 12.1 7.09998C14.9 7.09998 17.1 9.29998 17.1 12.1ZM12.1 10.1C11 10.1 10.1 11 10.1 12.1C10.1 13.2 11 14.1 12.1 14.1C13.2 14.1 14.1 13.2 14.1 12.1C14.1 11 13.2 10.1 12.1 10.1Z" fill="black" />
                  </svg>
                </span>
                {/*end::Svg Icon*/}
              </div>
              {/*begin::Menu*/}
              <div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg menu-state-primary fw-bold py-4 fs-6 w-275px" data-kt-menu="true">
                {/*begin::Menu item*/}
                <div className="menu-item px-3">
                  <div className="menu-content d-flex align-items-center px-3">
                    {/*begin::Avatar*/}
                    <div className="symbol symbol-50px me-5">
                      <img alt="Logo" src="assets/media/avatars/150-26.jpg" />
                    </div>
                    {/*end::Avatar*/}
                    {/*begin::Username*/}
                    <div className="d-flex flex-column">
                      <div className="fw-bolder d-flex align-items-center fs-5">Max Smith 
                        <span className="badge badge-light-success fw-bolder fs-8 px-2 py-1 ms-2">Pro</span></div>
                      <a href="#" className="fw-bold text-muted text-hover-primary fs-7">max@kt.com</a>
                    </div>
                    {/*end::Username*/}
                  </div>
                </div>
                {/*end::Menu item*/}
                {/*begin::Menu separator*/}
                <div className="separator my-2" />
                {/*end::Menu separator*/}
                {/*begin::Menu item*/}
                <div className="menu-item px-5">
                  <a href="account/overview.html" className="menu-link px-5">My Profile</a>
                </div>
                {/*end::Menu item*/}
                {/*begin::Menu item*/}
                <div className="menu-item px-5">
                  <a href="pages/projects/list.html" className="menu-link px-5">
                    <span className="menu-text">My Projects</span>
                    <span className="menu-badge">
                      <span className="badge badge-light-danger badge-circle fw-bolder fs-7">3</span>
                    </span>
                  </a>
                </div>
                {/*end::Menu item*/}
                {/*begin::Menu item*/}
                <div className="menu-item px-5" data-kt-menu-trigger="hover" data-kt-menu-placement="right-end">
                  <a href="#" className="menu-link px-5">
                    <span className="menu-title">My Subscription</span>
                    <span className="menu-arrow" />
                  </a>
                  {/*begin::Menu sub*/}
                  <div className="menu-sub menu-sub-dropdown w-175px py-4">
                    {/*begin::Menu item*/}
                    <div className="menu-item px-3">
                      <a href="account/referrals.html" className="menu-link px-5">Referrals</a>
                    </div>
                    {/*end::Menu item*/}
                    {/*begin::Menu item*/}
                    <div className="menu-item px-3">
                      <a href="account/billing.html" className="menu-link px-5">Billing</a>
                    </div>
                    {/*end::Menu item*/}
                    {/*begin::Menu item*/}
                    <div className="menu-item px-3">
                      <a href="account/statements.html" className="menu-link px-5">Payments</a>
                    </div>
                    {/*end::Menu item*/}
                    {/*begin::Menu item*/}
                    <div className="menu-item px-3">
                      <a href="account/statements.html" className="menu-link d-flex flex-stack px-5">Statements 
                        <i className="fas fa-exclamation-circle ms-2 fs-7" data-bs-toggle="tooltip" title="View your statements" /></a>
                    </div>
                    {/*end::Menu item*/}
                    {/*begin::Menu separator*/}
                    <div className="separator my-2" />
                    {/*end::Menu separator*/}
                    {/*begin::Menu item*/}
                    <div className="menu-item px-3">
                      <div className="menu-content px-3">
                        <label className="form-check form-switch form-check-custom form-check-solid">
                          <input className="form-check-input w-30px h-20px" type="checkbox" defaultValue={1} defaultChecked="checked" name="notifications" />
                          <span className="form-check-label text-muted fs-7">Notifications</span>
                        </label>
                      </div>
                    </div>
                    {/*end::Menu item*/}
                  </div>
                  {/*end::Menu sub*/}
                </div>
                {/*end::Menu item*/}
                {/*begin::Menu item*/}
                <div className="menu-item px-5">
                  <a href="account/statements.html" className="menu-link px-5">My Statements</a>
                </div>
                {/*end::Menu item*/}
                {/*begin::Menu separator*/}
                <div className="separator my-2" />
                {/*end::Menu separator*/}
                {/*begin::Menu item*/}
                <div className="menu-item px-5" data-kt-menu-trigger="hover" data-kt-menu-placement="right-end">
                  <a href="#" className="menu-link px-5">
                    <span className="menu-title position-relative">Language 
                      <span className="fs-8 rounded bg-light px-3 py-2 position-absolute translate-middle-y top-50 end-0">English 
                        <img className="w-15px h-15px rounded-1 ms-2" src="assets/media/flags/united-states.svg" alt="" /></span></span>
                  </a>
                  {/*begin::Menu sub*/}
                  <div className="menu-sub menu-sub-dropdown w-175px py-4">
                    {/*begin::Menu item*/}
                    <div className="menu-item px-3">
                      <a href="account/settings.html" className="menu-link d-flex px-5 active">
                        <span className="symbol symbol-20px me-4">
                          <img className="rounded-1" src="assets/media/flags/united-states.svg" alt="" />
                        </span>English</a>
                    </div>
                    {/*end::Menu item*/}
                    {/*begin::Menu item*/}
                    <div className="menu-item px-3">
                      <a href="account/settings.html" className="menu-link d-flex px-5">
                        <span className="symbol symbol-20px me-4">
                          <img className="rounded-1" src="assets/media/flags/spain.svg" alt="" />
                        </span>Spanish</a>
                    </div>
                    {/*end::Menu item*/}
                    {/*begin::Menu item*/}
                    <div className="menu-item px-3">
                      <a href="account/settings.html" className="menu-link d-flex px-5">
                        <span className="symbol symbol-20px me-4">
                          <img className="rounded-1" src="assets/media/flags/germany.svg" alt="" />
                        </span>German</a>
                    </div>
                    {/*end::Menu item*/}
                    {/*begin::Menu item*/}
                    <div className="menu-item px-3">
                      <a href="account/settings.html" className="menu-link d-flex px-5">
                        <span className="symbol symbol-20px me-4">
                          <img className="rounded-1" src="assets/media/flags/japan.svg" alt="" />
                        </span>Japanese</a>
                    </div>
                    {/*end::Menu item*/}
                    {/*begin::Menu item*/}
                    <div className="menu-item px-3">
                      <a href="account/settings.html" className="menu-link d-flex px-5">
                        <span className="symbol symbol-20px me-4">
                          <img className="rounded-1" src="assets/media/flags/france.svg" alt="" />
                        </span>French</a>
                    </div>
                    {/*end::Menu item*/}
                  </div>
                  {/*end::Menu sub*/}
                </div>
                {/*end::Menu item*/}
                {/*begin::Menu item*/}
                <div className="menu-item px-5 my-1">
                  <a href="account/settings.html" className="menu-link px-5">Account Settings</a>
                </div>
                {/*end::Menu item*/}
                {/*begin::Menu item*/}
                <div className="menu-item px-5">
                  <a href="authentication/flows/basic/sign-in.html" className="menu-link px-5">Sign Out</a>
                </div>
                {/*end::Menu item*/}
                {/*begin::Menu separator*/}
                <div className="separator my-2" />
                {/*end::Menu separator*/}
                {/*begin::Menu item*/}
                <div className="menu-item px-5">
                  <div className="menu-content px-5">
                    <label className="form-check form-switch form-check-custom form-check-solid pulse pulse-success" htmlFor="kt_user_menu_dark_mode_toggle">
                      <input className="form-check-input w-30px h-20px" type="checkbox" defaultValue={1} name="mode" id="kt_user_menu_dark_mode_toggle" data-kt-url="/metronic8/demo3/../demo3/dark/index.html" />
                      <span className="pulse-ring ms-n1" />
                      <span className="form-check-label text-gray-600 fs-7">Dark Mode</span>
                    </label>
                  </div>
                </div>
                {/*end::Menu item*/}
              </div>
              {/*end::Menu*/}
            </div>
            {/*end::User menu*/}
          </div>
    )
} export default UserPanel;