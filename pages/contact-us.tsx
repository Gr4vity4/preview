import Head from "next/head";
import useTranslation from "next-translate/useTranslation";
import { FormEvent, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import PuffLoader from "react-spinners/PuffLoader";
import ScrollTop from "../utils/scroll-top";

const Contact = () => {
  const { t } = useTranslation();
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const override = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
  };
  let [loading, setLoading] = useState(false);
  let [color, setColor] = useState("#4CAF50");

  const swal = (data: { title: any; icon: any }) => {
    return Swal.fire({
      title: data.title,
      icon: data.icon,
      confirmButtonColor: "#00a65a",
      confirmButtonText: "ตกลง",
      allowOutsideClick: false,
    });
  };

  const clearForm = () => {
    setName("");
    setPhoneNumber("");
    setEmail("");
    setSubject("");
    setMessage("");
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    //
    e.preventDefault();
    console.log(`>>> on submit`);
    const formData = {
      name: name,
      phone_number: phoneNumber,
      email: email,
      subject: subject,
      message: message,
    };

    setLoading(true);
    ScrollTop();

    axios
      .post(`${process.env.NEXT_PUBLIC_API_URL}/api/contact-form`, formData)
      .then((res) => {
        const data = res.data;
        setLoading(false);

        if (data.status === "success") {
          swal({ title: t("common:success"), icon: "success" });
        } else {
          swal({ title: t("common:error"), icon: "error" });
        }
      })
      .catch((err) => {
        console.log(err.message);
        swal({ title: t("common:error"), icon: "error" });
      });
    clearForm();
  };

  return loading ? (
    <div className="max-w-7xl min-h-screen mx-auto flex flex-col justify-center items-center gap-10">
      <p className="text-2xl md:text-3xl font-medium">{t("common:loading")}</p>
      <PuffLoader color={color} loading={loading} cssOverride={override} size={128} />
    </div>
  ) : (
    <div>
      <Head>
        <title>Preview - {t("contact-us:breadcrumb")}</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="bg-white py-16 px-4 overflow-hidden sm:px-6 lg:px-8 lg:py-24">
          <div className="relative max-w-xl mx-auto">
            <svg className="absolute left-full transform translate-x-1/2" width="404" height="404" fill="none" viewBox="0 0 404 404" aria-hidden="true">
              <defs>
                <pattern id="85737c0e-0916-41d7-917f-596dc7edfa27" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                  <rect x="0" y="0" width="4" height="4" className="text-gray-200" fill="currentColor" />
                </pattern>
              </defs>
              <rect width="404" height="404" fill="url(#85737c0e-0916-41d7-917f-596dc7edfa27)" />
            </svg>
            <svg className="absolute right-full bottom-0 transform -translate-x-1/2" width="404" height="404" fill="none" viewBox="0 0 404 404" aria-hidden="true">
              <defs>
                <pattern id="85737c0e-0916-41d7-917f-596dc7edfa27" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                  <rect x="0" y="0" width="4" height="4" className="text-gray-200" fill="currentColor" />
                </pattern>
              </defs>
              <rect width="404" height="404" fill="url(#85737c0e-0916-41d7-917f-596dc7edfa27)" />
            </svg>
            <div className="text-center">
              <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">{t("contact-us:breadcrumb")}</h2>
            </div>
            <div className="mt-12">
              <form onSubmit={(e) => onSubmit(e)} method="post" className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
                <div className="col-span-2">
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    <span className="text-red-400 mr-2">*</span>
                    {t("contact-us:name")}
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="name"
                      id="name"
                      className="py-3 px-4 block w-full shadow-sm focus:ring-blue-500 focus:border-blue-500 border border-gray-300 rounded-md"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div className="col-span-2">
                  <label htmlFor="phone_number" className="block text-sm font-medium text-gray-700">
                    <span className="text-red-400 mr-2">*</span>
                    {t("contact-us:phone")}
                  </label>
                  <div className="mt-1">
                    <input
                      id="phone_number"
                      name="phone_number"
                      type="text"
                      pattern="[0-9]*"
                      maxLength={10}
                      className="py-3 px-4 block w-full shadow-sm focus:ring-blue-500 focus:border-blue-500 border border-gray-300 rounded-md"
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber((v) => (e.target.validity.valid ? e.target.value : v))}
                      required
                    />
                  </div>
                </div>

                <div className="col-span-2">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    {t("contact-us:email")}
                  </label>
                  <div className="mt-1">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      className="py-3 px-4 block w-full shadow-sm focus:ring-blue-500 focus:border-blue-500 border border-gray-300 rounded-md"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                </div>

                <div className="col-span-2">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    <span className="text-red-400 mr-2">*</span>
                    {t("contact-us:subject")}
                  </label>
                  <div className="mt-1">
                    <input
                      id="subject"
                      name="subject"
                      type="text"
                      className="py-3 px-4 block w-full shadow-sm focus:ring-blue-500 focus:border-blue-500 border border-gray-300 rounded-md"
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div className="col-span-2">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                    <span className="text-red-400 mr-2">*</span>
                    {t("contact-us:detail")}
                  </label>
                  <div className="mt-1">
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      className="py-3 px-4 block w-full shadow-sm focus:ring-blue-500 focus:border-blue-500 border border-gray-300 rounded-md"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div className="col-span-2">
                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    {t("contact-us:send_message")}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Contact;
