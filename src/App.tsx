import { useState, useEffect } from 'react';
import Onboarding from './components/Onboarding';
import QuickAction from './components/QuickAction';
import { useLanguage } from './LanguageContext';
import { SavedPreferences } from './types';
import './App.css';

const STORAGE_KEY = 'barber-quick-book-prefs';

function App() {
    const { t } = useLanguage();
    const [preferences, setPreferences] = useState<SavedPreferences | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [editMode, setEditMode] = useState<{ step: number; existingPrefs: SavedPreferences } | null>(null);

    useEffect(() => {
        // Загружаем сохраненные предпочтения
        const saved = localStorage.getItem(STORAGE_KEY);
        if (saved) {
            try {
                setPreferences(JSON.parse(saved));
            } catch (e) {
                console.error('Failed to parse preferences', e);
            }
        }
        setIsLoading(false);
    }, []);

    const handleComplete = (prefs: SavedPreferences) => {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(prefs));
        setPreferences(prefs);
        setEditMode(null);
    };

    const handleReset = () => {
        localStorage.removeItem(STORAGE_KEY);
        setPreferences(null);
        setEditMode(null);
    };

    const handleEdit = (step: number) => {
        if (preferences) {
            setEditMode({ step, existingPrefs: preferences });
            setPreferences(null);
        }
    };

    if (isLoading) {
        return (
            <div className="app-loading">
                <div className="loader">{t.loading}</div>
            </div>
        );
    }

    return (
        <div className="app-container">
            {preferences ? (
                <QuickAction preferences={preferences} onReset={handleReset} onEdit={handleEdit} />
            ) : (
                <Onboarding
                    onComplete={handleComplete}
                    editMode={editMode}
                />
            )}
        </div>
    );
}

export default App;
