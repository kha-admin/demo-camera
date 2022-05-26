import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';

import {
    getThaiProviceData,
    IDistrictData,
    I_GET_THAI_PROVICE_KEY,
} from '@/data_services/thai_province_data';

interface IProps {
    proviceId?: number;
    onChange?: React.ChangeEventHandler<HTMLSelectElement>;
}

const SelectDistrict: React.FC<IProps> = ({ proviceId }) => {
    const [district, setDistrict] = useState<IDistrictData[]>([]);

    const { isLoading, refetch } = useQuery(
        I_GET_THAI_PROVICE_KEY,
        async () => getThaiProviceData(),
        {
            enabled: !!proviceId,
            staleTime: Infinity,
            onSuccess: (result) => {
                const proviceData = result.find((item) => item.id === proviceId);

                setDistrict(proviceData?.amphure ?? []);
            },
        },
    );

    useEffect(() => {
        refetch();
    }, [proviceId]);

    return (
        <div className="form-control w-full">
            <label className="label">
                <span className="label-text">อำเภอ / แขวง</span>
            </label>
            <select className="select select-bordered" defaultValue="default" disabled={isLoading}>
                <option disabled value="default">
                    เลือกอำเภอ / แขวง
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
