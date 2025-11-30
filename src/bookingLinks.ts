/**
 * СПРАВОЧНИК МАСТЕРОВ И УСЛУГ
 * 
 * ============================================
 * СПИСОК МАСТЕРОВ (BARBERS):
 * ============================================
 * 
 * CENTRAL (Preslav 13):
 * - vsevolod   | Всеволод  m2127936
 * - shenol     | Шенол     m2636156
 * - ibo        | Ибо       m2768615
 * - anna       | Анна      m2847068
 * - philip     | Филипп    m2393574
 * - joro       | Жоро      m2791759
 * 
 * NORTH (Topra Hisar 5):
 * - sergey     | Сергей    m2786163
 * - andrey     | Андрей    m2916316
 * - alina      | Алина     m2786164
 * - soner      | Сонер     m2786165
 * 
 * ============================================
 * СПИСОК УСЛУГ (SERVICES):
 * ============================================
 * 
 * - haircut      | Стрижка              | 50 лв | 60 мин       s12640192
 * - buzzcut      | Стрижка машинкой     | 40 лв | 30 мин       s12640189
 * - beard        | Борода               | 35 лв | 45 мин       s12640222
 * - complex      | Комплекс             | 70 лв | 90 мин       s12640204
 * - buzzcomplex  | Машинка + Борода     | 60 лв | 75 мин       s12640203
 * - kids         | Детская стрижка      | 30-40 лв | 30 мин    s12640191
 * 
 * ============================================
 * 
 * Ссылки на запись для каждого мастера и услуги
 * Структура: [barberId][serviceId] = URL для записи
 */

export interface BookingLinks {
    [barberId: string]: {
        [serviceId: string]: string;
    };
}

export const BOOKING_LINKS: BookingLinks = {
    // CENTRAL - Всеволод (m2127936)
    vsevolod: {
        haircut: 'https://n780472.alteg.io/company/733001/personal/short/select-time?o=m2127936s12640192', // Стрижка
        buzzcut: 'https://n780472.alteg.io/company/733001/personal/short/select-time?o=m2127936s12640189', // Стрижка машинкой
        beard: 'https://n780472.alteg.io/company/733001/personal/short/select-time?o=m2127936s12640222', // Борода
        complex: 'https://n780472.alteg.io/company/733001/personal/short/select-time?o=m2127936s12640204', // Комплекс
        buzzcomplex: 'https://n780472.alteg.io/company/733001/personal/short/select-time?o=m2127936s12640203', // Машинка + Борода
        kids: 'https://n780472.alteg.io/company/733001/personal/short/select-time?o=m2127936s12640191', // Детская стрижка
    },

    // CENTRAL - Шенол (m2636156)
    shenol: {
        haircut: 'https://n780472.alteg.io/company/733001/personal/short/select-time?o=m2636156s12640192',
        buzzcut: 'https://n780472.alteg.io/company/733001/personal/short/select-time?o=m2636156s12640189',
        beard: 'https://n780472.alteg.io/company/733001/personal/short/select-time?o=m2636156s12640222',
        complex: 'https://n780472.alteg.io/company/733001/personal/short/select-time?o=m2636156s12640204',
        buzzcomplex: 'https://n780472.alteg.io/company/733001/personal/short/select-time?o=m2636156s12640203',
        kids: 'https://n780472.alteg.io/company/733001/personal/short/select-time?o=m2636156s12640191',
    },

    // CENTRAL - Ибо (m2768615)
    ibo: {
        haircut: 'https://n780472.alteg.io/company/733001/personal/short/select-time?o=m2768615s12640192',
        buzzcut: 'https://n780472.alteg.io/company/733001/personal/short/select-time?o=m2768615s12640189',
        beard: 'https://n780472.alteg.io/company/733001/personal/short/select-time?o=m2768615s12640222',
        complex: 'https://n780472.alteg.io/company/733001/personal/short/select-time?o=m2768615s12640204',
        buzzcomplex: 'https://n780472.alteg.io/company/733001/personal/short/select-time?o=m2768615s12640203',
        kids: 'https://n780472.alteg.io/company/733001/personal/short/select-time?o=m2768615s12640191',
    },

    // CENTRAL - Анна (m2847068)
    anna: {
        haircut: 'https://n780472.alteg.io/company/733001/personal/short/select-time?o=m2847068s12640192',
        buzzcut: 'https://n780472.alteg.io/company/733001/personal/short/select-time?o=m2847068s12640189',
        beard: 'https://n780472.alteg.io/company/733001/personal/short/select-time?o=m2847068s12640222',
        complex: 'https://n780472.alteg.io/company/733001/personal/short/select-time?o=m2847068s12640204',
        buzzcomplex: 'https://n780472.alteg.io/company/733001/personal/short/select-time?o=m2847068s12640203',
        kids: 'https://n780472.alteg.io/company/733001/personal/short/select-time?o=m2847068s12640191',
    },

    // CENTRAL - Филипп (m2393574)
    philip: {
        haircut: 'https://n780472.alteg.io/company/733001/personal/short/select-time?o=m2393574s12640192',
        buzzcut: 'https://n780472.alteg.io/company/733001/personal/short/select-time?o=m2393574s12640189',
        beard: 'https://n780472.alteg.io/company/733001/personal/short/select-time?o=m2393574s12640222',
        complex: 'https://n780472.alteg.io/company/733001/personal/short/select-time?o=m2393574s12640204',
        buzzcomplex: 'https://n780472.alteg.io/company/733001/personal/short/select-time?o=m2393574s12640203',
        kids: 'https://n780472.alteg.io/company/733001/personal/short/select-time?o=m2393574s12640191',
    },

    // CENTRAL - Жоро (m2791759)
    joro: {
        haircut: 'https://n780472.alteg.io/company/733001/personal/short/select-time?o=m2791759s12640192',
        buzzcut: 'https://n780472.alteg.io/company/733001/personal/short/select-time?o=m2791759s12640189',
        beard: 'https://n780472.alteg.io/company/733001/personal/short/select-time?o=m2791759s12640222',
        complex: 'https://n780472.alteg.io/company/733001/personal/short/select-time?o=m2791759s12640204',
        buzzcomplex: 'https://n780472.alteg.io/company/733001/personal/short/select-time?o=m2791759s12640203',
        kids: 'https://n780472.alteg.io/company/733001/personal/short/select-time?o=m2791759s12640191',
    },

    // NORTH - Сергей (m2786163)
    sergey: {
        haircut: 'https://n1331680.alteg.io/company/1272528/personal/select-time?o=m2786163s12640192',
        buzzcut: 'https://n1331680.alteg.io/company/1272528/personal/select-time?o=m2786163s12640189',
        beard: 'https://n1331680.alteg.io/company/1272528/personal/select-time?o=m2786163s12640222',
        complex: 'https://n1331680.alteg.io/company/1272528/personal/select-time?o=m2786163s12640204',
        buzzcomplex: 'https://n1331680.alteg.io/company/1272528/personal/select-time?o=m2786163s12640203',
    },

    // NORTH - Андрей (m2916316)
    andrey: {
        haircut: 'https://n1331680.alteg.io/company/1272528/personal/select-time?o=m2916316s12640192',
        buzzcut: 'https://n1331680.alteg.io/company/1272528/personal/select-time?o=m2916316s12640189',
        beard: 'https://n1331680.alteg.io/company/1272528/personal/select-time?o=m2916316s12640222',
        complex: 'https://n1331680.alteg.io/company/1272528/personal/select-time?o=m2916316s12640204',
        buzzcomplex: 'https://n1331680.alteg.io/company/1272528/personal/select-time?o=m2916316s12640203',
        kids: 'https://n1331680.alteg.io/company/1272528/personal/select-time?o=m2916316s12640191',
    },

    // NORTH - Алина (m2786164)
    alina: {
        haircut: 'https://n1331680.alteg.io/company/1272528/personal/select-time?o=m2786164s12640192',
        buzzcut: 'https://n1331680.alteg.io/company/1272528/personal/select-time?o=m2786164s12640189',
        beard: 'https://n1331680.alteg.io/company/1272528/personal/select-time?o=m2786164s12640222',
        complex: 'https://n1331680.alteg.io/company/1272528/personal/select-time?o=m2786164s12640204',
        buzzcomplex: 'https://n1331680.alteg.io/company/1272528/personal/select-time?o=m2786164s12640203',
        kids: 'https://n1331680.alteg.io/company/1272528/personal/select-time?o=m2786164s12640191',
    },

    // NORTH - Сонер (m2786165)
    soner: {
        haircut: 'https://n1331680.alteg.io/company/1272528/personal/select-time?o=m2786165s12640192',
        buzzcut: 'https://n1331680.alteg.io/company/1272528/personal/select-time?o=m2786165s12640189',
        beard: 'https://n1331680.alteg.io/company/1272528/personal/select-time?o=m2786165s12640222',
        complex: 'https://n1331680.alteg.io/company/1272528/personal/select-time?o=m2786165s12640204',
        buzzcomplex: 'https://n1331680.alteg.io/company/1272528/personal/select-time?o=m2786165s12640203',
        kids: 'https://n1331680.alteg.io/company/1272528/personal/select-time?o=m2786165s12640191',
    },
};

/**
 * Получить ссылку на запись для конкретного мастера и услуги
 * @param barberId - ID мастера
 * @param serviceId - ID услуги
 * @returns URL для записи или undefined, если ссылка не найдена
 */
export function getBookingLink(barberId: string, serviceId: string): string | undefined {
    return BOOKING_LINKS[barberId]?.[serviceId];
}
