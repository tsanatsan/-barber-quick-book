import { BARBERS, SERVICES, BRANCHES } from '../constants';
import { SavedPreferences } from '../types';
import { getBookingLink } from '../bookingLinks';
import './QuickAction.css';

interface QuickActionProps {
    preferences: SavedPreferences;
    onReset: () => void;
    onEdit: (step: number) => void;
}

export default function QuickAction({ preferences, onReset, onEdit }: QuickActionProps) {
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
            alert(`Ссылка для записи не настроена для мастера ${barber?.name} и услуги ${service?.name}. Пожалуйста, обратитесь к администратору.`);
            console.error(`Booking link not found for barber: ${preferences.barberId}, service: ${preferences.serviceId}`);
        }
    };

    return (
        <div className="quick-action">
            <div className="quick-header">
                <h1>Ready To Book!</h1>
            </div>

            <div className="booking-card">
                <div className="booking-info">
                    <div className="info-row">
                        <span className="label">Филиал:</span>
                        <span className="value">{branch?.name}</span>
                    </div>
                    <div className="info-row">
                        <span className="label">Мастер:</span>
                        <span className="value">{barber?.name}</span>
                    </div>
                    <div className="info-row">
                        <span className="label">Услуга:</span>
                        <span className="value clickable" onClick={() => onEdit(3)} title="Кликни чтобы изменить услугу">
                            {service?.name}
                        </span>
                    </div>
                    <div className="info-row">
                        <span className="label">Цена:</span>
                        <span className="value">{service?.price} лв</span>
                    </div>
                </div>

                <button className="book-btn red" onClick={handleBookNow}>
                    📅 Записаться
                </button>

                <button className="settings-btn" onClick={onReset}>
                    ⚙️ Сбросить всё
                </button>
            </div>

            <div className="quick-tip">
                💡 Кликни на Услугу чтобы быстро изменить её
            </div>
        </div>
    );
}
