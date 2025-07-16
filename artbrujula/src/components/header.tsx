import styles from '../styles/header.module.scss';
import Image from 'next/image';
import { Link } from 'react-router-dom';

function NavBar() {
    return (
        <nav className={styles.navbar}>
            <ul className={styles.menu}>
                <li className={styles.dropdown}>
                    <a>BRÚJULA ARTISTICA</a>
                    <ul className={styles.dropdownMenu}>
                        <li><Link to="/quienes-somos">Quienes somos</Link></li>
                        <li><a href="/contact">Contacto</a></li>
                        <li>¿Quieres ser voluntario?</li>
                    </ul>
                </li>
                <li className={styles.dropdown}>
                    <a>¿Qué ofrecemos?</a>
                    <ul className={styles.dropdownMenu}>
                        <li><a href="/services">Servicios</a></li>
                        <li><a href="/events">Eventos</a></li>
                        <li><a href="/exhibitions">Exposiciones</a></li>
                    </ul>
                </li>
                <li><a href="/galery">Galeria</a></li>
            </ul>
        </nav>
    );
}


const Header: React.FC = () => {
    return(
        <header className={styles.header}>
            <div className={styles.headerContent}>
                <Image src="/assets/images/AF_logo_Brujula_HorizontalBlanco.png"
                    alt="Art Brújula Logo"
                    width={220} 
                    height={100}
                />
                <NavBar />
            </div>
        </header>

    )
}

export default Header;