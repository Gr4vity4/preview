import Link from "next/link";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import useTranslation from "next-translate/useTranslation";
import NavbarMobile from "./navbar-mobile";
import Logo from "../public/logo.png";
import ThaiIcon from "../public/icons/TH.svg";
import EnglishIcon from "../public/icons/GB.svg";

const Navbar = () => {
  const { events, locale } = useRouter();
  const { t } = useTranslation();
  const [isOpenSubService, setIsOpenSubService] = useState(false);
  const [isOpenSubPartner, setIsOpenSubPartner] = useState(false);
  const [isOpenMobile, setIsOpenMobile] = useState(false);

  const closeSubMenu = () => {
    setIsOpenSubService(false);
    setIsOpenSubPartner(false);
  };

  const closeModal = () => {
    setIsOpenMobile(false);
  };

  useEffect(() => {
    // subscribe to next/router event
    events.on("routeChangeStart", closeModal);
    return () => {
      // unsubscribe to event on unmount to prevent memory leak
      events.off("routeChangeStart", closeModal);
    };
  }, [events, closeModal]);

  return (
    <div className="sticky top-0 z-50" onMouseLeave={closeSubMenu}>
      <div className="relative border border-orange-100 shadow" style={{ backgroundColor: "#f0f9fd" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex justify-between items-center py-4 sm:py-3 md:justify-start md:space-x-6">
            <div className="flex justify-start">
              <div className="bg-white rounded-full px-3 py-1">
                <Link href="/">
                  <a className="cursor-pointer">
                    <picture>
                      <img className="h-12 w-auto sm:h-12 object-contain" src={Logo.src} alt="logo" />
                    </picture>
                  </a>
                </Link>
              </div>
            </div>
            <div className="-mr-2 -my-2 md:hidden">
              <button
                type="button"
                className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover: hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
                aria-expanded="false"
                onClick={() => setIsOpenMobile(!isOpenMobile)}
              >
                <span className="sr-only">Open menu</span>
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
            <nav className="hidden md:flex space-x-10">
              <Link href="/">
                <a className="text-base font-medium  hover:text-gray-900" onMouseOver={closeSubMenu}>
                  {t("common:home")}
                </a>
              </Link>

              <div className="relative">
                <button
                  type="button"
                  className=" group  rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none"
                  aria-expanded="false"
                  onMouseOver={() => setIsOpenSubService(true)}
                >
                  <span>{t("common:our_service")}</span>
                  <svg className="text-gray-400 ml-2 h-5 w-5 group-hover:" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>

                {isOpenSubService && (
                  <div className="absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-xs sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2">
                    <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                      <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                        <Link href="/home-hospital-transfer">
                          <a className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50">
                            <svg
                              className="flex-shrink-0 h-6 w-6 text-blue-600"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth="2"
                              stroke="currentColor"
                              aria-hidden="true"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"
                              />
                            </svg>
                            <div className="ml-4">
                              <p className="text-base font-medium text-gray-900">{t("common:home_hospital_transfer")}</p>
                            </div>
                          </a>
                        </Link>
                        <Link href="/other-activities-services">
                          <a className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50">
                            <svg
                              className="flex-shrink-0 h-6 w-6 text-blue-600"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth="2"
                              stroke="currentColor"
                              aria-hidden="true"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"
                              />
                            </svg>
                            <div className="ml-4">
                              <p className="text-base font-medium text-gray-900">{t("common:other_activity_service")}</p>
                            </div>
                          </a>
                        </Link>
                        <Link href="/terms-and-conditions">
                          <a className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                            </svg>
                            <div className="ml-4">
                              <p className="text-base font-medium text-gray-900">{t("common:terms_and_conditions")}</p>
                            </div>
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <Link href="/payment">
                <a className="text-base font-medium  hover:text-gray-900" onMouseOver={closeSubMenu}>
                  {t("common:payment")}
                </a>
              </Link>

              <div className="relative">
                <button
                  type="button"
                  className=" group  rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none"
                  aria-expanded="false"
                  onMouseOver={() => setIsOpenSubPartner(true)}
                >
                  <span>{t("common:become_a_partner")}</span>
                  <svg className="text-gray-400 ml-2 h-5 w-5 group-hover:" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>

                {isOpenSubPartner && (
                  <div className="absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-sm sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2">
                    <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                      <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                        <Link href="/partner/qualifications">
                          <a className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                            </svg>
                            <div className="ml-4">
                              <p className="text-base font-medium text-gray-900">{t("common:qualification_partner")}</p>
                            </div>
                          </a>
                        </Link>
                        <Link href="/partner/terms-and-conditions">
                          <a className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                            </svg>
                            <div className="ml-4">
                              <p className="text-base font-medium text-gray-900">{t("common:terms_and_conditions_partner")}</p>
                            </div>
                          </a>
                        </Link>
                        <Link href="/partner/service-provider-code-of-conduct">
                          <a className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                            </svg>
                            <div className="ml-4">
                              <p className="text-base font-medium text-gray-900">{t("common:service_provider_code_of_conduct")}</p>
                            </div>
                          </a>
                        </Link>
                        <Link href="/partner/form">
                          <a className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                              />
                            </svg>
                            <div className="ml-4">
                              <p className="text-base font-medium text-gray-900">{t("common:form_partner")}</p>
                            </div>
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <Link href="/about-us">
                <a className="text-base font-medium  hover:text-gray-900" onMouseOver={closeSubMenu}>
                  {t("common:about_us")}
                </a>
              </Link>
              <Link href="/contact-us">
                <a className="text-base font-medium  hover:text-gray-900" onMouseOver={closeSubMenu}>
                  {t("common:contact_us")}
                </a>
              </Link>
              <Link href="/frequently-asked-questions">
                <a className="text-base font-medium  hover:text-gray-900" onMouseOver={closeSubMenu}>
                  {t("common:faq")}
                </a>
              </Link>
            </nav>
            <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
              <Link href="/" locale="th">
                <a className={`whitespace-nowrap text-base font-medium cursor-pointer ${locale === "th" ? "inline-flex items-center justify-center px-4 py-2 text-white" : " hover:text-gray-900"}`}>
                  <picture>
                    <img src={ThaiIcon.src} alt="th" className="w-5 h-5" />
                  </picture>
                </a>
              </Link>
              <Link href="/" locale="en">
                <a
                  className={`ml-8 whitespace-nowrap text-base font-medium cursor-pointer ${locale === "en" ? "inline-flex items-center justify-center px-4 py-2 text-white" : " hover:text-gray-900"}`}
                >
                  <picture>
                    <img src={EnglishIcon.src} alt="en" className="w-5 h-5" />
                  </picture>
                </a>
              </Link>
            </div>
          </div>
        </div>

        {isOpenMobile && <NavbarMobile toggleIsOpen={() => setIsOpenMobile(!isOpenMobile)} />}
      </div>
    </div>
  );
};

export default Navbar;
