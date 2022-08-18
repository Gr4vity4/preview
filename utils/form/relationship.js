import useTranslation from "next-translate/useTranslation";

export default () => {
  const { t } = useTranslation();

  return [
    { label: t("common:child"), value: t("common:child") },
    { label: t("common:father_mother"), value: t("common:father_mother") },
    { label: t("common:husband_wife"), value: t("common:husband_wife") },
    { label: t("common:relative"), value: t("common:relative") },
    { label: t("common:friend"), value: t("common:friend") },
    { label: t("common:other"), value: t("common:other") },
  ];
};
