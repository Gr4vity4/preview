import React from "react";
import Head from "next/head";
import Banner from "../components/banner";
import Link from "next/link";
import useTranslation from "next-translate/useTranslation";

const Faq = () => {
  const { t } = useTranslation();

  const faqs: string[] = [t("faq:q1"), t("faq:q2"), t("faq:q3"), t("faq:q4"), t("faq:q5")];

  const answers: Array<{ label: string; link?: string; externalLink?: boolean }> = [
    { label: t("faq:a1"), link: "/form/home-hospital-transfer", externalLink: false },
    { label: t("faq:a2") },
    {
      label: t("faq:a3"),
      link: "/terms-and-conditions",
      externalLink: false,
    },
    { label: t("faq:a4") },
    { label: t("faq:a5"), link: "", externalLink: true },
  ];

  return (
    <>
      <Head>
        <title>Preview - {t("faq:breadcrumb")}</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Banner title={t("faq:breadcrumb")} breadcrumb={t("faq:breadcrumb")} background="" />
      <div className="max-w-7xl mx-auto flex flex-col gap-10 pt-10 pb-20 px-10">
        <div>
          <div className="flex flex-col items-center gap-10">
            <span className="text-xl md:text-2xl font-medium underline">{t("faq:breadcrumb")}</span>
            <div className="text-center">
              <p>{t("faq:subtitle_1")}</p>
              <p>{t("faq:subtitle_2")}</p>
            </div>
          </div>
          <div className="mt-8">
            <ol>
              {faqs.map((title, index: number) => (
                <li className="font-sarabun pb-6" key={`terms-conditions-${index}`}>
                  <p className="font-medium">
                    {index + 1}. {title}
                  </p>
                  <p className="mt-2">
                    <span className="text-orange-500 underline">{t("faq:answer")}</span>
                    <span className="ml-2">{answers[index]["label"]}</span>
                    {answers[index]["link"] && (
                      <>
                        {answers[index]["externalLink"] ? (
                          <a target="_blank" href={answers[index]["link"] || ""} rel="noreferrer" className="ml-2 underline text-orange-500">
                            {t("common:click")}
                          </a>
                        ) : (
                          <Link href={answers[index]["link"] || ""}>
                            <a className="ml-2 underline text-orange-500" rel="noreferrer">
                              {t("common:click")}
                            </a>
                          </Link>
                        )}
                      </>
                    )}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </>
  );
};

export default Faq;
