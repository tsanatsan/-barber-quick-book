/**
 * Цены на услуги для каждого мастера
 * 
 * Стандартные цены:
 * - Стрижка: 50 лв
 * - Стрижка машинкой: 40 лв
 * - Борода: 35 лв
 * - Комплекс: 70 лв
 * - Машинка + Борода: 60 лв
 * - Детская стрижка: 35 лв
 * 
 * Сниженные цены (-10 лв) для: Ани, Георги, Сонера, Алины
 * - Стрижка: 40 лв
 * - Стрижка машинкой: 30 лв
 * - Борода: 25 лв
 * - Комплекс: 60 лв
 * - Машинка + Борода: 50 лв
 * - Детская стрижка: 25 лв
 */

export interface BarberPrices {
    [serviceId: string]: number;
}

// Стандартные цены
const STANDARD_PRICES: BarberPrices = {
    haircut: 50,
    buzzcut: 40,
    beard: 35,
    complex: 70,
    buzzcomplex: 60,
    kids: 35
};

// Сниженные цены (-10 лв)
const REDUCED_PRICES: BarberPrices = {
    haircut: 40,
    buzzcut: 30,
    beard: 25,
    complex: 60,
    buzzcomplex: 50,
    kids: 25
};

// Цены для каждого мастера
export const BARBER_PRICES: Record<string, BarberPrices> = {
    // CENTRAL - стандартные цены
    vsevolod: STANDARD_PRICES,
    shenol: STANDARD_PRICES,
    ibo: STANDARD_PRICES,
    philip: STANDARD_PRICES,

    // CENTRAL - сниженные цены
    anna: REDUCED_PRICES,
    joro: REDUCED_PRICES,

    // NORTH - стандартные цены
    sergey: STANDARD_PRICES,
    andrey: STANDARD_PRICES,

    // NORTH - сниженные цены
    alina: REDUCED_PRICES,
    soner: REDUCED_PRICES
};

/**
 * Получить цену услуги для конкретного мастера
 */
export function getServicePrice(barberId: string, serviceId: string): number {
    return BARBER_PRICES[barberId]?.[serviceId] || STANDARD_PRICES[serviceId] || 0;
}
