import { BARBERS, SERVICES, BRANCHES } from '../constants';
import { SavedPreferences } from '../types';
import { getBookingLink } from '../bookingLinks';
import { useLanguage } from '../LanguageContext';
import LanguageToggle from './LanguageToggle';
import './QuickAction.css';

interface QuickActionProps {
    preferences: SavedPreferences;
    onReset: () => void;
    onEdit: (step: number) => void;
}

export default function QuickAction({ preferences, onReset, onEdit }: QuickActionProps) {
    const { t } = useLanguage();
    const barber = BARBERS.find(b => b.id === preferences.barberId);
    const service = SERVICES.find(s => s.id === preferences.serviceId);
    const branch = BRANCHES.find(b => b.id === preferences.branchId);

    const handleBookNow = () => {
        // Получаем ссылку для записи из bookingLinks.ts
        const bookingUrl = getBookingLink(preferences.barberId, preferences.serviceId);

        if (bookingUrl) {
            // Открываем ссылку в новой вкладке
            window.open(bookingUrl, '_blank');
        } else {
            // Если ссылка не найдена, показываем предупреждение
            const barberName = barber?.id ? t.barbers[barber.id as keyof typeof t.barbers] : '';
            const serviceName = service?.id ? t[service.id as keyof typeof t] : '';
            alert(`Booking link not configured for ${barberName} and ${serviceName}. Please contact administrator.`);
            console.error(`Booking link not found for barber: ${preferences.barberId}, service: ${preferences.serviceId}`);
        }
    };

    return (
        <div className="quick-action">
            <div className="quick-header">
                <h1>{t.yourPreferences}</h1>
            </div>

            <div className="booking-card">
                <div className="booking-info">
                    <div className="info-row">
                        <span className="label">{t.branch}:</span>
                        <span className="value">{t[branch?.id as 'central' | 'north']}</span>
                    </div>
                    <div className="info-row">
                        <span className="label">{t.barber}:</span>
                        <span className="value">{barber?.id ? t.barbers[barber.id as keyof typeof t.barbers] : ''}</span>
                    </div>
                    <div className="info-row">
                        <span className="label">{t.service}:</span>
                        <span className="value clickable" onClick={() => onEdit(3)} title={`${t.edit} ${t.service.toLowerCase()}`}>
                            {service?.id ? t[service.id as keyof typeof t] : ''}
                        </span>
                    </div>
                    <div className="info-row">
                        <span className="label">{t.duration}:</span>
                        <span className="value">{service?.duration} {t.minutes}</span>
                    </div>
                </div>

                <button className="book-btn red" onClick={handleBookNow}>
                    📅 {t.book}
                </button>

                <div className="action-buttons">
                    <button className="settings-btn" onClick={onReset}>
                        ⚙️ {t.reset}
                    </button>
                    <LanguageToggle />
                </div>
            </div>
        </div>
    );
}
