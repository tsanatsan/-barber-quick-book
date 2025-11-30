import { useLanguage } from '../LanguageContext';
import './LanguageToggle.css';

export default function LanguageToggle() {
    const { language, setLanguage } = useLanguage();

    const toggleLanguage = () => {
        setLanguage(language === 'bg' ? 'en' : 'bg');
    };

    return (
        <button
            className="language-toggle"
            onClick={toggleLanguage}
            aria-label="Toggle language"
        >
            {language === 'bg' ? 'EN' : 'BG'}
        </button>
    );
}
