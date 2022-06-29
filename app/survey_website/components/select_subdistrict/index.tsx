import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';

import {
    getSubdistrict,
    I_GET_THAI_PROVICE_KEY,
    type ISubdistrictData,
} from '@/data_services/thai_province_data';

interface IProps {
    provinceId?: number;
    districtId?: number;
    onChange?: React.ChangeEventHandler<HTMLSelectElement>;
}

const SelectSubdistrict: React.FC<IProps> = ({ districtId, provinceId }) => {
    const [subdistrict, setSubdistrict] = useState<ISubdistrictData[]>([]);
    const [selectValue, setSelectValue] = useState<string>('');

    const { isLoading, isFetched, refetch } = useQuery<
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
            onSuccess: (result) => {
                setSubdistrict(result);
            },
        },
    );

    useEffect(() => {
        setSelectValue('');
        if (isFetched) refetch();
    }, [districtId]);

    return (
        <div className="form-control w-full">
            <label className="label">
                <span className="label-text">ตำบล / แขวง</span>
            </label>
            <select
                className="select select-bordered"
                value={selectValue}
                disabled={isLoading || !provinceId || !districtId}
                onChange={(e) => {
                    setSelectValue(e.target.value);
                }}
            >
                <option disabled value="">
                    เลือกตำบล / แขวง
                </option>
                {subdistrict.map((item) => {
                    return (
                        <option key={`${item.name_en} - ${item.zip_code}`} value={item.id}>
                            {item.name_th}
                        </option>
                    );
                })}
            </select>
        </div>
    );
};

export default SelectSubdistrict;
