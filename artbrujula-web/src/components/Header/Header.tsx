import styles from './Header.module.scss';
import { Link } from 'react-router-dom';
import { FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { useLanguageSelector } from './Header.helpers';
import { useTranslation } from 'react-i18next';
import logo from '../../assets/images/AF_logo_Brujula_HorizontalBlanco.png';

function LanguageSelector() {
    const { changeLanguage } = useLanguageSelector();
    return (
        <div className={styles.languageSelector}>
            <span style={{ cursor: 'pointer' }} onClick={() => changeLanguage('ca')}>CAT</span>
            <span style={{ cursor: 'pointer' }} onClick={() => changeLanguage('es')}>ESP</span>
        </div>
    );
}

function NavBar() {
    const { t } = useTranslation();
    return (
        <nav className={styles.navbar}>
            <ul className={styles.menu}>
                <li className={styles.dropdown}>
                    <a>BRÚJULA ARTISTICA
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="18"
                            height="18"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="white"
                            strokeWidth="3"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            style={{ marginLeft: '6px', verticalAlign: 'middle' }}
                        >
                            <polyline points="6 9 12 15 18 9" />
                        </svg>
                    </a>
                    <ul className={styles.dropdownMenu}>
                        <li><Link to="/quienes-somos">{t("header.who")}</Link></li>
                        <li><Link to="/contacto">{t("header.contact")}</Link></li>
                        <li>{t("header.volunteer")}</li>
                    </ul>
                </li>
                <li className={styles.dropdown}>
                    <a>{t("header.offer")}
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="white"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        style={{ marginLeft: '6px', verticalAlign: 'middle' }}
                        >
                            <polyline points="6 9 12 15 18 9" />
                        </svg>
                    </a>
                    <ul className={styles.dropdownMenuDuplex}>
                        <li className={styles.columnTitle}>{t("header.program")}</li>
                        <li className={styles.columnTitle}>{t("header.activities")}</li>
                        <li><a href="/calendario">{t("header.calendar")}</a></li>
                        <li><a href="/talleres">{t("header.courses")}</a></li>
                        <li><a href="/ultimas-actividades">{t("header.old-activities")}</a></li>
                        <li><a href="/eventos">{t("header.events")}</a></li>
                    </ul>
                </li>
                <li className={styles.dropdown}><a href="/galeria">{t("header.gallery")}</a></li>
            </ul>
        </nav>
    );
}

const Header: React.FC = () => {
    return (
        <div className={styles.header}>
            <div className={styles.headerContent}>
                <img
                    src={logo}
                    alt="Art Brújula Logo"
                    width={230}
                    height={110}
                />
                <div className={styles.headerRight}>
                    <LanguageSelector />
                    <div className={styles.navAndIcons}>
                        <NavBar />
                        <div className={styles.optionsContact}>
                            <a href="https://www.instagram.com/artbrujula.stboi" target="_blank" rel="noopener noreferrer">
                                <FaInstagram size={28} color="#fff" />
                            </a>
                            <a href='https://api.whatsapp.com/send?phone=34614130355' target="_blank" rel="noopener noreferrer">
                                <FaWhatsapp size={28} color="#fff" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;