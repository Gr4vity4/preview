import Link from "next/link";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import useTranslation from "next-translate/useTranslation";
import Logo from "../public/logo.png";
import ThaiIcon from "../public/icons/TH.svg";
import EnglishIcon from "../public/icons/US.svg";

type Props = {
  toggleIsOpen: () => void;
};

const NavbarMobile = ({ toggleIsOpen }: Props) => {
  const { events, locale } = useRouter();
  const { t } = useTranslation();
  const [isOpenMobileSubService, setIsOpenMobileSubService] = useState(false);
  const [isOpenMobileSubPartner, setIsOpenMobileSubPartner] = useState(false);

  return (
    <div className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden z-50">
      <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
        <div className="pt-5 pb-6 px-5">
          <div className="flex items-center justify-between">
            <div>
              <Link href="/">
                <a className="cursor-pointer">
                  <picture>
                    <img className="h-10 w-auto sm:h-12" src={Logo.src} alt="logo" />
                  </picture>
                </a>
              </Link>
            </div>
            <div className="-mr-2">
              <button
                type="button"
                className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
                onClick={() => toggleIsOpen()}
              >
                <span className="sr-only">Close menu</span>
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
          <div className="mt-6">
            <nav className="grid gap-y-8">
              <Link href="/">
                <a className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                    />
                  </svg>
                  <span className="ml-3 text-base font-medium text-gray-900"> {t("common:home")} </span>
                </a>
              </Link>

              <a className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50" onClick={() => setIsOpenMobileSubService(!isOpenMobileSubService)}>
                <svg className="flex-shrink-0 h-6 w-6 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"
                  />
                </svg>
                <span className="ml-3 text-base font-medium text-gray-900"> {t("common:our_service")} </span>
                <svg className="text-gray-400 ml-2 h-5 w-5 group-hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </a>

              {isOpenMobileSubService && (
                <>
                  <Link href="/home-hospital-transfer">
                    <a className="-m-3 p-3 pl-10 flex items-center rounded-md hover:bg-gray-50">
                      <span className="ml-3 text-base font-medium text-gray-900"> {t("common:home_hospital_transfer")} </span>
                    </a>
                  </Link>
                  <Link href="/other-activities-services">
                    <a className="-m-3 p-3 pl-10 flex items-center rounded-md hover:bg-gray-50">
                      <span className="ml-3 text-base font-medium text-gray-900"> {t("common:other_activity_service")} </span>
                    </a>
                  </Link>
                  <Link href="/terms-and-conditions">
                    <a className="-m-3 p-3 pl-10 flex items-center rounded-md hover:bg-gray-50">
                      <span className="ml-3 text-base font-medium text-gray-900"> {t("common:terms_and_conditions")} </span>
                    </a>
                  </Link>
                </>
              )}

              <Link href="/payment">
                <a className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                  </svg>
                  <span className="ml-3 text-base font-medium text-gray-900"> {t("common:payment")} </span>
                </a>
              </Link>

              <a className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50" onClick={() => setIsOpenMobileSubPartner(!isOpenMobileSubPartner)}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                <span className="ml-3 text-base font-medium text-gray-900"> {t("common:become_a_partner")} </span>
                <svg className="text-gray-400 ml-2 h-5 w-5 group-hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </a>

              {isOpenMobileSubPartner && (
                <>
                  <Link href="/partner/qualifications">
                    <a className="-m-3 p-3 pl-10 flex items-center rounded-md hover:bg-gray-50">
                      <span className="ml-3 text-base font-medium text-gray-900"> {t("common:qualification_partner")} </span>
                    </a>
                  </Link>
                  <Link href="/partner/terms-and-conditions">
                    <a className="-m-3 p-3 pl-10 flex items-center rounded-md hover:bg-gray-50">
                      <span className="ml-3 text-base font-medium text-gray-900"> {t("common:terms_and_conditions_partner")} </span>
                    </a>
                  </Link>
                  <Link href="/partner/service-provider-code-of-conduct">
                    <a className="-m-3 p-3 pl-10 flex items-center rounded-md hover:bg-gray-50">
                      <span className="ml-3 text-base font-medium text-gray-900"> {t("common:service_provider_code_of_conduct")} </span>
                    </a>
                  </Link>
                  <Link href="/partner/form">
                    <a className="-m-3 p-3 pl-10 flex items-center rounded-md hover:bg-gray-50">
                      <span className="ml-3 text-base font-medium text-gray-900"> {t("common:form_partner")} </span>
                    </a>
                  </Link>
                </>
              )}

              <Link href="/about-us">
                <a className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                    />
                  </svg>
                  <span className="ml-3 text-base font-medium text-gray-900"> {t("common:about_us")} </span>
                </a>
              </Link>

              <Link href="/contact-us">
                <a className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                  </svg>
                  <span className="ml-3 text-base font-medium text-gray-900"> {t("common:contact_us")} </span>
                </a>
              </Link>

              <Link href="/frequently-asked-questions">
                <a className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
                    />
                  </svg>
                  <span className="ml-3 text-base font-medium text-gray-900"> {t("common:faq")} </span>
                </a>
              </Link>
            </nav>
          </div>
        </div>
        <div className="py-6 px-5 space-y-6">
          <div className="grid grid-cols-2 gap-y-4 gap-x-8">
            <Link href="/" locale="th">
              <a
                className={`inline-flex items-center justify-center gap-2 whitespace-nowrap text-base font-medium cursor-pointer ${
                  locale === "th" ? "px-4 py-2 text-white" : "text-gray-500 hover:text-gray-900"
                }`}
              >
                <picture>
                  <img src={ThaiIcon.src} alt="th" className="w-6 h-6" />
                </picture>
              </a>
            </Link>
            <Link href="/" locale="en">
              <a
                className={`ml-8 inline-flex items-center justify-center gap-2 whitespace-nowrap text-base font-medium cursor-pointer ${
                  locale === "en" ? "px-4 py-2 text-white" : "text-gray-500 hover:text-gray-900"
                }`}
              >
                <picture>
                  <img src={EnglishIcon.src} alt="en" className="w-6 h-6" />
                </picture>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavbarMobile;
