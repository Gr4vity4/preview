import React from "react";
import Head from "next/head";
import Banner from "../components/banner";
import BackgroundBanner from "../public/mockup/terms-and-conditions-min.jpeg";
import KbankIcon from "../public/icons/KBANK.svg";
import LineQRCode from "../public/images/line_qrcode.png";
import LineIcon from "../public/icons/line.png";
import PaymentQRCode from "../public/images/payment_qrcode.jpeg";
import useTranslation from "next-translate/useTranslation";

const PrivacyPolicy = () => {
  const { t } = useTranslation();

  return (
    <>
      <Head>
        <title>Preview - {t("privacy-policy:breadcrumb")}</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Banner title={t("privacy-policy:breadcrumb")} breadcrumb={t("privacy-policy:breadcrumb")} background={BackgroundBanner.src} no={`${t("common:book_number")} WC/PDPA/PN/65-001`} />
      <div className="max-w-7xl mx-auto flex flex-col gap-10 pt-10 pb-20 px-10">
        <div>
          <div className="text-center">
            <span className="text-xl md:text-2xl font-medium underline">{t("privacy-policy:breadcrumb")}</span>
          </div>
          <div className="mt-8 font-sarabun">
            <span className="pl-10"></span>
            <b>{t("common:company_full_name")}</b> {t("privacy-policy:p")}
          </div>
          <div className="mt-8 font-sarabun">
            <span className="pl-10"></span>
            {t("privacy-policy:p2")}
          </div>
          <div className="mt-8 font-sarabun">
            <p className="font-bold text-lg mb-2">{t("privacy-policy:category_1")}</p>
            <ol className="list-decimal">
              <li>
                <span>{t("privacy-policy:ol_li1_1")}</span>
              </li>
              <li>
                <span>{t("privacy-policy:ol_li1_2")}</span>
              </li>
              <li>
                <span>{t("privacy-policy:ol_li1_3")}</span>
              </li>
              <li>
                <span>{t("privacy-policy:ol_li1_4")}</span>
              </li>
              <li>
                <span>{t("privacy-policy:ol_li1_5")}</span>
              </li>
              <li>
                <span>{t("privacy-policy:ol_li1_6")}</span>
                <ul>
                  <li className="flex gap-2">
                    <span className="first-letter:font-bold">{t("common:a")}</span>
                    <div>{t("privacy-policy:ol_li1_6_1")}</div>
                  </li>
                  <li className="flex gap-2">
                    <span className="first-letter:font-bold">{t("common:b")}</span>
                    <div>{t("privacy-policy:ol_li1_6_2")}</div>
                  </li>
                </ul>
              </li>
            </ol>
          </div>
          <div className="mt-8 font-sarabun">
            <p className="font-bold text-lg mb-2">{t("privacy-policy:category_2")}</p>
            <ol className="list-decimal">
              <li>
                <span>{t("privacy-policy:ol_li2_1")}</span>
              </li>
              <li>
                <span>{t("privacy-policy:ol_li2_2")}</span>
              </li>
              <li>
                <span>{t("privacy-policy:ol_li2_3")}</span>
              </li>
              <li>
                <span>{t("privacy-policy:ol_li2_4")}</span>
              </li>
              <li>
                <span>{t("privacy-policy:ol_li2_5")}</span>
              </li>
            </ol>
          </div>
          <div className="mt-8 font-sarabun">
            <p className="font-bold text-lg mb-2">{t("privacy-policy:category_3")}</p>
            <ol className="list-decimal">
              <li>
                <span>{t("privacy-policy:ol_li3_1")}</span>
                <ul>
                  <li className="flex gap-2">
                    <span className="first-letter:font-bold">{t("common:a")}</span>
                    <div>{t("privacy-policy:ol_li3_1_1")}</div>
                  </li>
                  <li className="flex gap-2">
                    <span className="first-letter:font-bold">{t("common:b")}</span>
                    <div>{t("privacy-policy:ol_li3_1_2")}</div>
                  </li>
                  <li className="flex gap-2">
                    <span className="first-letter:font-bold">{t("common:c")}</span>
                    <div>{t("privacy-policy:ol_li3_1_3")}</div>
                  </li>
                  <li className="flex gap-2">
                    <span className="first-letter:font-bold">{t("common:d")}</span>
                    <div>{t("privacy-policy:ol_li3_1_4")}</div>
                  </li>
                  <li className="flex gap-2">
                    <span className="first-letter:font-bold">{t("common:e")}</span>
                    <div>{t("privacy-policy:ol_li3_1_5")}</div>
                  </li>
                  <li className="flex gap-2">
                    <span className="first-letter:font-bold">{t("common:f")}</span>
                    <div>{t("privacy-policy:ol_li3_1_6")}</div>
                  </li>
                  <li className="flex gap-2">
                    <span className="first-letter:font-bold">{t("common:g")}</span>
                    <div>{t("privacy-policy:ol_li3_1_7")}</div>
                  </li>
                </ul>
              </li>
              <li>
                <span>{t("privacy-policy:ol_li3_2")}</span>
              </li>
              <li>
                <span>{t("privacy-policy:ol_li3_3")}</span>
              </li>
              <li>
                <span>{t("privacy-policy:ol_li3_4")}</span>
              </li>
            </ol>
          </div>
          <div className="mt-8 font-sarabun">
            <p className="font-bold text-lg mb-2">{t("privacy-policy:category_4")}</p>
            <ol className="list-decimal">
              <li>
                <span>{t("privacy-policy:ol_li4_1")}</span>
                <ul>
                  <li className="flex gap-2">
                    <span className="first-letter:font-bold">{t("common:a")}</span>
                    <div>{t("privacy-policy:ol_li4_1_1")}</div>
                  </li>
                  <li className="flex gap-2">
                    <span className="first-letter:font-bold">{t("common:b")}</span>
                    <div>{t("privacy-policy:ol_li4_1_2")}</div>
                  </li>
                  <li className="flex gap-2">
                    <span className="first-letter:font-bold">{t("common:c")}</span>
                    <div>{t("privacy-policy:ol_li4_1_3")}</div>
                  </li>
                  <li className="flex gap-2">
                    <span className="first-letter:font-bold">{t("common:d")}</span>
                    <div>{t("privacy-policy:ol_li4_1_4")}</div>
                  </li>
                  <li className="flex gap-2">
                    <span className="first-letter:font-bold">{t("common:e")}</span>
                    <div>{t("privacy-policy:ol_li4_1_5")}</div>
                  </li>
                </ul>
              </li>
              <li>
                <span>{t("privacy-policy:ol_li4_2")}</span>
              </li>
              <li>
                <span>{t("privacy-policy:ol_li4_3")}</span>
              </li>
            </ol>
          </div>
          <div className="mt-8 font-sarabun">
            <p className="font-bold text-lg mb-2">{t("privacy-policy:category_5")}</p>
            <ol className="list-decimal">
              <li>
                <span>{t("privacy-policy:ol_li5_1")}</span>
              </li>
              <li>
                <span>{t("privacy-policy:ol_li5_2")}</span>
              </li>
              <li>
                <span>{t("privacy-policy:ol_li5_3")}</span>
              </li>
              <li>
                <span>{t("privacy-policy:ol_li5_4")}</span>
              </li>
              <li>
                <span>{t("privacy-policy:ol_li5_5")}</span>
              </li>
            </ol>
          </div>
          <div className="mt-8 font-sarabun">
            <p className="font-bold text-lg mb-2">{t("privacy-policy:category_6")}</p>
            <ol className="list-decimal">
              <li>
                <span>{t("privacy-policy:ol_li6_1")}</span>
              </li>
              <li>
                <span>{t("privacy-policy:ol_li6_2")}</span>
              </li>
              <li>
                <span>{t("privacy-policy:ol_li6_3")}</span>
              </li>
              <li>
                <span>{t("privacy-policy:ol_li6_4")}</span>
              </li>
              <li>
                <span>{t("privacy-policy:ol_li6_5")}</span>
              </li>
            </ol>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          ol {
            list-style-type: none;
            counter-reset: item;
            margin: 0;
            padding: 0;
          }

          ol > li {
            display: table;
            counter-increment: item;
            margin-bottom: 0.6em;
          }

          ol > li:before {
            content: counters(item, ".") ". ";
            display: table-cell;
            padding-right: 0.6em;
          }

          li ol > li {
            margin: 0;
          }

          li ol > li:before {
            content: counters(item, ".") " ";
          }

          ul > li {
            margin-bottom: 0.3em;
          }

          ul > li:before {
            padding-left: 0.6em !important;
          }
        `}
      </style>
    </>
  );
};

export default PrivacyPolicy;
