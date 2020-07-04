import React, { FC } from 'react';
import { Form, DatePicker, Select } from "antd";

const { MonthPicker } = DatePicker;
const { Option } = Select;

const Filter : FC = () => {
    return (
        <Form>
            <Form.Item name="month" label="月份">
                <MonthPicker />
            </Form.Item>
            <Form.Item>
                <Select>
                    <Option value={-1}>请选择</Option>
                </Select>
            </Form.Item>
        </Form>
    )
}

export default Filter;