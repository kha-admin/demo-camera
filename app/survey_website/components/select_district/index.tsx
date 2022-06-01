import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';

import {
    getDistrict,
    IDistrictData,
    I_GET_THAI_PROVICE_KEY,
} from '@/data_services/thai_province_data';

interface IProps {
    provinceId?: number;
    onChange?: React.ChangeEventHandler<HTMLSelectElement>;
}

const SelectDistrict: React.FC<IProps> = ({ provinceId, onChange }) => {
    const [district, setDistrict] = useState<IDistrictData[]>([]);
    const [selectValue, setSelectValue] = useState<string>('');

    const { isLoading, isFetched, refetch } = useQuery<
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
            onSuccess: (result) => {
                setDistrict(result);
            },
        },
    );

    useEffect(() => {
        setSelectValue('');
        if (isFetched) refetch();
    }, [provinceId]);

    return (
        <div className="form-control w-full">
            <label className="label">
                <span className="label-text">อำเภอ / เขต</span>
            </label>
            <select
                className="select select-bordered"
                value={selectValue}
                disabled={isLoading || !provinceId}
                onChange={
                    onChange
                        ? (e) => {
                              setSelectValue(e.target.value);
                              onChange(e);
                          }
                        : undefined
                }
            >
                <option disabled value="">
                    เลือกอำเภอ / เขต
                </option>
                {district.map((item) => (
                    <option key={item.name_en} value={item.id}>
                        {item.name_th}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default SelectDistrict;
