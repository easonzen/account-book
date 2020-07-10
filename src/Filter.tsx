import React, { FC } from 'react';
import { Form, DatePicker, Select, Button } from 'antd';
import moment from 'moment';
import { CategoriesData } from './types';

const { MonthPicker } = DatePicker;
const { Option } = Select;

const Filter: FC<{
    onChange: (params: any) => void;
    categoriesData: CategoriesData;
}> = ({ onChange, categoriesData }) => {
    const categories = categoriesData && categoriesData.dataSource;

    const handleSubmit = (params: any) => {
        const { month } = params;

        onChange({
            month: moment(month).month()
        });
    };

    return (
        <Form layout="inline" onFinish={handleSubmit}>
            <Form.Item name="month" label="月份">
                <MonthPicker style={{ width: '200px' }} placeholder="请选择月份" />
            </Form.Item>
            <Form.Item name="category" label="消费类型">
                <Select style={{ width: '200px' }} placeholder="请选择消费类型">
                    {categories &&
                        categories.map(item => {
                            return (
                                <Option key={item.id} value={item.id}>
                                    {item.name}
                                </Option>
                            );
                        })}
                </Select>
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
