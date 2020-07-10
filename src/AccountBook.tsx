import React, { FC, useState, useEffect } from 'react';
import { Layout } from 'antd';
import Filter from './Filter';
import DataView from './DataView';
import List from './List';
import billCsvUrl from './data/bill.csv';
import categoriesCsvUrl from './data/categories.csv';
import { getCsvData } from './utils';
import { Spin } from 'antd';

const { Content } = Layout;

const AccountBook: FC = () => {
    const [loading, setLoading] = useState(false);
    const [billData, setBillData] = useState(undefined as any) as any;
    const [categoriesData, setCategoriesData] = useState(undefined as any);
    const [filterParams, setFilterParams] = useState({});

    const init = async () => {
        setLoading(true);

        try {
            const bill = (await getCsvData(billCsvUrl)) as any;
            const categories = (await getCsvData(categoriesCsvUrl)) as any;

            setBillData(bill);
            setCategoriesData(categories);
        } catch (error) {
            console.error(error);
        }

        setLoading(false);
    };

    const handleFilterChange = (params: any) => {
        setFilterParams(params);
    };

    useEffect(() => {
        init();
        // eslint-disable-next-line
    }, []);

    return (
        <Spin spinning={loading}>
            <Layout className="app">
                <Content className="content-section">
                    <Filter onChange={handleFilterChange} categoriesData={categoriesData} />
                </Content>
                <Content className="content-section">
                    <DataView />
                </Content>
                <Content className="content-section">
                    <List
                        data={billData}
                        categoriesData={categoriesData}
                        loading={loading}
                        fitlerParams={filterParams}
                    />
                </Content>
            </Layout>
        </Spin>
    );
};

export default AccountBook;
