import { atom } from "recoil";

const user = atom({
  key: "pdpaState",
  default: {
    pdpaRoot: true,
    pdpaSetting: false,
    pdpaChild: false,
    pdpaChildLists: {
      pdpa_category: "",
      pdpa_child: "",
    },
  },
});

export default user;
