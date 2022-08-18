import React from "react";
import Head from "next/head";
import Banner from "../../components/banner";
import useTranslation from "next-translate/useTranslation";

const PartnerTermsAndConditions = () => {
  const { t } = useTranslation();
  const qualifications: string[] = [
    t("partner-terms-and-conditions:p1"),
    t("partner-terms-and-conditions:p2"),
    t("partner-terms-and-conditions:p3"),
    t("partner-terms-and-conditions:p4"),
    t("partner-terms-and-conditions:p5"),
    t("partner-terms-and-conditions:p6"),
    t("partner-terms-and-conditions:p7"),
    t("partner-terms-and-conditions:p8"),
    t("partner-terms-and-conditions:p9"),
    t("partner-terms-and-conditions:p10"),
    t("partner-terms-and-conditions:p11"),
  ];

  return (
    <>
      <Head>
        <title>Preview - {t("partner-terms-and-conditions:breadcrumb")}</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Banner title={t("partner-terms-and-conditions:breadcrumb")} breadcrumb={t("partner-terms-and-conditions:breadcrumb")} background="" no={`${t("common:book_number")} WC/CR/PN/65-001`} />
      <div className="max-w-7xl mx-auto flex flex-col gap-10 pt-10 pb-20 px-10">
        <div>
          <div className="text-center">
            <span className="text-xl md:text-2xl font-medium underline">{t("partner-terms-and-conditions:breadcrumb")}</span>
          </div>
          <div className="mt-8">
            <ol className="list-decimal">
              {qualifications.map((title, index: number) => (
                <li className="font-sarabun" key={`terms-conditions-${index}`}>
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

export default PartnerTermsAndConditions;
