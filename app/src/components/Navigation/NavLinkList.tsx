import { routes } from "routing/routes";
import { useTranslation } from "react-i18next";

const NavLinksList = () => {
    const { t } = useTranslation();

    const navigation = () => {
        return [
            {
                title: t("Actives Sessions"),
                path: routes.HOME.path,
                navSection: t("Users"),
            },

        ];
    };
    return navigation();
};
export default NavLinksList;
