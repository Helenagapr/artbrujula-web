import styles from '../styles/header.module.scss';
import Image from 'next/image';
import { Link } from 'react-router-dom';
import { FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';


function LanguageSelector() {
    const { i18n } = useTranslation();
    
    const changeLanguage = (lng: any) => {
        i18n.changeLanguage(lng);
    };

    return (
        <div className={styles.languageSelector}>
            <span style={{ cursor: 'pointer' }} onClick={() => changeLanguage('cat')}>CAT</span>
            <span style={{ cursor: 'pointer' }} onClick={() => changeLanguage('es')}>ESP</span>
        </div>
    )

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

                        <li><Link to="/quienes-somos">{t("header.quienes-somos")}</Link></li>
                        <li><Link to="/contacto">{t("header.contacto")}</Link></li>
                        <li>{t("header.voluntario")}</li>
                    </ul>
                </li>
                <li className={styles.dropdown}>
                    <a>{t("header.que-ofrecemos")}
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
                        <li className={styles.columnTitle}>{t("header.programacion")}</li>
                        <li className={styles.columnTitle}>{t("header.actividades")}</li>
                        <li><a href="/calendario">{t("header.calendario")}</a></li>
                        <li><a href="/talleres">{t("header.talleres")}</a></li>
                        <li><a href="/ultimas-actividades">{t("header.ultimas-actividades")}</a></li>
                        <li><a href="/eventos">{t("header.eventos")}</a></li>
                    </ul>

                </li>
                <li className={styles.dropdown}><a href="/galeria">{t("header.galery")}</a></li>
            </ul>
        </nav>
    );
}


const Header: React.FC = () => {
    return(
        <div className={styles.header}>
            <div className={styles.headerContent}>
                <Image src="/assets/images/AF_logo_Brujula_HorizontalBlanco.png"
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
                                <FaInstagram size={28} color="#fff"/>
                            </a>
                            <a href='https://api.whatsapp.com/send?phone=34614130355' target="_blank" rel="noopener noreferrer">
                                <FaWhatsapp size={28} color="#fff"/>
                            </a>
                          
                        </div>  
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Header;