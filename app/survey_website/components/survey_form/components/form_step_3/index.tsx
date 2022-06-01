import React from 'react';
import type { Control, FieldErrors, UseFormRegister } from 'react-hook-form';

import { type IFormFieldValues } from '../../hooks';

import Input from '@/components/input';
import InputWrapper from '@/components/input_wrapper';
import Select from '@/components/select';
import Textarea from '@/components/textarea';

export interface IProps {
    errors: FieldErrors<IFormFieldValues>;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    control: Control<IFormFieldValues, any>;
    register: UseFormRegister<IFormFieldValues>;
}

const FormStep3: React.FC<IProps> = ({ errors, control, register }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6">
            {/* left */}
            <div>
                <InputWrapper label={'บ้านเลขที่'}>
                    <Input
                        form={register('address1', {
                            required: true,
                        })}
                        error={!!errors['address1']}
                    />
                </InputWrapper>

                <InputWrapper label={'อาคาร'}>
                    <Input
                        form={register('addressBuilding', {
                            required: true,
                        })}
                        error={!!errors['addressBuilding']}
                    />
                </InputWrapper>

                <InputWrapper label={'จังหวัด'}>
                    <Select
                        name={'provinceId'}
                        control={control}
                        rules={{ required: true }}
                        options={[]}
                        error={!!errors['provinceId']}
                    />
                </InputWrapper>

                <InputWrapper label={'อำเภอ/เขต'}>
                    <Select
                        name={'districtId'}
                        control={control}
                        rules={{ required: true }}
                        options={[]}
                        error={!!errors['districtId']}
                    />
                </InputWrapper>

                <InputWrapper label={'ตำบล/แขวง'}>
                    <Select
                        name={'subDistrictId'}
                        control={control}
                        rules={{ required: true }}
                        options={[]}
                        error={!!errors['subDistrictId']}
                    />
                </InputWrapper>
            </div>

            {/* right */}
            <div>
                <InputWrapper label={'ห้อง'}>
                    <Input
                        form={register('addressRoom', {
                            required: true,
                        })}
                        error={!!errors['addressRoom']}
                    />
                </InputWrapper>

                <InputWrapper label={'ซอย'}>
                    <Input
                        form={register('addressAlley', {
                            required: true,
                        })}
                        error={!!errors['addressAlley']}
                    />
                </InputWrapper>

                <InputWrapper label={'ถนน'}>
                    <Input
                        form={register('addressStreet', {
                            required: true,
                        })}
                        error={!!errors['addressStreet']}
                    />
                </InputWrapper>

                <InputWrapper label={'คำอธิบาย (หมายเหตุ)'}>
                    <Textarea
                        form={register('addressMemo', {
                            required: true,
                        })}
                        error={!!errors['addressMemo']}
                    />
                </InputWrapper>
            </div>
        </div>
    );
};

export default FormStep3;
