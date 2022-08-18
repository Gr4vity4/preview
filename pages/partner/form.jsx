import Head from "next/head";
import DatePicker from "react-datepicker";
import { registerLocale } from "react-datepicker";
import { getMonth, getYear } from "date-fns";
import th from "date-fns/locale/th";
import thaiMonth from "../../public/js/thai-month";
import Banner from "../../components/banner";
import { useRef, useState } from "react";
import { useRouter } from "next/router";
import { useEffect } from "react";
import "react-datepicker/dist/react-datepicker.css";
import useTranslation from "next-translate/useTranslation";
import axios from "axios";
import { serialize } from "object-to-formdata";
import Select from "react-select";
import { ThaiAddressSubDistrict, ThaiAddressDistrict, ThaiAddressProvince, ThaiAddressZipcode } from "../../components/thai-address";
import Separate from "../../components/separate";
import Swal from "sweetalert2";
import PuffLoader from "react-spinners/PuffLoader";
import ScrollTop from "../../utils/scroll-top";

// import atoms
import currentAddressState from "../../atoms/current-address";
import permanentAddressState from "../../atoms/permanent-address";
import emergencyAddressState from "../../atoms/emergency-address";

// form-data state
import { useRecoilState, useResetRecoilState } from "recoil";
import partnerFormState from "../../atoms/partner-form.js";

// options
import prefixLists from "../../utils/form/prefix";
import relationshipLists from "../../utils/form/relationship";

const PartnerForm = () => {
  // nesscesary
  const router = useRouter();
  const { t } = useTranslation();
  const override = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
  };
  let [loading, setLoading] = useState(false);
  let [color, setColor] = useState("#4CAF50");

  // form-data state
  const [init, setInit] = useState(false);
  const [formData, setFormData] = useRecoilState(partnerFormState);
  const applicantDetailPrefixRef = useRef(null);
  const emergencyContactPrefixRef = useRef(null);
  const emergencyContactRelationRef = useRef(null);

  /* ===== file upload ===== */
  const photoRef = useRef(null);
  const photoIdCardRef = useRef(null);
  const photoVaccineRef = useRef(null);

  const photoIdCardOwnerCarRef = useRef(null);
  const photoVehicleLicenseOwnerCarRef = useRef(null);
  const photoVehicleRegistrationOwnerCarRef = useRef(null);

  // const photoIdCardOwnerCarRef = useRef(null);
  const photoHouseRegistrationOwnerCarRef = useRef(null);
  const photoIdCardHolderCarRef = useRef(null);
  const photoHouseRegistrationHolderCarRef = useRef(null);
  const photoVehicleLicenseHolderCarRef = useRef(null);
  const photoConsentOwnerCarRef = useRef(null);
  // const photoVehicleRegistrationOwnerCarRef = useRef(null);

  const photoCarRef = useRef(null);
  /* ===== end file upload ===== */

  const currentAddress = {};
  const [termsAccepte1, setStateTermsAccepte1] = useState(false);
  const [termsAccepte2, setStateTermsAccepte2] = useState(false);
  const [termsAccepte3, setStateTermsAccepte3] = useState(false);
  const [termsAccepted, setTermsAccepted] = useState(false);
  const resetCurrentAddress = useResetRecoilState(currentAddressState);
  const resetPermanentAddress = useResetRecoilState(permanentAddressState);
  const resetEmergencyAddress = useResetRecoilState(emergencyAddressState);
  const resetPartnerForm = useResetRecoilState(partnerFormState);

  // options
  const prefixOptions = prefixLists();
  const relationshipOptions = relationshipLists();

  // datepicker
  const current = new Date();
  const range = (start, end) => {
    return new Array(end - start).fill().map((d, i) => i + start);
  };
  const years = range(1932, getYear(new Date()) - 16);
  const idcardYears = range(1932, getYear(new Date()) + 1);
  const months = thaiMonth;
  registerLocale("th", th);

  // recoil
  const [currentAddressData, setCurrentAddressData] = useRecoilState(currentAddressState);
  const [permanentAddressData, setPermanentAddressData] = useRecoilState(permanentAddressState);
  const [emergencyAddressData, setEmergencyAddressData] = useRecoilState(emergencyAddressState);

  // handle file upload

  const swal = (data) => {
    return Swal.fire({
      title: data.title,
      icon: data.icon,
      confirmButtonColor: "#00a65a",
      confirmButtonText: "ตกลง",
      allowOutsideClick: false,
    });
  };

  // handle form submit
  const onSubmit = (e) => {
    e.preventDefault();

    // applicant_details
    if (photoRef.current.files[0] === undefined) {
      swal({ title: t("alert:msg1"), icon: "info" });
      return;
    }
    if (photoIdCardRef.current.files[0] === undefined) {
      swal({ title: t("alert:msg2"), icon: "info" });
      return;
    }
    if (photoVaccineRef.current.files[0] === undefined) {
      swal({ title: t("alert:msg3"), icon: "info" });
      return;
    }

    // car_ownership
    if (formData.car_ownership.ownership === "1") {
      if (photoIdCardOwnerCarRef.current.files[0] === undefined) {
        swal({ title: t("alert:msg2"), icon: "info" });
        return;
      }
      if (photoVehicleLicenseOwnerCarRef.current.files[0] === undefined) {
        swal({ title: t("alert:msg4"), icon: "info" });
        return;
      }
      if (photoVehicleRegistrationOwnerCarRef.current.files[0] === undefined) {
        swal({ title: t("alert:msg5"), icon: "info" });
        return;
      }
    } else if (data.car_ownership.ownership === "0") {
      if (photoIdCardOwnerCarRef.current.files[0] === undefined) {
        swal({ title: t("alert:msg2"), icon: "info" });
        return;
      }
      if (photoHouseRegistrationOwnerCarRef.current.files[0] === undefined) {
        swal({ title: t("alert:msg6"), icon: "info" });
        return;
      }
      if (photoIdCardHolderCarRef.current.files[0] === undefined) {
        swal({ title: t("alert:msg7"), icon: "info" });
        return;
      }
      if (photoHouseRegistrationHolderCarRef.current.files[0] === undefined) {
        swal({ title: t("alert:msg8"), icon: "info" });
        return;
      }
      if (photoVehicleLicenseHolderCarRef.current.files[0] === undefined) {
        swal({ title: t("alert:msg9"), icon: "info" });
        return;
      }
      if (photoConsentOwnerCarRef.current.files[0] === undefined) {
        swal({ title: t("alert:msg10"), icon: "info" });
        return;
      }
      if (photoVehicleRegistrationOwnerCarRef.current.files[0] === undefined) {
        swal({ title: t("alert:msg5"), icon: "info" });
        return;
      }
    }

    if (photoCarRef.current.files[0] === undefined) {
      swal({ title: t("alert:msg11"), icon: "info" });
      return;
    }

    // console.debug(`>>> before`, formData);

    const data = {
      ...formData,
      ...{
        applicant_details: {
          ...formData.applicant_details,
          birth_date: formData.applicant_details.birth_date / 1000,
          date_of_issue: formData.applicant_details.date_of_issue / 1000,
          date_of_expiry: formData.applicant_details.date_of_expiry / 1000,
          photo: photoRef.current.files[0],
          photo_id_card: photoIdCardRef.current.files[0],
          photo_vaccine: photoVaccineRef.current.files[0],
        },
        current_address: {
          ...formData.current_address,
          sub_district: currentAddressData.subDistrict.value,
          district: currentAddressData.district.value,
          province: currentAddressData.province.value,
          zipcode: currentAddressData.zipcode.value,
        },
        permanent_address: {
          ...formData.permanent_address,
          sub_district: permanentAddressData.subDistrict.value,
          district: permanentAddressData.district.value,
          province: permanentAddressData.province.value,
          zipcode: permanentAddressData.zipcode.value,
        },
        emergency_contact: {
          ...formData.emergency_contact,
          address: {
            ...formData.emergency_contact.address,
            sub_district: emergencyAddressData.subDistrict.value,
            district: emergencyAddressData.district.value,
            province: emergencyAddressData.province.value,
            zipcode: emergencyAddressData.zipcode.value,
          },
        },
        car_ownership: {
          ...formData.car_ownership,
          photo_id_card_owner_car: photoIdCardOwnerCarRef.current && photoIdCardOwnerCarRef.current.files[0],
          photo_vehicle_license_owner_car: photoVehicleLicenseOwnerCarRef.current && photoVehicleLicenseOwnerCarRef.current.files[0],
          photo_vehicle_registration_owner_car: photoVehicleRegistrationOwnerCarRef.current && photoVehicleRegistrationOwnerCarRef.current.files[0],
          photo_house_registration_owner_car: photoHouseRegistrationOwnerCarRef.current && photoHouseRegistrationOwnerCarRef.current.files[0],
          photo_id_card_holder_car: photoIdCardHolderCarRef.current && photoIdCardHolderCarRef.current.files[0],
          photo_house_registration_holder_car: photoHouseRegistrationHolderCarRef.current && photoHouseRegistrationHolderCarRef.current.files[0],
          photo_vehicle_license_holder_car: photoVehicleLicenseHolderCarRef.current && photoVehicleLicenseHolderCarRef.current.files[0],
          photo_consent_owner_car: photoConsentOwnerCarRef.current && photoConsentOwnerCarRef.current.files[0],
          photo_car: photoCarRef.current && photoCarRef.current.files,
        },
      },
    };

    // check prefix empty
    if (data.applicant_details.prefix === "") {
      data.applicant_details.prefix = applicantDetailPrefixRef.current.getValue()[0].value;
    }

    if (data.emergency_contact.prefix === "") {
      data.emergency_contact = {
        ...data.emergency_contact,
        prefix: emergencyContactPrefixRef.current.getValue()[0].value,
      };
    }

    if (data.emergency_contact.relation == "") {
      data.emergency_contact = {
        ...data.emergency_contact,
        relation: emergencyContactRelationRef.current.getValue()[0].value,
      };
    }

    console.debug(`>>> form-data before submit`, data);
    setLoading(true);
    ScrollTop();

    axios
      .post(`${process.env.NEXT_PUBLIC_API_URL}/api/partner-form`, serialize(data), {
        headers: {
          "Content-Type": "multipart/form-data",
          "Access-Control-Allow-Origin": "*",
        },
      })
      .then((res) => {
        const data = res.data;
        console.log(`>>> res`, data);
        setLoading(false);

        if (data.result !== null) {
          swal({ title: t("common:success"), icon: "success" }).then((result) => {
            if (result.isConfirmed) {
              resetPartnerForm();
              resetCurrentAddress();
              resetPermanentAddress();
              resetEmergencyAddress();
              router.reload(window.location.pathname);
            }
          });
        } else {
          swal({ title: t("common:error"), icon: "error" });
        }
      })
      .catch((err) => {
        console.log(err.message);
        swal({ title: t("common:error"), icon: "error" });
      });
  };

  // fixed react-select css
  const customStyles = {
    menuPortal: (provided) => ({ ...provided, zIndex: 9999 }),
    menu: (provided) => ({ ...provided, zIndex: 9999 }),
  };

  const handleCurrentAddress = (v) => {
    Object.assign(currentAddress, {
      sub_district: v[0],
      district: v[1],
      province: v[2],
      zipcode: v[3],
    });

    setFormData({
      ...formData,
      ...{
        current_address: {
          ...formData.current_address,
          sub_district: v[0],
          district: v[1],
          province: v[2],
          zipcode: v[3],
        },
      },
    });
  };

  const handlePermanentAddress = (v) => {
    setFormData({
      ...formData,
      ...{
        permanent_address: {
          sub_district: v[0],
          district: v[1],
          province: v[2],
          zipcode: v[3],
        },
      },
    });
  };

  const handleEmergencyContactAddress = (v) => {
    setFormData({
      ...formData,
      ...{
        emergency_contact: {
          ...formData.emergency_contact,
          address: {
            ...formData.emergency_contact.address,
            sub_district: v[0],
            district: v[1],
            province: v[2],
            zipcode: v[3],
          },
        },
      },
    });
  };

  const handleCheckboxMatchCurrentAddress = (e) => {
    setPermanentAddressData(currentAddressData);
    setFormData({
      ...formData,
      ...{
        permanent_address: formData.current_address,
      },
    });
  };

  const handleCarOwnership = (e) => {
    setFormData({
      ...formData,
      ...{
        car_ownership: {
          ownership: e.target.value,
        },
      },
    });
  };

  const enableFormSubmit = () => {
    if (termsAccepte1 && termsAccepte2 && termsAccepte3) {
      setTermsAccepted(true);
      return;
    }
    setTermsAccepted(false);
  };

  const handleCheckboxTerms = (e, index) => {
    if (index === 1) {
      setStateTermsAccepte1(e.target.checked);
    } else if (index === 2) {
      setStateTermsAccepte2(e.target.checked);
    } else {
      setStateTermsAccepte3(e.target.checked);
    }
    return;
  };

  useEffect(() => {
    if (!init) {
      resetCurrentAddress();
      setInit(!init);
    }
    enableFormSubmit();
    // console.log(formData);
  }, [formData, init, termsAccepte1, termsAccepte2, termsAccepte3]);

  return loading ? (
    <div className="max-w-7xl min-h-screen mx-auto flex flex-col justify-center items-center gap-10">
      <p className="text-2xl md:text-3xl font-medium">{t("common:loading")}</p>
      <PuffLoader color={color} loading={loading} cssOverride={override} size={128} />
    </div>
  ) : (
    <div className="w-full">
      <Head>
        <title>Preview - แบบฟอร์ม</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Banner title={t("partner-form:breadcrumb")} breadcrumb={t("partner-form:breadcrumb")} background="" no={`${t("common:book_number")} xxx`} />
      <form onSubmit={(e) => onSubmit(e)} method="post">
        <div className="max-w-7xl mx-auto pb-20 rounded-xl bg-orange-50 grid grid-cols-1 p-10 mb-20">
          {/* section 1 */}
          <div>
            <div className="md:grid md:grid-cols-3 md:gap-6">
              <div className="md:col-span-1">
                <div className="px-4 sm:px-0">
                  <h3 className="text-lg font-medium leading-6 text-gray-900">{t("partner-form:heading_1")}</h3>
                </div>
              </div>
              <div className="mt-5 md:mt-0 md:col-span-2">
                <div className="shadow overflow-hidden sm:rounded-md">
                  <div className="px-4 py-5 bg-white sm:p-6">
                    <div className="grid grid-cols-6 gap-6">
                      <div className="col-span-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                          <div className="md:col-span-2">
                            <span className="text-sm font-medium">{t("partner-form:p13")}</span>
                          </div>
                          <div className="col-span-1 md:col-span-2">
                            <label htmlFor="applicant_details_photo" className="block text-sm font-medium text-gray-700">
                              <span className="text-red-500 mr-2">*</span>
                              {t("form:upload_photo")}
                            </label>
                            <div className="mt-1">
                              <input
                                ref={(ref) => (photoRef.current = ref)}
                                type="file"
                                name="applicant_details_photo"
                                id="applicant_details_photo"
                                className="mt-1 block w-1/2 py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                accept="image/*, .pdf"
                              />
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="col-span-6 grid grid-cols-7  gap-4">
                        <div className="col-span-7 sm:col-span-1">
                          <label htmlFor="applicant_details_prefix" className="block text-sm font-medium text-gray-700">
                            {t("service-form:prefix")}
                          </label>
                          <Select
                            instanceId="applicant-details-prefix"
                            className="mt-1"
                            onChange={(e) => {
                              setFormData({ ...formData, applicant_details: { ...formData.applicant_details, prefix: e.value } });
                            }}
                            options={prefixOptions}
                            defaultValue={prefixOptions[0]}
                            isSearchable={false}
                            ref={applicantDetailPrefixRef}
                          />
                        </div>
                        <div className="col-span-7 sm:col-span-3">
                          <label htmlFor="applicant_details_first_name" className="block text-sm font-medium text-gray-700">
                            <span className="text-red-500 mr-2">*</span>
                            {t("service-form:first_name")}
                          </label>
                          <input
                            type="text"
                            name="applicant_details_first_name"
                            id="applicant_details_first_name"
                            className="mt-1 block w-full shadow-sm sm:text-sm border border-gray-300 rounded-md px-3 py-2"
                            value={formData.applicant_details.first_name}
                            onChange={(e) => {
                              setFormData({ ...formData, applicant_details: { ...formData.applicant_details, first_name: e.target.value } });
                            }}
                            required
                          />
                        </div>
                        <div className="col-span-7 sm:col-span-3">
                          <label htmlFor="applicant_details_last_name" className="block text-sm font-medium text-gray-700">
                            <span className="text-red-500 mr-2">*</span>
                            {t("service-form:last_name")}
                          </label>
                          <input
                            type="text"
                            name="applicant_details_last_name"
                            id="applicant_details_last_name"
                            className="mt-1 block w-full shadow-sm sm:text-sm border border-gray-300 rounded-md px-3 py-2"
                            value={formData.applicant_details.last_name}
                            onChange={(e) => {
                              setFormData({ ...formData, applicant_details: { ...formData.applicant_details, last_name: e.target.value } });
                            }}
                            required
                          />
                        </div>
                      </div>

                      <div className="col-span-6 sm:col-span-4">
                        <label htmlFor="applicant_details_birth_date" className="block text-sm font-medium text-gray-700">
                          <span className="text-red-500 mr-2">*</span>
                          {t("service-form:birthday")}
                        </label>
                        <DatePicker
                          renderCustomHeader={({ date, changeYear, changeMonth, decreaseMonth, increaseMonth, prevMonthButtonDisabled, nextMonthButtonDisabled }) => (
                            <div className="flex justify-between px-4">
                              <button onClick={decreaseMonth} disabled={prevMonthButtonDisabled}>
                                {"<"}
                              </button>
                              <select value={getYear(date)} onChange={({ target: { value } }) => changeYear(value)} className="p-1 rounded">
                                {years.map((option) => (
                                  <option key={option} value={option}>
                                    {option}
                                  </option>
                                ))}
                              </select>
                              <select value={months[getMonth(date)]} onChange={({ target: { value } }) => changeMonth(months.indexOf(value))} className="p-1 rounded">
                                {months.map((option) => (
                                  <option key={option} value={option}>
                                    {option}
                                  </option>
                                ))}
                              </select>
                              <button onClick={increaseMonth} disabled={nextMonthButtonDisabled}>
                                {">"}
                              </button>
                            </div>
                          )}
                          selected={formData.applicant_details.birth_date}
                          onChange={(date) => {
                            setFormData({ ...formData, applicant_details: { ...formData.applicant_details, birth_date: date } });
                          }}
                          className="w-full md:w-1/2 border border-gray-300 rounded-md px-3 py-2 mt-1"
                          locale={router.locale}
                          required
                        />
                      </div>

                      <div className="col-span-6 sm:col-span-4">
                        <label htmlFor="applicant_details_phone" className="block text-sm font-medium text-gray-700">
                          <span className="text-red-500 mr-2">*</span>
                          {t("form:phone")}
                        </label>
                        <input
                          type="text"
                          name="applicant_details_phone"
                          id="applicant_details_phone"
                          className="mt-1 block w-full shadow-sm sm:text-sm border border-gray-300 rounded-md px-3 py-2"
                          value={formData.applicant_details.phone}
                          pattern="[0-9]*"
                          maxLength={10}
                          onChange={(e) => {
                            setFormData({ ...formData, applicant_details: { ...formData.applicant_details, phone: e.target.value } });
                          }}
                          required
                        />
                      </div>

                      <div className="col-span-6 sm:col-span-4">
                        <label htmlFor="applicant_details_id_card" className="block text-sm font-medium text-gray-700">
                          <span className="text-red-500 mr-2">*</span>
                          {t("form:id_card")}
                        </label>
                        <input
                          type="text"
                          name="applicant_details_id_card"
                          id="applicant_details_id_card"
                          className="mt-1 block w-full shadow-sm sm:text-sm border border-gray-300 rounded-md px-3 py-2"
                          value={formData.applicant_details.id_card}
                          pattern="[0-9]*"
                          maxLength={13}
                          onChange={(e) => {
                            setFormData({ ...formData, applicant_details: { ...formData.applicant_details, id_card: e.target.value } });
                          }}
                          required
                        />
                      </div>

                      <div className="grid grid-cols-4 col-span-6 gap-6">
                        <div className="col-span-4 sm:col-span-1">
                          <label htmlFor="applicant_details_date_of_issue" className="block text-sm font-medium text-gray-700">
                            <span className="text-red-500 mr-2">*</span>
                            {t("form:date_of_issue")}
                          </label>
                          <DatePicker
                            renderCustomHeader={({ date, changeYear, changeMonth, decreaseMonth, increaseMonth, prevMonthButtonDisabled, nextMonthButtonDisabled }) => (
                              <div className="flex justify-between px-4">
                                <button onClick={decreaseMonth} disabled={prevMonthButtonDisabled}>
                                  {"<"}
                                </button>
                                <select value={getYear(date)} onChange={({ target: { value } }) => changeYear(value)} className="p-1 rounded">
                                  {idcardYears.map((option) => (
                                    <option key={option} value={option}>
                                      {option}
                                    </option>
                                  ))}
                                </select>
                                <select value={months[getMonth(date)]} onChange={({ target: { value } }) => changeMonth(months.indexOf(value))} className="p-1 rounded">
                                  {months.map((option) => (
                                    <option key={option} value={option}>
                                      {option}
                                    </option>
                                  ))}
                                </select>
                                <button onClick={increaseMonth} disabled={nextMonthButtonDisabled}>
                                  {">"}
                                </button>
                              </div>
                            )}
                            selected={formData.applicant_details.date_of_issue}
                            onChange={(date) => {
                              setFormData({ ...formData, applicant_details: { ...formData.applicant_details, date_of_issue: date } });
                            }}
                            className="w-full border border-gray-300 rounded-md px-3 py-2 mt-1"
                            locale={router.locale}
                            required
                          />
                        </div>

                        <div className="col-span-4 sm:col-span-1">
                          <label htmlFor="applicant_details_date_of_expiry" className="block text-sm font-medium text-gray-700">
                            <span className="text-red-500 mr-2">*</span>
                            {t("form:date_of_expiry")}
                          </label>
                          <DatePicker
                            renderCustomHeader={({ date, changeYear, changeMonth, decreaseMonth, increaseMonth, prevMonthButtonDisabled, nextMonthButtonDisabled }) => (
                              <div className="flex justify-between px-4">
                                <button onClick={decreaseMonth} disabled={prevMonthButtonDisabled}>
                                  {"<"}
                                </button>
                                <select value={getYear(date)} onChange={({ target: { value } }) => changeYear(value)} className="p-1 rounded">
                                  {idcardYears.map((option) => (
                                    <option key={option} value={option}>
                                      {option}
                                    </option>
                                  ))}
                                </select>
                                <select value={months[getMonth(date)]} onChange={({ target: { value } }) => changeMonth(months.indexOf(value))} className="p-1 rounded">
                                  {months.map((option) => (
                                    <option key={option} value={option}>
                                      {option}
                                    </option>
                                  ))}
                                </select>
                                <button onClick={increaseMonth} disabled={nextMonthButtonDisabled}>
                                  {">"}
                                </button>
                              </div>
                            )}
                            selected={formData.applicant_details.date_of_expiry}
                            onChange={(date) => {
                              setFormData({ ...formData, applicant_details: { ...formData.applicant_details, date_of_expiry: date } });
                            }}
                            className="w-full border border-gray-300 rounded-md px-3 py-2 mt-1"
                            locale={router.locale}
                            required
                          />
                        </div>
                      </div>

                      <div className="col-span-6">
                        <div>
                          <label htmlFor="applicant_details_photo" className="block text-sm font-medium text-gray-700">
                            <span className="text-red-500 mr-2">*</span>
                            {t("partner-form:p14")}
                          </label>
                          <div className="mt-1">
                            <input
                              ref={(ref) => (photoIdCardRef.current = ref)}
                              type="file"
                              name="applicant_details_photo"
                              id="applicant_details_photo"
                              className="mt-1 block w-1/2 py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                              accept="image/*, .pdf"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-span-6">
                        <div>
                          <label htmlFor="applicant_details_photo" className="block text-sm font-medium text-gray-700">
                            <span className="text-red-500 mr-2">*</span>
                            {t("partner-form:p16")}
                          </label>
                          <div className="mt-1">
                            <input
                              ref={(ref) => (photoVaccineRef.current = ref)}
                              type="file"
                              name="applicant_details_photo"
                              id="applicant_details_photo"
                              className="mt-1 block w-1/2 py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                              accept="image/*, .pdf"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Separate />

          {/* section 2 */}
          <div className="mt-10 sm:mt-0">
            <div className="md:grid md:grid-cols-3 md:gap-6">
              <div className="md:col-span-1">
                <div className="px-4 sm:px-0">
                  <h3 className="text-lg font-medium leading-6 text-gray-900">{t("partner-form:heading_2")}</h3>
                </div>
              </div>
              <div className="mt-5 md:mt-0 md:col-span-2">
                <div className="shadow overflow-hidden sm:rounded-md">
                  <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
                    <div className="grid grid-cols-6 gap-6">
                      {/* begin address */}
                      <div className="col-span-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                          <div className="col-span-1 md:col-span-2">
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                              <div className="col-span-1">
                                <label htmlFor="house_no" className="block text-sm font-medium text-gray-700">
                                  <span className="text-red-500 mr-2">*</span>
                                  {t("service-form:house_no")}
                                </label>
                                <div className="mt-1">
                                  <input
                                    type="text"
                                    name="house_no"
                                    id="house_no"
                                    className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                    value={formData.current_address.house_no}
                                    onChange={(e) => {
                                      setFormData({ ...formData, current_address: { ...formData.current_address, house_no: e.target.value } });
                                    }}
                                    required
                                  />
                                </div>
                              </div>

                              <div className="col-span-1">
                                <label htmlFor="village" className="block text-sm font-medium text-gray-700">
                                  {t("service-form:village")}
                                </label>
                                <div className="mt-1">
                                  <input
                                    type="text"
                                    name="village"
                                    id="village"
                                    className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                    value={formData.current_address.village}
                                    onChange={(e) => {
                                      setFormData({ ...formData, current_address: { ...formData.current_address, village: e.target.value } });
                                    }}
                                  />
                                </div>
                              </div>

                              <div className="col-span-1">
                                <label htmlFor="village_no" className="block text-sm font-medium text-gray-700">
                                  {t("service-form:village_no")}
                                </label>
                                <div className="mt-1">
                                  <input
                                    type="text"
                                    name="village_no"
                                    id="village_no"
                                    className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                    value={formData.current_address.village_no}
                                    onChange={(e) => {
                                      setFormData({ ...formData, current_address: { ...formData.current_address, village_no: e.target.value } });
                                    }}
                                  />
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="col-span-1 md:col-span-2">
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                              <div>
                                <label htmlFor="alley" className="block text-sm font-medium text-gray-700">
                                  {t("service-form:alley")}
                                </label>
                                <div className="mt-1">
                                  <input
                                    type="text"
                                    name="alley"
                                    id="alley"
                                    className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                    value={formData.current_address.alley}
                                    onChange={(e) => {
                                      setFormData({ ...formData, current_address: { ...formData.current_address, alley: e.target.value } });
                                    }}
                                  />
                                </div>
                              </div>

                              <div>
                                <label htmlFor="road" className="block text-sm font-medium text-gray-700">
                                  {t("service-form:road")}
                                </label>
                                <div className="mt-1">
                                  <input
                                    type="text"
                                    name="road"
                                    id="road"
                                    className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                    value={formData.current_address.road}
                                    onChange={(e) => {
                                      setFormData({ ...formData, current_address: { ...formData.current_address, road: e.target.value } });
                                    }}
                                  />
                                </div>
                              </div>
                            </div>
                          </div>

                          <div>
                            <label htmlFor="sub_district" className="block text-sm font-medium text-gray-700">
                              <span className="text-red-500 mr-2">*</span>
                              {t("service-form:sub_district")}
                            </label>
                            <div className="mt-1">
                              <ThaiAddressSubDistrict getValue={(v) => handleCurrentAddress(v)} recoilState={currentAddressState} />
                            </div>
                          </div>

                          <div>
                            <label htmlFor="district" className="block text-sm font-medium text-gray-700">
                              <span className="text-red-500 mr-2">*</span>
                              {t("service-form:district")}
                            </label>
                            <div className="mt-1">
                              <ThaiAddressDistrict getValue={(v) => handleCurrentAddress(v)} recoilState={currentAddressState} />
                            </div>
                          </div>

                          <div>
                            <label htmlFor="province" className="block text-sm font-medium text-gray-700">
                              <span className="text-red-500 mr-2">*</span>
                              {t("service-form:province")}
                            </label>
                            <div className="mt-1">
                              <ThaiAddressProvince getValue={(v) => handleCurrentAddress(v)} recoilState={currentAddressState} />
                            </div>
                          </div>

                          <div>
                            <label htmlFor="zipcode" className="block text-sm font-medium text-gray-700">
                              <span className="text-red-500 mr-2">*</span>
                              {t("service-form:postal_code")}
                            </label>
                            <div className="mt-1">
                              <ThaiAddressZipcode getValue={(v) => handleCurrentAddress(v)} recoilState={currentAddressState} />
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* end address */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Separate />

          {/* section 3 */}
          <div className="mt-10 sm:mt-0">
            <div className="md:grid md:grid-cols-3 md:gap-6">
              <div className="md:col-span-1">
                <div className="px-4 sm:px-0">
                  <h3 className="text-lg font-medium leading-6 text-gray-900">{t("partner-form:heading_3")}</h3>
                </div>
              </div>
              <div className="mt-5 md:mt-0 md:col-span-2">
                <div className="shadow overflow-hidden sm:rounded-md">
                  <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
                    <div className="grid grid-cols-6 gap-6">
                      <div className="col-span-6">
                        <div className="mt-4 space-y-4">
                          <div className="flex items-start">
                            <div className="flex items-center h-5">
                              <input
                                id="terms"
                                name="terms"
                                type="checkbox"
                                className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded"
                                onChange={(e) => handleCheckboxMatchCurrentAddress(e)}
                              />
                            </div>
                            <div className="ml-3 text-sm">
                              <label htmlFor="terms" className="font-medium">
                                {t("form:same_current_address")}
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* begin address */}
                      <div className="col-span-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                          <div className="col-span-1 md:col-span-2">
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                              <div className="col-span-1">
                                <label htmlFor="house_no" className="block text-sm font-medium text-gray-700">
                                  <span className="text-red-500 mr-2">*</span>
                                  {t("service-form:house_no")}
                                </label>
                                <div className="mt-1">
                                  <input
                                    type="text"
                                    name="house_no"
                                    id="house_no"
                                    className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                    value={formData.permanent_address.house_no}
                                    onChange={(e) => {
                                      setFormData({ ...formData, permanent_address: { ...formData.permanent_address, house_no: e.target.value } });
                                    }}
                                    required
                                  />
                                </div>
                              </div>

                              <div className="col-span-1">
                                <label htmlFor="village" className="block text-sm font-medium text-gray-700">
                                  {t("service-form:village")}
                                </label>
                                <div className="mt-1">
                                  <input
                                    type="text"
                                    name="village"
                                    id="village"
                                    className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                    value={formData.permanent_address.village}
                                    onChange={(e) => {
                                      setFormData({ ...formData, permanent_address: { ...formData.permanent_address, village: e.target.value } });
                                    }}
                                  />
                                </div>
                              </div>

                              <div className="col-span-1">
                                <label htmlFor="village_no" className="block text-sm font-medium text-gray-700">
                                  {t("service-form:village_no")}
                                </label>
                                <div className="mt-1">
                                  <input
                                    type="text"
                                    name="village_no"
                                    id="village_no"
                                    className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                    value={formData.permanent_address.village_no}
                                    onChange={(e) => {
                                      setFormData({ ...formData, permanent_address: { ...formData.permanent_address, village_no: e.target.value } });
                                    }}
                                  />
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="col-span-1 md:col-span-2">
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                              <div>
                                <label htmlFor="alley" className="block text-sm font-medium text-gray-700">
                                  {t("service-form:alley")}
                                </label>
                                <div className="mt-1">
                                  <input
                                    type="text"
                                    name="permanent_address_alley"
                                    id="permanent_address_alley"
                                    className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                    value={formData.permanent_address.alley}
                                    onChange={(e) => {
                                      setFormData({ ...formData, permanent_address: { ...formData.permanent_address, alley: e.target.value } });
                                    }}
                                  />
                                </div>
                              </div>

                              <div>
                                <label htmlFor="road" className="block text-sm font-medium text-gray-700">
                                  {t("service-form:road")}
                                </label>
                                <div className="mt-1">
                                  <input
                                    type="text"
                                    name="permanent_address_road"
                                    id="permanent_address_road"
                                    className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                    value={formData.permanent_address.road}
                                    onChange={(e) => {
                                      setFormData({ ...formData, permanent_address: { ...formData.permanent_address, road: e.target.value } });
                                    }}
                                  />
                                </div>
                              </div>
                            </div>
                          </div>

                          <div>
                            <label htmlFor="permanent_address_sub_district" className="block text-sm font-medium text-gray-700">
                              <span className="text-red-500 mr-2">*</span>
                              {t("service-form:sub_district")}
                            </label>
                            <div className="mt-1">
                              <ThaiAddressSubDistrict getValue={(v) => handlePermanentAddress(v)} recoilState={permanentAddressState} />
                            </div>
                          </div>

                          <div>
                            <label htmlFor="permanent_address_district" className="block text-sm font-medium text-gray-700">
                              <span className="text-red-500 mr-2">*</span>
                              {t("service-form:district")}
                            </label>
                            <div className="mt-1">
                              <ThaiAddressDistrict getValue={(v) => handlePermanentAddress(v)} recoilState={permanentAddressState} />
                            </div>
                          </div>

                          <div>
                            <label htmlFor="permanent_address_province" className="block text-sm font-medium text-gray-700">
                              <span className="text-red-500 mr-2">*</span>
                              {t("service-form:province")}
                            </label>
                            <div className="mt-1">
                              <ThaiAddressProvince getValue={(v) => handlePermanentAddress(v)} recoilState={permanentAddressState} />
                            </div>
                          </div>

                          <div>
                            <label htmlFor="zipcode" className="block text-sm font-medium text-gray-700">
                              <span className="text-red-500 mr-2">*</span>
                              {t("service-form:postal_code")}
                            </label>
                            <div className="mt-1">
                              <ThaiAddressZipcode getValue={(v) => handlePermanentAddress(v)} recoilState={permanentAddressState} />
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* end address */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Separate />

          {/* section 4 */}
          <div className="mt-10 md:pt-0">
            <div className="md:grid md:grid-cols-3 md:gap-6">
              <div className="md:col-span-1">
                <div className="px-4 sm:px-0">
                  <h3 className="text-lg font-medium leading-6 text-gray-900">{t("partner-form:heading_4")}</h3>
                </div>
              </div>
              <div className="mt-5 md:mt-0 md:col-span-2">
                <div className="shadow overflow-hidden sm:rounded-md">
                  <div className="px-4 py-5 bg-white sm:p-6">
                    <div className="grid grid-cols-6 gap-6">
                      <div className="col-span-6 grid grid-cols-7 gap-4">
                        <div className="col-span-7 sm:col-span-1">
                          <label htmlFor="emergency_contact_prefix" className="block text-sm font-medium text-gray-700">
                            {t("service-form:prefix")}
                          </label>
                          <Select
                            instanceId="emergency-contact-prefix"
                            className="mt-1"
                            onChange={(e) => {
                              setFormData({ ...formData, emergency_contact: { ...formData.emergency_contact, prefix: e.value } });
                            }}
                            options={prefixOptions}
                            defaultValue={prefixOptions[0]}
                            isSearchable={false}
                            ref={emergencyContactPrefixRef}
                          />
                        </div>
                        <div className="col-span-7 sm:col-span-3">
                          <label htmlFor="emergency_contact_first_name" className="block text-sm font-medium text-gray-700">
                            <span className="text-red-500 mr-2">*</span>
                            {t("service-form:first_name")}
                          </label>
                          <input
                            type="text"
                            name="emergency_contact_first_name"
                            id="emergency_contact_first_name"
                            className="mt-1 block w-full shadow-sm sm:text-sm border border-gray-300 rounded-md px-3 py-2"
                            value={formData.emergency_contact.first_name}
                            onChange={(e) => {
                              setFormData({ ...formData, emergency_contact: { ...formData.emergency_contact, first_name: e.target.value } });
                            }}
                            required
                          />
                        </div>
                        <div className="col-span-7 sm:col-span-3">
                          <label htmlFor="emergency_contact_last_name" className="block text-sm font-medium text-gray-700">
                            <span className="text-red-500 mr-2">*</span>
                            {t("service-form:last_name")}
                          </label>
                          <input
                            type="text"
                            name="emergency_contact_last_name"
                            id="emergency_contact_last_name"
                            className="mt-1 block w-full shadow-sm sm:text-sm border border-gray-300 rounded-md px-3 py-2"
                            value={formData.emergency_contact.last_name}
                            onChange={(e) => {
                              setFormData({ ...formData, emergency_contact: { ...formData.emergency_contact, last_name: e.target.value } });
                            }}
                            required
                          />
                        </div>
                      </div>

                      <div className="col-span-6 sm:col-span-3">
                        <label htmlFor="contact_relate" className="block text-sm font-medium text-gray-700">
                          <span className="text-red-500 mr-2">*</span>
                          {t("form:relation")}
                        </label>
                        <Select
                          instanceId="contact-relationship"
                          className="mt-1"
                          onChange={(e) => {
                            setFormData({ ...formData, emergency_contact: { ...formData.emergency_contact, relation: e.value } });
                          }}
                          options={relationshipOptions}
                          defaultValue={relationshipOptions[0]}
                          isSearchable={false}
                          menuPosition={"fixed"}
                          styles={customStyles}
                          ref={emergencyContactRelationRef}
                        />
                      </div>

                      <div className="col-span-6 sm:col-span-4">
                        <label htmlFor="contact_phone_number" className="block text-sm font-medium text-gray-700">
                          <span className="text-red-500 mr-2">*</span>
                          {t("form:phone")}
                        </label>
                        <input
                          type="text"
                          name="contact_phone_number"
                          id="contact_phone_number"
                          className="mt-1 block w-full shadow-sm sm:text-sm border border-gray-300 rounded-md px-3 py-2"
                          value={formData.emergency_contact.phone}
                          pattern="[0-9]*"
                          maxLength={10}
                          onChange={(e) => {
                            setFormData({ ...formData, emergency_contact: { ...formData.emergency_contact, phone: e.target.value } });
                          }}
                          required
                        />
                      </div>

                      <div className="col-span-6">
                        <span className="text-sm font-medium">{t("form:emergency_contact_address")}</span>
                        <div className="grid grid-cols-6 gap-6 mt-2">
                          {/* begin address */}
                          <div className="col-span-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                              <div className="col-span-1 md:col-span-2">
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                                  <div className="col-span-1">
                                    <label htmlFor="house_no" className="block text-sm font-medium text-gray-700">
                                      <span className="text-red-500 mr-2">*</span>
                                      {t("service-form:house_no")}
                                    </label>
                                    <div className="mt-1">
                                      <input
                                        type="text"
                                        name="house_no"
                                        id="house_no"
                                        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                        value={formData.emergency_contact.address.house_no}
                                        onChange={(e) => {
                                          setFormData({
                                            ...formData,
                                            emergency_contact: {
                                              ...formData.emergency_contact,
                                              address: {
                                                ...formData.emergency_contact.address,
                                                house_no: e.target.value,
                                              },
                                            },
                                          });
                                        }}
                                        required
                                      />
                                    </div>
                                  </div>

                                  <div className="col-span-1">
                                    <label htmlFor="village" className="block text-sm font-medium text-gray-700">
                                      {t("service-form:village")}
                                    </label>
                                    <div className="mt-1">
                                      <input
                                        type="text"
                                        name="village"
                                        id="village"
                                        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                        value={formData.emergency_contact.village}
                                        onChange={(e) => {
                                          setFormData({
                                            ...formData,
                                            emergency_contact: {
                                              ...formData.emergency_contact,
                                              address: {
                                                ...formData.emergency_contact.address,
                                                village: e.target.value,
                                              },
                                            },
                                          });
                                        }}
                                      />
                                    </div>
                                  </div>

                                  <div className="col-span-1">
                                    <label htmlFor="village_no" className="block text-sm font-medium text-gray-700">
                                      {t("service-form:village_no")}
                                    </label>
                                    <div className="mt-1">
                                      <input
                                        type="text"
                                        name="village_no"
                                        id="village_no"
                                        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                        value={formData.emergency_contact.village_no}
                                        onChange={(e) => {
                                          setFormData({
                                            ...formData,
                                            emergency_contact: {
                                              ...formData.emergency_contact,
                                              address: {
                                                ...formData.emergency_contact.address,
                                                village_no: e.target.value,
                                              },
                                            },
                                          });
                                        }}
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>

                              <div className="col-span-1 md:col-span-2">
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                                  <div>
                                    <label htmlFor="alley" className="block text-sm font-medium text-gray-700">
                                      {t("service-form:alley")}
                                    </label>
                                    <div className="mt-1">
                                      <input
                                        type="text"
                                        name="alley"
                                        id="alley"
                                        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                        value={formData.emergency_contact.alley}
                                        onChange={(e) => {
                                          setFormData({
                                            ...formData,
                                            emergency_contact: {
                                              ...formData.emergency_contact,
                                              address: {
                                                ...formData.emergency_contact.address,
                                                alley: e.target.value,
                                              },
                                            },
                                          });
                                        }}
                                      />
                                    </div>
                                  </div>

                                  <div>
                                    <label htmlFor="road" className="block text-sm font-medium text-gray-700">
                                      {t("service-form:road")}
                                    </label>
                                    <div className="mt-1">
                                      <input
                                        type="text"
                                        name="road"
                                        id="road"
                                        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                        value={formData.emergency_contact.road}
                                        onChange={(e) => {
                                          setFormData({
                                            ...formData,
                                            emergency_contact: {
                                              ...formData.emergency_contact,
                                              address: {
                                                ...formData.emergency_contact.address,
                                                road: e.target.value,
                                              },
                                            },
                                          });
                                        }}
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>

                              <div>
                                <label htmlFor="sub_district" className="block text-sm font-medium text-gray-700">
                                  <span className="text-red-500 mr-2">*</span>
                                  {t("service-form:sub_district")}
                                </label>
                                <div className="mt-1">
                                  <ThaiAddressSubDistrict getValue={(v) => handleEmergencyContactAddress(v)} recoilState={emergencyAddressState} />
                                </div>
                              </div>

                              <div>
                                <label htmlFor="district" className="block text-sm font-medium text-gray-700">
                                  <span className="text-red-500 mr-2">*</span>
                                  {t("service-form:district")}
                                </label>
                                <div className="mt-1">
                                  <ThaiAddressDistrict getValue={(v) => handleEmergencyContactAddress(v)} recoilState={emergencyAddressState} />
                                </div>
                              </div>

                              <div>
                                <label htmlFor="province" className="block text-sm font-medium text-gray-700">
                                  <span className="text-red-500 mr-2">*</span>
                                  {t("service-form:province")}
                                </label>
                                <div className="mt-1">
                                  <ThaiAddressProvince getValue={(v) => handleEmergencyContactAddress(v)} recoilState={emergencyAddressState} />
                                </div>
                              </div>

                              <div>
                                <label htmlFor="zipcode" className="block text-sm font-medium text-gray-700">
                                  <span className="text-red-500 mr-2">*</span>
                                  {t("service-form:postal_code")}
                                </label>
                                <div className="mt-1">
                                  <ThaiAddressZipcode getValue={(v) => handleEmergencyContactAddress(v)} recoilState={emergencyAddressState} />
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* end address */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Separate />

          {/* section 5 */}
          <div className="mt-10 sm:mt-0">
            <div className="md:grid md:grid-cols-3 md:gap-6">
              <div className="md:col-span-1">
                <div className="px-4 sm:px-0">
                  <h3 className="text-lg font-medium leading-6 text-gray-900">{t("partner-form:heading_5")}</h3>
                </div>
              </div>
              <div className="mt-5 md:mt-0 md:col-span-2">
                <div className="shadow overflow-hidden sm:rounded-md">
                  <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
                    <div className="grid grid-cols-6 gap-4">
                      <div className="col-span-6">
                        <div className="mt-4 space-y-4">
                          <div className="flex items-start">
                            <div className="flex items-center h-5">
                              <input
                                id="car_ownership"
                                name="car_ownership"
                                type="radio"
                                className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded"
                                value="1"
                                onChange={(e) => handleCarOwnership(e)}
                                checked={formData.car_ownership.ownership === "1"}
                              />
                            </div>
                            <div className="ml-3 text-sm">
                              <label htmlFor="car_ownership" className="font-medium">
                                {t("form:owner_car")}
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* file upload for owner car */}

                      {formData.car_ownership.ownership === "1" && (
                        <div className="col-span-6">
                          <div className="grid grid-cols-1 gap-2">
                            <div>
                              <div className="pl-0 md:pl-10">
                                <label htmlFor="applicant_details_photo" className="block text-sm font-medium text-gray-700">
                                  <span className="text-red-500 mr-2">*</span>
                                  {t("partner-form:p8")}
                                </label>
                                <div className="mt-1">
                                  <input
                                    ref={(ref) => (photoIdCardOwnerCarRef.current = ref)}
                                    type="file"
                                    name="applicant_details_photo"
                                    id="applicant_details_photo"
                                    className="mt-1 block w-1/2 py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                    accept="image/*, .pdf"
                                  />
                                </div>
                              </div>
                            </div>

                            <div>
                              <div className="pl-0 md:pl-10">
                                <label htmlFor="applicant_details_photo" className="block text-sm font-medium text-gray-700">
                                  <span className="text-red-500 mr-2">*</span>
                                  {t("partner-form:p9")}
                                </label>
                                <div className="mt-1">
                                  <input
                                    ref={(ref) => (photoVehicleLicenseOwnerCarRef.current = ref)}
                                    type="file"
                                    name="applicant_details_photo"
                                    id="applicant_details_photo"
                                    className="mt-1 block w-1/2 py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                    accept="image/*, .pdf"
                                  />
                                </div>
                              </div>
                            </div>

                            <div>
                              <div className="pl-0 md:pl-10">
                                <label htmlFor="applicant_details_photo" className="block text-sm font-medium text-gray-700">
                                  <span className="text-red-500 mr-2">*</span>
                                  {t("partner-form:p7")}
                                </label>
                                <div className="mt-1">
                                  <input
                                    ref={(ref) => (photoVehicleRegistrationOwnerCarRef.current = ref)}
                                    type="file"
                                    name="applicant_details_photo"
                                    id="applicant_details_photo"
                                    className="mt-1 block w-1/2 py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                    accept="image/*, .pdf"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}

                      <div className="col-span-6">
                        <div className="space-y-4">
                          <div className="flex items-start">
                            <div className="flex items-center h-5">
                              <input
                                id="reject_car_ownership"
                                name="car_ownership"
                                type="radio"
                                className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded"
                                value="0"
                                onChange={(e) => handleCarOwnership(e)}
                              />
                            </div>
                            <div className="ml-3 text-sm">
                              <label htmlFor="reject_car_ownership" className="font-medium">
                                {t("form:non_owner_car")}
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* file upload for not owner car */}

                      {formData.car_ownership.ownership === "0" && (
                        <div className="col-span-6">
                          <div className="grid grid-cols-1 gap-2">
                            <div>
                              <div className="pl-0 md:pl-10">
                                <label htmlFor="applicant_details_photo" className="block text-sm font-medium text-gray-700">
                                  <span className="text-red-500 mr-2">*</span>
                                  {t("partner-form:p1")}
                                </label>
                                <div className="mt-1">
                                  <input
                                    ref={(ref) => (photoIdCardOwnerCarRef.current = ref)}
                                    type="file"
                                    name="applicant_details_photo"
                                    id="applicant_details_photo"
                                    className="mt-1 block w-1/2 py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                    accept="image/*, .pdf"
                                  />
                                </div>
                              </div>
                            </div>

                            <div>
                              <div className="pl-0 md:pl-10">
                                <label htmlFor="applicant_details_photo" className="block text-sm font-medium text-gray-700">
                                  <span className="text-red-500 mr-2">*</span>
                                  {t("partner-form:p2")}
                                </label>
                                <div className="mt-1">
                                  <input
                                    ref={(ref) => (photoHouseRegistrationOwnerCarRef.current = ref)}
                                    type="file"
                                    name="applicant_details_photo"
                                    id="applicant_details_photo"
                                    className="mt-1 block w-1/2 py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                    accept="image/*, .pdf"
                                  />
                                </div>
                              </div>
                            </div>

                            <div>
                              <div className="pl-0 md:pl-10">
                                <label htmlFor="applicant_details_photo" className="block text-sm font-medium text-gray-700">
                                  <span className="text-red-500 mr-2">*</span>
                                  {t("partner-form:p3")}
                                </label>
                                <div className="mt-1">
                                  <input
                                    ref={(ref) => (photoIdCardHolderCarRef.current = ref)}
                                    type="file"
                                    name="applicant_details_photo"
                                    id="applicant_details_photo"
                                    className="mt-1 block w-1/2 py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                    accept="image/*, .pdf"
                                  />
                                </div>
                              </div>
                            </div>

                            <div>
                              <div className="pl-0 md:pl-10">
                                <label htmlFor="applicant_details_photo" className="block text-sm font-medium text-gray-700">
                                  <span className="text-red-500 mr-2">*</span>
                                  {t("partner-form:p4")}
                                </label>
                                <div className="mt-1">
                                  <input
                                    ref={(ref) => (photoHouseRegistrationHolderCarRef.current = ref)}
                                    type="file"
                                    name="applicant_details_photo"
                                    id="applicant_details_photo"
                                    className="mt-1 block w-1/2 py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                    accept="image/*, .pdf"
                                  />
                                </div>
                              </div>
                            </div>

                            <div>
                              <div className="pl-0 md:pl-10">
                                <label htmlFor="applicant_details_photo" className="block text-sm font-medium text-gray-700">
                                  <span className="text-red-500 mr-2">*</span>
                                  {t("partner-form:p5")}
                                </label>
                                <div className="mt-1">
                                  <input
                                    ref={(ref) => (photoVehicleLicenseHolderCarRef.current = ref)}
                                    type="file"
                                    name="applicant_details_photo"
                                    id="applicant_details_photo"
                                    className="mt-1 block w-1/2 py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                    accept="image/*, .pdf"
                                  />
                                </div>
                              </div>
                            </div>

                            <div>
                              <div className="pl-0 md:pl-10">
                                <label htmlFor="applicant_details_photo" className="block text-sm font-medium text-gray-700">
                                  <span className="text-red-500 mr-2">*</span>
                                  {t("partner-form:p6")}
                                </label>
                                <div className="mt-1">
                                  <input
                                    ref={(ref) => (photoConsentOwnerCarRef.current = ref)}
                                    type="file"
                                    name="applicant_details_photo"
                                    id="applicant_details_photo"
                                    className="mt-1 block w-1/2 py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                    accept="image/*, .pdf"
                                  />
                                </div>
                              </div>
                            </div>

                            <div>
                              <div className="pl-0 md:pl-10">
                                <label htmlFor="applicant_details_photo" className="block text-sm font-medium text-gray-700">
                                  <span className="text-red-500 mr-2">*</span>
                                  {t("partner-form:p7")}
                                </label>
                                <div className="mt-1">
                                  <input
                                    ref={(ref) => (photoVehicleRegistrationOwnerCarRef.current = ref)}
                                    type="file"
                                    name="applicant_details_photo"
                                    id="applicant_details_photo"
                                    className="mt-1 block w-1/2 py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                    accept="image/*, .pdf"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}

                      <div className="col-span-6">
                        <div className="flex items-start">
                          <div className="flex items-center h-5">
                            <input
                              id="car_ownership_other_car"
                              name="car_ownership"
                              type="radio"
                              className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded"
                              value="2"
                              onChange={(e) => handleCarOwnership(e)}
                            />
                          </div>
                          <div className="ml-3 text-sm">
                            <label htmlFor="car_ownership_other_car" className="font-medium">
                              {t("form:other")}
                            </label>
                          </div>
                        </div>
                      </div>

                      {formData.car_ownership.ownership === "2" && (
                        <div className="col-span-6 sm:col-span-5">
                          <input
                            type="text"
                            name="car_ownership_other"
                            id="car_ownership_other"
                            className="mt-1 block w-full shadow-sm sm:text-sm border border-gray-300 rounded-md px-3 py-2"
                            onChange={(e) => {
                              setFormData({
                                ...formData,
                                car_ownership: {
                                  ...formData.car_ownership,
                                  other: e.target.value,
                                },
                              });
                            }}
                            required
                          />
                        </div>
                      )}

                      <div className="col-span-6">
                        <div>
                          <label htmlFor="applicant_details_photo" className="block text-sm font-medium text-gray-700">
                            <span className="text-red-500 mr-2">*</span>
                            {t("partner-form:p17")}
                          </label>
                          <div className="mt-1">
                            <input
                              ref={(ref) => (photoCarRef.current = ref)}
                              type="file"
                              name="applicant_details_photo"
                              id="applicant_details_photo"
                              className="mt-1 block w-1/2 py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                              accept="image/*, .pdf"
                              multiple
                            />
                          </div>
                        </div>
                      </div>

                      <div className="col-span-6">
                        {/* <div className="flex gap-1">
                          <span className="text-red-500">*</span>
                          <span>กรณีที่ท่านไม่ใช่เจ้าของรถ ให้เตรียมเอกสารดังนี้ (อย่างละ 1 ชุด)</span>
                        </div>
                        <ul className="list-decimal pl-10">
                          <li>สําเนาบัตรประจําตัวประชาชน ของเจ้าของรถ</li>
                          <li>สําเนาทะเบียนบ้าน ของเจ้าของรถ</li>
                          <li>สําเนาบัตรประจําตัวประชาชน ของผู้ครอบครองรถ</li>
                          <li>สําเนาทะเบียนบ้าน ของผู้ครอบครองรถ</li>
                          <li>สําเนาใบอนุญาตขับขี่ ของผู้ครอบครองรถ</li>
                          <li>หนังสือยินยอมจากเจ้าของรถให้ผู้ครอบครองรถมีสิทธิในการครอบครองรถ</li>
                          <li>สําเนาทะเบียนรถ</li>
                        </ul> */}
                        <div className="flex gap-1 text-red-500 text-sm">
                          <span>*</span>
                          <span>{t("partner-form:signature")}</span>
                        </div>
                        {/* <div className="flex gap-1 mt-4">
                          <span className="text-red-500">*</span>
                          <span>กรณีที่ผู้ครอบครองเป็นเจ้าของรถ (อย่างละ 1 ชุด)</span>
                        </div>
                        <ul className="list-decimal pl-10">
                          <li>สําเนาบัตรประจําตัวประชาชน</li>
                          <li>สําเนาใบอนุญาตขับขี่</li>
                          <li>สําเนาทะเบียนรถ</li>
                        </ul>
                        <div className="flex gap-1 text-red-500">
                          <span>*</span>
                          <span>เอกสารทุกชุดเซ็นต์รับรองสําเนาถูกต้อง พร้อมลงนามทุกแผ่น</span>
                        </div> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Separate />

          {/* section 6 */}
          <div className="mt-10 sm:mt-0">
            <div className="md:grid md:grid-cols-3 md:gap-6">
              <div className="md:col-span-1">
                <div className="px-4 sm:px-0"></div>
              </div>
              <div className="mt-5 md:mt-0 md:col-span-2">
                <div className="shadow overflow-hidden sm:rounded-md">
                  <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
                    <div className="grid grid-cols-6 gap-4">
                      <div className="col-span-6">
                        <div className="mt-4 space-y-4">
                          <div className="flex items-start">
                            <div className="flex items-center h-5">
                              <input
                                id="terms_1"
                                name="terms_1"
                                type="checkbox"
                                className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded"
                                onChange={(e) => handleCheckboxTerms(e, 1)}
                              />
                            </div>
                            <div className="ml-3 text-sm">
                              <label htmlFor="terms_1" className="font-medium">
                                {t("partner-form:p10")}
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-span-6">
                        <div className="mt-4 space-y-4">
                          <div className="flex items-start">
                            <div className="flex items-center h-5">
                              <input
                                id="terms_2"
                                name="terms_2"
                                type="checkbox"
                                className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded"
                                onChange={(e) => handleCheckboxTerms(e, 2)}
                              />
                            </div>
                            <div className="ml-3 text-sm">
                              <label htmlFor="terms_2" className="font-medium">
                                {t("partner-form:p11")}
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-span-6">
                        <div className="mt-4 space-y-4">
                          <div className="flex items-start">
                            <div className="flex items-center h-5">
                              <input
                                id="terms_3"
                                name="terms_3"
                                type="checkbox"
                                className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded"
                                onChange={(e) => handleCheckboxTerms(e, 3)}
                              />
                            </div>
                            <div className="ml-3 text-sm">
                              <label htmlFor="terms_3" className="font-medium">
                                {t("partner-form:p12")}
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-span-6 mt-4">
                        <span className="font-medium">{t("partner-form:heading_8")}</span>
                        <div className="mt-2">
                          <ol>
                            <li>{t("partner-form:p13")}</li>
                            <li>{t("partner-form:p14")}</li>
                            <li>{t("partner-form:p15")}</li>
                            <li>
                              <span>{t("partner-form:p16")}</span>
                              <ol>
                                <li>{t("partner-form:p16_1")}</li>
                                <li>{t("partner-form:p16_2")}</li>
                                <li>{t("partner-form:p16_3")}</li>
                              </ol>
                            </li>
                            <li>{t("partner-form:p16_4")}</li>
                            <li dangerouslySetInnerHTML={{ __html: t("partner-form:p18") }}></li>
                          </ol>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                    <button
                      type="submit"
                      className={`inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${
                        termsAccepted ? "text-white bg-blue-600 hover:bg-blue-700" : "text-gray-500 bg-gray-200"
                      }`}
                      disabled={!termsAccepted}
                    >
                      {t("common:send")}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
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
    </div>
  );
};

export default PartnerForm;
