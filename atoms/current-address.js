import { atom } from "recoil";

const currentThaiAddress = atom({
  key: "currentThaiAddressState",
  default: {
    subDistrict: { label: "", value: "" },
    district: { label: "", value: "" },
    province: { label: "", value: "" },
    zipcode: { label: "", value: "" },
  },
});

export default currentThaiAddress;
