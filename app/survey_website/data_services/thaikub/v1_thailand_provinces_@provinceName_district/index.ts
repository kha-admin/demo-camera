import { type IThaiKubResBody } from '@/data_services/thaikub';
import { thaikubClient } from '@/utils/client';

type IResBodyGetDistrict = IThaiKubResBody<string[]>;

interface IGetDistrictParam {
    province_name: string;
}

export async function getDistrict(param: IGetDistrictParam): Promise<IResBodyGetDistrict> {
    return thaikubClient
        .get(`v1/thailand/provinces/${param.province_name}/district`)
        .json<IResBodyGetDistrict>();
}
