import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../../context/UserContext";
import UserPanel from "./UserPanel";



function LeftNavBar(props) {


  const navigate = useNavigate();
  // const { user } = useContext(UserContext);


  //Logout button
  const handleLogout = () => {
    localStorage.setItem("isLogin", "0")
    navigate("/login")
  }

  return (
    <div className="aside-menu flex-column-fluid ps-5 pe-3 mb-9" id="kt_aside_menu">
      {/*begin::Aside Menu*/}
      <div className="w-100 hover-scroll-overlay-y d-flex pe-2" id="kt_aside_menu_wrapper" data-kt-scroll="true" data-kt-scroll-activate="{default: false, lg: true}" data-kt-scroll-height="auto" data-kt-scroll-dependencies="#kt_aside_logo, #kt_aside_footer" data-kt-scroll-wrappers="#kt_aside, #kt_aside_menu, #kt_aside_menu_wrapper" data-kt-scroll-offset={100}>
        {/*begin::Menu*/}
        <div className="menu menu-column menu-rounded fw-bold my-auto" id="#kt_aside_menu" data-kt-menu="true">

          {props.item.map((col, i) => {
            return (
              <div key={i} className="menu-item">

                <Link to={col.link} className="menu-link">

                  <span className="menu-icon">

                    <span className="svg-icon svg-icon-5">
                      <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                        <path d="M14.4 11H3C2.4 11 2 11.4 2 12C2 12.6 2.4 13 3 13H14.4V11Z" fill="black" />
                        <path opacity="0.3" d="M14.4 20V4L21.7 11.3C22.1 11.7 22.1 12.3 21.7 12.7L14.4 20Z" fill="black" />
                      </svg>
                    </span>

                  </span>
                  <span className="menu-title" style={{ fontWeight: '600' }}>{col.title}</span>
                </Link>
              </div>
            )
          })}

<br/>
          <UserPanel />

          { /*Logout button */}
          <div>
            <button className='logout-button' onClick={handleLogout}>Logout</button>
          </div>

          {/*end::Menu*/}
        </div>
        {/*end::Aside Menu*/}
      </div>
    </div>

  )
}

export default LeftNavBar;