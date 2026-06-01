import Container from "@/components/common/Container";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Button from "@/app/components/Button";
export default function HeroSection() {
  return (
    <section className="relative min-h-screen bg-(image:--bg-hero) bg-cover bg-center">
      <Container>
        <div className="flex min-h-screen flex-col justify-center lg:grid lg:grid-cols-2 lg:items-center">
          {/* Left content */}
          <div id="left" className="">
            <h1 className="mx-4 justify-center text-5xl font-black text-gray-300">
              Nền tảng tạo ra cơ hội kiếm tiền dành cho <br />
              <span className="text-yellow-300 uppercase">HR Freelance</span>
            </h1>
            <Button
              variant="primary"
              className="text-md mx-4 mt-10 flex w-16 justify-center gap-2 py-6"
            >
              Tìm việc ngay
              <FaArrowRight />
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
