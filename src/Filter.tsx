import React, { FC } from 'react';
import { Form, DatePicker, Button } from 'antd';
import moment from 'moment';

const { MonthPicker } = DatePicker;

const Filter: FC<{
    onChange: (params: any) => void;
}> = ({ onChange }) => {
    const handleSubmit = (params: any) => {
        const { month } = params;

        onChange({
            month: moment(month).month()
        });
    };

    return (
        <Form layout="inline" onFinish={handleSubmit}>
            <Form.Item name="month" label="月份">
                <MonthPicker />
            </Form.Item>
            <Form.Item>
                <Button type="primary" htmlType="submit">
                    查询
                </Button>
            </Form.Item>
        </Form>
    );
};

export default Filter;
