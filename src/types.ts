export interface Branch {
    id: 'central' | 'north';
    name: string;
    address: string;
    phone: string;
    founded: number;
}

export interface Barber {
    id: string;
    name: string;
    branchId: 'central' | 'north';
    bookingUrl?: string; // персональная ссылка, если есть
}

export interface Service {
    id: string;
    name: string;
    price: number;
    duration: number;
}

export interface SavedPreferences {
    branchId: string;
    barberId: string;
    serviceId: string;
}
