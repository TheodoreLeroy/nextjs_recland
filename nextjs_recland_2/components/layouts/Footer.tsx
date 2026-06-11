"use client";

import Container from "../common/Container";
import { RECLAND_LOGO, SOCIAL_ICONS, FOOTER } from "@/constants/ui";
import Image from "next/image";
import Link from "next/link";
export default function Footer() {
  return (
    <>
      {/* <!--Footer--> */}
      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <a className="logo" title="new-ca" href="#">
                <img src="/images/graphics/logo752b.png" alt="" />
                <img className="logo-white" src="/images/graphics/logo-white752b.png" alt="" />
              </a>
              <div className="mb40">Mang việc làm và ưu đãi hấp dẫn đến cho Recer và Ứng viên</div>
              <div className="social flex">
                <a target="_blank" href="https://www.facebook.com/Reclandco">
                  <img src="/images/icons/icon-face752b.png" alt="" />
                </a>
                <a target="_blank" href="https://zalo.me/g/jpavpc766">
                  <img src="/images/icons/icon-zalo752b.png" alt="" />
                </a>
                <a target="_blank" href="https://www.linkedin.com/company/reclandco/">
                  <img src="/images/icons/icon-in752b.png" alt="" />
                </a>
              </div>
            </div>
            <div className="col-md-8">
              <div className="row">
                <div className="col-sm-6">
                  <h3 className="title"> Về chúng tôi</h3>
                  <ul>
                    <li>
                      <a target="_blank" href="about-us.html">
                        Giới thiệu
                      </a>
                    </li>
                    <li>
                      <a target="_blank" href="contact-us.html">
                        Liên hệ
                      </a>
                    </li>
                    <li>
                      <a target="_blank" href="#">
                        Đăng tuyển dụng
                      </a>
                    </li>
                    <li>
                      <a target="_blank" href="#">
                        Tìm kiếm hồ sơ
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="col-sm-6">
                  <h3 className="title">Đối tác</h3>
                  <ul>
                    <li>
                      <a target="_blank" href="policy/mechanism-of-action-collaborator.html">
                        Cơ chế hoạt động CTV
                      </a>
                    </li>
                    <li>
                      <a target="_blank" href="policy/mechanism-of-action-rec.html">
                        Cơ chế hoạt động NTD
                      </a>
                    </li>
                    <li>
                      <a target="_blank" href="policy/terms-of-service.html">
                        Sản phẩm và dịch vụ khác
                      </a>
                    </li>
                    <li>
                      <a target="_blank" href="policy/privacy-policy.html">
                        Quy định bảo mật
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      {/* <!--End Footer--> */}
    </>
  );
}
