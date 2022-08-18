import useTranslation from "next-translate/useTranslation";

export default () => {
  const { t } = useTranslation();

  return [
    {
      label: t("common:mr"),
      value: t("common:mr"),
    },
    {
      label: t("common:ms"),
      value: t("common:ms"),
    },
    {
      label: t("common:mrs"),
      value: t("common:mrs"),
    },
  ];
};
