import React from "react";
import Head from "next/head";
import Banner from "../components/banner";
import KbankIcon from "../public/icons/KBANK.svg";
import LineQRCode from "../public/images/line_qrcode.png";
import LineIcon from "../public/icons/line.png";
import PaymentQRCode from "../public/images/payment_qrcode.jpeg";
import useTranslation from "next-translate/useTranslation";

const Payment = () => {
  const { t } = useTranslation();

  return (
    <>
      <Head>
        <title>Preview - {t("payment:breadcrumb")}</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Banner title={t("payment:breadcrumb")} breadcrumb={t("payment:breadcrumb")} background="" />
      <div className="max-w-7xl mx-auto flex flex-col gap-10 px-2">
        <div className="relative bg-white">
          <div className="absolute inset-0" aria-hidden="true">
            <div className="absolute inset-y-0 right-0 w-1/2 bg-white"></div>
          </div>
          <div className="relative max-w-7xl mx-auto lg:px-8 lg:grid lg:grid-cols-2">
            <div className="bg-white py-16 px-4 sm:py-24 sm:px-6 lg:px-0 lg:pr-8">
              <div className="max-w-lg mx-auto lg:mx-0">
                {/* <h2 className="text-base font-semibold tracking-wide text-blue-600 uppercase">Full-featured</h2> */}
                <p className="mt-2 text-2xl font-extrabold text-gray-900 sm:text-3xl">{t("payment:breadcrumb")}</p>
                <dl className="mt-12 space-y-10">
                  <div className="relative">
                    <dt>
                      <div className="absolute h-12 w-12 flex items-center justify-center rounded-md">
                        <picture>
                          <img src={KbankIcon.src} alt="kbank" className="w-12 h-12 object-contain" />
                        </picture>
                      </div>
                      <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{t("common:company_name")}</p>
                    </dt>
                    <dd className="mt-2 ml-16 text-base text-red-500">
                      <p>
                        {t("payment:bank_name")} ({t("payment:bank_branch")})
                      </p>
                      <p>{t("payment:bank_account_number")}</p>
                    </dd>
                  </div>

                  <div className=" bg-white pb-16 sm:py-24 sm:px-6 bg-none px-0 lg:hidden">
                    <div className="w-full mx-auto space-y-8 lg:mx-0 flex justify-center">
                      <picture>
                        <img src={PaymentQRCode.src} alt="payment" className="w-2/3 mx-auto object-contain border rounded-lg" />
                      </picture>
                    </div>
                  </div>
                </dl>
                <p className="md:mt-12 text-2xl font-extrabold text-gray-900 sm:text-3xl">{t("payment:proof_of_payment")}</p>
                <dl className="mt-10 space-y-10">
                  <div className="relative">
                    <dt>
                      <div className="absolute h-12 w-12 flex items-center justify-center rounded-md">{/* <img src="icons/KBANK.svg" alt="kbank" className="w-12 h-12 object-contain" /> */}</div>
                      <p className="text-lg leading-6 font-medium text-gray-900">{t("payment:notify")}</p>
                    </dt>
                    <dd className="mt-2 text-base text-red-500">
                      <p>Tel : {t("common:company_phone")}</p>
                    </dd>
                  </div>
                </dl>
                <dl className="mt-2 space-y-10">
                  <div className="relative">
                    <dt>
                      <div className="absolute h-12 w-12 flex items-center justify-center rounded-md">{/* <img src="icons/KBANK.svg" alt="kbank" className="w-12 h-12 object-contain" /> */}</div>
                      <p className="text-lg leading-6 font-medium text-gray-900">{t("payment:notify_line")}</p>
                    </dt>
                    <dd className="mt-2 text-base text-red-500">
                      <div className="flex gap-2">
                        <picture>
                          <img src={LineQRCode.src} alt="line" className="w-20 h-20 object-contain" />
                        </picture>
                        <div className="flex gap-2 items-center pr-4 rounded-lg">
                          <a href="" target="_blank" rel="noreferrer">
                            <picture>
                              <img src={LineIcon.src} alt="line" className="h-12 md:h-16 object-contain" />
                            </picture>
                          </a>
                          <span className="text-lg text-green-500">xxxx</span>
                        </div>
                      </div>
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
            <div className="hidden bg-white pb-16 px-4 sm:py-24 sm:px-6 lg:bg-none lg:px-0 lg:pl-8 lg:flex lg:items-center lg:justify-end">
              <div className="max-w-lg mx-auto w-full space-y-8 lg:mx-0">
                <picture>
                  <img src={PaymentQRCode.src} alt="payment" className="w-2/3 h-2/3 object-contain border rounded-lg" />
                </picture>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Payment;
