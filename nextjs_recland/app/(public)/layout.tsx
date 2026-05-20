import { Footer } from "../components/Footer";
import { TopNavBar } from "../components/TopNavBar";
import backGround from "@/public/bg-top.jpg";
export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <>
            {/* <div
                id="doc border"
                className="absolute left-1/2 -translate-x-1/2 w-[1280px] h-[1080px] z-0"
            >
                <section
                    id="top-navbar"
                    className="w-full h-[108px] top-[108] sticky bg-topbar-color/0 " // Thêm màu nền để che nội dung bên dưới
                >
                    <TopNavBar />
                </section>
            </div> */}
            {/* <div className="w-full h-full bg-[url('/bg-top.jpg')]"></div> */}
            {/* <div
                id="app"
                className="flex flex-col w-screen h-full overflow-x-hidden"
            >
                {children}
            </div> */}
            <div className="relative flex w-full h-full">
                <div
                    id="doc_boundary"
                    className="
                    flex
                    flex-col
                    z-5
                    w-2/3
                    h-full
                    m-auto
                    
                    border-2
                    border-b-amber-300"
                >
                    <a href="#bot" className="w-5 h-5">
                        abb
                    </a>
                    {children}
                    <Footer/>
                </div>
            </div>
        </>
    );
}
