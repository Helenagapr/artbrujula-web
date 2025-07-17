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
                        <li><Link to="/contacto">Contacto</Link></li>
                        <li>¿Quieres ser voluntario?</li>
                    </ul>
                </li>
                <li className={styles.dropdown}>
                    <a>¿Qué ofrecemos?
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
                        <li className={styles.columnTitle}>Programación</li>
                        <li className={styles.columnTitle}>Actividades</li>
                        <li><a href="/calendario">Calendario</a></li>
                        <li><a href="/talleres">Talleres</a></li>
                        <li><a href="/ultimas-actividades">Ultimas actividades</a></li>
                        <li><a href="/eventos">Eventos</a></li>
                    </ul>

                </li>
                <li className={styles.dropdown}><a href="/galeria">Galeria</a></li>
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
                            <FaWhatsapp size={28} color="#ffffffff" />
                        </div>  
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Header;