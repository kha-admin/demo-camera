import { type IThaiKubResBody } from '@/data_services/thaikub';
import { thaikubClient } from '@/utils/client';

type IResBodyGetProvice = IThaiKubResBody<string[]>;

export async function getProvinces(): Promise<IResBodyGetProvice> {
    return thaikubClient.get('v1/thailand/provinces').json<IResBodyGetProvice>();
}
