import React from 'react';
import type { FieldErrors, UseFormRegister } from 'react-hook-form';

import { type IFormFieldValues } from '../../hooks';

import Textarea from '@/components/Textarea';
import Input from '@/components/input';
import Select from '@/components/select';

export interface IProps {
    errors: FieldErrors<IFormFieldValues>;
    register: UseFormRegister<IFormFieldValues>;
}

const FormStep3: React.FC<IProps> = ({ errors, register }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6">
            {/* left */}
            <div>
                <Input
                    form={register('address1', {
                        required: true,
                    })}
                    label={'บ้านเลขที่'}
                    error={!!errors['address1']}
                />

                <Input
                    form={register('addressBuilding', {
                        required: true,
                    })}
                    label={'อาคาร'}
                    error={!!errors['addressBuilding']}
                />

                <Select
                    form={register('provinceId', {
                        required: true,
                    })}
                    options={[]}
                    label={'จังหวัด'}
                    error={!!errors['provinceId']}
                />

                <Select
                    form={register('districtId', {
                        required: true,
                    })}
                    options={[]}
                    label={'อำเภอ/เขต'}
                    error={!!errors['districtId']}
                />

                <Select
                    form={register('subDistrictId', {
                        required: true,
                    })}
                    options={[]}
                    label={'ตำบล/แขวง'}
                    error={!!errors['subDistrictId']}
                />
            </div>

            {/* right */}
            <div>
                <Input
                    form={register('addressRoom', {
                        required: true,
                    })}
                    label={'ห้อง'}
                    error={!!errors['addressRoom']}
                />

                <Input
                    form={register('addressAlley', {
                        required: true,
                    })}
                    label={'ซอย'}
                    error={!!errors['addressAlley']}
                />

                <Input
                    form={register('addressStreet', {
                        required: true,
                    })}
                    label={'ถนน'}
                    error={!!errors['addressStreet']}
                />

                <Textarea
                    form={register('addressMemo', {
                        required: true,
                    })}
                    label={'คำอธิบาย (หมายเหตุ)'}
                    error={!!errors['addressMemo']}
                />
            </div>
        </div>
    );
};

export default FormStep3;
