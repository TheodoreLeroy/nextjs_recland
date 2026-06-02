import Container from "@/components/common/Container";
import { Card } from "@/components/ui/Card";
import Image from "next/image";
export default function Section1() {
    const images = [
        "/graphics/thumb1752b.jpg",
        "/graphics/thumb2752b.jpg",
        "/graphics/thumb3752b.jpg",
    ]
  return (
    <section className="relative min-h-screen mt-20">
      <Container>
        <div>
            <h2 className="lg:text-6xl font-bold text-main text-center">Ai phù hợp trở thành CTV Recland</h2>
            <div className="flex mt-10">
                {images.map((image) => {
                    return(
                        <Card className="">
                            <Image src={image} alt="" width={400} height={400}/>
                            <h3></h3>
                        </Card>
                    )
                })}
            </div>
        </div>
      </Container>
    </section>
  );
}
