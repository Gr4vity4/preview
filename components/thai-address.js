import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import Select from "react-select";
import { components } from "react-select";
import ThailandAddress from "../utils/thailand-address";

const componentConfig = {
  DropdownIndicator: () => null,
  IndicatorSeparator: () => null,
  Menu: (props) => {
    if (props.selectProps.inputValue.length === 0) return null;

    return (
      <>
        <components.Menu {...props} />
      </>
    );
  },
};

// fixed react-select css
const customStyles = {
  menuPortal: (provided) => ({ ...provided, zIndex: 9999 }),
  menu: (provided) => ({ ...provided, zIndex: 9999 }),
};

const formatAddress = (data) => {
  return {
    subDistrict: { label: data[0], value: data[0] },
    district: { label: data[1], value: data[1] },
    province: { label: data[2], value: data[2] },
    zipcode: { label: data[3], value: data[3] },
  };
};

const ThaiAddressSubDistrict = ({ getValue, recoilState }) => {
  const [optionSelected, setOptionSelected] = useRecoilState(recoilState);
  const [subDistrictOptions, setSubDistrictOptions] = useState([{}]);

  // handle sub-district
  const onInputChangeSubDistrict = (v) => {
    const result = ThailandAddress.search({ tumbon: v }, 10);
    let options = result.map((item) => {
      return {
        label: `${item.tumbon}, ${item.city}, ${item.province}, ${item.zipcode}`,
        value: item.tumbon,
      };
    });
    const unique = [...new Map(options.map((item) => [item.label, item])).values()];
    setSubDistrictOptions(unique);
  };

  const onChangeSelectOption = (e) => {
    const selected = e.label.split(",");
    getValue(selected);
    setOptionSelected({ ...optionSelected, ...formatAddress(selected) });
  };

  return (
    <Select
      value={optionSelected.subDistrict}
      instanceId="sub-district-instance"
      options={subDistrictOptions}
      onInputChange={(e) => onInputChangeSubDistrict(e)}
      onChange={(e) => onChangeSelectOption(e)}
      placeholder=""
      components={componentConfig}
      formatOptionLabel={(option, { context }) => (context === "value" ? option.value : option.label)}
      menuPosition="fixed"
      styles={customStyles}
      required
    />
  );
};

const ThaiAddressDistrict = ({ getValue, recoilState }) => {
  const [optionSelected, setOptionSelected] = useRecoilState(recoilState);
  const [districtOptions, setDistrictOptions] = useState([{}]);

  // handle district
  const onInputChangeDistrict = (v) => {
    const result = ThailandAddress.search({ city: v }, 10);
    let options = result.map((item) => {
      return {
        label: `${item.tumbon}, ${item.city}, ${item.province}, ${item.zipcode}`,
        value: item.city,
      };
    });
    const unique = [...new Map(options.map((item) => [item.label, item])).values()];
    setDistrictOptions(unique);
  };

  const onChangeSelectOption = (e) => {
    const selected = e.label.split(",");
    getValue(selected);
    setOptionSelected({ ...optionSelected, ...formatAddress(selected) });
  };

  return (
    <Select
      value={optionSelected.district}
      instanceId="district-instance"
      options={districtOptions}
      onInputChange={(e) => onInputChangeDistrict(e)}
      onChange={(e) => onChangeSelectOption(e)}
      placeholder=""
      components={componentConfig}
      formatOptionLabel={(option, { context }) => (context === "value" ? option.value : option.label)}
      menuPosition="fixed"
      styles={customStyles}
      required
    />
  );
};

const ThaiAddressProvince = ({ getValue, recoilState }) => {
  const [optionSelected, setOptionSelected] = useRecoilState(recoilState);
  const [provinceOptions, setProvinceOptions] = useState([{}]);

  // handle province
  const onInputChangeProvince = (v) => {
    const result = ThailandAddress.search({ province: v }, 10);
    let options = result.map((item) => {
      return {
        label: `${item.tumbon}, ${item.city}, ${item.province}, ${item.zipcode}`,
        value: item.province,
      };
    });
    const unique = [...new Map(options.map((item) => [item.label, item])).values()];
    setProvinceOptions(unique);
  };

  const onChangeSelectOption = (e) => {
    const selected = e.label.split(",");
    getValue(selected);
    setOptionSelected({ ...optionSelected, ...formatAddress(selected) });
  };

  return (
    <Select
      value={optionSelected.province}
      instanceId="province-instance"
      options={provinceOptions}
      onInputChange={(e) => onInputChangeProvince(e)}
      onChange={(e) => onChangeSelectOption(e)}
      placeholder=""
      components={{
        DropdownIndicator: () => null,
        IndicatorSeparator: () => null,
        Menu: (props) => {
          if (props.selectProps.inputValue.length === 0) return null;

          return (
            <>
              <components.Menu {...props} />
            </>
          );
        },
      }}
      formatOptionLabel={(option, { context }) => (context === "value" ? option.value : option.label)}
      menuPosition="fixed"
      styles={customStyles}
      required
    />
  );
};

const ThaiAddressZipcode = ({ getValue, recoilState }) => {
  const [optionSelected, setOptionSelected] = useRecoilState(recoilState);
  const [zipcodeOptions, setZipcodeOptions] = useState([{}]);

  // handle zipcode
  const onInputChangeZipcode = (v) => {
    const result = ThailandAddress.search({ zipcode: v }, 10);
    let options = result.map((item) => {
      return {
        label: `${item.tumbon}, ${item.city}, ${item.province}, ${item.zipcode}`,
        value: item.zipcode,
      };
    });
    const unique = [...new Map(options.map((item) => [item.label, item])).values()];
    setZipcodeOptions(unique);
  };

  const onChangeSelectOption = (e) => {
    const selected = e.label.split(",");
    getValue(selected);
    setOptionSelected({ ...optionSelected, ...formatAddress(selected) });
  };

  return (
    <Select
      value={optionSelected.zipcode}
      instanceId="zipcode-instance"
      options={zipcodeOptions}
      onInputChange={(e) => onInputChangeZipcode(e)}
      onChange={(e) => onChangeSelectOption(e)}
      placeholder=""
      components={{
        DropdownIndicator: () => null,
        IndicatorSeparator: () => null,
        Menu: (props) => {
          if (props.selectProps.inputValue.length === 0) return null;

          return (
            <>
              <components.Menu {...props} />
            </>
          );
        },
      }}
      formatOptionLabel={(option, { context }) => (context === "value" ? option.value : option.label)}
      menuPosition="fixed"
      styles={customStyles}
      required
    />
  );
};

export { ThaiAddressSubDistrict, ThaiAddressDistrict, ThaiAddressProvince, ThaiAddressZipcode };
