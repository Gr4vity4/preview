import type { NextPage } from "next";
import Head from "next/head";
import Banner from "../components/banner";
import MainBackground from "../public/mockup/6-min.jpeg";
import Carousel from "../components/carousel";
import useTranslation from "next-translate/useTranslation";

type Props = {
  carousel: {
    id: number;
    images: Array<string>;
  };
};

const AboutUs: NextPage<Props> = ({ carousel }) => {
  const { t } = useTranslation();

  return (
    <div>
      <Head>
        <title>Preview - {t("common:about_us")}</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Banner title={t("common:about_us")} breadcrumb={t("common:about_us")} />
        <div className="max-w-full mx-auto bg-orange-50">
          <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-16 py-20 md:py-32">
            <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-32 lg:max-w-none lg:mx-0 lg:px-0 lg:col-start-2">
              <div>
                <div className="md:mt-6 text-center">
                  <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 text-center">{t("home:history_title")}</h2>
                  <p className="mt-4 text-lg font-sarabun">
                    <span className="pl-10"></span>
                    {t("home:history_paragraph_1")}
                  </p>
                  <p className="mt-4 text-lg font-sarabun">
                    <span className="pl-10"></span>
                    {t("home:history_paragraph_2")}
                  </p>
                  <div className="flex flex-col items-center mt-4 text-lg font-sarabun">
                    <p>{t("home:history_paragraph_3")}</p>
                    <p>{t("home:history_paragraph_4")}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-12 sm:mt-16 lg:mt-0 lg:col-start-1">
              <div className="pr-4 -ml-48 sm:pr-6 md:-ml-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
                <picture>
                  <img
                    className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:right-0 lg:h-full lg:w-auto lg:max-w-none"
                    src={MainBackground.src}
                    alt="Customer profile user interface"
                  />
                </picture>
              </div>
            </div>
          </div>
        </div>
        {/* carousel */}
        <div className="max-w-full md:px-20 md:py-32 bg-gray-custom">
          <Carousel items={carousel.images} />
        </div>
      </main>
    </div>
  );
};

export default AboutUs;

export async function getServerSideProps() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/information/carousel`);
  const carousel = await res.json();

  return {
    props: { carousel },
  };
}
