import React, { useEffect } from 'react';
import { useQuery } from 'react-query';

import Select, { type IOption, type IProps as ISelectProps } from '@/components/select';
import {
    getSubdistrict,
    I_GET_THAI_PROVICE_KEY,
    type ISubdistrictData,
} from '@/data_services/thai_province_data';

export interface IProps extends Omit<ISelectProps, 'options' | 'disabled'> {
    provinceId?: number;
    districtId?: number;
    locale?: 'en' | 'th';
}

const SelectSubdistrict: React.FC<IProps> = ({
    provinceId,
    districtId,
    locale = 'en',
    ...props
}) => {
    const { data, isLoading, isFetched, refetch } = useQuery<
        ISubdistrictData[],
        unknown,
        ISubdistrictData[],
        string[]
    >(
        [I_GET_THAI_PROVICE_KEY, `provinceId=${provinceId}`, `district=${districtId}`],
        () => {
            if (!provinceId || !districtId) {
                return [];
            }

            return getSubdistrict({ provinceId, districtId });
        },
        {
            enabled: !!provinceId,
            staleTime: Infinity,
        },
    );

    const mapNormalizeOption = (items?: ISubdistrictData[]): ISelectProps['options'] => {
        return items?.map(
            (item): IOption<ISubdistrictData['id']> => ({
                label: locale === 'en' ? item.name_en : item.name_th,
                value: item.id,
            }),
        );
    };

    useEffect(() => {
        if (isFetched) refetch();
    }, [districtId]);

    return (
        <Select {...props} options={mapNormalizeOption(data)} disabled={isLoading || !districtId} />
    );
};

export default SelectSubdistrict;
