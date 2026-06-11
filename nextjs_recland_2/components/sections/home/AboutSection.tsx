"use client";
import Image from "next/image";
import CountUp from "react-countup";
import Button from "@/components/ui/Button"; // Giữ lại nếu bạn muốn dùng thay thế thẻ <a> dưới cùng
import { FaGlobeAmericas } from "react-icons/fa";
export default function AboutSection() {
  return (
    <section className="section-home-2 clearfix">
      <div className="container">
        <div className="flex flex-wrap items-center justify-center gap-10">
          {/* Left content */}
          <div
            className={`relative flex-1 h-fit z-2 flex items-center justify-center
              overflow-hidden rounded-[20px] bg-white p-6
              [box-shadow:0_20px_40px_rgba(15,70,84,0.08)] transition-all
              duration-300 ease-in mb-10`}
              data-aos="fade-right"
              data-aos-duration="1000"
          >
            <Image
              className="lazy w-100"
              src="/map_hri.gif"
              alt="HRI to global"
              width={400}
              height={400}
            />
            <div className="map-badge">
              <i className="fa fa-globe"></i> HRI Global Network
            </div>
          </div>
          {/* Right content */}
          <div
            className="aos-init aos-animate flex-1"
            data-aos="fade-left"
            data-aos-duration="1000"
            data-aos-delay="100"
          >
            <div className="about-badge">
              <span className="about-badge-dot"></span>
              Về chúng tôi
            </div>
            <h2 className="title-cate">
              Nền tảng{" "}
              <span className="text-gradient-primary">
                thương mại điện tử tuyển dụng
              </span>{" "}
              hàng đầu Việt Nam
            </h2>
            <div className="des">
              Recland là một đơn vị thành viên trong hệ sinh thái HRI, Recland
              cung cấp nền tảng thương mại điện tử tuyển dụng để cộng tác viên
              tuyển dụng có thể kiếm tiền bằng cách giới thiệu, kết nối các ứng
              viên ứng tuyển cho các doanh nghiệp. Cộng tác viên có thể chủ động
              làm việc, gia tăng thu nhập không giới hạn tại bất cứ đâu, bất cứ
              thời gian nào.
            </div>
            <div className="stats-grid">
              <div className="stats-card">
                <div className="stats-number-wrapper">
                  <CountUp
                    className="numscroller stats-number"
                    start={1}
                    end={100000}
                    duration={2}
                    separator="."
                  />
                  <span className="stats-plus">+</span>
                </div>
                <div className="stats-label">Jobs</div>
              </div>
              <div className="stats-card">
                <div className="stats-number-wrapper">
                  <CountUp
                    className="numscroller stats-number"
                    start={1}
                    end={5000}
                    duration={2}
                    separator="."
                  />
                  <span className="stats-plus">+</span>
                </div>
                <div className="stats-label">Doanh nghiệp</div>
              </div>
              <div className="stats-card">
                <div className="stats-number-wrapper">
                  <CountUp
                    className="numscroller stats-number"
                    start={1}
                    end={10000}
                    duration={2}
                    separator="."
                  />
                  <span className="stats-plus">+</span>
                </div>
                <div className="stats-label">Recruiter</div>
              </div>
              <div className="stats-card">
                <div className="stats-number-wrapper">
                  <CountUp
                    className="numscroller stats-number"
                    start={1}
                    end={200000}
                    duration={2}
                    separator="."
                  />
                  <span className="stats-plus">+</span>
                </div>
                <div className="stats-label">Candidate</div>
              </div>
            </div>
                        <a className="about-btn" href="about-us.html">
              Khám phá
              <i className="ml-1 inline-flex h-3.5 w-3.5 items-center justify-center">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2 6H10M10 6L7 3M10 6L7 9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </i>
            </a>
          </div>
          
        </div>
      </div>
      {/* <div className="container">
        <div className="flex flex-wrap">
          <div className="col-lg-6 mb40 mb-lg-0 w-1/2" data-aos="fade-right" data-aos-duration="1000">
            <div className="about-image-wrapper w-1/2">
              <Image className="lazy w-100" src="/map_hri.gif" alt="HRI to global" width={400} height={400}/>
              <div className="map-badge">
                <i className="fa fa-globe"></i> HRI Global Network
              </div>
            </div>
          </div>
          <div className="flex-1 w-1/2 col-lg-6 aos-init aos-animate" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="100">
            <div className="about-badge">
              <span className="about-badge-dot"></span>
              Về chúng tôi
            </div>
            <h2 className="title-cate">
              Nền tảng <span className="text-gradient-primary">thương mại điện tử tuyển dụng</span> hàng đầu Việt Nam
            </h2>
            <div className="des">
              Recland là một đơn vị thành viên trong hệ sinh thái HRI, Recland cung cấp nền tảng thương mại điện tử tuyển dụng để cộng tác viên tuyển dụng có
              thể kiếm tiền bằng cách giới thiệu, kết nối các ứng viên ứng tuyển cho các doanh nghiệp. Cộng tác viên có thể chủ động làm việc, gia tăng thu nhập
              không giới hạn tại bất cứ đâu, bất cứ thời gian nào.
            </div>
            <div className="stats-grid">
              <div className="stats-card">
                <div className="stats-number-wrapper">
                  <CountUp className="numscroller stats-number" start={1} end={200000} duration={2} separator="." />
                  <span className="stats-plus">+</span>
                </div>
                <div className="stats-label">Jobs</div>
              </div>
              <div className="stats-card">
                <div className="stats-number-wrapper">
                  <CountUp className="numscroller stats-number" start={1} end={200000} duration={2} separator="." />
                  <span className="stats-plus">+</span>
                </div>
                <div className="stats-label">Doanh nghiệp</div>
              </div>
              <div className="stats-card">
                <div className="stats-number-wrapper">
                  <CountUp className="numscroller stats-number" start={1} end={200000} duration={2} separator="." />
                  <span className="stats-plus">+</span>
                </div>
                <div className="stats-label">Recruiter</div>
              </div>
              <div className="stats-card">
                <div className="stats-number-wrapper">
                  <CountUp className="numscroller stats-number" start={1} end={200000} duration={2} separator="." />
                  <span className="stats-plus">+</span>
                </div>
                <div className="stats-label">Candidate</div>
              </div>
            </div>
            <a className="about-btn" href="about-us.html">
              Khám phá
              <i className="ml-1 inline-flex h-3.5 w-3.5 items-center justify-center">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2 6H10M10 6L7 3M10 6L7 9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </i>
            </a>
          </div>
        </div>
      </div> */}
    </section>
  );
}
