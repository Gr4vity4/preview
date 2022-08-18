import Link from "next/link";
import useTranslation from "next-translate/useTranslation";
import BNSRegister from "../public/footer/bns_registered.png";
import LineIcon from "../public/icons/line.png";
import FacebookIcon from "../public/icons/facebook.png";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="border-t" aria-labelledby="footer-heading" style={{ backgroundColor: "#f0f9fd" }}>
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="col-span-2 md:grid md:grid-cols-3 md:gap-8">
            <div>
              <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">{t("common:our_service")}</h3>
              <ul role="list" className="mt-4 space-y-4">
                <li>
                  <Link href="/home-hospital-service">
                    <a className="text-base text-gray-500 hover:text-gray-900">{t("common:home_hospital_transfer")}</a>
                  </Link>
                </li>
                <li>
                  <Link href="/other-activities-services">
                    <a className="text-base text-gray-500 hover:text-gray-900">{t("common:other_activity_service")}</a>
                  </Link>
                </li>
                <li>
                  <Link href="/terms-and-conditions">
                    <a className="text-base text-gray-500 hover:text-gray-900">{t("common:terms_and_conditions")}</a>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="mt-12 md:mt-0">
              <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">{t("common:become_a_partner")}</h3>
              <ul role="list" className="mt-4 space-y-4">
                <li>
                  <Link href="/partner/qualifications">
                    <a className="text-base text-gray-500 hover:text-gray-900">{t("common:qualification_partner")}</a>
                  </Link>
                </li>

                <li>
                  <Link href="/partner/terms-and-conditions">
                    <a className="text-base text-gray-500 hover:text-gray-900">{t("common:terms_and_conditions_partner")}</a>
                  </Link>
                </li>
                <li>
                  <a href="/files/service_provider_code_of_conduct.pdf" target="_blank" rel="noreferrer" className="text-base text-gray-500 hover:text-gray-900">
                    {t("common:service_provider_code_of_conduct")}
                  </a>
                </li>
                <li>
                  <a href="" target="_blank" rel="noreferrer" className="text-base text-gray-500 hover:text-gray-900">
                    {t("common:form_partner")}
                  </a>
                </li>
              </ul>
            </div>
            <div className="mt-12 md:mt-0">
              <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">{t("common:related_link")}</h3>
              <ul role="list" className="mt-4 space-y-4">
                <li>
                  <Link href="/">
                    <a className="text-base text-gray-500 hover:text-gray-900">{t("common:home")}</a>
                  </Link>
                </li>
                <li>
                  <Link href="/payment">
                    <a className="text-base text-gray-500 hover:text-gray-900">{t("common:payment")}</a>
                  </Link>
                </li>
                <li>
                  <Link href="/about-us">
                    <a className="text-base text-gray-500 hover:text-gray-900">{t("common:about_us")}</a>
                  </Link>
                </li>
                <li>
                  <Link href="/contact">
                    <a className="text-base text-gray-500 hover:text-gray-900">{t("common:contact_us")}</a>
                  </Link>
                </li>
                <li>
                  <Link href="/frequently-asked-questions">
                    <a className="text-base text-gray-500 hover:text-gray-900">{t("common:faq")}</a>
                  </Link>
                </li>
                <li>
                  <Link href="/privacy-policy">
                    <a className="text-base text-gray-500 hover:text-gray-900">{t("common:privacy_policy")}</a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-span-1 mt-8 xl:mt-0 text-gray-500">
            <div className="mb-3">
              <span className="text-gray-900 font-medium">{t("common:open")}</span>
              <div className="mt-4">
                <table>
                  <tbody>
                    <tr>
                      <td>{t("common:open_mon_fri")}</td>
                      <td>&ensp;{t("common:open_time")}</td>
                    </tr>
                    <tr>
                      <td>{t("common:open_sat")}</td>
                      <td>&ensp;{t("common:open_time")}</td>
                    </tr>
                    <tr>
                      <td>{t("common:open_sun")}</td>
                      <td>&ensp;{t("common:open_time")}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="mb-3">
              <p>{t("common:company_name")}</p>
              <span>
                <div dangerouslySetInnerHTML={{ __html: t("common:company_address_1") }} />
                {t("common:company_address_2")}
              </span>
            </div>
            <div>
              <a href="mailto: xxxxx@gmail.com">
                <p className="flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  <span>{t("common:company_email")}</span>
                </p>
              </a>
              <a href="tel: 080-54-8888-0">
                <p className="flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  <span>{t("common:company_phone")}</span>
                </p>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-200 pt-8 flex flex-col md:flex-row md:items-center md:justify-between gap-3 md:gap-10">
          <div className="flex flex-col md:flex-row md:items-center gap-3 md:gap-10">
            <div>
              <picture>
                <img src={BNSRegister.src} alt="bns_registered" className="w-40 h-20 object-contain" />
              </picture>
            </div>
            <a href="" target="_blank" rel="noreferrer">
              <div className="flex items-center pr-4 rounded-lg" style={{ backgroundColor: "#39cd00" }}>
                <picture>
                  <img src={LineIcon.src} alt="line" className="h-12 md:h-16 object-contain" />
                </picture>
                <span className="text-lg text-white">xxxx</span>
              </div>
            </a>
            <a href="xxxx" target="_blank" rel="noreferrer">
              <div className="flex items-center gap-2 pr-4 rounded-lg h-12 md:h-16" style={{ backgroundColor: "#4267b2" }}>
                <picture>
                  <img src={FacebookIcon.src} alt="facebook" className="h-10 w-10 object-contain" />
                </picture>
                <span className="text-lg text-white">xxxx</span>
              </div>
            </a>
          </div>
          <div>
            <h3 className="font-medium text-gray-900 tracking-wider uppercase">{t("common:subscribe")}</h3>
            {/* <p className="mt-4 text-base text-gray-500">The latest news, articles, and resources, sent to your inbox weekly.</p> */}
            <form className="mt-1 sm:flex sm:max-w-md">
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                type="email"
                name="email-address"
                id="email-address"
                autoComplete="email"
                required
                className="appearance-none min-w-0 w-full bg-white border border-gray-300 rounded-md shadow-sm py-2 px-4 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:placeholder-gray-400"
                placeholder="Enter your email"
              />
              <div className="mt-3 rounded-md sm:mt-0 sm:ml-3 sm:flex-shrink-0">
                <button
                  type="submit"
                  className="w-full bg-blue-600 flex items-center justify-center border border-transparent rounded-md py-2 px-4 text-base font-medium text-white hover:bg-blue-700 focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  {t("common:subscribe_button")}
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-200 pt-8 md:flex md:items-center md:justify-between">
          <p className="mt-8 text-base text-gray-400 md:mt-0 md:order-1">Copyright &copy; xxxx</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
