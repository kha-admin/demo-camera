import React from 'react';
import type {
    FieldValues,
    FormState,
    UseFormGetValues,
    UseFormRegister,
    UseFormSetValue,
} from 'react-hook-form';

import Textarea from '@/components/Textarea';
import Input from '@/components/input';
import Select from '@/components/select';

export interface IProps {
    formState: FormState<FieldValues>;
    register: UseFormRegister<FieldValues>;
    getValues: UseFormGetValues<FieldValues>;
    setValue: UseFormSetValue<FieldValues>;
}

const FormStep3: React.FC<IProps> = ({ formState, register }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6">
            {/* left */}
            <div>
                <Input
                    form={register('address', {
                        required: true,
                    })}
                    label={'บ้านเลขที่'}
                    error={!!formState.errors['address']}
                />

                <Input
                    form={register('building', {
                        required: true,
                    })}
                    label={'อาคาร'}
                    error={!!formState.errors['building']}
                />

                <Select
                    form={register('province', {
                        required: true,
                    })}
                    options={[]}
                    label={'จังหวัด'}
                    error={!!formState.errors['province']}
                />

                <Select
                    form={register('district', {
                        required: true,
                    })}
                    options={[]}
                    label={'อำเภอ/เขต'}
                    error={!!formState.errors['district']}
                />

                <Select
                    form={register('subDistrict', {
                        required: true,
                    })}
                    options={[]}
                    label={'ตำบล/แขวง'}
                    error={!!formState.errors['subDistrict']}
                />
            </div>

            {/* right */}
            <div>
                <Input
                    form={register('room', {
                        required: true,
                    })}
                    label={'ห้อง'}
                    error={!!formState.errors['room']}
                />

                <Input
                    form={register('alley', {
                        required: true,
                    })}
                    label={'ซอย'}
                    error={!!formState.errors['alley']}
                />

                <Input
                    form={register('street', {
                        required: true,
                    })}
                    label={'ถนน'}
                    error={!!formState.errors['street']}
                />

                <Textarea
                    form={register('memo', {
                        required: true,
                    })}
                    label={'คำอธิบาย (หมายเหตุ)'}
                    error={!!formState.errors['memo']}
                />
            </div>
        </div>
    );
};

export default FormStep3;
