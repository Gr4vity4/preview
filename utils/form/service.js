import useTranslation from "next-translate/useTranslation";

export default () => {
  const { t } = useTranslation();

  return [
    {
      label: t("common:home_hospital_transfer"),
      value: t("common:home_hospital_transfer"),
    },
    {
      label: t("common:other_activity_service"),
      value: t("common:other_activity_service"),
    },
  ];
};
