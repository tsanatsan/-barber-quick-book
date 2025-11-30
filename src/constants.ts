import { Branch, Barber, Service } from './types';

export const BRANCHES: Branch[] = [
    {
        id: 'central',
        name: 'CENTRAL',
        address: 'Preslav 13',
        phone: '35952600321',
        founded: 2018
    },
    {
        id: 'north',
        name: 'NORTH',
        address: 'Topra Hisar 5',
        phone: '359878600134',
        founded: 2025
    }
];

export const BARBERS: Barber[] = [
    // Central
    { id: 'vsevolod', name: 'Всеволод', branchId: 'central' },
    { id: 'shenol', name: 'Шенол', branchId: 'central' },
    { id: 'ibo', name: 'Ибо', branchId: 'central' },
    { id: 'anna', name: 'Анна', branchId: 'central' },
    { id: 'philip', name: 'Филипп', branchId: 'central' },
    { id: 'joro', name: 'Жоро', branchId: 'central' },
    // North
    {
        id: 'sergey',
        name: 'Сергей',
        branchId: 'north',
        bookingUrl: 'https://alteg.io/sergey' // placeholder
    },
    { id: 'andrey', name: 'Андрей', branchId: 'north' },
    {
        id: 'alina',
        name: 'Алина',
        branchId: 'north',
        bookingUrl: 'https://alteg.io/alina' // placeholder
    },
    {
        id: 'soner',
        name: 'Сонер',
        branchId: 'north',
        bookingUrl: 'https://alteg.io/soner' // placeholder
    }
];

export const SERVICES: Service[] = [
    { id: 'haircut', name: 'Стрижка', price: 50, duration: 60 },
    { id: 'buzzcut', name: 'Стрижка машинкой', price: 40, duration: 30 },
    { id: 'beard', name: 'Борода', price: 35, duration: 45 },
    { id: 'complex', name: 'Комплекс', price: 70, duration: 90 },
    { id: 'buzzcomplex', name: 'Машинка + Борода', price: 60, duration: 75 },
    { id: 'kids', name: 'Детская стрижка', price: 35, duration: 30 }
];

export const COLORS = {
    yellow: '#FFE600',
    red: '#FF4545',
    purple: '#8B5CF6',
    green: '#4ADE80',
    black: '#101010',
    white: '#FFFFFA'
};
