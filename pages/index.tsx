import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import useTranslation from "next-translate/useTranslation";
import SecondImage from "../public/mockup/6-min.jpeg";
import Carousel from "../components/carousel";

type Props = {
  carousel: {
    id: number;
    images: Array<string>;
  };
};

const Home: NextPage<Props> = ({ carousel }) => {
  const { t } = useTranslation();
  const historyVariants = {
    visible: { opacity: 1, x: 0, transition: { duration: 1 } },
    hidden: { opacity: 0, x: "-100%" },
  };
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <div>
      <Head>
        <title>Preview - {t("common:home")}</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="max-w-full mx-auto bg-orange-50">
          {/* banner */}
          <div className="relative shadow-xl sm:overflow-hidden min-h-screen">
            <div className="absolute inset-0">
              <Image className="min-h-screen w-full" src="" alt="" layout="fill" objectFit="cover" objectPosition="center" placeholder="blur" blurDataURL="" />
              <div className="absolute inset-0 bg-gradient-to-r from-gray-400 to-gray-600 mix-blend-multiply"></div>
            </div>
            <div className="min-h-screen flex items-center justify-center relative">
              <div className="flex flex-col gap-7 px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
                <div className="text-center text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                  <span className="block text-white">{t("home:banner_text_1")}</span>
                </div>
                <span className="block text-center text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl text-orange-200 uppercase" style={{ lineHeight: "0.75" }}>
                  {t("home:banner_text_2")}
                </span>
                <span className="max-w-lg mx-auto text-center text-xl md:text-3xl text-orange-100 sm:max-w-5xl uppercase">{t("home:banner_text_3")}</span>
                <div className="mt-1 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center">
                  <Link href="/home-hospital-transfer">
                    <a className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-orange-600 bg-white bg-opacity-100 hover:bg-orange-200 sm:px-8">
                      {t("home:banner_button")}
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* history */}
          <motion.div ref={ref} animate={controls} initial="hidden" variants={historyVariants}>
            <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-16 py-20 md:py-32">
              <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-32 lg:max-w-none lg:mx-0 lg:px-0 lg:col-start-2">
                <div>
                  <div className="mt-6 text-center">
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
                      src={SecondImage.src}
                      alt="Customer profile user interface"
                    />
                  </picture>
                </div>
              </div>
            </div>
          </motion.div>

          {/* carousel */}
          <div className="max-w-full bg-gray-custom">
            <Carousel items={carousel.images} classes="w-full 2xl:w-auto 2xl:px-20 2xl:py-32" />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;

export async function getServerSideProps() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/information/carousel`);
  const carousel = await res.json();

  return {
    props: { carousel },
  };
}
