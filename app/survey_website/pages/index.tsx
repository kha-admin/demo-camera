import { type GetStaticProps } from 'next';
import React, { useState } from 'react';
import { dehydrate, QueryClient } from 'react-query';

import Layout from '@/components/layout';
import SelectDistrict from '@/components/select_district';
import SelectProvice from '@/components/select_province';
import SelectSubdistrict from '@/components/select_subdistrict';
import { prefetchSanityCms } from '@/utils/prefetch';

type IProps = IPageProps;

interface ITestSelectProvince {
    provice_id?: number;
    district_id?: number;
    subdistrict_id?: number;
}

const Home: React.FC = () => {
    const [provinceState, setProvinceState] = useState<ITestSelectProvince>({});

    return (
        <Layout>
            <section className="relative w-full min-h-screen">
                <div className="grid grid-cols-1 gap-6 lg:gap-10 p-6 lg:py-10">
                    <div className="col-span-1 mx-auto">
                        <div className="w-full max-w-[1000px] lg:min-w-[600px] bg-white/90 py-8 lg:py-12 px-4 lg:px-6">
                            <h1 className="text-3xl font-semibold uppercase">Survey Form</h1>

                            <form action="" className="flex flex-col lg:flex-row gap-4">
                                <SelectProvice
                                    onChange={(e) => {
                                        setProvinceState({
                                            provice_id: Number(e.target.value),
                                            district_id: undefined,
                                            subdistrict_id: undefined,
                                        });
                                    }}
                                />
                                <SelectDistrict
                                    provinceId={provinceState.provice_id}
                                    onChange={(e) => {
                                        setProvinceState({
                                            ...provinceState,
                                            district_id: Number(e.target.value),
                                            subdistrict_id: undefined,
                                        });
                                    }}
                                />
                                <SelectSubdistrict
                                    provinceId={provinceState.provice_id}
                                    districtId={provinceState.district_id}
                                    onChange={(e) => {
                                        setProvinceState({
                                            ...provinceState,
                                            subdistrict_id: Number(e.target.value),
                                        });
                                    }}
                                />
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export const getStaticProps: GetStaticProps<IProps> = async () => {
    const client = new QueryClient();

    await prefetchSanityCms(client, () => []);

    return {
        props: {
            dehydratedState: dehydrate(client),
        },
    };
};

export default Home;
