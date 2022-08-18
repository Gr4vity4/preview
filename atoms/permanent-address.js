import { atom } from "recoil";

const permanentAddress = atom({
  key: "permanentAddressState",
  default: {
    subDistrict: { label: "", value: "" },
    district: { label: "", value: "" },
    province: { label: "", value: "" },
    zipcode: { label: "", value: "" },
  },
});

export default permanentAddress;
