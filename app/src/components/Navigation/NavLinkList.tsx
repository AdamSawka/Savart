import { routes } from 'routing/routes';
import { useTranslation } from 'react-i18next';

const NavLinksList = () => {
  const { t } = useTranslation();

  const navigation = () => {
    return [
      {
        title: t('About Us'),
        path: routes.ABOUT_US.path,
      },
      {
        title: t('Gallery'),
        path: routes.GALLERY.path,
      },
      {
        title: t('Contact'),
        path: routes.CONTACT.path,
      },
    ];
  };
  return navigation();
};
export default NavLinksList;
