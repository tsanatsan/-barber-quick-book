export type Language = 'bg' | 'en';

export interface Translations {
    // General
    quickBooking: string;
    loading: string;
    back: string;
    reset: string;
    book: string;
    edit: string;

    // Onboarding steps
    selectBranch: string;
    selectBarber: string;
    selectService: string;

    // Branches
    central: string;
    north: string;

    // Services
    haircut: string;
    buzzcut: string;
    beard: string;
    complex: string;
    buzzcomplex: string;
    kids: string;

    // Quick action
    yourPreferences: string;
    branch: string;
    barber: string;
    service: string;
    price: string;
    duration: string;
    minutes: string;

    // Barber names
    barbers: {
        vsevolod: string;
        shenol: string;
        ibo: string;
        anna: string;
        philip: string;
        joro: string;
        sergey: string;
        andrey: string;
        alina: string;
        soner: string;
    };
}

export const translations: Record<Language, Translations> = {
    bg: {
        // General
        quickBooking: 'Бърза Резервация',
        loading: '⏳',
        back: '← Назад',
        reset: 'Нулирай настройките',
        book: 'Запиши се',
        edit: 'Редактирай',

        // Onboarding steps
        selectBranch: 'Избери филиал',
        selectBarber: 'Избери майстор',
        selectService: 'Избери услуга',

        // Branches
        central: 'ЦЕНТЪР',
        north: 'СЕВЕР',

        // Services
        haircut: 'Подстригване',
        buzzcut: 'Подстригване с машинка',
        beard: 'Брада',
        complex: 'Комплекс',
        buzzcomplex: 'Машинка + Брада',
        kids: 'Детско подстригване',

        // Quick action
        yourPreferences: 'Твоите настройки',
        branch: 'Филиал',
        barber: 'Майстор',
        service: 'Услуга',
        price: 'лв',
        duration: 'Продължителност',
        minutes: 'мин',

        // Barber names
        barbers: {
            vsevolod: 'Всеволод',
            shenol: 'Шенол',
            ibo: 'Ибо',
            anna: 'Ани',
            philip: 'Филлип',
            joro: 'Георги',
            sergey: 'Сергей',
            andrey: 'Андрей',
            alina: 'Алина',
            soner: 'Сонер',
        }
    },
    en: {
        // General
        quickBooking: 'Quick Booking',
        loading: '⏳',
        back: '← Back',
        reset: 'Reset Settings',
        book: 'Book Now',
        edit: 'Edit',

        // Onboarding steps
        selectBranch: 'Select Branch',
        selectBarber: 'Select Barber',
        selectService: 'Select Service',

        // Branches
        central: 'CENTRAL',
        north: 'NORTH',

        // Services
        haircut: 'Haircut',
        buzzcut: 'Buzz Cut',
        beard: 'Beard',
        complex: 'Complex',
        buzzcomplex: 'Buzz + Beard',
        kids: 'Kids Haircut',

        // Quick action
        yourPreferences: 'Your Preferences',
        branch: 'Branch',
        barber: 'Barber',
        service: 'Service',
        price: 'BGN',
        duration: 'Duration',
        minutes: 'min',

        // Barber names
        barbers: {
            vsevolod: 'Vsevolod',
            shenol: 'Shenol',
            ibo: 'Ibo',
            anna: 'Ani',
            philip: 'Phillip',
            joro: 'Georgi',
            sergey: 'Sergey',
            andrey: 'Andrey',
            alina: 'Alina',
            soner: 'Soner',
        }
    }
};
