import React from "react";
import Head from "next/head";
import Banner from "../../components/banner";
import useTranslation from "next-translate/useTranslation";

const PartnerQualifications = () => {
  const { t } = useTranslation();

  const qualifications: string[] = [
    t("partner-qualifications:p1"),
    t("partner-qualifications:p2"),
    t("partner-qualifications:p3"),
    t("partner-qualifications:p4"),
    t("partner-qualifications:p5"),
    t("partner-qualifications:p6"),
    t("partner-qualifications:p7"),
    t("partner-qualifications:p8"),
    t("partner-qualifications:p9"),
    t("partner-qualifications:p10"),
    t("partner-qualifications:p11"),
    t("partner-qualifications:p12"),
    t("partner-qualifications:p13"),
    t("partner-qualifications:p14"),
    t("partner-qualifications:p15"),
    t("partner-qualifications:p16"),
    t("partner-qualifications:p17"),
    t("partner-qualifications:p18"),
    t("partner-qualifications:p19"),
    t("partner-qualifications:p20"),
    t("partner-qualifications:p21"),
    t("partner-qualifications:p22"),
    t("partner-qualifications:p23"),
  ];

  return (
    <>
      <Head>
        <title>Preview - {t("partner-qualifications:breadcrumb")}</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Banner title={t("partner-qualifications:breadcrumb")} breadcrumb={t("partner-qualifications:breadcrumb")} background="" no={`${t("common:book_number")} WC/QU/PN/65-001`} />
      <div className="max-w-7xl mx-auto flex flex-col gap-10 pt-10 pb-20 px-10">
        <div>
          <div className="text-center">
            <span className="text-xl md:text-2xl font-medium underline">{t("partner-qualifications:breadcrumb")}</span>
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

export default PartnerQualifications;
