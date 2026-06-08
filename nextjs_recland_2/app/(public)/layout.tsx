import Footer from "@/components/layouts/Footer";
import Navigation from "@/components/layouts/Navigation";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      {/* <Navigation /> */}
      <div id="app" className="relative">
        {children}
      </div>
      {/* <Footer /> */}
    </>
  );
}
