import useTranslation from "next-translate/useTranslation";

export default () => {
  const { t } = useTranslation();

  return [
    { label: t("common:no"), value: t("common:no") },
    { label: t("common:staff"), value: t("common:staff") },
    { label: t("common:wheelchair"), value: t("common:wheelchair") },
    { label: t("common:other"), value: t("common:other") },
  ];
};
