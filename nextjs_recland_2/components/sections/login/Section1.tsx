import Container from "@/components/common/Container";
import { Card } from "@/components/ui/Card";
import Image from "next/image";
import { BENEFITS2 } from "@/constants/login";

export default function Section1() {
  return (
    <section className="relative mt-20 min-h-screen">
      <Container>
        <h2 className="text-center lg:text-6xl lg:font-bold text-main mb-10">Ai phù hợp trở thành CTV Recland</h2>
        <div className="flex items-start gap-10 w-full md:justify-center justify-between flex-wrap lg:flex-nowrap">
          {BENEFITS2.map((item) => {
            return (
              <div className="w-full max-w-120 flex flex-col gap-4 items-center">
                  <Image src={item.image} alt="" width={400} height={400} />
                  <h3 className="lg:text-center lg:text-3xl font-bold text-[#F79720]">{item.title}</h3>
                  <p className="text-[#CACACA] text-center">{item.description}</p>
              </div>
              
            );
          })}
        </div>
      </Container>
    </section>
  );
}
