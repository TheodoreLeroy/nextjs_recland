"use client";
import { Image } from "antd";
import Link from "next/link";
export const Footer = () => {
    const scrollToTop = (e: React.MouseEvent<HTMLImageElement>) => {
        // e.preventDefault();
        // console.log("Scroll to top");
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    };

    return (
        <footer
            id="page_footer"
            className="
                    absolute
                    -z-10
                    top-400
                    left-0
                    bottom-0
                    w-screen
                    h-[393px]
                    py-[60px]
                    bg-footer-color"
        >
            <div className="flex w-2/3 h-full m-auto">
                <div
                    id="left-footer"
                    className="flex flex-col flex-1 items-center justify-center"
                >
                    <a href="#" className="cursor-pointer scroll-smooth">
                        <img
                            src="/logo.png"
                            alt="RecLand Logo"
                            width={300}
                            height={91}
                            style={{ pointerEvents: "none" }}
                            className=""
                        ></img>
                    </a>
                    <p className="h-fit text-[20px] leading-12 mt-7 line">
                        Mang việc làm và ưu đãi hấp dẫn đến cho Recer và Ứng
                        viên
                    </p>
                    <div className="flex gap-1 mt-16">
                        <Link
                            href="https://www.facebook.com/RecLand-104644441489203"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Image
                                src="/icons/icon-face.png"
                                alt="Facebook"
                                width={64}
                                height={65}
                                style={{ pointerEvents: "none" }}
                            />
                        </Link>
                        <Link
                            href="https://www.linkedin.com/company/recland"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Image
                                src="/icons/icon-zalo.png"
                                alt="LinkedIn"
                                width={64}
                                height={65}
                                style={{ pointerEvents: "none" }}
                            />
                        </Link>
                        <Link
                            href="https://www.instagram.com/recland.vn/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Image
                                src="/icons/icon-in.png"
                                alt="Instagram"
                                width={64}
                                height={65}
                                style={{ pointerEvents: "none" }}
                            />
                        </Link>
                    </div>
                </div>
                <div id="right-footer" className="flex flex-1 px-50">
                    <div className="w-1/2 h-fit">
                        <ul>
                            <li className="font-bold">Về chúng tôi</li>
                            <li>
                                <Link href="#">Giới thiệu</Link>
                            </li>
                            <li>
                                <Link href="#">Liên hệ</Link>
                            </li>
                            <li>
                                <Link href="#">Đăng tuyển dụng</Link>
                            </li>
                            <li>
                                <Link href="#">Tìm kiếm hồ sơ</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="w-1/2 h-full">
                        <ul>
                            <li className="font-bold">Đối tác</li>
                            <li>
                                <Link href="#">Cơ chế hoạt động CTV</Link>
                            </li>
                            <li>
                                <Link href="#">
                                    Cơ chế hoạt động nhà tuyển dụng
                                </Link>
                            </li>
                            <li>
                                <Link href="#">Sản phẩm và dịch vụ khác</Link>
                            </li>
                            <li>
                                <Link href="#">Quy định bảo mật</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
};
