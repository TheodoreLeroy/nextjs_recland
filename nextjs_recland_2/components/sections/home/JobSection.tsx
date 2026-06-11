"use client";

import Container from "@/components/common/Container";
import { JobCard } from "@/components/ui/Card";
import { JOBS_CATEGORY, JOB_CARDS } from "@/constants/job";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Grid } from "swiper/modules";
import "swiper/css";
import "swiper/css/grid";
import Button from "@/components/ui/Button";
import { FaRegHeart } from "react-icons/fa6";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function JobSection() {
  return (
    // <!-- Section Home: Featured Jobs -->
    <section className="sh-jobs-section clearfix mb80">
      <div className="container" data-aos="fade-up" data-aos-duration="1000">
        {/* <!-- Section Header --> */}
        <div className="sh-jobs-header">
          <div className="sh-jobs-header-left">
            <h2 className="sh-jobs-title">
              Việc làm <span>tốt nhất</span>
            </h2>
            <div className="sh-jobs-badge">
              <i className="fa fa-rocket"></i>
              <span>Đề xuất bởi Recland AI</span>
            </div>
          </div>
          <div className="sh-jobs-header-right">
            <a href="jobs-list.html" className="sh-jobs-viewall">
              Xem tất cả
            </a>
            <button className="sh-jobs-nav-btn" id="sh-jobs-prev-btn">
              <i className="fa fa-chevron-left"></i>
            </button>
            <button className="sh-jobs-nav-btn" id="sh-jobs-next-btn">
              <i className="fa fa-chevron-right"></i>
            </button>
          </div>
        </div>

        {/* <!-- Tips Alert Banner --> */}
        <div className="sh-jobs-tip-banner" id="sh-jobs-tip-banner">
          <div className="sh-jobs-tip-content">
            <i className="fa fa-lightbulb-o"></i>
            <span>
              Gợi ý: Di chuột vào tiêu đề việc làm để xem thêm thông tin chi
              tiết
            </span>
          </div>
          <button className="sh-jobs-tip-close" id="sh-jobs-tip-close-btn">
            &times;
          </button>
        </div>

        {/* <!-- Jobs Grid --> */}
        <div className="sh-jobs-grid">
          {/* <!-- Job Card 1 --> */}
          <div className="sh-jobs-card" data-location="Hà Nội">
            <div className="sh-jobs-card-top">
              <div className="sh-jobs-logo-wrapper">
                <img src="/images/logo/logo-1.png" alt="Company Logo" />
              </div>
              <div className="sh-jobs-details">
                <div className="sh-jobs-title-row">
                  <span className="sh-jobs-tag hot">Recland process</span>
                  <a href="job-detail.html" className="sh-jobs-card-title">
                    Trưởng Nhóm/ Leader Marketing Tại Hà Đông [Thu Nhập + Cơ Hội
                    Thăng Tiến]
                  </a>
                </div>
                <p className="sh-jobs-card-company">
                  CÔNG TY TNHH ĐẦU TƯ SẢN XUẤT VÀ XUẤT NHẬP KHẨU QUEEN CROWN
                </p>
              </div>
            </div>
            <div className="sh-jobs-card-footer">
              <div className="sh-jobs-card-meta">
                <span className="sh-jobs-location">Hà Nội</span>
              </div>
              <div className="sh-jobs-bonus-row">
                <i className="fa fa-gift"></i> 20.000.000/Onboard
              </div>
              <button className="sh-jobs-heart-btn">
                <FaRegHeart />
              </button>
            </div>
          </div>

          {/* <!-- Job Card 2 --> */}
          <div className="sh-jobs-card" data-location="Hà Nội">
            <div className="sh-jobs-card-top">
              <div className="sh-jobs-logo-wrapper">
                <img src="/images/logo/logo-2.png" alt="Company Logo" />
              </div>
              <div className="sh-jobs-details">
                <div className="sh-jobs-title-row">
                  <a href="job-detail.html" className="sh-jobs-card-title">
                    Nhân Viên Điều Phối Vận Tải Tại Hà Nội - Đi Làm Ngay
                  </a>
                </div>
                <p className="sh-jobs-card-company">
                  Bee Logistics Corporation
                </p>
              </div>
            </div>
            <div className="sh-jobs-card-footer">
              <div className="sh-jobs-card-meta">
                <span className="sh-jobs-location">Hà Nội</span>
              </div>
              <div className="sh-jobs-bonus-row">
                <i className="fa fa-gift"></i> 500.000/CV
              </div>
              <button className="sh-jobs-heart-btn">
                <FaRegHeart />
              </button>
            </div>
          </div>

          {/* <!-- Job Card 3 --> */}
          <div className="sh-jobs-card" data-location="Hà Nội">
            <div className="sh-jobs-card-top">
              <div className="sh-jobs-logo-wrapper">
                <img src="/images/logo/logo-3.png" alt="Company Logo" />
              </div>
              <div className="sh-jobs-details">
                <div className="sh-jobs-title-row">
                  <span className="sh-jobs-tag hot">Recland process</span>
                  <a href="job-detail.html" className="sh-jobs-card-title">
                    Nhân Viên Kinh Doanh/ Tư Vấn Giáo Dục Lương Cao
                  </a>
                </div>
                <p className="sh-jobs-card-company">
                  CÔNG TY CỔ PHẦN TƯ VẤN ĐỔI MỚI GIÁO DỤC
                </p>
              </div>
            </div>
            <div className="sh-jobs-card-footer">
              <div className="sh-jobs-card-meta">
                <span className="sh-jobs-location">Hà Nội & 2 nơi khác</span>
              </div>
              <div className="sh-jobs-bonus-row">
                <i className="fa fa-gift"></i> 2.000.000/Interview
              </div>
              <button className="sh-jobs-heart-btn">
                <FaRegHeart />
              </button>
            </div>
          </div>

          {/* <!-- Job Card 4 --> */}
          <div className="sh-jobs-card" data-location="Hà Nội">
            <div className="sh-jobs-card-top">
              <div className="sh-jobs-logo-wrapper">
                <img src="/images/logo/logo-4.png" alt="Company Logo" />
              </div>
              <div className="sh-jobs-details">
                <div className="sh-jobs-title-row">
                  <a href="job-detail.html" className="sh-jobs-card-title">
                    Nhân Viên Kinh Doanh Bất Động Sản - Lương Cứng Tới 15 Triệu,
                    Data Có Sẵn
                  </a>
                </div>
                <p className="sh-jobs-card-company">
                  CÔNG TY CỔ PHẦN ĐỊA ỐC MAI VIỆT
                </p>
              </div>
            </div>
            <div className="sh-jobs-card-footer">
              <div className="sh-jobs-card-meta">
                <span className="sh-jobs-location">Hà Nội</span>
              </div>
              <div className="sh-jobs-bonus-row">
                <i className="fa fa-gift"></i> 20.000.000/Onboard
              </div>
              <button className="sh-jobs-heart-btn">
                <FaRegHeart />
              </button>
            </div>
          </div>

          {/* <!-- Job Card 5 --> */}
          <div className="sh-jobs-card" data-location="Hà Nội">
            <div className="sh-jobs-card-top">
              <div className="sh-jobs-logo-wrapper">
                <img src="/images/logo/logo-5.png" alt="Company Logo" />
              </div>
              <div className="sh-jobs-details">
                <div className="sh-jobs-title-row">
                  <span className="sh-jobs-tag hot">Recland process</span>
                  <a href="job-detail.html" className="sh-jobs-card-title">
                    Nhân Viên Kinh Doanh Online/ Sales Representative - HN
                  </a>
                </div>
                <p className="sh-jobs-card-company">
                  CÔNG TY TNHH TẬP ĐOÀN DVN VIỆT NAM
                </p>
              </div>
            </div>
            <div className="sh-jobs-card-footer">
              <div className="sh-jobs-card-meta">
                <span className="sh-jobs-location">Hà Nội</span>
              </div>
              <div className="sh-jobs-bonus-row">
                <i className="fa fa-gift"></i> 500.000/CV
              </div>
              <button className="sh-jobs-heart-btn">
                <FaRegHeart />
              </button>
            </div>
          </div>

          {/* <!-- Job Card 6 --> */}
          <div className="sh-jobs-card" data-location="Hà Nội">
            <div className="sh-jobs-card-top">
              <div className="sh-jobs-logo-wrapper">
                <img src="/images/logo/logo-6.png" alt="Company Logo" />
              </div>
              <div className="sh-jobs-details">
                <div className="sh-jobs-title-row">
                  <a href="job-detail.html" className="sh-jobs-card-title">
                    Kế Toán Tổng Hợp - Thu Nhập Hấp Dẫn Cơ Hội Thăng Tiến
                  </a>
                </div>
                <p className="sh-jobs-card-company">
                  Công ty Cổ phần Xây dựng Hợp Lực
                </p>
              </div>
            </div>
            <div className="sh-jobs-card-footer">
              <div className="sh-jobs-card-meta">
                <span className="sh-jobs-location">Hà Nội</span>
              </div>
              <div className="sh-jobs-bonus-row">
                <i className="fa fa-gift"></i> 2.000.000/Interview
              </div>
              <button className="sh-jobs-heart-btn">
                <FaRegHeart />
              </button>
            </div>
          </div>

          {/* <!-- Job Card 7 --> */}
          <div className="sh-jobs-card" data-location="Hà Nội">
            <div className="sh-jobs-card-top">
              <div className="sh-jobs-logo-wrapper">
                <img src="/images/logo/logo-7.png" alt="Company Logo" />
              </div>
              <div className="sh-jobs-details">
                <div className="sh-jobs-title-row">
                  <a href="job-detail.html" className="sh-jobs-card-title">
                    Trưởng Nhóm Thầu Thiết Bị Y Tế - Lương Upto 18tr - Tại Hà
                    Nội
                  </a>
                </div>
                <p className="sh-jobs-card-company">
                  CÔNG TY CỔ PHẦN THƯƠNG MẠI QUỐC TẾ TÀI LỘC
                </p>
              </div>
            </div>
            <div className="sh-jobs-card-footer">
              <div className="sh-jobs-card-meta">
                <span className="sh-jobs-location">Hà Nội</span>
              </div>
              <div className="sh-jobs-bonus-row">
                <i className="fa fa-gift"></i> 20.000.000/Onboard
              </div>
              <button className="sh-jobs-heart-btn">
                <FaRegHeart />
              </button>
            </div>
          </div>

          {/* <!-- Job Card 8 --> */}
          <div className="sh-jobs-card" data-location="Hồ Chí Minh">
            <div className="sh-jobs-card-top">
              <div className="sh-jobs-logo-wrapper">
                <img src="/images/logo/logo-1.png" alt="Company Logo" />
              </div>
              <div className="sh-jobs-details">
                <div className="sh-jobs-title-row">
                  <a href="job-detail.html" className="sh-jobs-card-title">
                    Nhân Viên Sale Qua Kênh Zalo - Hỗ Trợ Khách Hàng
                  </a>
                </div>
                <p className="sh-jobs-card-company">
                  Công ty TNHH Vietnam Concentrix Services
                </p>
              </div>
            </div>
            <div className="sh-jobs-card-footer">
              <div className="sh-jobs-card-meta">
                <span className="sh-jobs-location">Hồ Chí Minh</span>
              </div>
              <div className="sh-jobs-bonus-row">
                <i className="fa fa-gift"></i> 500.000/CV
              </div>
              <button className="sh-jobs-heart-btn">
                <FaRegHeart />
              </button>
            </div>
          </div>

          {/* <!-- Job Card 9 --> */}
          <div className="sh-jobs-card" data-location="Hồ Chí Minh">
            <div className="sh-jobs-card-top">
              <div className="sh-jobs-logo-wrapper">
                <img src="/images/logo/logo-2.png" alt="Company Logo" />
              </div>
              <div className="sh-jobs-details">
                <div className="sh-jobs-title-row">
                  <a href="job-detail.html" className="sh-jobs-card-title">
                    Logistics & Product Registration Assistant Manager - HCM
                  </a>
                </div>
                <p className="sh-jobs-card-company">
                  CHI NHÁNH TẠI THÀNH PHỐ HỒ CHÍ MINH - BEE
                </p>
              </div>
            </div>
            <div className="sh-jobs-card-footer">
              <div className="sh-jobs-card-meta">
                <span className="sh-jobs-location">Hồ Chí Minh</span>
              </div>
              <div className="sh-jobs-bonus-row">
                <i className="fa fa-gift"></i> 2.000.000/Interview
              </div>
              <button className="sh-jobs-heart-btn">
                <FaRegHeart />
              </button>
            </div>
          </div>
        </div>

        {/* <!-- Footer Pagination --> */}
        <div className="sh-jobs-pagination">
          <button className="sh-jobs-nav-btn" id="sh-jobs-page-prev">
            <FaChevronLeft />
          </button>
          <span className="sh-jobs-page-info">
            Trang <span>1</span> / 3
          </span>
          <button className="sh-jobs-nav-btn" id="sh-jobs-page-next">
            <FaChevronRight />
          </button>
        </div>
      </div>
    </section>
  );
}
