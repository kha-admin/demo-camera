import React, { useEffect } from 'react';
import type {
    Control,
    FieldErrors,
    UseFormRegister,
    UseFormResetField,
    UseFormWatch,
} from 'react-hook-form';

import { type IFormFieldValues } from '../../hooks';

import Input from '@/components/input';
import InputWrapper from '@/components/input_wrapper';
import SelectDistrict from '@/components/select_district';
import SelectProvince from '@/components/select_province';
import SelectSubdistrict from '@/components/select_subdistrict';
import Textarea from '@/components/textarea';

export interface IProps {
    errors: FieldErrors<IFormFieldValues>;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    control: Control<IFormFieldValues, any>;
    register: UseFormRegister<IFormFieldValues>;
    watch: UseFormWatch<IFormFieldValues>;
    resetField: UseFormResetField<IFormFieldValues>;
}

const FormStep3: React.FC<IProps> = ({ errors, control, register, watch, resetField }) => {
    const province = watch('province');
    const district = watch('district');

    useEffect(() => {
        resetField('district', { defaultValue: null, keepError: true });
        resetField('subDistrict', { defaultValue: null, keepError: true });
    }, [province]);

    useEffect(() => {
        resetField('subDistrict', { defaultValue: null, keepError: true });
    }, [district]);

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
                    <SelectProvince
                        name={'province'}
                        control={control}
                        rules={{ required: true }}
                        locale={'th'}
                        error={!!errors['province']}
                    />
                </InputWrapper>

                <InputWrapper label={'อำเภอ/เขต'}>
                    <SelectDistrict
                        provinceId={province?.value}
                        name={'district'}
                        control={control}
                        rules={{ required: true }}
                        locale={'th'}
                        error={!!errors['district']}
                    />
                </InputWrapper>

                <InputWrapper label={'ตำบล/แขวง'}>
                    <SelectSubdistrict
                        provinceId={province?.value}
                        districtId={district?.value}
                        name={'subDistrict'}
                        control={control}
                        rules={{ required: true }}
                        locale={'th'}
                        error={!!errors['subDistrict']}
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
