import { useState, useEffect } from 'react';
import { BRANCHES, BARBERS, SERVICES } from '../constants';
import { SavedPreferences } from '../types';
import { useLanguage } from '../LanguageContext';
import { getServicePrice } from '../barberPrices';
import LanguageToggle from './LanguageToggle';
import './Onboarding.css';

interface OnboardingProps {
    onComplete: (prefs: SavedPreferences) => void;
    editMode?: { step: number; existingPrefs: SavedPreferences } | null;
}

export default function Onboarding({ onComplete, editMode }: OnboardingProps) {
    const { t } = useLanguage();
    const [step, setStep] = useState(editMode?.step || 1);
    const [branchId, setBranchId] = useState<string>(editMode?.existingPrefs.branchId || '');
    const [barberId, setBarberId] = useState<string>(editMode?.existingPrefs.barberId || '');

    useEffect(() => {
        // Reset step and data when editMode changes
        if (editMode) {
            setStep(editMode.step);
            setBranchId(editMode.existingPrefs.branchId);
            setBarberId(editMode.existingPrefs.barberId);
        }
    }, [editMode]);

    const handleBranchSelect = (id: string) => {
        setBranchId(id);
        // If changing branch, reset barber selection
        if (id !== branchId) {
            setBarberId('');
        }
        setStep(2);
    };

    const handleBarberSelect = (id: string) => {
        setBarberId(id);
        setStep(3);
    };

    const handleServiceSelect = (id: string) => {
        // Merge with existing preferences if in edit mode
        const finalPrefs: SavedPreferences = {
            branchId,
            barberId,
            serviceId: id
        };
        onComplete(finalPrefs);
    };

    const availableBarbers = BARBERS.filter(b => b.branchId === branchId);

    // Фильтруем услуги в зависимости от выбранного мастера
    const availableServices = SERVICES.filter(service => {
        // Для Сергея скрываем детскую стрижку
        if (barberId === 'sergey' && service.id === 'kids') {
            return false;
        }
        return true;
    });

    return (
        <div className="onboarding">
            <div className="onboarding-header">
                {step === 1 && <h1>{t.quickBooking}</h1>}
                <div className="step-indicator">
                    <span className={step === 1 ? 'active' : ''}>1</span>
                    <span className={step === 2 ? 'active' : ''}>2</span>
                    <span className={step === 3 ? 'active' : ''}>3</span>
                </div>
            </div>

            {step === 1 && (
                <div className="selection-grid">
                    <h2>{t.selectBranch}</h2>
                    {BRANCHES.map(branch => (
                        <button
                            key={branch.id}
                            onClick={() => handleBranchSelect(branch.id)}
                            className="selection-card"
                        >
                            <div className="card-title">{t[branch.id as 'central' | 'north']}</div>
                            <div className="card-info">{branch.address}</div>
                        </button>
                    ))}
                    <div className="nav-buttons-center">
                        <LanguageToggle />
                    </div>
                </div>
            )}

            {step === 2 && (
                <div className="selection-grid">
                    <h2>{t.selectBarber}</h2>
                    {availableBarbers.map(barber => (
                        <button
                            key={barber.id}
                            onClick={() => handleBarberSelect(barber.id)}
                            className="selection-card purple"
                        >
                            <div className="card-title">{t.barbers[barber.id as keyof typeof t.barbers]}</div>
                        </button>
                    ))}
                    <div className="nav-buttons">
                        <button className="back-btn" onClick={() => setStep(1)}>{t.back}</button>
                        <LanguageToggle />
                    </div>
                </div>
            )}

            {step === 3 && (
                <div className="selection-grid">
                    <h2>{t.selectService}</h2>
                    {availableServices.map(service => (
                        <button
                            key={service.id}
                            onClick={() => handleServiceSelect(service.id)}
                            className="selection-card red"
                        >
                            <div className="card-title">{t[service.id as keyof typeof t]}</div>
                            <div className="card-info">{getServicePrice(barberId, service.id)} {t.price} • {service.duration} {t.minutes}</div>
                        </button>
                    ))}
                    <div className="nav-buttons">
                        <button className="back-btn" onClick={() => setStep(2)}>{t.back}</button>
                        <LanguageToggle />
                    </div>
                </div>
            )}
        </div>
    );
}
