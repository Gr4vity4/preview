import Image from "next/image";
import BreadCrumb from "../components/breadcrumb";

const defaultBackground = "...";

type Props = {
  title?: string;
  breadcrumb?: string;
  background?: string;
  no?: string;
};

const Banner = ({ title = "", breadcrumb = "", background = defaultBackground, no = "" }: Props) => {
  const blurDataURL = background.replace("q_80", "q_10");

  return (
    <div>
      <div className="relative shadow-xl sm:overflow-hidden">
        <div className="absolute inset-0">
          <Image className="min-h-screen w-full" src={background} alt="..." layout="fill" objectFit="cover" objectPosition="center" placeholder="blur" blurDataURL={blurDataURL} />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-400 to-gray-600 mix-blend-multiply"></div>
        </div>
        <div className="flex items-center justify-center relative">
          <div className="px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
            <h1 className="text-center text-4xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl text-orange-100">{title}</h1>
          </div>
        </div>
      </div>
      <BreadCrumb breadcrumb={breadcrumb} no={no} />
    </div>
  );
};

export default Banner;
