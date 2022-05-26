import { localClient } from '@/utils/client';

// https://github.com/kongvut/thai-province-data
interface ISchema {
    id: number;
    name_th: string;
    name_en: string;
}

export interface ISubdistrictData extends ISchema {
    amphure_id: number;
    zip_code: number;
}

export interface IDistrictData extends ISchema {
    province_id: number;
    tambon: ISubdistrictData[];
}

export interface IProviceData extends ISchema {
    amphure: IDistrictData[];
}

export const I_GET_THAI_PROVICE_KEY = 'getThaiProviceData';

export async function getThaiProviceData(): Promise<IProviceData[]> {
    return localClient.get('raw_data/api_thai_provice_data.json').json<IProviceData[]>();
}
