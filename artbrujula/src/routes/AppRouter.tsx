import { Routes, Route, Navigate } from 'react-router-dom';
import { ContactPage } from '../pages/contact';
import { GalleryPage } from '../pages/galery';
import { HomePage } from '../pages/home';
import { WhoPage } from '../pages/who';

export const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/galeria" element={<GalleryPage />} />
            <Route path="/quienes-somos" element={<WhoPage />} />
            <Route path="/contacto" element={<ContactPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
    )
}