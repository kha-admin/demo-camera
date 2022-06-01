import thaiProvinceData from './api_thai_provice_data.json';

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

export interface IProvinceData extends ISchema {
    amphure: IDistrictData[];
}

export const I_GET_THAI_PROVICE_KEY = 'getThaiProvinceData';

export function getThaiProvinceData(): IProvinceData[] {
    return <IProvinceData[]>thaiProvinceData;
}

interface IGetProvinceParam {
    provinceId: number;
    districtId: number;
    subdistrcitId: number;
}

export function getProvice(): ISchema[] {
    const provinces: ISchema[] = getThaiProvinceData().map((item) => ({
        id: item.id,
        name_en: item.name_en,
        name_th: item.name_th,
    }));

    return provinces;
}

export function getDistrict({
    provinceId,
}: Pick<IGetProvinceParam, 'provinceId'>): IDistrictData[] {
    const province = getThaiProvinceData().find((item) => item.id === provinceId);

    return province?.amphure ?? [];
}

export function getSubdistrict({
    provinceId,
    districtId,
}: Omit<IGetProvinceParam, 'subdistrcitId'>): ISubdistrictData[] {
    const district = getDistrict({ provinceId }).find((item) => item.id === districtId);

    return district?.tambon ?? [];
}

interface IFindProvinceDataResult {
    province?: ISchema;
    district?: ISchema;
    subdistrict?: ISubdistrictData;
}
export function findProvinceData({
    districtId,
    provinceId,
    subdistrcitId,
}: IGetProvinceParam): IFindProvinceDataResult {
    const province = getThaiProvinceData().find((item) => item.id === provinceId);
    const district = province?.amphure.find((item) => item.id === districtId);
    const subdistrict = district?.tambon.find((item) => item.id === subdistrcitId);

    return {
        district,
        province,
        subdistrict,
    };
}
