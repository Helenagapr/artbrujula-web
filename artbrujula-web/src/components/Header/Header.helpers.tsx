import { useTranslation } from 'react-i18next';

export function useLanguageSelector() {
    const { i18n } = useTranslation();
    const changeLanguage = (lng: string) => {
        i18n.changeLanguage(lng);
    };
    return { changeLanguage };
}