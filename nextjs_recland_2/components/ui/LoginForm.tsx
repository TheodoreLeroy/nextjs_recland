"use client";

import React, { useState, useEffect } from "react";
import { Form, Checkbox, Input, Flex, Divider, Button } from "antd";
// import Button from "@/components/ui/Button";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import SwitchTabs from "@/components/ui/SwitchTab";
import Section1 from "@/components/sections/login/Section1";
import { useRouter } from "next/navigation";
import { useRoleStore } from "@/store/useRole.store";
import Link from "next/link";
import Image from "next/image";
type FieldType = {
  username?: string;
  password?: string;
  remember?: boolean;
};

export default function LoginForm() {
  const [form] = Form.useForm();
  const [index, setIndex] = useState(0);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const { role, setRole } = useRoleStore();

  const onFinish = async (values: FieldType) => {
    try {
      setLoading(true);
      // const res = await loginApi(values.username, values.password, role);

      console.log("Đăng nhập thành công với thông tin:", { ...values, role });

      switch (role) {
        case "candidate":
          router.push("/candidate");
          break;
        case "recruiter":
          router.push("/recruiter");
          break;
        case "employer":
          router.push("/employer");
          break;
        default:
          router.push("/login");
      }
    } catch (error) {
      console.error("Đăng nhập thất bại:", error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div
      className={`fade-in-top fixed top-1/2 left-1/2 flex min-h-160 min-w-120
        -translate-x-1/2 -translate-y-1/2 items-center justify-center
        rounded-4xl bg-white py-30 shadow-2xl shadow-blue-700`}
    >
      <div className="w-90 text-[#17677b]!">
        <div className="mb-8">
          <h3 className="title-form text-4xl! font-extrabold!">
            Chào mừng bạn đến với Recland.co
          </h3>
          <p>Vui lòng lựa chọn phương thức đăng nhập dưới đây:</p>
          {/* Social */}
          <div className="flex flex-nowrap gap-4 mb-2">
            {/* Google */}
            <Link
              href={
                "https://accounts.google.com/o/oauth2/auth?client_id=1013866890294-uufjf9e2u7083sgclovg59d46sr0s04o.apps.googleusercontent.com&amp;redirect_uri=https%3A%2F%2Frecland.co%2Fcallback%2Fgoogle&amp;scope=openid+profile+email&amp;response_type=code&amp;state=vluxWJMrxYzqPKOBLXFaWUL0Ivf4mvKFhLp3gM7d"
              }
              className="flex flex-1 gap-2 rounded-2xl border border-cyan-400 py-2 justify-center items-center"
            >
              <img src="/images/icons/icon-google.svg#Lock?v=20251125" alt="" />
              <span>Google</span>
            </Link>
            {/* Facebook */}
            <Link
              href={
                "https://accounts.google.com/o/oauth2/auth?client_id=1013866890294-uufjf9e2u7083sgclovg59d46sr0s04o.apps.googleusercontent.com&amp;redirect_uri=https%3A%2F%2Frecland.co%2Fcallback%2Fgoogle&amp;scope=openid+profile+email&amp;response_type=code&amp;state=vluxWJMrxYzqPKOBLXFaWUL0Ivf4mvKFhLp3gM7d"
              }
              className="flex flex-1 gap-2 rounded-2xl border border-cyan-400 py-2 justify-center items-center"
            >
              <img src="/images/icons/icon-google.svg#Lock?v=20251125" alt="" />
              <span>Google</span>
            </Link>
          </div>
          <Form
            form={form}
            layout="vertical"
            initialValues={{
              username: "hunganh0503",
              password: "Hunganh0503@",
              remember: true,
            }}
            // onFinish={``}
            requiredMark={false}
            className="mt-6"
          >
            <Form.Item<FieldType>
              name="username"
              rules={[
                { required: true, message: "Please input your username!" },
              ]}
            >
              <Input
                size="large"
                placeholder="Enter your username"
                prefix={<UserOutlined className="text-gray-400" />}
                className="h-12 rounded-lg"
              />
            </Form.Item>

            <Form.Item<FieldType>
              name="password"
              rules={[
                { required: true, message: "Please input your password!" },
                {
                  min: 8,
                  message: "Password must be at least 8 characters",
                },
                {
                  pattern: /^(?=.*[!@#$%^&*])/,
                  message:
                    "Password must contain at least one special character",
                },
                {
                  pattern: /^(?=.*[A-Z])/,
                  message:
                    "Password must contain at least one uppercase letter",
                },
              ]}
            >
              <Input.Password
                size="large"
                placeholder="Enter your password"
                prefix={<LockOutlined className="text-gray-400" />}
                className="h-12 rounded-lg"
              />
            </Form.Item>

            <Form.Item>
              <Flex justify="space-between" align="center">
                <Form.Item name="remember" valuePropName="checked" noStyle>
                  <Checkbox>Remember me</Checkbox>
                </Form.Item>
                <a href="#" className="text-red-950 hover:underline">
                  Forgot password?
                </a>
              </Flex>
            </Form.Item>

            <Form.Item className="mb-4">
              <Button
                type="primary"
                htmlType="submit"
                block
                size="large"
                loading={loading}
                className="h-12! rounded-xl! border-none! text-lg font-bold"
              >
                Log In
              </Button>
            </Form.Item>

            <p className="mt-6 text-center text-sm text-gray-500">
              Don&apos;t have an account?{" "}
              <a href="#" className="font-medium text-red-950 hover:underline">
                Register now
              </a>
            </p>
          </Form>
        </div>
      </div>
    </div>
  );
}
