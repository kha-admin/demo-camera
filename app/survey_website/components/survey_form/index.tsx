import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

import SurveyFormLayout from '../layout/survey_form_layout';

import FormStep1 from './form_step_1';
import FormStep2 from './form_step_2';
import FormStep3 from './form_step_3';

const SurveyForm: React.FC = () => {
    const steps = [
        { title: 'ยืนยันตัวตน' },
        { title: 'ข้อมูลส่วนตัว' },
        { title: 'ที่อยู่อาศัย' },
        { title: 'อื่นๆ' },
    ];

    const { formState, register, getValues, setValue, handleSubmit } = useForm({
        mode: 'onChange',
    });

    const [current, setCurrent] = useState<number>(0);

    const handleNext = (): void => {
        console.log('handleNext: ', getValues());

        if (current + 1 === steps.length) {
            return;
        }

        setCurrent((prev) => (prev += 1));
    };

    return (
        <div className="flex justify-center">
            <div className="flex-none p-6 lg:py-10 w-full lg:w-2/3">
                <SurveyFormLayout
                    title={'ขึ้นทะเบียนครัวเรือน'}
                    steps={steps}
                    current={current}
                    setCurrent={setCurrent}
                >
                    <div className="card w-full bg-base-100 shadow-xl">
                        <div className="card-body">
                            {/* card-title */}
                            <h2 className="card-title">{steps[current]?.title}</h2>

                            {/* card-content */}
                            <form>
                                {current === 0 && (
                                    <FormStep1 formState={formState} register={register} />
                                )}

                                {current === 1 && (
                                    <FormStep2
                                        formState={formState}
                                        register={register}
                                        getValues={getValues}
                                        setValue={setValue}
                                    />
                                )}

                                {current === 2 && (
                                    <FormStep3
                                        formState={formState}
                                        register={register}
                                        getValues={getValues}
                                        setValue={setValue}
                                    />
                                )}
                            </form>

                            {/* card-action */}
                            <div className="card-actions justify-center">
                                <button
                                    className="btn btn-primary"
                                    onClick={handleSubmit(handleNext, (errors) => {
                                        console.log('errors: ', errors);
                                    })}
                                >
                                    ถัดไป
                                </button>
                            </div>
                        </div>
                    </div>
                </SurveyFormLayout>
            </div>
        </div>
    );
};

export default SurveyForm;
