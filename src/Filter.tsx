import React, { FC } from 'react';
import { Form, DatePicker, Button } from 'antd';

const { MonthPicker } = DatePicker;

const Filter: FC = () => {
    return (
        <Form layout="inline">
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
