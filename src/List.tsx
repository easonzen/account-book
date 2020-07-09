import React, { FC } from 'react';
import { Table } from 'antd';
import moment from 'moment';
import numeral from 'numeral';

const List: FC<{
    data: {
        columns: any[];
        dataSource: any[];
    };
    loading: boolean;
    fitlerParams: any;
}> = ({ data, loading, fitlerParams }) => {
    const { month } = fitlerParams;
    const columns =
        data &&
        data.columns.map(item => {
            if (item.dataIndex === 'type') {
                return {
                    ...item,
                    render: (text: string) => {
                        switch (text) {
                            case '0':
                                return '支出';

                            case '1':
                                return '收入';
                            default:
                                return '--';
                        }
                    }
                };
            }

            if (item.dataIndex === 'time') {
                return {
                    ...item,
                    render: (text: string) => {
                        return moment(Number(text)).format('YYYY-MM-DD HH:mm:ss');
                    }
                };
            }

            if (item.dataIndex === 'amount') {
                return {
                    ...item,
                    render: (text: string) => {
                        return numeral(text).format('$0,0.00');
                    }
                };
            }

            return item;
        });
    const dataSource = data && data.dataSource;

    console.log(month);

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
