import styles from '../styles/header.module.scss';
import Image from 'next/image';
import { Link } from 'react-router-dom';
import { FaInstagram, FaWhatsapp } from 'react-icons/fa';


function NavBar() {
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
                        <li><Link to="/quienes-somos">Quienes somos</Link></li>
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
                    <ul className={styles.dropdownMenu}>
                        <li><a href="/services">Servicios</a></li>
                        <li><a href="/events">Eventos</a></li>
                        <li><a href="/exhibitions">Exposiciones</a></li>
                    </ul>
                </li>
                <li className={styles.dropdown}><a href="/galery">Galeria</a></li>
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
                    width={220} 
                    height={100}
                />
                <div className={styles.headerRight}>
                    <div className={styles.languageSelector}>
                        <span>CAT</span>
                        <span>ESP</span>
                    </div>
                    <div className={styles.navAndIcons}>
                        <NavBar />
                        <div className={styles.optionsContact}>
                            <FaInstagram size={28} color="#fff" />
                            <FaWhatsapp size={28} color="#ffffffff" />
                        </div>  
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Header;