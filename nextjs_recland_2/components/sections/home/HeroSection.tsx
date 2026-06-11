"use client";
import Container from "@/components/common/Container";
import Badge from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import CTA from "@/components/ui/CTA";
import Image from "next/image";
import { useState, useEffect } from "react";

import CARD_IMG from "@/public/other/avatar_1752b.jpg";
import Tag from "@/components/ui/Tag";

export default function HeroSection() {
  const [isShowTopCtv, setIsShowTopCtv] = useState<boolean>(false);
  const [dateString, setDateString] = useState<string>("");

  useEffect(() => {
    // Đoạn logic lấy ngày tháng năm từ code cũ của bạn
    const now = new Date();
    let day: string | number = now.getDate();
    let month: string | number = now.getMonth() + 1;

    if (day < 10) day = "0" + day;
    if (month < 10) month = "0" + month;

    const year = now.getFullYear();

    // Cập nhật state sau khi component đã mount trên trình duyệt
    setDateString(`${day}/${month}/${year}`);
  }, []);

  return (
    <section className="section-top-home clearfix mb80">
      <div className="container">
        <div className="hero-wrapper">
          {/* <!-- Left Content --> */}
          <div className="hero-left-content fade-in-left">
            <div className="hero-badge">
              <span className="hero-badge-dot"></span>
              Recruitment Marketplace
            </div>
            <h1 className="hero-title">
              Tuyển dụng bằng <span className="text-gradient">mạng lưới Recruiter</span> lớn nhất Việt Nam
            </h1>
            <p className="hero-subtitle">Kết nối doanh nghiệp với hàng ngàn recruiter freelance và ứng viên chất lượng. Nhận CV phù hợp trong 24 giờ.</p>
            <div className="hero-ctas">
              <a href="#section-cta" className="hero-btn-primary">
                Khám phá ngay{" "}
                <i className="icon-arrow">
                  <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M1.5 5.5H9.5M9.5 5.5L6.5 2.5M9.5 5.5L6.5 8.5"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </i>
              </a>
            </div>
          </div>

          {/* <!-- Right Mockup --> */}
          <div className="hero-right-mockup fade-in-top">
            <div className="mockup-container">
              {/* <!-- Card 1: AI Match --> */}
              <div className="mockup-card card-ai-match z-10">
                <div className="card-header-ai">
                  <span className="badge-ai">AI Match</span>
                  <span className="match-score">98%</span>
                </div>
                <div className="profile-info">
                  <img src="/images/other/avatar_1752b.jpg" alt="Nguyễn Minh Anh" className="avatar-img" />
                  <div className="profile-text">
                    <h4 className="profile-name">Nguyễn Minh Anh</h4>
                    <p className="profile-title">Senior React Developer</p>
                  </div>
                </div>
                <div className="profile-tags">
                  <span className="tag-item">React</span>
                  <span className="tag-item">TypeScript</span>
                  <span className="tag-item">Next.js</span>
                </div>
              </div>

              {/* <!-- Card 2: Hiring Pipeline --> */}
              <div className="mockup-card card-pipeline justify-between, items-center, z-10 mb-4 flex">
                <div className="pipeline-header">
                  <h4 className="card-section-title m-0 leading-1">HIRING PIPELINE</h4>
                  <span id="realtime-pipeline-date" className="font-['Inter'] text-[0.725rem] font-bold text-[#7984a5] opacity-85"></span>
                  {dateString || "Loading..."}
                </div>
                <div className="pipeline-item">
                  <div className="pipeline-info">
                    <span>CV Nhận</span>
                    <span className="pipeline-count">12</span>
                  </div>
                  <div className="progress-track">
                    <div className="progress-bar-fill progress-blue w-[60%]"></div>
                  </div>
                </div>
                <div className="pipeline-item">
                  <div className="pipeline-info">
                    <span>Phỏng vấn</span>
                    <span className="pipeline-count">4</span>
                  </div>
                  <div className="progress-track">
                    <div className="progress-bar-fill progress-purple w-[20%]"></div>
                  </div>
                </div>
                <div className="pipeline-item">
                  <div className="pipeline-info">
                    <span>Đã Tuyển</span>
                    <span className="pipeline-count">2</span>
                  </div>
                  <div className="progress-track">
                    <div className="progress-bar-fill progress-green w-[10%]"></div>
                  </div>
                </div>
              </div>

              {/* <!-- Card 3: Recruiter Earnings --> */}
              <div className="mockup-card card-earnings z-8">
                <h4 className="card-section-title">THU NHẬP RECRUITER</h4>
                <div className="earnings-value">28,450,00</div>
                <div className="earnings-trend">
                  <i className="trend-icon inline-flex h-2.5 w-2.5 items-center justify-center">
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 8.5V1.5M5 1.5L2 4.5M5 1.5L8 4.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </i>
                  <span>+24% tháng này</span>
                </div>
                <div className="chart-container">
                  <svg className="chart-svg" viewBox="0 0 210 50">
                    <defs>
                      <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#19c9e8" stopOpacity="0.3"></stop>
                        <stop offset="100%" stopColor="#19c9e8" stopOpacity="0"></stop>
                      </linearGradient>
                    </defs>
                    <path
                      d="M0,45 C20,38 40,42 60,30 C80,18 100,28 120,15 C140,2 160,18 180,8 C190,3 200,5 210,2 L210,50 L0,50 Z"
                      fill="url(#chartGrad)"
                    ></path>
                    <path
                      d="M0,45 C20,38 40,42 60,30 C80,18 100,28 120,15 C140,2 160,18 180,8 C190,3 200,5 210,2"
                      fill="none"
                      stroke="#19c9e8"
                      strokeWidth="3"
                      strokeLinecap="round"
                    ></path>
                    <circle cx="210" cy="2" r="4" fill="#19c9e8"></circle>
                  </svg>
                </div>
              </div>

              {/* <!-- Card 4: Live Activities --> */}
              <div className="mockup-card card-activities z-10">
                <div className="activities-header">
                  <span className="activity-pulse"></span>
                  <span className="activities-title">Live Activities</span>
                </div>
                <div className="activity-list">
                  <div className="activity-item">
                    <p className="activity-text">
                      Recruiter <strong>Trần H.</strong> vừa nhận hoa hồng
                      <strong>12,000,000đ</strong>
                    </p>
                    <span className="activity-time">2 phút trước</span>
                  </div>
                  <div className="activity-item border-top-activity">
                    <p className="activity-text">
                      <strong>VNG Corp</strong> vừa mở 5 vị trí Senior Backend
                    </p>
                    <span className="activity-time">5 phút trước</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="new-post">
          <svg className="icon-svg me-2">
            <use xlinkHref="/images/icons/icon.svg#web"></use>
          </svg>
          <span> MỚI NHẤT</span>
          <a className="name" target="_blank" href="blog/top-cac-web-tuyen-dung-uy-tin-nhat-tai-viet-nam-nam-2026-YNbrMvLF.html">
            Trong thời đại số, việc tìm việc hay tuyển dụng không còn chỉ phụ thuộc vào mạng lưới cá nhân...
          </a>
        </div>
      </div>
      <div className="bg-btn">
        <a className="btn-top-ctv" href="javascript:;">
          {" "}
          Top cộng tác viên
        </a>
      </div>
    </section>
  );
}
