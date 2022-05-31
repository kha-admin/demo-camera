import React from 'react';
import { useQuery } from 'react-query';

import { getThaiProvinceData, I_GET_THAI_PROVICE_KEY } from '@/data_services/thai_province_data';

interface IProps {
    onChange?: React.ChangeEventHandler<HTMLSelectElement>;
}

const SelectProvince: React.FC<IProps> = ({ onChange }) => {
    const { isLoading, data } = useQuery(I_GET_THAI_PROVICE_KEY, () => getThaiProvinceData(), {
        staleTime: Infinity,
    });

    return (
        <div className="form-control w-full">
            <label className="label">
                <span className="label-text">จังหวัด</span>
            </label>
            <select
                className="select select-bordered"
                disabled={isLoading}
                onChange={onChange}
                defaultValue="default"
            >
                <option disabled value="default">
                    เลือกจังหวัด
                </option>
                {data?.map((item) => (
                    <option key={item.name_en} value={item.id}>
                        {item.name_th}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default SelectProvince;
