import React from 'react';
import { useQuery } from 'react-query';

import Select, { type IOption, type IProps as ISelectProps } from '../select';

import {
    getThaiProvinceData,
    type IProvinceData,
    I_GET_THAI_PROVICE_KEY,
} from '@/data_services/thai_province_data';

export interface IProps extends Omit<ISelectProps, 'options' | 'disabled'> {
    locale?: 'en' | 'th';
}

const SelectProvince: React.FC<IProps> = ({ locale = 'en', ...props }) => {
    const { isLoading, data } = useQuery(I_GET_THAI_PROVICE_KEY, () => getThaiProvinceData(), {
        staleTime: Infinity,
    });

    const mapNormalizeOption = (items?: IProvinceData[]): ISelectProps['options'] => {
        return items?.map(
            (item): IOption<IProvinceData['id']> => ({
                label: locale === 'en' ? item.name_en : item.name_th,
                value: item.id,
            }),
        );
    };

    return <Select {...props} options={mapNormalizeOption(data)} disabled={isLoading} />;
};

export default SelectProvince;
