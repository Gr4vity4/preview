import { atom } from "recoil";

const partnerForm = atom({
  key: "partnerFormState",
  default: {
    applicant_details: {
      prefix: "",
      first_name: "",
      last_name: "",
      birth_date: "",
      id_card: "",
      date_of_issue: "",
      date_of_expiry: "",
      phone: "",
    },
    current_address: {
      house_no: "",
      village: "",
      village_no: "",
      alley: "",
      road: "",
      sub_district: "",
      district: "",
      province: "",
      zipcode: "",
    },
    permanent_address: {
      house_no: "",
      village: "",
      village_no: "",
      alley: "",
      road: "",
      sub_district: "",
      district: "",
      province: "",
      zipcode: "",
    },
    emergency_contact: {
      prefix: "",
      first_name: "",
      last_name: "",
      relation: "",
      phone: "",
      address: {
        house_no: "",
        village: "",
        village_no: "",
        alley: "",
        road: "",
        sub_district: "",
        district: "",
        province: "",
        zipcode: "",
      },
    },
    car_ownership: {
      ownership: "1",
      other: "",
    },
  },
});

export default partnerForm;
