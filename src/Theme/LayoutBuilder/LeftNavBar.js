import React from "react";

function LeftNavBar(){
    return (
        <div className="aside-menu flex-column-fluid ps-5 pe-3 mb-9" id="kt_aside_menu">
          {/*begin::Aside Menu*/}
          <div className="w-100 hover-scroll-overlay-y d-flex pe-2" id="kt_aside_menu_wrapper" data-kt-scroll="true" data-kt-scroll-activate="{default: false, lg: true}" data-kt-scroll-height="auto" data-kt-scroll-dependencies="#kt_aside_logo, #kt_aside_footer" data-kt-scroll-wrappers="#kt_aside, #kt_aside_menu, #kt_aside_menu_wrapper" data-kt-scroll-offset={100}>
            {/*begin::Menu*/}
            <div className="menu menu-column menu-rounded fw-bold my-auto" id="#kt_aside_menu" data-kt-menu="true">
              <div className="menu-item">
                <a className="menu-link" href="index.html">
                  <span className="menu-icon">
                    {/*begin::Svg Icon | path: icons/duotune/arrows/arr001.svg*/}
                    <span className="svg-icon svg-icon-5">
                      <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                        <path d="M14.4 11H3C2.4 11 2 11.4 2 12C2 12.6 2.4 13 3 13H14.4V11Z" fill="black" />
                        <path opacity="0.3" d="M14.4 20V4L21.7 11.3C22.1 11.7 22.1 12.3 21.7 12.7L14.4 20Z" fill="black" />
                      </svg>
                    </span>
                    {/*end::Svg Icon*/}
                  </span>
                  <span className="menu-title">Dashboard</span>
                </a>
              </div>
              <div data-kt-menu-trigger="click" className="menu-item menu-accordion">
                <span className="menu-link">
                  <span className="menu-icon">
                    {/*begin::Svg Icon | path: icons/duotune/arrows/arr001.svg*/}
                    <span className="svg-icon svg-icon-5">
                      <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                        <path d="M14.4 11H3C2.4 11 2 11.4 2 12C2 12.6 2.4 13 3 13H14.4V11Z" fill="black" />
                        <path opacity="0.3" d="M14.4 20V4L21.7 11.3C22.1 11.7 22.1 12.3 21.7 12.7L14.4 20Z" fill="black" />
                      </svg>
                    </span>
                    {/*end::Svg Icon*/}
                  </span>
                  <span className="menu-title">Crafted</span>
                  <span className="menu-arrow" />
                </span>
                <div className="menu-sub menu-sub-accordion">
                  <div data-kt-menu-trigger="click" className="menu-item menu-accordion">
                    <span className="menu-link">
                      <span className="menu-bullet">
                        <span className="bullet bullet-dot" />
                      </span>
                      <span className="menu-title">Pages</span>
                      <span className="menu-arrow" />
                    </span>
                    <div className="menu-sub menu-sub-accordion menu-active-bg">
                      <div data-kt-menu-trigger="click" className="menu-item menu-accordion">
                        <span className="menu-link">
                          <span className="menu-bullet">
                            <span className="bullet bullet-dot" />
                          </span>
                          <span className="menu-title">Profile</span>
                          <span className="menu-arrow" />
                        </span>
                        <div className="menu-sub menu-sub-accordion menu-active-bg">
                          <div className="menu-item">
                            <a className="menu-link" href="pages/profile/overview.html">
                              <span className="menu-bullet">
                                <span className="bullet bullet-dot" />
                              </span>
                              <span className="menu-title">Overview</span>
                            </a>
                          </div>
                          <div className="menu-item">
                            <a className="menu-link" href="pages/profile/projects.html">
                              <span className="menu-bullet">
                                <span className="bullet bullet-dot" />
                              </span>
                              <span className="menu-title">Projects</span>
                            </a>
                          </div>
                          <div className="menu-item">
                            <a className="menu-link" href="pages/profile/campaigns.html">
                              <span className="menu-bullet">
                                <span className="bullet bullet-dot" />
                              </span>
                              <span className="menu-title">Campaigns</span>
                            </a>
                          </div>
                          <div className="menu-item">
                            <a className="menu-link" href="pages/profile/documents.html">
                              <span className="menu-bullet">
                                <span className="bullet bullet-dot" />
                              </span>
                              <span className="menu-title">Documents</span>
                            </a>
                          </div>
                          <div className="menu-item">
                            <a className="menu-link" href="pages/profile/connections.html">
                              <span className="menu-bullet">
                                <span className="bullet bullet-dot" />
                              </span>
                              <span className="menu-title">Connections</span>
                            </a>
                          </div>
                          <div className="menu-item">
                            <a className="menu-link" href="pages/profile/activity.html">
                              <span className="menu-bullet">
                                <span className="bullet bullet-dot" />
                              </span>
                              <span className="menu-title">Activity</span>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div data-kt-menu-trigger="click" className="menu-item menu-accordion">
                        <span className="menu-link">
                          <span className="menu-bullet">
                            <span className="bullet bullet-dot" />
                          </span>
                          <span className="menu-title">Projects</span>
                          <span className="menu-arrow" />
                        </span>
                        <div className="menu-sub menu-sub-accordion menu-active-bg">
                          <div className="menu-item">
                            <a className="menu-link" href="pages/projects/list.html">
                              <span className="menu-bullet">
                                <span className="bullet bullet-dot" />
                              </span>
                              <span className="menu-title">My Projects</span>
                            </a>
                          </div>
                          <div className="menu-item">
                            <a className="menu-link" href="pages/projects/project.html">
                              <span className="menu-bullet">
                                <span className="bullet bullet-dot" />
                              </span>
                              <span className="menu-title">View Project</span>
                            </a>
                          </div>
                          <div className="menu-item">
                            <a className="menu-link" href="pages/projects/targets.html">
                              <span className="menu-bullet">
                                <span className="bullet bullet-dot" />
                              </span>
                              <span className="menu-title">Targets</span>
                            </a>
                          </div>
                          <div className="menu-item">
                            <a className="menu-link" href="pages/projects/budget.html">
                              <span className="menu-bullet">
                                <span className="bullet bullet-dot" />
                              </span>
                              <span className="menu-title">Budget</span>
                            </a>
                          </div>
                          <div className="menu-item">
                            <a className="menu-link" href="pages/projects/users.html">
                              <span className="menu-bullet">
                                <span className="bullet bullet-dot" />
                              </span>
                              <span className="menu-title">Users</span>
                            </a>
                          </div>
                          <div className="menu-item">
                            <a className="menu-link" href="pages/projects/files.html">
                              <span className="menu-bullet">
                                <span className="bullet bullet-dot" />
                              </span>
                              <span className="menu-title">Files</span>
                            </a>
                          </div>
                          <div className="menu-item">
                            <a className="menu-link" href="pages/projects/activity.html">
                              <span className="menu-bullet">
                                <span className="bullet bullet-dot" />
                              </span>
                              <span className="menu-title">Activity</span>
                            </a>
                          </div>
                          <div className="menu-item">
                            <a className="menu-link" href="pages/projects/settings.html">
                              <span className="menu-bullet">
                                <span className="bullet bullet-dot" />
                              </span>
                              <span className="menu-title">Settings</span>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div data-kt-menu-trigger="click" className="menu-item menu-accordion">
                        <span className="menu-link">
                          <span className="menu-bullet">
                            <span className="bullet bullet-dot" />
                          </span>
                          <span className="menu-title">Wizards</span>
                          <span className="menu-arrow" />
                        </span>
                        <div className="menu-sub menu-sub-accordion menu-active-bg">
                          <div className="menu-item">
                            <a className="menu-link" href="pages/wizards/horizontal.html">
                              <span className="menu-bullet">
                                <span className="bullet bullet-dot" />
                              </span>
                              <span className="menu-title">Horizontal</span>
                            </a>
                          </div>
                          <div className="menu-item">
                            <a className="menu-link" href="pages/wizards/vertical.html">
                              <span className="menu-bullet">
                                <span className="bullet bullet-dot" />
                              </span>
                              <span className="menu-title">Vertical</span>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div data-kt-menu-trigger="click" className="menu-item menu-accordion">
                        <span className="menu-link">
                          <span className="menu-bullet">
                            <span className="bullet bullet-dot" />
                          </span>
                          <span className="menu-title">Search</span>
                          <span className="menu-arrow" />
                        </span>
                        <div className="menu-sub menu-sub-accordion menu-active-bg">
                          <div className="menu-item">
                            <a className="menu-link" href="pages/search/horizontal.html">
                              <span className="menu-bullet">
                                <span className="bullet bullet-dot" />
                              </span>
                              <span className="menu-title">Horizontal</span>
                            </a>
                          </div>
                          <div className="menu-item">
                            <a className="menu-link" href="pages/search/vertical.html">
                              <span className="menu-bullet">
                                <span className="bullet bullet-dot" />
                              </span>
                              <span className="menu-title">Vertical</span>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div data-kt-menu-trigger="click" className="menu-item menu-accordion">
                        <span className="menu-link">
                          <span className="menu-bullet">
                            <span className="bullet bullet-dot" />
                          </span>
                          <span className="menu-title">Blog</span>
                          <span className="menu-arrow" />
                        </span>
                        <div className="menu-sub menu-sub-accordion menu-active-bg">
                          <div className="menu-item">
                            <a className="menu-link" href="pages/blog/home.html">
                              <span className="menu-bullet">
                                <span className="bullet bullet-dot" />
                              </span>
                              <span className="menu-title">Blog Home</span>
                            </a>
                          </div>
                          <div className="menu-item">
                            <a className="menu-link" href="pages/blog/post.html">
                              <span className="menu-bullet">
                                <span className="bullet bullet-dot" />
                              </span>
                              <span className="menu-title">Blog Post</span>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div data-kt-menu-trigger="click" className="menu-item menu-accordion">
                        <span className="menu-link">
                          <span className="menu-bullet">
                            <span className="bullet bullet-dot" />
                          </span>
                          <span className="menu-title">Company</span>
                          <span className="menu-arrow" />
                        </span>
                        <div className="menu-sub menu-sub-accordion menu-active-bg">
                          <div className="menu-item">
                            <a className="menu-link" href="pages/company/about.html">
                              <span className="menu-bullet">
                                <span className="bullet bullet-dot" />
                              </span>
                              <span className="menu-title">About Us</span>
                            </a>
                          </div>
                          <div className="menu-item">
                            <a className="menu-link" href="pages/company/pricing.html">
                              <span className="menu-bullet">
                                <span className="bullet bullet-dot" />
                              </span>
                              <span className="menu-title">Pricing</span>
                            </a>
                          </div>
                          <div className="menu-item">
                            <a className="menu-link" href="pages/company/contact.html">
                              <span className="menu-bullet">
                                <span className="bullet bullet-dot" />
                              </span>
                              <span className="menu-title">Contact Us</span>
                            </a>
                          </div>
                          <div className="menu-item">
                            <a className="menu-link" href="pages/company/team.html">
                              <span className="menu-bullet">
                                <span className="bullet bullet-dot" />
                              </span>
                              <span className="menu-title">Our Team</span>
                            </a>
                          </div>
                          <div className="menu-item">
                            <a className="menu-link" href="pages/company/licenses.html">
                              <span className="menu-bullet">
                                <span className="bullet bullet-dot" />
                              </span>
                              <span className="menu-title">Licenses</span>
                            </a>
                          </div>
                          <div className="menu-item">
                            <a className="menu-link" href="pages/company/sitemap.html">
                              <span className="menu-bullet">
                                <span className="bullet bullet-dot" />
                              </span>
                              <span className="menu-title">Sitemap</span>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div data-kt-menu-trigger="click" className="menu-item menu-accordion">
                        <span className="menu-link">
                          <span className="menu-bullet">
                            <span className="bullet bullet-dot" />
                          </span>
                          <span className="menu-title">Careers</span>
                          <span className="menu-arrow" />
                        </span>
                        <div className="menu-sub menu-sub-accordion menu-active-bg">
                          <div className="menu-item">
                            <a className="menu-link" href="pages/careers/list.html">
                              <span className="menu-bullet">
                                <span className="bullet bullet-dot" />
                              </span>
                              <span className="menu-title">Careers List</span>
                            </a>
                          </div>
                          <div className="menu-item">
                            <a className="menu-link" href="pages/careers/apply.html">
                              <span className="menu-bullet">
                                <span className="bullet bullet-dot" />
                              </span>
                              <span className="menu-title">Careers Apply</span>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div data-kt-menu-trigger="click" className="menu-item menu-accordion">
                        <span className="menu-link">
                          <span className="menu-bullet">
                            <span className="bullet bullet-dot" />
                          </span>
                          <span className="menu-title">FAQ</span>
                          <span className="menu-arrow" />
                        </span>
                        <div className="menu-sub menu-sub-accordion menu-active-bg">
                          <div className="menu-item">
                            <a className="menu-link" href="pages/faq/classic.html">
                              <span className="menu-bullet">
                                <span className="bullet bullet-dot" />
                              </span>
                              <span className="menu-title">Classic</span>
                            </a>
                          </div>
                          <div className="menu-item">
                            <a className="menu-link" href="pages/faq/extended.html">
                              <span className="menu-bullet">
                                <span className="bullet bullet-dot" />
                              </span>
                              <span className="menu-title">Extended</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div data-kt-menu-trigger="click" className="menu-item menu-accordion">
                    <span className="menu-link">
                      <span className="menu-bullet">
                        <span className="bullet bullet-dot" />
                      </span>
                      <span className="menu-title">Account</span>
                      <span className="menu-arrow" />
                    </span>
                    <div className="menu-sub menu-sub-accordion menu-active-bg">
                      <div className="menu-item">
                        <a className="menu-link" href="account/overview.html">
                          <span className="menu-bullet">
                            <span className="bullet bullet-dot" />
                          </span>
                          <span className="menu-title">Overview</span>
                        </a>
                      </div>
                      <div className="menu-item">
                        <a className="menu-link" href="account/settings.html">
                          <span className="menu-bullet">
                            <span className="bullet bullet-dot" />
                          </span>
                          <span className="menu-title">Settings</span>
                        </a>
                      </div>
                      <div className="menu-item">
                        <a className="menu-link" href="account/security.html">
                          <span className="menu-bullet">
                            <span className="bullet bullet-dot" />
                          </span>
                          <span className="menu-title">Security</span>
                        </a>
                      </div>
                      <div className="menu-item">
                        <a className="menu-link" href="account/billing.html">
                          <span className="menu-bullet">
                            <span className="bullet bullet-dot" />
                          </span>
                          <span className="menu-title">Billing</span>
                        </a>
                      </div>
                      <div className="menu-item">
                        <a className="menu-link" href="account/statements.html">
                          <span className="menu-bullet">
                            <span className="bullet bullet-dot" />
                          </span>
                          <span className="menu-title">Statements</span>
                        </a>
                      </div>
                      <div className="menu-item">
                        <a className="menu-link" href="account/referrals.html">
                          <span className="menu-bullet">
                            <span className="bullet bullet-dot" />
                          </span>
                          <span className="menu-title">Referrals</span>
                        </a>
                      </div>
                      <div className="menu-item">
                        <a className="menu-link" href="account/api-keys.html">
                          <span className="menu-bullet">
                            <span className="bullet bullet-dot" />
                          </span>
                          <span className="menu-title">API Keys</span>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div data-kt-menu-trigger="click" className="menu-item menu-accordion">
                    <span className="menu-link">
                      <span className="menu-bullet">
                        <span className="bullet bullet-dot" />
                      </span>
                      <span className="menu-title">Authentication</span>
                      <span className="menu-arrow" />
                    </span>
                    <div className="menu-sub menu-sub-accordion menu-active-bg">
                      <div data-kt-menu-trigger="click" className="menu-item menu-accordion">
                        <span className="menu-link">
                          <span className="menu-bullet">
                            <span className="bullet bullet-dot" />
                          </span>
                          <span className="menu-title">Basic Flow</span>
                          <span className="menu-arrow" />
                        </span>
                        <div className="menu-sub menu-sub-accordion menu-active-bg">
                          <div className="menu-item">
                            <a className="menu-link" href="authentication/flows/basic/sign-in.html">
                              <span className="menu-bullet">
                                <span className="bullet bullet-dot" />
                              </span>
                              <span className="menu-title">Sign-in</span>
                            </a>
                          </div>
                          <div className="menu-item">
                            <a className="menu-link" href="authentication/flows/basic/sign-up.html">
                              <span className="menu-bullet">
                                <span className="bullet bullet-dot" />
                              </span>
                              <span className="menu-title">Sign-up</span>
                            </a>
                          </div>
                          <div className="menu-item">
                            <a className="menu-link" href="authentication/flows/basic/two-steps.html">
                              <span className="menu-bullet">
                                <span className="bullet bullet-dot" />
                              </span>
                              <span className="menu-title">Two-steps</span>
                            </a>
                          </div>
                          <div className="menu-item">
                            <a className="menu-link" href="authentication/flows/basic/password-reset.html">
                              <span className="menu-bullet">
                                <span className="bullet bullet-dot" />
                              </span>
                              <span className="menu-title">Password Reset</span>
                            </a>
                          </div>
                          <div className="menu-item">
                            <a className="menu-link" href="authentication/flows/basic/new-password.html">
                              <span className="menu-bullet">
                                <span className="bullet bullet-dot" />
                              </span>
                              <span className="menu-title">New Password</span>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div data-kt-menu-trigger="click" className="menu-item menu-accordion">
                        <span className="menu-link">
                          <span className="menu-bullet">
                            <span className="bullet bullet-dot" />
                          </span>
                          <span className="menu-title">Aside Flow</span>
                          <span className="menu-arrow" />
                        </span>
                        <div className="menu-sub menu-sub-accordion menu-active-bg">
                          <div className="menu-item">
                            <a className="menu-link" href="authentication/flows/aside/sign-in.html">
                              <span className="menu-bullet">
                                <span className="bullet bullet-dot" />
                              </span>
                              <span className="menu-title">Sign-in</span>
                            </a>
                          </div>
                          <div className="menu-item">
                            <a className="menu-link" href="authentication/flows/aside/sign-up.html">
                              <span className="menu-bullet">
                                <span className="bullet bullet-dot" />
                              </span>
                              <span className="menu-title">Sign-up</span>
                            </a>
                          </div>
                          <div className="menu-item">
                            <a className="menu-link" href="authentication/flows/aside/two-steps.html">
                              <span className="menu-bullet">
                                <span className="bullet bullet-dot" />
                              </span>
                              <span className="menu-title">Two-steps</span>
                            </a>
                          </div>
                          <div className="menu-item">
                            <a className="menu-link" href="authentication/flows/aside/password-reset.html">
                              <span className="menu-bullet">
                                <span className="bullet bullet-dot" />
                              </span>
                              <span className="menu-title">Password Reset</span>
                            </a>
                          </div>
                          <div className="menu-item">
                            <a className="menu-link" href="authentication/flows/aside/new-password.html">
                              <span className="menu-bullet">
                                <span className="bullet bullet-dot" />
                              </span>
                              <span className="menu-title">New Password</span>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div data-kt-menu-trigger="click" className="menu-item menu-accordion">
                        <span className="menu-link">
                          <span className="menu-bullet">
                            <span className="bullet bullet-dot" />
                          </span>
                          <span className="menu-title">Dark Flow</span>
                          <span className="menu-arrow" />
                        </span>
                        <div className="menu-sub menu-sub-accordion menu-active-bg">
                          <div className="menu-item">
                            <a className="menu-link" href="authentication/flows/dark/sign-in.html">
                              <span className="menu-bullet">
                                <span className="bullet bullet-dot" />
                              </span>
                              <span className="menu-title">Sign-in</span>
                            </a>
                          </div>
                          <div className="menu-item">
                            <a className="menu-link" href="authentication/flows/dark/sign-up.html">
                              <span className="menu-bullet">
                                <span className="bullet bullet-dot" />
                              </span>
                              <span className="menu-title">Sign-up</span>
                            </a>
                          </div>
                          <div className="menu-item">
                            <a className="menu-link" href="authentication/flows/dark/two-steps.html">
                              <span className="menu-bullet">
                                <span className="bullet bullet-dot" />
                              </span>
                              <span className="menu-title">Two-steps</span>
                            </a>
                          </div>
                          <div className="menu-item">
                            <a className="menu-link" href="authentication/flows/dark/password-reset.html">
                              <span className="menu-bullet">
                                <span className="bullet bullet-dot" />
                              </span>
                              <span className="menu-title">Password Reset</span>
                            </a>
                          </div>
                          <div className="menu-item">
                            <a className="menu-link" href="authentication/flows/dark/new-password.html">
                              <span className="menu-bullet">
                                <span className="bullet bullet-dot" />
                              </span>
                              <span className="menu-title">New Password</span>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="menu-item">
                        <a className="menu-link" href="authentication/extended/multi-steps-sign-up.html">
                          <span className="menu-bullet">
                            <span className="bullet bullet-dot" />
                          </span>
                          <span className="menu-title">Multi-steps Sign-up</span>
                        </a>
                      </div>
                      <div className="menu-item">
                        <a className="menu-link" href="authentication/extended/free-trial-sign-up.html">
                          <span className="menu-bullet">
                            <span className="bullet bullet-dot" />
                          </span>
                          <span className="menu-title">Free Trial Sign-up</span>
                        </a>
                      </div>
                      <div className="menu-item">
                        <a className="menu-link" href="authentication/extended/coming-soon.html">
                          <span className="menu-bullet">
                            <span className="bullet bullet-dot" />
                          </span>
                          <span className="menu-title">Coming Soon</span>
                        </a>
                      </div>
                      <div className="menu-item">
                        <a className="menu-link" href="authentication/general/welcome.html">
                          <span className="menu-bullet">
                            <span className="bullet bullet-dot" />
                          </span>
                          <span className="menu-title">Welcome Message</span>
                        </a>
                      </div>
                      <div className="menu-item">
                        <a className="menu-link" href="authentication/general/verify-email.html">
                          <span className="menu-bullet">
                            <span className="bullet bullet-dot" />
                          </span>
                          <span className="menu-title">Verify Email</span>
                        </a>
                      </div>
                      <div className="menu-item">
                        <a className="menu-link" href="authentication/general/password-confirmation.html">
                          <span className="menu-bullet">
                            <span className="bullet bullet-dot" />
                          </span>
                          <span className="menu-title">Password Confirmation</span>
                        </a>
                      </div>
                      <div className="menu-item">
                        <a className="menu-link" href="authentication/general/deactivation.html">
                          <span className="menu-bullet">
                            <span className="bullet bullet-dot" />
                          </span>
                          <span className="menu-title">Account Deactivation</span>
                        </a>
                      </div>
                      <div className="menu-item">
                        <a className="menu-link" href="authentication/general/error-404.html">
                          <span className="menu-bullet">
                            <span className="bullet bullet-dot" />
                          </span>
                          <span className="menu-title">Error 404</span>
                        </a>
                      </div>
                      <div className="menu-item">
                        <a className="menu-link" href="authentication/general/error-500.html">
                          <span className="menu-bullet">
                            <span className="bullet bullet-dot" />
                          </span>
                          <span className="menu-title">Error 500</span>
                        </a>
                      </div>
                      <div data-kt-menu-trigger="click" className="menu-item menu-accordion">
                        <span className="menu-link">
                          <span className="menu-bullet">
                            <span className="bullet bullet-dot" />
                          </span>
                          <span className="menu-title">Email Templates</span>
                          <span className="menu-arrow" />
                        </span>
                        <div className="menu-sub menu-sub-accordion menu-active-bg">
                          <div className="menu-item">
                            <a className="menu-link" href="authentication/email/verify-email.html" target="blank">
                              <span className="menu-bullet">
                                <span className="bullet bullet-dot" />
                              </span>
                              <span className="menu-title">Verify Email</span>
                            </a>
                          </div>
                          <div className="menu-item">
                            <a className="menu-link" href="authentication/email/invitation.html" target="blank">
                              <span className="menu-bullet">
                                <span className="bullet bullet-dot" />
                              </span>
                              <span className="menu-title">Account Invitation</span>
                            </a>
                          </div>
                          <div className="menu-item">
                            <a className="menu-link" href="authentication/email/password-reset.html" target="blank">
                              <span className="menu-bullet">
                                <span className="bullet bullet-dot" />
                              </span>
                              <span className="menu-title">Password Reset</span>
                            </a>
                          </div>
                          <div className="menu-item">
                            <a className="menu-link" href="authentication/email/password-change.html" target="blank">
                              <span className="menu-bullet">
                                <span className="bullet bullet-dot" />
                              </span>
                              <span className="menu-title">Password Changed</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div data-kt-menu-trigger="click" className="menu-item menu-accordion">
                    <span className="menu-link">
                      <span className="menu-bullet">
                        <span className="bullet bullet-dot" />
                      </span>
                      <span className="menu-title">Modals</span>
                      <span className="menu-arrow" />
                    </span>
                    <div className="menu-sub menu-sub-accordion menu-active-bg">
                      <div data-kt-menu-trigger="click" className="menu-item menu-accordion">
                        <span className="menu-link">
                          <span className="menu-bullet">
                            <span className="bullet bullet-dot" />
                          </span>
                          <span className="menu-title">General</span>
                          <span className="menu-arrow" />
                        </span>
                        <div className="menu-sub menu-sub-accordion menu-active-bg">
                          <div className="menu-item">
                            <a className="menu-link" href="modals/general/invite-friends.html">
                              <span className="menu-bullet">
                                <span className="bullet bullet-dot" />
                              </span>
                              <span className="menu-title">Invite Friends</span>
                            </a>
                          </div>
                          <div className="menu-item">
                            <a className="menu-link" href="modals/general/view-users.html">
                              <span className="menu-bullet">
                                <span className="bullet bullet-dot" />
                              </span>
                              <span className="menu-title">View Users</span>
                            </a>
                          </div>
                          <div className="menu-item">
                            <a className="menu-link" href="modals/general/upgrade-plan.html">
                              <span className="menu-bullet">
                                <span className="bullet bullet-dot" />
                              </span>
                              <span className="menu-title">Upgrade Plan</span>
                            </a>
                          </div>
                          <div className="menu-item">
                            <a className="menu-link" href="modals/general/share-earn.html">
                              <span className="menu-bullet">
                                <span className="bullet bullet-dot" />
                              </span>
                              <span className="menu-title">Share &amp; Earn</span>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div data-kt-menu-trigger="click" className="menu-item menu-accordion">
                        <span className="menu-link">
                          <span className="menu-bullet">
                            <span className="bullet bullet-dot" />
                          </span>
                          <span className="menu-title">Forms</span>
                          <span className="menu-arrow" />
                        </span>
                        <div className="menu-sub menu-sub-accordion menu-active-bg">
                          <div className="menu-item">
                            <a className="menu-link" href="modals/forms/new-target.html">
                              <span className="menu-bullet">
                                <span className="bullet bullet-dot" />
                              </span>
                              <span className="menu-title">New Target</span>
                            </a>
                          </div>
                          <div className="menu-item">
                            <a className="menu-link" href="modals/forms/new-card.html">
                              <span className="menu-bullet">
                                <span className="bullet bullet-dot" />
                              </span>
                              <span className="menu-title">New Card</span>
                            </a>
                          </div>
                          <div className="menu-item">
                            <a className="menu-link" href="modals/forms/new-address.html">
                              <span className="menu-bullet">
                                <span className="bullet bullet-dot" />
                              </span>
                              <span className="menu-title">New Address</span>
                            </a>
                          </div>
                          <div className="menu-item">
                            <a className="menu-link" href="modals/forms/create-api-key.html">
                              <span className="menu-bullet">
                                <span className="bullet bullet-dot" />
                              </span>
                              <span className="menu-title">Create API Key</span>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div data-kt-menu-trigger="click" className="menu-item menu-accordion">
                        <span className="menu-link">
                          <span className="menu-bullet">
                            <span className="bullet bullet-dot" />
                          </span>
                          <span className="menu-title">Wizards</span>
                          <span className="menu-arrow" />
                        </span>
                        <div className="menu-sub menu-sub-accordion menu-active-bg">
                          <div className="menu-item">
                            <a className="menu-link" href="modals/wizards/two-factor-authentication.html">
                              <span className="menu-bullet">
                                <span className="bullet bullet-dot" />
                              </span>
                              <span className="menu-title">Two Factor Auth</span>
                            </a>
                          </div>
                          <div className="menu-item">
                            <a className="menu-link" href="modals/wizards/create-app.html">
                              <span className="menu-bullet">
                                <span className="bullet bullet-dot" />
                              </span>
                              <span className="menu-title">Create App</span>
                            </a>
                          </div>
                          <div className="menu-item">
                            <a className="menu-link" href="modals/wizards/create-account.html">
                              <span className="menu-bullet">
                                <span className="bullet bullet-dot" />
                              </span>
                              <span className="menu-title">Create Account</span>
                            </a>
                          </div>
                          <div className="menu-item">
                            <a className="menu-link" href="modals/wizards/create-project.html">
                              <span className="menu-bullet">
                                <span className="bullet bullet-dot" />
                              </span>
                              <span className="menu-title">Create Project</span>
                            </a>
                          </div>
                          <div className="menu-item">
                            <a className="menu-link" href="modals/wizards/offer-a-deal.html">
                              <span className="menu-bullet">
                                <span className="bullet bullet-dot" />
                              </span>
                              <span className="menu-title">Offer a Deal</span>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div data-kt-menu-trigger="click" className="menu-item menu-accordion">
                        <span className="menu-link">
                          <span className="menu-bullet">
                            <span className="bullet bullet-dot" />
                          </span>
                          <span className="menu-title">Search</span>
                          <span className="menu-arrow" />
                        </span>
                        <div className="menu-sub menu-sub-accordion menu-active-bg">
                          <div className="menu-item">
                            <a className="menu-link" href="modals/search/users.html">
                              <span className="menu-bullet">
                                <span className="bullet bullet-dot" />
                              </span>
                              <span className="menu-title">Users</span>
                            </a>
                          </div>
                          <div className="menu-item">
                            <a className="menu-link" href="modals/search/select-location.html">
                              <span className="menu-bullet">
                                <span className="bullet bullet-dot" />
                              </span>
                              <span className="menu-title">Select Location</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div data-kt-menu-trigger="click" className="menu-item menu-accordion">
                    <span className="menu-link">
                      <span className="menu-bullet">
                        <span className="bullet bullet-dot" />
                      </span>
                      <span className="menu-title">Widgets</span>
                      <span className="menu-arrow" />
                    </span>
                    <div className="menu-sub menu-sub-accordion menu-active-bg">
                      <div className="menu-item">
                        <a className="menu-link" href="widgets/lists.html">
                          <span className="menu-bullet">
                            <span className="bullet bullet-dot" />
                          </span>
                          <span className="menu-title">Lists</span>
                        </a>
                      </div>
                      <div className="menu-item">
                        <a className="menu-link" href="widgets/statistics.html">
                          <span className="menu-bullet">
                            <span className="bullet bullet-dot" />
                          </span>
                          <span className="menu-title">Statistics</span>
                        </a>
                      </div>
                      <div className="menu-item">
                        <a className="menu-link" href="widgets/charts.html">
                          <span className="menu-bullet">
                            <span className="bullet bullet-dot" />
                          </span>
                          <span className="menu-title">Charts</span>
                        </a>
                      </div>
                      <div className="menu-item">
                        <a className="menu-link" href="widgets/mixed.html">
                          <span className="menu-bullet">
                            <span className="bullet bullet-dot" />
                          </span>
                          <span className="menu-title">Mixed</span>
                        </a>
                      </div>
                      <div className="menu-item">
                        <a className="menu-link" href="widgets/tables.html">
                          <span className="menu-bullet">
                            <span className="bullet bullet-dot" />
                          </span>
                          <span className="menu-title">Tables</span>
                        </a>
                      </div>
                      <div className="menu-item">
                        <a className="menu-link" href="widgets/feeds.html">
                          <span className="menu-bullet">
                            <span className="bullet bullet-dot" />
                          </span>
                          <span className="menu-title">Feeds</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div data-kt-menu-trigger="click" className="menu-item menu-accordion">
                <span className="menu-link">
                  <span className="menu-icon">
                    {/*begin::Svg Icon | path: icons/duotune/arrows/arr001.svg*/}
                    <span className="svg-icon svg-icon-5">
                      <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                        <path d="M14.4 11H3C2.4 11 2 11.4 2 12C2 12.6 2.4 13 3 13H14.4V11Z" fill="black" />
                        <path opacity="0.3" d="M14.4 20V4L21.7 11.3C22.1 11.7 22.1 12.3 21.7 12.7L14.4 20Z" fill="black" />
                      </svg>
                    </span>
                    {/*end::Svg Icon*/}
                  </span>
                  <span className="menu-title">Applications</span>
                  <span className="menu-arrow" />
                </span>
                <div className="menu-sub menu-sub-accordion">
                  <div data-kt-menu-trigger="click" className="menu-item menu-accordion">
                    <span className="menu-link">
                      <span className="menu-bullet">
                        <span className="bullet bullet-dot" />
                      </span>
                      <span className="menu-title">Customers</span>
                      <span className="menu-arrow" />
                    </span>
                    <div className="menu-sub menu-sub-accordion">
                      <div className="menu-item">
                        <a className="menu-link" href="apps/customers/getting-started.html">
                          <span className="menu-bullet">
                            <span className="bullet bullet-dot" />
                          </span>
                          <span className="menu-title">Getting Started</span>
                        </a>
                      </div>
                      <div className="menu-item">
                        <a className="menu-link" href="apps/customers/list.html">
                          <span className="menu-bullet">
                            <span className="bullet bullet-dot" />
                          </span>
                          <span className="menu-title">Customer Listing</span>
                        </a>
                      </div>
                      <div className="menu-item">
                        <a className="menu-link" href="apps/customers/view.html">
                          <span className="menu-bullet">
                            <span className="bullet bullet-dot" />
                          </span>
                          <span className="menu-title">Customer Details</span>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div data-kt-menu-trigger="click" className="menu-item menu-accordion">
                    <span className="menu-link">
                      <span className="menu-bullet">
                        <span className="bullet bullet-dot" />
                      </span>
                      <span className="menu-title">Subscriptions</span>
                      <span className="menu-arrow" />
                    </span>
                    <div className="menu-sub menu-sub-accordion">
                      <div className="menu-item">
                        <a className="menu-link" href="apps/subscriptions/getting-started.html">
                          <span className="menu-bullet">
                            <span className="bullet bullet-dot" />
                          </span>
                          <span className="menu-title">Getting Started</span>
                        </a>
                      </div>
                      <div className="menu-item">
                        <a className="menu-link" href="apps/subscriptions/list.html">
                          <span className="menu-bullet">
                            <span className="bullet bullet-dot" />
                          </span>
                          <span className="menu-title">Subscription List</span>
                        </a>
                      </div>
                      <div className="menu-item">
                        <a className="menu-link" href="apps/subscriptions/add.html">
                          <span className="menu-bullet">
                            <span className="bullet bullet-dot" />
                          </span>
                          <span className="menu-title">Add Subscription</span>
                        </a>
                      </div>
                      <div className="menu-item">
                        <a className="menu-link" href="apps/subscriptions/view.html">
                          <span className="menu-bullet">
                            <span className="bullet bullet-dot" />
                          </span>
                          <span className="menu-title">View Subscription</span>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div data-kt-menu-trigger="click" className="menu-item menu-accordion">
                    <span className="menu-link">
                      <span className="menu-bullet">
                        <span className="bullet bullet-dot" />
                      </span>
                      <span className="menu-title">Invoice Manager</span>
                      <span className="menu-arrow" />
                    </span>
                    <div className="menu-sub menu-sub-accordion">
                      <div data-kt-menu-trigger="click" className="menu-item menu-accordion">
                        <span className="menu-link">
                          <span className="menu-bullet">
                            <span className="bullet bullet-dot" />
                          </span>
                          <span className="menu-title">View Invoices</span>
                          <span className="menu-arrow" />
                        </span>
                        <div className="menu-sub menu-sub-accordion menu-active-bg">
                          <div className="menu-item">
                            <a className="menu-link" href="apps/invoices/view/invoice-1.html">
                              <span className="menu-bullet">
                                <span className="bullet bullet-dot" />
                              </span>
                              <span className="menu-title">Invoice 1</span>
                            </a>
                          </div>
                          <div className="menu-item">
                            <a className="menu-link" href="apps/invoices/view/invoice-2.html">
                              <span className="menu-bullet">
                                <span className="bullet bullet-dot" />
                              </span>
                              <span className="menu-title">Invoice 2</span>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="menu-item">
                        <a className="menu-link" href="apps/invoices/create.html">
                          <span className="menu-bullet">
                            <span className="bullet bullet-dot" />
                          </span>
                          <span className="menu-title">Create Invoice</span>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div data-kt-menu-trigger="click" className="menu-item menu-accordion mb-1">
                    <span className="menu-link">
                      <span className="menu-bullet">
                        <span className="bullet bullet-dot" />
                      </span>
                      <span className="menu-title">User Management</span>
                      <span className="menu-arrow" />
                    </span>
                    <div className="menu-sub menu-sub-accordion">
                      <div data-kt-menu-trigger="click" className="menu-item menu-accordion mb-1">
                        <span className="menu-link">
                          <span className="menu-bullet">
                            <span className="bullet bullet-dot" />
                          </span>
                          <span className="menu-title">Users</span>
                          <span className="menu-arrow" />
                        </span>
                        <div className="menu-sub menu-sub-accordion">
                          <div className="menu-item">
                            <a className="menu-link" href="apps/user-management/users/list.html">
                              <span className="menu-bullet">
                                <span className="bullet bullet-dot" />
                              </span>
                              <span className="menu-title">Users List</span>
                            </a>
                          </div>
                          <div className="menu-item">
                            <a className="menu-link" href="apps/user-management/users/view.html">
                              <span className="menu-bullet">
                                <span className="bullet bullet-dot" />
                              </span>
                              <span className="menu-title">View User</span>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div data-kt-menu-trigger="click" className="menu-item menu-accordion">
                        <span className="menu-link">
                          <span className="menu-bullet">
                            <span className="bullet bullet-dot" />
                          </span>
                          <span className="menu-title">Roles</span>
                          <span className="menu-arrow" />
                        </span>
                        <div className="menu-sub menu-sub-accordion">
                          <div className="menu-item">
                            <a className="menu-link" href="apps/user-management/roles/list.html">
                              <span className="menu-bullet">
                                <span className="bullet bullet-dot" />
                              </span>
                              <span className="menu-title">Roles List</span>
                            </a>
                          </div>
                          <div className="menu-item">
                            <a className="menu-link" href="apps/user-management/roles/view.html">
                              <span className="menu-bullet">
                                <span className="bullet bullet-dot" />
                              </span>
                              <span className="menu-title">View Role</span>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="menu-item">
                        <a className="menu-link" href="apps/user-management/permissions.html">
                          <span className="menu-bullet">
                            <span className="bullet bullet-dot" />
                          </span>
                          <span className="menu-title">Permissions</span>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div data-kt-menu-trigger="click" className="menu-item menu-accordion mb-1">
                    <span className="menu-link">
                      <span className="menu-bullet">
                        <span className="bullet bullet-dot" />
                      </span>
                      <span className="menu-title">Support Center</span>
                      <span className="menu-arrow" />
                    </span>
                    <div className="menu-sub menu-sub-accordion">
                      <div className="menu-item">
                        <a className="menu-link" href="apps/support-center/overview.html">
                          <span className="menu-bullet">
                            <span className="bullet bullet-dot" />
                          </span>
                          <span className="menu-title">Overview</span>
                        </a>
                      </div>
                      <div data-kt-menu-trigger="click" className="menu-item menu-accordion mb-1">
                        <span className="menu-link">
                          <span className="menu-bullet">
                            <span className="bullet bullet-dot" />
                          </span>
                          <span className="menu-title">Tickets</span>
                          <span className="menu-arrow" />
                        </span>
                        <div className="menu-sub menu-sub-accordion">
                          <div className="menu-item">
                            <a className="menu-link" href="apps/support-center/tickets/list.html">
                              <span className="menu-bullet">
                                <span className="bullet bullet-dot" />
                              </span>
                              <span className="menu-title">Tickets List</span>
                            </a>
                          </div>
                          <div className="menu-item">
                            <a className="menu-link" href="apps/support-center/tickets/view.html">
                              <span className="menu-bullet">
                                <span className="bullet bullet-dot" />
                              </span>
                              <span className="menu-title">View Ticket</span>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div data-kt-menu-trigger="click" className="menu-item menu-accordion mb-1">
                        <span className="menu-link">
                          <span className="menu-bullet">
                            <span className="bullet bullet-dot" />
                          </span>
                          <span className="menu-title">Tutorials</span>
                          <span className="menu-arrow" />
                        </span>
                        <div className="menu-sub menu-sub-accordion">
                          <div className="menu-item">
                            <a className="menu-link" href="apps/support-center/tutorials/list.html">
                              <span className="menu-bullet">
                                <span className="bullet bullet-dot" />
                              </span>
                              <span className="menu-title">Tutorials List</span>
                            </a>
                          </div>
                          <div className="menu-item">
                            <a className="menu-link" href="apps/support-center/tutorials/post.html">
                              <span className="menu-bullet">
                                <span className="bullet bullet-dot" />
                              </span>
                              <span className="menu-title">Tutorial Post</span>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="menu-item">
                        <a className="menu-link" href="apps/support-center/faq.html">
                          <span className="menu-bullet">
                            <span className="bullet bullet-dot" />
                          </span>
                          <span className="menu-title">FAQ</span>
                        </a>
                      </div>
                      <div className="menu-item">
                        <a className="menu-link" href="apps/support-center/licenses.html">
                          <span className="menu-bullet">
                            <span className="bullet bullet-dot" />
                          </span>
                          <span className="menu-title">Licenses</span>
                        </a>
                      </div>
                      <div className="menu-item">
                        <a className="menu-link" href="apps/support-center/contact.html">
                          <span className="menu-bullet">
                            <span className="bullet bullet-dot" />
                          </span>
                          <span className="menu-title">Contact Us</span>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="menu-item">
                    <a className="menu-link" href="apps/calendar.html">
                      <span className="menu-bullet">
                        <span className="bullet bullet-dot" />
                      </span>
                      <span className="menu-title">Calendar</span>
                    </a>
                  </div>
                  <div data-kt-menu-trigger="click" className="menu-item menu-accordion">
                    <span className="menu-link">
                      <span className="menu-bullet">
                        <span className="bullet bullet-dot" />
                      </span>
                      <span className="menu-title">Chat</span>
                      <span className="menu-arrow" />
                    </span>
                    <div className="menu-sub menu-sub-accordion">
                      <div className="menu-item">
                        <a className="menu-link" href="apps/chat/private.html">
                          <span className="menu-bullet">
                            <span className="bullet bullet-dot" />
                          </span>
                          <span className="menu-title">Private Chat</span>
                        </a>
                      </div>
                      <div className="menu-item">
                        <a className="menu-link" href="apps/chat/group.html">
                          <span className="menu-bullet">
                            <span className="bullet bullet-dot" />
                          </span>
                          <span className="menu-title">Group Chat</span>
                        </a>
                      </div>
                      <div className="menu-item">
                        <a className="menu-link" href="apps/chat/drawer.html">
                          <span className="menu-bullet">
                            <span className="bullet bullet-dot" />
                          </span>
                          <span className="menu-title">Drawer Chat</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="menu-item">
                <a className="menu-link active" href="layout-builder.html">
                  <span className="menu-icon">
                    {/*begin::Svg Icon | path: icons/duotune/arrows/arr001.svg*/}
                    <span className="svg-icon svg-icon-5">
                      <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                        <path d="M14.4 11H3C2.4 11 2 11.4 2 12C2 12.6 2.4 13 3 13H14.4V11Z" fill="black" />
                        <path opacity="0.3" d="M14.4 20V4L21.7 11.3C22.1 11.7 22.1 12.3 21.7 12.7L14.4 20Z" fill="black" />
                      </svg>
                    </span>
                    {/*end::Svg Icon*/}
                  </span>
                  <span className="menu-title">Layout Builder</span>
                </a>
              </div>
              <div className="menu-item">
                <a className="menu-link" href="documentation/base/utilities.html">
                  <span className="menu-icon">
                    {/*begin::Svg Icon | path: icons/duotune/arrows/arr001.svg*/}
                    <span className="svg-icon svg-icon-5">
                      <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                        <path d="M14.4 11H3C2.4 11 2 11.4 2 12C2 12.6 2.4 13 3 13H14.4V11Z" fill="black" />
                        <path opacity="0.3" d="M14.4 20V4L21.7 11.3C22.1 11.7 22.1 12.3 21.7 12.7L14.4 20Z" fill="black" />
                      </svg>
                    </span>
                    {/*end::Svg Icon*/}
                  </span>
                  <span className="menu-title">Components</span>
                </a>
              </div>
              <div className="menu-item">
                <a className="menu-link" href="documentation/getting-started.html">
                  <span className="menu-icon">
                    {/*begin::Svg Icon | path: icons/duotune/arrows/arr001.svg*/}
                    <span className="svg-icon svg-icon-5">
                      <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                        <path d="M14.4 11H3C2.4 11 2 11.4 2 12C2 12.6 2.4 13 3 13H14.4V11Z" fill="black" />
                        <path opacity="0.3" d="M14.4 20V4L21.7 11.3C22.1 11.7 22.1 12.3 21.7 12.7L14.4 20Z" fill="black" />
                      </svg>
                    </span>
                    {/*end::Svg Icon*/}
                  </span>
                  <span className="menu-title">Documentation</span>
                </a>
              </div>
              <div className="menu-item">
                <a className="menu-link" href="documentation/getting-started/changelog.html">
                  <span className="menu-icon">
                    {/*begin::Svg Icon | path: icons/duotune/arrows/arr001.svg*/}
                    <span className="svg-icon svg-icon-5">
                      <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                        <path d="M14.4 11H3C2.4 11 2 11.4 2 12C2 12.6 2.4 13 3 13H14.4V11Z" fill="black" />
                        <path opacity="0.3" d="M14.4 20V4L21.7 11.3C22.1 11.7 22.1 12.3 21.7 12.7L14.4 20Z" fill="black" />
                      </svg>
                    </span>
                    {/*end::Svg Icon*/}
                  </span>
                  <span className="menu-title">Changelog v8.0.24</span>
                </a>
              </div>
            </div>
            {/*end::Menu*/}
          </div>
          {/*end::Aside Menu*/}
        </div>
    )
} export default LeftNavBar;