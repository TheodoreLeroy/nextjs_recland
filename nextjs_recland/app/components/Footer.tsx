import { Image } from "antd";

export const Footer = () => {
    return (
        <footer
            id="page_footer"
            className="
                    absolute
                    -z-10
                    left-0
                    bottom-0
                    w-screen
                    h-[393px]
                    py-[60px]
                    bg-footer-color"
        >
            <div className="flex w-2/3 h-full m-auto">
                <div id="left-footer" className="flex-1">
                    <button className="w-full h-full">
                        <Image
                            src="/logo.png"
                            alt="Logo"
                            width={100}
                            height={100}
                            className="w-full h-full object-contain"
                        />
                    </button>
                </div>
                <div id="right-footer" className="flex-2"></div>
            </div>
        </footer>
    );
};
