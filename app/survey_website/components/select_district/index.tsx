import React, { useEffect } from 'react';
import { useQuery } from 'react-query';

import Select, { type IOption, type IProps as ISelectProps } from '@/components/select';
import {
    getDistrict,
    type IDistrictData,
    I_GET_THAI_PROVICE_KEY,
} from '@/data_services/thai_province_data';

export interface IProps extends Omit<ISelectProps, 'options' | 'disabled'> {
    provinceId?: number;
    locale?: 'en' | 'th';
}

const SelectDistrict: React.FC<IProps> = ({ provinceId, locale = 'en', ...props }) => {
    const { data, isLoading, isFetched, refetch } = useQuery<
        IDistrictData[],
        unknown,
        IDistrictData[],
        string[]
    >(
        [I_GET_THAI_PROVICE_KEY, `provinceId=${provinceId}`],
        () => {
            if (!provinceId) {
                return [];
            }

            return getDistrict({ provinceId });
        },
        {
            enabled: !!provinceId,
            staleTime: Infinity,
        },
    );

    const mapNormalizeOption = (items?: IDistrictData[]): ISelectProps['options'] => {
        return items?.map(
            (item): IOption<IDistrictData['id']> => ({
                label: locale === 'en' ? item.name_en : item.name_th,
                value: item.id,
            }),
        );
    };

    useEffect(() => {
        if (isFetched) refetch();
    }, [provinceId]);

    return (
        <Select {...props} options={mapNormalizeOption(data)} disabled={isLoading || !provinceId} />
    );
};

export default SelectDistrict;
