"use client";
import Container from "@/components/common/Container";
import FeatureTabs from "@/components/ui/FeatureTab";
import { HR_CONTENT, RECRUITER_CONTENT } from "@/constants/feature";
import { useState } from "react";
import Image from "next/image";
import SwitchTabs from "@/components/ui/SwitchTab";
type FeatureTab = "hr" | "employer" | "candidate";
export default function FeatureSection() {
  const [activeTab, setActiveTab] = useState<FeatureTab>("hr");
  return (
    <section className="section-home-4 clearfix mb80">
      <div className="container" data-aos="fade-up" data-aos-duration="1000">
        <div className="sh4-wrapper-card">
          {/* <!-- Upper Dark Section Header --> */}
          <div className="sh4-dark-bg">
            <span className="sh4-badge">Vì sao chọn Recland?</span>
            {/* <!-- Centered Tab Switcher --> */}
            <div className="sh4-tab-wrapper">
              <ul
                className="nav nav-pills sh4-nav-pills"
                id="valueTab"
                role="tablist"
              >
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link active"
                    id="employer-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#employer-pane"
                    type="button"
                    role="tab"
                    aria-controls="employer-pane"
                    aria-selected="true"
                  >
                    <i className="fa fa-building-o"></i>
                    <span>Nhà tuyển dụng</span>
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="collaborator-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#collaborator-pane"
                    type="button"
                    role="tab"
                    aria-controls="collaborator-pane"
                    aria-selected="false"
                  >
                    <i className="fa fa-user-circle-o"></i>
                    <span>Cộng tác viên</span>
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="candidate-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#candidate-pane"
                    type="button"
                    role="tab"
                    aria-controls="candidate-pane"
                    aria-selected="false"
                  >
                    <i className="fa fa-graduation-cap"></i>
                    <span>Ứng viên</span>
                  </button>
                </li>
              </ul>
            </div>

            {/* <!-- Dynamic Tagline Banners --> */}
            <div className="sh4-tagline-container">
              <div
                id="employer-tagline"
                className="sh4-tagline tab-tagline-banner"
              >
                <i className="fa fa-shield"></i>
                <span>
                  <span className="sh4-tagline-highlight">PAY FOR RESULT</span>{" "}
                  – CHỈ TRẢ PHÍ KHI ỨNG VIÊN ĐẠT CHẤT LƯỢNG
                </span>
              </div>
              <div
                id="collaborator-tagline"
                className="sh4-tagline tab-tagline-banner d-none"
              >
                <i className="fa fa-gift"></i>
                <span>
                  CƠ HỘI GIA TĂNG THU NHẬP KHÔNG GIỚI HẠN CÙNG CỘNG ĐỒNG HR
                  FREELANCER HÀNG ĐẦU
                </span>
              </div>
              <div
                id="candidate-tagline"
                className="sh4-tagline tab-tagline-banner d-none"
              >
                <i className="fa fa-star"></i>
                <span>
                  TÌM KIẾM CÔNG VIỆC MƠ ƯỚC VỚI CHẾ ĐỘ ĐÃI NGỘ HẤP DẪN & HỖ TRỢ
                  TOÀN DIỆN
                </span>
              </div>
            </div>
          </div>

          {/* <!-- White Content Inner --> */}
          <div className="sh4-content-inner">
            <div className="tab-content" id="valueTabContent">
              {/* <!-- Tab Pane 1: Nhà tuyển dụng --> */}
              <div
                className="tab-pane fade show active"
                id="employer-pane"
                role="tabpanel"
                aria-labelledby="employer-tab"
              >
                <div className="row align-items-center">
                  {/* <!-- Left Column: 4 Value Cards --> */}
                  <div
                    className="col-lg-6 mb-lg-0 mb-4"
                    data-aos="fade-right"
                    data-aos-duration="1000"
                  >
                    <div className="sh4-value-list">
                      <div className="sh4-value-item">
                        <div className="sh4-icon-circle bg-soft-teal">
                          <span>%</span>
                        </div>
                        <div className="sh4-value-text">
                          <h4>
                            Tối ưu đến{" "}
                            <span className="sh4-highlight">50%</span> chi phí
                            tuyển dụng
                          </h4>
                          <p>
                            Thay vì đăng tin tuyển dụng trên các trang tin và
                            chờ ứng viên trong vô vọng, NTD chỉ trả chi phí khi
                            có ứng viên đạt chất lượng.
                          </p>
                        </div>
                      </div>
                      <div className="sh4-value-item">
                        <div className="sh4-icon-circle bg-soft-teal">
                          <span>AI</span>
                        </div>
                        <div className="sh4-value-text">
                          <h4>
                            Trợ lý <span className="sh4-highlight">AI</span>{" "}
                            Tuyển dụng thông minh
                          </h4>
                          <p>
                            AI hỗ trợ sàng lọc CV, gợi ý ứng viên phù hợp và tối
                            ưu quy trình tuyển dụng, giúp doanh nghiệp tiết kiệm
                            thời gian và nâng cao hiệu quả.
                          </p>
                        </div>
                      </div>
                      <div className="sh4-value-item">
                        <div className="sh4-icon-circle bg-soft-teal">
                          <i className="fa fa-users"></i>
                        </div>
                        <div className="sh4-value-text">
                          <h4>
                            Tuyển dụng nhanh hơn gấp{" "}
                            <span className="sh4-highlight">3 lần</span>
                          </h4>
                          <p>
                            Khai thác mạng lưới hơn 10.000+ cộng tác viên tuyển
                            dụng trên toàn quốc, giúp tiếp cận ứng viên nhanh và
                            đúng hơn.
                          </p>
                        </div>
                      </div>
                      <div className="sh4-value-item">
                        <div className="sh4-icon-circle bg-soft-teal">
                          <i className="fa fa-line-chart"></i>
                        </div>
                        <div className="sh4-value-text">
                          <h4>Quản lý tuyển dụng theo thời gian thực</h4>
                          <p>
                            Theo dõi toàn bộ quy trình tuyển dụng, trạng thái
                            ứng viên và hiệu quả chiến dịch trực tiếp trên nền
                            tảng Recland.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* <!-- Right Column: HTML Step Workflow + Stats Summary --> */}
                  <div
                    className="col-lg-6"
                    data-aos="fade-left"
                    data-aos-duration="1000"
                    data-aos-delay="200"
                  >
                    <div className="sh4-process-container">
                      <h3 className="sh4-process-title">
                        Quy trình tuyển dụng cùng Recland
                      </h3>

                      {/* <!-- Process Steps --> */}
                      <div className="sh4-steps-flow">
                        <div className="sh4-step-node step-teal">
                          <span className="sh4-step-number">1</span>
                          <div className="sh4-step-icon-circle">
                            <i className="fa fa-search"></i>
                          </div>
                          <div className="sh4-step-title">Tìm kiếm</div>
                          <div className="sh4-step-desc">
                            Đăng tin & mô tả vị trí tuyển dụng
                          </div>
                        </div>
                        <div className="sh4-step-connector"></div>
                        <div className="sh4-step-node step-teal-dark">
                          <span className="sh4-step-number">2</span>
                          <div className="sh4-step-icon-circle">
                            <i className="fa fa-users"></i>
                          </div>
                          <div className="sh4-step-title">Cộng tác viên</div>
                          <div className="sh4-step-desc">
                            CTV giới thiệu ứng viên phù hợp
                          </div>
                        </div>
                        <div className="sh4-step-connector"></div>
                        <div className="sh4-step-node step-blue">
                          <span className="sh4-step-number">3</span>
                          <div className="sh4-step-icon-circle">
                            <i className="fa fa-cogs"></i>
                          </div>
                          <div className="sh4-step-title">AI Sàng lọc</div>
                          <div className="sh4-step-desc">
                            AI hỗ trợ sàng lọc & đề xuất
                          </div>
                        </div>
                        <div className="sh4-step-connector"></div>
                        <div className="sh4-step-node step-orange">
                          <span className="sh4-step-number">4</span>
                          <div className="sh4-step-icon-circle">
                            <i className="fa fa-comments"></i>
                          </div>
                          <div className="sh4-step-title">Phỏng vấn</div>
                          <div className="sh4-step-desc">
                            NTD phỏng vấn và đánh giá
                          </div>
                        </div>
                        <div className="sh4-step-connector"></div>
                        <div className="sh4-step-node step-green">
                          <span className="sh4-step-number">5</span>
                          <div className="sh4-step-icon-circle">
                            <i className="fa fa-bullseye"></i>
                          </div>
                          <div className="sh4-step-title">Tuyển dụng</div>
                          <div className="sh4-step-desc">
                            Ứng viên đi làm, CTV nhận thưởng
                          </div>
                        </div>
                      </div>

                      {/* <!-- Summary Stats Box --> */}
                      <div className="sh4-stats-box bg-teal">
                        <div className="sh4-stats-header">
                          <div className="sh4-stats-icon bg-teal">
                            <i className="fa fa-trophy"></i>
                          </div>
                          <div className="sh4-stats-title">
                            Hiệu quả vượt trội
                          </div>
                        </div>
                        <div className="sh4-stats-values">
                          <div className="sh4-stat-col">
                            <div className="sh4-stat-num text-teal">
                              10.000+
                            </div>
                            <div className="sh4-stat-label">Cộng tác viên</div>
                          </div>
                          <div className="sh4-stat-col">
                            <div className="sh4-stat-num text-teal">
                              50.000+
                            </div>
                            <div className="sh4-stat-label">
                              Ứng viên chất lượng
                            </div>
                          </div>
                          <div className="sh4-stat-col">
                            <div className="sh4-stat-num text-teal">3x</div>
                            <div className="sh4-stat-label">Nhanh hơn</div>
                          </div>
                          <div className="sh4-stat-col">
                            <div className="sh4-stat-num text-teal">50%</div>
                            <div className="sh4-stat-label">
                              Tiết kiệm chi phí
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* <!-- Tab Pane 2: Cộng tác viên --> */}
              <div
                className="tab-pane fade"
                id="collaborator-pane"
                role="tabpanel"
                aria-labelledby="collaborator-tab"
              >
                <div className="row align-items-center">
                  {/* <!-- Left Column: 5 Value Cards --> */}
                  <div
                    className="col-lg-6 mb-lg-0 mb-4"
                    data-aos="fade-right"
                    data-aos-duration="1000"
                  >
                    <div className="sh4-value-list">
                      <div className="sh4-value-item">
                        <div className="sh4-icon-circle bg-soft-orange">
                          <i className="fa fa-briefcase"></i>
                        </div>
                        <div className="sh4-value-text">
                          <h4>Đa dạng việc làm IT & Non-IT</h4>
                          <p>
                            Hơn 200+ việc làm IT đa dạng, cung cấp cơ hội giới
                            thiệu ứng viên phù hợp với nhiều lĩnh vực chuyên môn
                            khác nhau.
                          </p>
                        </div>
                      </div>
                      <div className="sh4-value-item">
                        <div className="sh4-icon-circle bg-soft-orange">
                          <i className="fa fa-money"></i>
                        </div>
                        <div className="sh4-value-text">
                          <h4>
                            Cơ chế hoa hồng{" "}
                            <span className="sh4-highlight orange">
                              hấp dẫn & rõ ràng
                            </span>
                          </h4>
                          <p>
                            Chính sách thưởng và chia sẻ hoa hồng cực kỳ cạnh
                            tranh, minh bạch, được thanh toán nhanh chóng sau
                            khi phỏng vấn thành công.
                          </p>
                        </div>
                      </div>
                      <div className="sh4-value-item">
                        <div className="sh4-icon-circle bg-soft-orange">
                          <i className="fa fa-laptop"></i>
                        </div>
                        <div className="sh4-value-text">
                          <h4>Làm việc linh hoạt tự do</h4>
                          <p>
                            Bạn hoàn toàn chủ động về thời gian và địa điểm làm
                            việc, giúp gia tăng nguồn thu nhập thụ động không
                            giới hạn.
                          </p>
                        </div>
                      </div>
                      <div className="sh4-value-item">
                        <div className="sh4-icon-circle bg-soft-orange">
                          <i className="fa fa-lock"></i>
                        </div>
                        <div className="sh4-value-text">
                          <h4>Bảo mật thông tin tuyệt đối</h4>
                          <p>
                            Cam kết bảo mật 100% danh tính của cộng tác viên
                            cũng như thông tin nhạy cảm của các ứng viên giới
                            thiệu.
                          </p>
                        </div>
                      </div>
                      <div className="sh4-value-item">
                        <div className="sh4-icon-circle bg-soft-orange">
                          <i className="fa fa-users"></i>
                        </div>
                        <div className="sh4-value-text">
                          <h4>Mở rộng mạng lưới quan hệ</h4>
                          <p>
                            Cơ hội tham gia cộng đồng HR Freelancer chuyên
                            nghiệp của Recland để học hỏi kinh nghiệm tuyển dụng
                            đỉnh cao.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* <!-- Right Column: HTML Step Workflow + Stats Summary --> */}
                  <div
                    className="col-lg-6"
                    data-aos="fade-left"
                    data-aos-duration="1000"
                    data-aos-delay="200"
                  >
                    <div className="sh4-process-container">
                      <h3 className="sh4-process-title">
                        Quy trình hợp tác cùng Recland
                      </h3>

                      {/* <!-- Process Steps --> */}
                      <div className="sh4-steps-flow">
                        <div className="sh4-step-node collab-1">
                          <span className="sh4-step-number">1</span>
                          <div className="sh4-step-icon-circle">
                            <i className="fa fa-user-plus"></i>
                          </div>
                          <div className="sh4-step-title">Đăng ký</div>
                          <div className="sh4-step-desc">
                            Đăng ký tài khoản CTV miễn phí
                          </div>
                        </div>
                        <div className="sh4-step-connector"></div>
                        <div className="sh4-step-node collab-2">
                          <span className="sh4-step-number">2</span>
                          <div className="sh4-step-icon-circle">
                            <i className="fa fa-search"></i>
                          </div>
                          <div className="sh4-step-title">Chọn việc</div>
                          <div className="sh4-step-desc">
                            Lựa chọn job phù hợp ứng viên
                          </div>
                        </div>
                        <div className="sh4-step-connector"></div>
                        <div className="sh4-step-node collab-3">
                          <span className="sh4-step-number">3</span>
                          <div className="sh4-step-icon-circle">
                            <i className="fa fa-paper-plane"></i>
                          </div>
                          <div className="sh4-step-title">Giới thiệu</div>
                          <div className="sh4-step-desc">
                            Gửi thông tin CV ứng viên lên hệ thống
                          </div>
                        </div>
                        <div className="sh4-step-connector"></div>
                        <div className="sh4-step-node collab-4">
                          <span className="sh4-step-number">4</span>
                          <div className="sh4-step-icon-circle">
                            <i className="fa fa-clock-o"></i>
                          </div>
                          <div className="sh4-step-title">Theo dõi</div>
                          <div className="sh4-step-desc">
                            Theo dõi tiến độ phỏng vấn trực tiếp
                          </div>
                        </div>
                        <div className="sh4-step-connector"></div>
                        <div className="sh4-step-node collab-5">
                          <span className="sh4-step-number">5</span>
                          <div className="sh4-step-icon-circle">
                            <i className="fa fa-gift"></i>
                          </div>
                          <div className="sh4-step-title">Nhận thưởng</div>
                          <div className="sh4-step-desc">
                            Nhận hoa hồng khi ứng viên đi làm
                          </div>
                        </div>
                      </div>

                      {/* <!-- Summary Stats Box --> */}
                      <div className="sh4-stats-box bg-orange">
                        <div className="sh4-stats-header">
                          <div className="sh4-stats-icon bg-orange">
                            <i className="fa fa-dollar"></i>
                          </div>
                          <div className="sh4-stats-title">
                            Thu nhập vượt trội
                          </div>
                        </div>
                        <div className="sh4-stats-values">
                          <div className="sh4-stat-col">
                            <div className="sh4-stat-num text-orange">200+</div>
                            <div className="sh4-stat-label">
                              Việc làm đa dạng
                            </div>
                          </div>
                          <div className="sh4-stat-col">
                            <div className="sh4-stat-num text-orange">
                              10.000+
                            </div>
                            <div className="sh4-stat-label">Cộng tác viên</div>
                          </div>
                          <div className="sh4-stat-col">
                            <div className="sh4-stat-num text-orange">80M</div>
                            <div className="sh4-stat-label">Thu nhập/tháng</div>
                          </div>
                          <div className="sh4-stat-col">
                            <div className="sh4-stat-num text-orange">100%</div>
                            <div className="sh4-stat-label">
                              Bảo mật thông tin
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* <!-- Tab Pane 3: Ứng viên --> */}
              <div
                className="tab-pane fade"
                id="candidate-pane"
                role="tabpanel"
                aria-labelledby="candidate-tab"
              >
                <div className="row align-items-center">
                  {/* <!-- Left Column: 5 Value Cards --> */}
                  <div
                    className="col-lg-6 mb-lg-0 mb-4"
                    data-aos="fade-right"
                    data-aos-duration="1000"
                  >
                    <div className="sh4-value-list">
                      <div className="sh4-value-item">
                        <div className="sh4-icon-circle bg-soft-blue">
                          <i className="fa fa-star"></i>
                        </div>
                        <div className="sh4-value-text">
                          <h4>Cơ hội việc làm chất lượng cao</h4>
                          <p>
                            Tiếp cận trực tiếp hàng ngàn công việc HOT tại các
                            tập đoàn công nghệ và doanh nghiệp hàng đầu có mức
                            đãi ngộ hấp dẫn.
                          </p>
                        </div>
                      </div>
                      <div className="sh4-value-item">
                        <div className="sh4-icon-circle bg-soft-blue">
                          <i className="fa fa-check-circle"></i>
                        </div>
                        <div className="sh4-value-text">
                          <h4>Quy trình phỏng vấn nhanh gọn</h4>
                          <p>
                            Quy trình ứng tuyển, nhận lịch hẹn phỏng vấn và phản
                            hồi đánh giá minh bạch, nhanh chóng từ nhà tuyển
                            dụng.
                          </p>
                        </div>
                      </div>
                      <div className="sh4-value-item">
                        <div className="sh4-icon-circle bg-soft-blue">
                          <i className="fa fa-graduation-cap"></i>
                        </div>
                        <div className="sh4-value-text">
                          <h4>Tư vấn nghề nghiệp & chỉnh sửa CV miễn phí</h4>
                          <p>
                            Được kết nối và đồng hành cùng các chuyên gia tuyển
                            dụng (Recers) hỗ trợ hoàn thiện CV và luyện kỹ năng
                            trả lộ trình phỏng vấn.
                          </p>
                        </div>
                      </div>
                      <div className="sh4-value-item">
                        <div className="sh4-icon-circle bg-soft-blue">
                          <i className="fa fa-user-secret"></i>
                        </div>
                        <div className="sh4-value-text">
                          <h4>Bảo mật thông tin ứng viên</h4>
                          <p>
                            Hồ sơ cá nhân và lịch sử làm việc được bảo mật tuyệt
                            đối, chỉ gửi đi khi có sự đồng ý xác nhận từ ứng
                            viên.
                          </p>
                        </div>
                      </div>
                      <div className="sh4-value-item">
                        <div className="sh4-icon-circle bg-soft-blue">
                          <i className="fa fa-gift"></i>
                        </div>
                        <div className="sh4-value-text">
                          <h4>
                            Quà tặng &{" "}
                            <span className="sh4-highlight blue">
                              Referral Bonus
                            </span>
                          </h4>
                          <p>
                            Nhận ngay khoản thưởng referral hấp dẫn khi giới
                            thiệu bạn bè ứng tuyển thành công các vị trí trên hệ
                            thống.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* <!-- Right Column: HTML Step Workflow + Stats Summary --> */}
                  <div
                    className="col-lg-6"
                    data-aos="fade-left"
                    data-aos-duration="1000"
                    data-aos-delay="200"
                  >
                    <div className="sh4-process-container">
                      <h3 className="sh4-process-title">
                        Hành trình ứng tuyển cùng Recland
                      </h3>

                      {/* <!-- Process Steps --> */}
                      <div className="sh4-steps-flow">
                        <div className="sh4-step-node cand-1">
                          <span className="sh4-step-number">1</span>
                          <div className="sh4-step-icon-circle">
                            <i className="fa fa-upload"></i>
                          </div>
                          <div className="sh4-step-title">Tải CV</div>
                          <div className="sh4-step-desc">
                            Tải hồ sơ năng lực lên nền tảng
                          </div>
                        </div>
                        <div className="sh4-step-connector"></div>
                        <div className="sh4-step-node cand-2">
                          <span className="sh4-step-number">2</span>
                          <div className="sh4-step-icon-circle">
                            <i className="fa fa-magic"></i>
                          </div>
                          <div className="sh4-step-title">Khớp việc</div>
                          <div className="sh4-step-desc">
                            Hệ thống gợi ý job phù hợp nhất
                          </div>
                        </div>
                        <div className="sh4-step-connector"></div>
                        <div className="sh4-step-node cand-3">
                          <span className="sh4-step-number">3</span>
                          <div className="sh4-step-icon-circle">
                            <i className="fa fa-comments"></i>
                          </div>
                          <div className="sh4-step-title">Phỏng vấn</div>
                          <div className="sh4-step-desc">
                            Phỏng vấn & trao đổi trực tiếp
                          </div>
                        </div>
                        <div className="sh4-step-connector"></div>
                        <div className="sh4-step-node cand-4">
                          <span className="sh4-step-number">4</span>
                          <div className="sh4-step-icon-circle">
                            <i className="fa fa-handshake-o"></i>
                          </div>
                          <div className="sh4-step-title">Nhận Offer</div>
                          <div className="sh4-step-desc">
                            Nhận lời mời làm việc chính thức
                          </div>
                        </div>
                        <div className="sh4-step-connector"></div>
                        <div className="sh4-step-node cand-5">
                          <span className="sh4-step-number">5</span>
                          <div className="sh4-step-icon-circle">
                            <i className="fa fa-gift"></i>
                          </div>
                          <div className="sh4-step-title">Nhận quà</div>
                          <div className="sh4-step-desc">
                            Nhận quà từ Recland khi đi làm
                          </div>
                        </div>
                      </div>

                      {/* <!-- Summary Stats Box --> */}
                      <div className="sh4-stats-box bg-blue">
                        <div className="sh4-stats-header">
                          <div className="sh4-stats-icon bg-blue">
                            <i className="fa fa-heart"></i>
                          </div>
                          <div className="sh4-stats-title">
                            Hỗ trợ toàn diện
                          </div>
                        </div>
                        <div className="sh4-stats-values">
                          <div className="sh4-stat-col">
                            <div className="sh4-stat-num text-blue">1.000+</div>
                            <div className="sh4-stat-label">Tin tuyển dụng</div>
                          </div>
                          <div className="sh4-stat-col">
                            <div className="sh4-stat-num text-blue">
                              50.000+
                            </div>
                            <div className="sh4-stat-label">
                              Ứng viên tin cậy
                            </div>
                          </div>
                          <div className="sh4-stat-col">
                            <div className="sh4-stat-num text-blue">0đ</div>
                            <div className="sh4-stat-label">Phí dịch vụ CV</div>
                          </div>
                          <div className="sh4-stat-col">
                            <div className="sh4-stat-num text-blue">100%</div>
                            <div className="sh4-stat-label">Đúng thời hạn</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const HRContent = () => {
  return (
    <div className="mt-10 flex flex-col gap-6">
      {HR_CONTENT.map((item) => {
        const Icon = item.icon;

        return (
          <div key={item.id} className="flex items-start gap-6">
            <div
              className={`flex size-16 shrink-0 items-center justify-center
              rounded-full bg-cyan-100`}
            >
              <svg className="size-8 fill-current text-cyan-600">
                <use xlinkHref={item.icon} />
              </svg>
            </div>

            <div>
              <h3 className="text-xl leading-tight font-bold text-cyan-700">
                {item.title}
              </h3>

              <p className="text-md mt-2 max-w-xl leading-relaxed text-gray-500">
                {item.description}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export const RecruiterContent = () => {
  return (
    <div className="mt-10 flex flex-col gap-6">
      {RECRUITER_CONTENT.map((item) => {
        const Icon = item.icon;

        return (
          <div key={item.id} className="flex items-start gap-6">
            <div
              className={`flex size-16 shrink-0 items-center justify-center
              rounded-full bg-cyan-100`}
            >
              <svg className="size-8 fill-current text-cyan-600">
                <use xlinkHref={item.icon} />
              </svg>
            </div>

            <div>
              <h3 className="text-xl leading-tight font-bold text-cyan-700">
                {item.title}
              </h3>

              <p className="text-md mt-2 max-w-xl leading-relaxed text-gray-500">
                {item.description}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};
