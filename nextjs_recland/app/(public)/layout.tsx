import { Footer } from "../components/Footer";
import { TopNavBar } from "../components/TopNavBar";
import backGround from "@/public/bg-top.jpg";
export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <header>
                {/* Navigation */}
                <TopNavBar/>
            </header>
            <div id="app" className="w-screen h-2500">
                {children}
            </div>
        </>
    );
}
