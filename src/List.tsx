import React, { FC } from 'react';
import { Table } from 'antd';
import moment from 'moment';

const List: FC<{
    data: {
        columns: any[];
        dataSource: any[];
    };
    loading: boolean;
}> = ({ data, loading }) => {
    // const { columns, dataSource } = data;
    const columns =
        data &&
        data.columns.map(item => {
            if (item.dataIndex === 'time') {
                return {
                    ...item,
                    render: (text: number) => moment(text).format('YYYY-MM-DD HH:mm:ss')
                };
            }

            return item;
        });
    const dataSource = data && data.dataSource;

    return (
        <Table
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
