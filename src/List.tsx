import React, { FC } from 'react';
import { Table } from 'antd';
import moment from 'moment';
import numeral from 'numeral';
import { CategoriesData } from './types';

const List: FC<{
    data: {
        columns: any[];
        dataSource: any[];
    };
    loading: boolean;
    fitlerParams: any;
    categoriesData: CategoriesData;
}> = ({ data, loading, fitlerParams, categoriesData }) => {
    const { month } = fitlerParams;
    const categories = categoriesData && categoriesData.dataSource;
    const columns =
        data &&
        data.columns.map(item => {
            const { dataIndex } = item;

            return {
                ...item,
                render: (text: string) => {
                    switch (dataIndex) {
                        case 'type':
                            switch (text) {
                                case '0':
                                    return '支出';

                                case '1':
                                    return '收入';
                                default:
                                    return '--';
                            }
                        case 'time':
                            return moment(Number(text)).format('YYYY-MM-DD HH:mm:ss');
                        case 'category':
                            return;
                        case 'amount':
                            return numeral(text).format('$0,0.00');
                        default:
                            return null;
                    }
                }
            };
        });
    const dataSource = data && data.dataSource;

    return (
        <Table
            bordered
            size="small"
            rowKey={(...args) => {
                return String(args[1]);
            }}
            columns={columns}
            dataSource={dataSource}
            loading={loading}
        />
    );
};

export default List;
