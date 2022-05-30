import React from 'react';

import SurveyFormLayout from '../layout/survey_form_layout';

import FormStep1 from './components/form_step_1';
import FormStep2 from './components/form_step_2';
import FormStep3 from './components/form_step_3';
import { useSurveyFormHook } from './hooks';

const SurveyForm: React.FC = () => {
    const {
        steps,
        current,
        errors,
        setCurrent,
        register,
        getValues,
        resetField,
        handleSubmit,
        submit,
    } = useSurveyFormHook();

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
                            <form onSubmit={handleSubmit(submit)}>
                                {current === 0 && <FormStep1 errors={errors} register={register} />}

                                {current === 1 && (
                                    <FormStep2
                                        errors={errors}
                                        register={register}
                                        getValues={getValues}
                                        resetField={resetField}
                                    />
                                )}

                                {current === 2 && <FormStep3 errors={errors} register={register} />}

                                {/* card-action */}
                                <div className="card-actions justify-center">
                                    <button type={'submit'} className="btn btn-wide btn-primary">
                                        {current + 1 === steps.length ? 'ส่งข้อมูล' : 'ถัดไป'}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </SurveyFormLayout>
            </div>
        </div>
    );
};

export default SurveyForm;
