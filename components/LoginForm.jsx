'use client';
import React, { useState } from 'react';
import { Button, Form, Input, Select } from 'antd';
const { TextArea } = Input;
const { Option } = Select;

import './App.css';

const LoginForm = () => {
  const [department, setDepartment] = useState();
  const [time, setTime] = useState('4 P.M.');

  const onDepartmentChange = (value) => {
    setDepartment(value);
  };
  const onTimeChange = (value) => {
    setTime(value);
  };
  const onFinish = (values) => {
    console.log('Success:', values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  return (
    <div className="flex justify-center flex-col gap-4 py-8 px-12 rounded-lg bg-white shadow-lg">
      <div className="text_div flex flex-col text-center py-2">
        <p className="text-lg font-semibold md:block hidden">Contact Us</p>
        <p className="text-3xl font-semibold md:block hidden">
          Make an Appointment
        </p>
        <p className="text-2xl font-semibold block md:hidden">
          Book Appointment
        </p>
      </div>
      <div className="form_div">
        <Form
          name="basic"
          className="flex flex-col gap-2"
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <div className="grid md:grid-cols-2 grid-cols-1 gap-4 pb-4">
            <Form.Item
              label={<label className=" md:hidden">Name *</label>}
              name="fullname"
            >
              <Input
                placeholder="Full Name *"
                className="w-full p-2 bg-[#F9F9F9]"
              />
            </Form.Item>

            <Form.Item
              label={<label className=" md:hidden">Email Address *</label>}
              name="email"
              rules={[
                {
                  type: 'email',
                  message: 'Please enter a valid email!',
                },
              ]}
            >
              <Input
                placeholder="Email *"
                className="w-full p-2 bg-[#F9F9F9]"
              />
            </Form.Item>
            <Form.Item
              label={<label className=" md:hidden">Department *</label>}
              name="department"
            >
              <Select
                placeholder="Please Select"
                onChange={onDepartmentChange}
                allowClear
                className="w-full bg-[#F9F9F9]"
              >
                <Option value="Tech">Tech</Option>
                <Option value="Management">Management</Option>
                <Option value="Operation">Operation</Option>
              </Select>{' '}
            </Form.Item>
            <Form.Item
              label={<label className=" md:hidden">Time *</label>}
              name="time"
            >
              <Select
                placeholder="Please Select"
                onChange={onTimeChange}
                className="w-full  bg-[#F9F9F9]"
                allowClear
                value={time}
              >
                <Option value="4">4 P.M.</Option>
                <Option value="6">6 P.M.</Option>
                <Option value="8">8 P.M.</Option>
              </Select>{' '}
            </Form.Item>
          </div>
          <TextArea
            autoSize={{
              minRows: 3,
              maxRows: 5,
            }}
            placeholder="Message"
            className="mb-2 md:block hidden bg-[#F9F9F9] focus:bg-[#F9F9F9 focus:outline-none"
          />
        </Form>
        <div className="btn_div flex justify-center">
          <Button
            type="primary"
            className="bg-[#23A6F0] font-semibold w-full md:w-auto"
            style={{ padding: 24 }}
            htmlType="submit"
          >
            Book Appointment
          </Button>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
