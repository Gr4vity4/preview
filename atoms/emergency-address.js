import { atom } from "recoil";

const emergancyAddress = atom({
  key: "emergancyAddressState",
  default: {
    subDistrict: { label: "", value: "" },
    district: { label: "", value: "" },
    province: { label: "", value: "" },
    zipcode: { label: "", value: "" },
  },
});

export default emergancyAddress;
