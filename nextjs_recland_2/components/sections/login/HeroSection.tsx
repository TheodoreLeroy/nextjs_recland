import Image from "next/image";
import { BENEFITS } from "@/constants/login";

export default function HeroSection() {
  return (
    <section className="bg-[#111827] px-6 py-16 text-white lg:px-12">
      <div className="mx-auto max-w-xl">
        <h2 className="mb-4 text-4xl font-bold">
          Trở thành cộng tác viên tuyển dụng
        </h2>

        <p className="mb-10 text-gray-300">
          Kiếm thêm thu nhập bằng cách giới thiệu ứng viên cho các doanh nghiệp.
        </p>

        <div className="space-y-5">
          {BENEFITS.map((item) => (
            <div
              key={item.title}
              className="flex items-start gap-4 rounded-2xl bg-white/10 p-5"
            >
              <Image src={item.icon} alt={item.title} width={48} height={48} />

              <div>
                <h3 className="font-semibold">{item.title}</h3>

                <p className="text-sm text-gray-300">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
