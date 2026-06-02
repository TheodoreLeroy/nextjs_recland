"use client";

import React, { useState, useEffect } from "react";
import { Form, Checkbox, Input, Flex, Divider } from "antd";
import Button from "@/components/ui/Button";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import SwitchTabs from "@/components/ui/SwitchTab";
import Section1 from "@/components/sections/login/Section1";
import { useRouter } from "next/navigation";
import { useRoleStore } from "@/store/useRole.store";
type FieldType = {
  username?: string;
  password?: string;
  remember?: boolean;
};

const images = [
  "/graphics/banner-sign752b.png",
  "/graphics/thumb1752b.jpg",
  "/graphics/thumb2752b.jpg",
  "/graphics/thumb3752b.jpg",
];

const LoginPage: React.FC = () => {
  const [form] = Form.useForm();
  const [index, setIndex] = useState(0);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const { role, setRole } = useRoleStore();
  // Image carousel effect
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

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
    <div>
      <div className="relative flex min-h-screen w-full items-stretch overflow-hidden pt-20 md:pt-24 lg:pt-26">
        {/* 1. BÊN TRÁI: KHU VỰC FORM (Chiếm 100% mobile, 1/2 màn hình từ md trở lên) */}
        <div className="z-10 flex w-full items-center justify-center bg-white px-6 py-12 md:w-1/2 lg:px-16 xl:px-24">
          <div className="w-full max-w-110">
            {/* Heading */}
            <div className="mb-8">
              <h1 className="mb-3 text-2xl font-bold text-[#111827] text-main lg:text-2xl">
                Chào mừng bạn đến với Recland.co
              </h1>
              <p className="text-sm text-gray-500">
                Vui lòng chọn phương thức đăng nhập dưới đây:
              </p>
            </div>
            {/* Social login */}
            <div className="mb-6 grid grid-cols-2 gap-4">
              <button className="flex cursor-pointer items-center justify-center gap-2 rounded-xl border border-gray-300 py-2.5 font-medium text-gray-700 transition hover:bg-gray-50">
                <img
                  src="/icons/google-icon.png"
                  alt="Google"
                  className="h-5 w-5"
                />
                Google
              </button>
              <button className="flex cursor-pointer items-center justify-center gap-2 rounded-xl border border-gray-300 py-2.5 font-medium text-gray-700 transition hover:bg-gray-50">
                <img
                  src="/icons/facebook-icon.png"
                  alt="Facebook"
                  className="h-5 w-5"
                />
                Facebook
              </button>
            </div>
            <Divider className="my-6 text-xs font-normal text-gray-200">
              <h3 className="text-gray-400">HOẶC ĐĂNG NHẬP BẰNG</h3>
            </Divider>
            <SwitchTabs
              value={role}
              onChange={setRole} // 3. Truyền thẳng hàm setRole của Zustand vào đây
              options={[
                { label: "Candidate", value: "candidate" },
                { label: "Recruiter", value: "recruiter" },
                { label: "Employer", value: "employer" },
              ]}
            />
            ;{/* Form Ant Design */}
            <Form
              form={form}
              layout="vertical"
              initialValues={{
                username: "hunganh0503",
                password: "Hunganh0503@",
                remember: true,
              }}
              requiredMark={false}
              onFinish={onFinish}
            >
              <Form.Item<FieldType>
                name="username"
                rules={[
                  { required: true, message: "Please input your username!" },
                ]}
              >
                <Input
                  size="large"
                  placeholder="Email"
                  prefix={<UserOutlined className="text-gray-400" />}
                  className="h-12 rounded-lg"
                />
              </Form.Item>

              <Form.Item<FieldType>
                name="password"
                rules={[
                  { required: true, message: "Please input your password!" },
                  { min: 8, message: "Password must be at least 8 characters" },
                ]}
              >
                <Input.Password
                  size="large"
                  placeholder="Mật khẩu"
                  prefix={<LockOutlined className="text-gray-400" />}
                  className="h-12 rounded-lg"
                />
              </Form.Item>

              <Form.Item>
                <Flex justify="space-between" align="center">
                  <Form.Item name="remember" valuePropName="checked" noStyle>
                    <Checkbox className="text-gray-600">Lưu tài khoản</Checkbox>
                  </Form.Item>
                  <a href="#" className="text-sm text-sky-500 hover:underline">
                    Quên mật khẩu
                  </a>
                </Flex>
              </Form.Item>

              <Form.Item className="mb-4">
                <Button
                  type="submit"
                  variant="primary"
                  className="!h-12 w-full !rounded-xl !border-none bg-[#f5a623] text-base font-bold text-white hover:opacity-90"
                >
                  Đăng nhập
                </Button>
              </Form.Item>

              <p className="mt-6 text-center text-sm text-gray-600">
                Bạn là thành viên mới?{" "}
                <a
                  href="#"
                  className="font-medium text-sky-500 hover:underline"
                >
                  Tạo tài khoản ngay
                </a>
              </p>
            </Form>
            {/* Banner Nhà tuyển dụng phụ phía dưới giống ảnh mẫu */}
            <div className="mt-10 flex items-center gap-4 rounded-xl border border-sky-100 bg-sky-50 p-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-sky-500 text-xl font-bold text-white">
                🏢
              </div>
              <div>
                <h4 className="text-sm font-bold text-gray-800">
                  Bạn là nhà tuyển dụng?
                </h4>
                <p className="my-0.5 text-xs text-gray-500">
                  Rất nhiều CV ứng viên đang chờ ứng tuyển vào công ty của bạn.
                </p>
                <a
                  href="#"
                  className="text-xs font-bold text-sky-500 hover:underline"
                >
                  Đăng nhập ngay
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* 2. BÊN PHẢI: KHU VỰC THƯ VIỆN ẢNH BANNER (Ẩn trên mobile, chiếm 1/2 trên md:) */}
        <div className="relative hidden items-center justify-center overflow-hidden bg-slate-900 md:flex md:w-1/2 md:rounded-bl-[20rem]">
          {/* Animate Background Images */}
          <div className="absolute inset-0 z-0">
            <AnimatePresence mode="wait">
              <motion.img
                key={images[index]}
                src={images[index]}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.2, ease: "easeInOut" }}
                className="absolute inset-0 h-full w-full object-cover opacity-80"
              />
            </AnimatePresence>
            {/* Lớp phủ màu tối nhẹ để nổi bật chữ */}
            <div className="absolute inset-0 bg-black/20 backdrop-blur-[2px]"></div>
          </div>
        </div>
      </div>
      <Section1 />
    </div>
  );
};

export default LoginPage;
