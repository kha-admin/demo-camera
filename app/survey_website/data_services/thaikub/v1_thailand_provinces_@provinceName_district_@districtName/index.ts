import { type IThaiKubResBody } from '@/data_services/thaikub';
import { thaikubClient } from '@/utils/client';

type IResBodyGetSubdistrict = IThaiKubResBody<string[]>;

interface IGetSubdistrictParam {
    province_name: string;
    district_name: string;
}

export async function getSubdistrict(param: IGetSubdistrictParam): Promise<IResBodyGetSubdistrict> {
    return thaikubClient
        .get(`v1/thailand/provinces/${param.province_name}/district/${param.district_name}`)
        .json<IResBodyGetSubdistrict>();
}
