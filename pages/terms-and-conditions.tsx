import React from "react";
import Head from "next/head";
import Banner from "../components/banner";
import useTranslation from "next-translate/useTranslation";

const Terms = () => {
  const { t } = useTranslation();

  const termsAndConditions: string[] = [
    t("terms-and-conditions:section1_p1"),
    t("terms-and-conditions:section1_p2"),
    t("terms-and-conditions:section1_p3"),
    t("terms-and-conditions:section1_p4"),
    t("terms-and-conditions:section1_p5"),
    t("terms-and-conditions:section1_p6"),
    t("terms-and-conditions:section1_p7"),
    t("terms-and-conditions:section1_p8"),
  ];

  const termsAndConditionsOfService: string[] = [
    t("terms-and-conditions:section2_p1"),
    t("terms-and-conditions:section2_p2"),
    t("terms-and-conditions:section2_p3"),
    t("terms-and-conditions:section2_p4"),
    t("terms-and-conditions:section2_p5"),
    t("terms-and-conditions:section2_p6"),
  ];

  return (
    <>
      <Head>
        <title>Preview - {t("terms-and-conditions:breadcrumb")}</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Banner title={t("terms-and-conditions:breadcrumb")} breadcrumb={t("terms-and-conditions:breadcrumb")} background="" />
      <div className="max-w-7xl mx-auto flex flex-col gap-10 pt-10 pb-20 px-10">
        <div>
          <div className="text-center">
            <span className="text-xl md:text-2xl font-medium underline">{t("terms-and-conditions:section1_title")}</span>
          </div>
          <div className="mt-8">
            <ol className="list-decimal">
              {termsAndConditions.map((title, index: number) => (
                <li className="font-sarabun" key={`terms-conditions-${index}`}>
                  {title}
                </li>
              ))}
            </ol>
          </div>
        </div>
        <div>
          <div className="text-center">
            <div className="text-xl md:text-2xl font-medium underline flex flex-col md:flex-row justify-center items-center gap-2">
              <span>{t("terms-and-conditions:section2_title")}</span>
              <span>({t("terms-and-conditions:section2_subtitle")})</span>
            </div>
          </div>
          <div className="mt-8">
            <ol className="list-decimal">
              {termsAndConditionsOfService.map((title, index: number) => (
                <li className="font-sarabun" key={`terms-conditions-service-${index}`}>
                  {title}
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </>
  );
};

export default Terms;
