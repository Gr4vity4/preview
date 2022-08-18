import React from "react";
import Head from "next/head";
import Banner from "../../components/banner";
import useTranslation from "next-translate/useTranslation";

const ServiceProviderCodeofConduct = () => {
  const { t } = useTranslation();

  return (
    <>
      <Head>
        <title>Preview - {t("partner-service-provider-code-of-conduct:breadcrumb")}</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Banner
        title={t("partner-service-provider-code-of-conduct:breadcrumb")}
        breadcrumb={t("partner-service-provider-code-of-conduct:breadcrumb")}
        background=""
        no={`${t("common:book_number")} xxxx`}
      />
      <div className="max-w-7xl mx-auto flex flex-col gap-10 pt-10 pb-20 px-10">
        <div>
          <div className="text-center">
            <span className="text-xl md:text-2xl font-medium underline">{t("partner-service-provider-code-of-conduct:breadcrumb")}</span>
          </div>
          <div className="mt-8 font-sarabun">
            <span className="pl-10"></span>
            <b>{t("common:company_full_name")}</b> {t("partner-service-provider-code-of-conduct:p")}
          </div>
          <div className="mt-8 font-sarabun">
            <ol className="list-decimal font-bold">
              <li>
                <span>{t("partner-service-provider-code-of-conduct:ol_li1")}</span>
                <ol className="font-normal">
                  <li>{t("partner-service-provider-code-of-conduct:ol_li1_1")}</li>
                  <li>{t("partner-service-provider-code-of-conduct:ol_li1_2")}</li>
                  <li>{t("partner-service-provider-code-of-conduct:ol_li1_3")}</li>
                  <li>{t("partner-service-provider-code-of-conduct:ol_li1_4")}</li>
                </ol>
              </li>
              <li>
                <span>{t("partner-service-provider-code-of-conduct:ol_li2")}</span>
                <ol className="font-normal">
                  <li>{t("partner-service-provider-code-of-conduct:ol_li2_1")}</li>
                  <li>{t("partner-service-provider-code-of-conduct:ol_li2_2")}</li>
                  <li>{t("partner-service-provider-code-of-conduct:ol_li2_3")}</li>
                  <li>{t("partner-service-provider-code-of-conduct:ol_li2_4")}</li>
                </ol>
              </li>
              <li>
                <span>{t("partner-service-provider-code-of-conduct:ol_li3")}</span>
                <div className="font-normal">
                  <span className="pl-10"></span>
                  {t("partner-service-provider-code-of-conduct:ol_li3_p")}
                </div>
              </li>
              <li>
                <span>{t("partner-service-provider-code-of-conduct:ol_li4")}</span>
                <div className="font-normal">
                  <span className="pl-10"></span>
                  {t("partner-service-provider-code-of-conduct:ol_li4_p")}
                </div>
              </li>
              <li>
                <span>{t("partner-service-provider-code-of-conduct:ol_li5")}</span>
                <ol className="font-normal">
                  <li>{t("partner-service-provider-code-of-conduct:ol_li5_1")}</li>
                  <li>{t("partner-service-provider-code-of-conduct:ol_li5_2")}</li>
                </ol>
              </li>
              <li>
                <span>{t("partner-service-provider-code-of-conduct:ol_li6")}</span>
                <div className="font-normal">
                  <span className="pl-10"></span>
                  {t("partner-service-provider-code-of-conduct:ol_li6_p")}
                </div>
              </li>
              <li>
                <span>{t("partner-service-provider-code-of-conduct:ol_li7")}</span>
                <div className="font-normal">
                  <span className="pl-10"></span>
                  {t("partner-service-provider-code-of-conduct:ol_li7_p")}
                </div>
              </li>
              <li>
                <span>{t("partner-service-provider-code-of-conduct:ol_li8")}</span>
                <div className="font-normal">
                  <p>
                    <span className="pl-10"></span>
                    {t("partner-service-provider-code-of-conduct:ol_li8_1")}
                  </p>
                  <p>
                    <span className="pl-10"></span>
                    {t("partner-service-provider-code-of-conduct:ol_li8_2")}
                  </p>
                </div>
              </li>
              <li>
                <span>{t("partner-service-provider-code-of-conduct:ol_li9")}</span>
                <ol className="font-normal">
                  <li>{t("partner-service-provider-code-of-conduct:ol_li9_1")}</li>
                  <li>{t("partner-service-provider-code-of-conduct:ol_li9_2")}</li>
                </ol>
              </li>
              <li>
                <span>{t("partner-service-provider-code-of-conduct:ol_li10")}</span>
                <div className="font-normal">
                  <span className="pl-10"></span>
                  {t("partner-service-provider-code-of-conduct:ol_li10_p")}
                </div>
              </li>
              <li>
                <span>{t("partner-service-provider-code-of-conduct:ol_li11")}</span>
                <div className="font-normal">
                  <span className="pl-10"></span>
                  {t("partner-service-provider-code-of-conduct:ol_li11_p")}
                </div>
              </li>
              <li>
                <span>{t("partner-service-provider-code-of-conduct:ol_li12")}</span>
                <div className="font-normal">
                  <span className="pl-10"></span>
                  {t("partner-service-provider-code-of-conduct:ol_li12_p")}
                </div>
              </li>
              <li>
                <span>{t("partner-service-provider-code-of-conduct:ol_li13")}</span>
                <div className="font-normal">
                  <span className="pl-10"></span>
                  {t("partner-service-provider-code-of-conduct:ol_li13_p")}
                </div>
              </li>
              <li>
                <span>{t("partner-service-provider-code-of-conduct:ol_li14")}</span>
                <div className="font-normal">
                  <span className="pl-10"></span>
                  {t("partner-service-provider-code-of-conduct:ol_li14_p")}
                </div>
              </li>
              <li>
                <span>{t("partner-service-provider-code-of-conduct:ol_li15")}</span>
                <div className="font-normal">
                  <span className="pl-10"></span>
                  {t("partner-service-provider-code-of-conduct:ol_li15_p")}
                </div>
              </li>
              <li>
                <span>{t("partner-service-provider-code-of-conduct:ol_li16")}</span>
                <div className="font-normal">
                  <span className="pl-10"></span>
                  {t("partner-service-provider-code-of-conduct:ol_li16_p")}
                </div>
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
        `}
      </style>
    </>
  );
};

export default ServiceProviderCodeofConduct;
