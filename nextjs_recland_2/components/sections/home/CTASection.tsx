"use client";
export default function CTASection() {
    return (
        <section id="section-cta" className="sh-cta-section clearfix mb80">
            <div className="container" data-aos="fade-up" data-aos-duration="1000">
                <div className="sh-cta-header">
                    <h2 className="sh-cta-title">
                        Bắt đầu <span>cùng Recland</span>
                    </h2>
                    <p className="sh-cta-subtitle">Lựa chọn giải pháp phù hợp với vai trò của bạn</p>
                </div>
                <div className="sh-cta-grid">
                    {/* <!-- Card 1: Cộng tác viên (Recruiter) --> */}
                    <div className="sh-cta-card theme-collaborator" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100">
                        <div className="sh-cta-left">
                            <h3 className="sh-cta-left-title">Dành cho Cộng Tác Viên (Recruiter)</h3>
                            <h4 className="sh-cta-left-subtitle">Thu nhập của bạn – Sứ mệnh chúng tôi</h4>
                            <ul className="sh-cta-bullets">
                                <li className="sh-cta-bullet-item">Thu nhập lên đến 50 triệu/tháng</li>
                                <li className="sh-cta-bullet-item">Tự do kiếm tiền online mọi lúc, mọi nơi</li>
                                <li className="sh-cta-bullet-item">Được đào tạo miễn phí từ Học Viện Recland Academy</li>
                            </ul>
                            <p className="sh-cta-note">
                                *Đặc biệt: Hướng dẫn <strong>kiếm ngay 1 triệu đầu tiên</strong> cực dễ
                            </p>
                            <a href="login.html" className="sh-cta-action-btn">
                                Kiếm tiền ngay <i className="fa fa-chevron-right"></i>
                            </a>
                        </div>
                        <div className="sh-cta-right">
                            {/* <!-- Sub-item 1 --> */}
                            <div className="sh-cta-sub-item">
                                <div className="sh-cta-sub-icon bg-orange">
                                    <i className="fa fa-link"></i>
                                </div>
                                <div className="sh-cta-sub-details">
                                    <h4 className="sh-cta-sub-title">Recland Affiliate</h4>
                                    <p className="sh-cta-sub-desc">Nền tảng kiếm tiền online bằng Affiliate Recruitment hàng đầu Vietnam.</p>
                                    <a href="login.html" className="sh-cta-sub-link">
                                        Xem thêm <i className="fa fa-angle-right"></i>
                                    </a>
                                </div>
                            </div>
                            {/* <!-- Sub-item 2 --> */}
                            <div className="sh-cta-sub-item">
                                <div className="sh-cta-sub-icon bg-green">
                                    <i className="fa fa-shopping-basket"></i>
                                </div>
                                <div className="sh-cta-sub-details">
                                    <h4 className="sh-cta-sub-title">Market CV</h4>
                                    <p className="sh-cta-sub-desc"> Kiếm tiền thụ động từ kho Ứng viên hiện có của bạn.</p>
                                    <a href="login.html" className="sh-cta-sub-link">
                                        Xem thêm <i className="fa fa-angle-right"></i>
                                    </a>
                                </div>
                            </div>
                            {/* <!-- Sub-item 3 --> */}
                            <div className="sh-cta-sub-item">
                                <div className="sh-cta-sub-icon bg-purple">
                                    <i className="fa fa-podcast"></i>
                                </div>
                                <div className="sh-cta-sub-details">
                                    <h4 className="sh-cta-sub-title">Recland Training</h4>
                                    <p className="sh-cta-sub-desc">Tham gia các chương trình đào tạo miễn phí từ Recland Academy.</p>
                                    <a href="login.html" className="sh-cta-sub-link">
                                        Xem thêm <i className="fa fa-angle-right"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <!-- Card 2: Nhà tuyển dụng (Employer) --> */}
                    <div className="sh-cta-card theme-employer" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
                        <div className="sh-cta-left">
                            <h3 className="sh-cta-left-title">Dành cho Nhà Tuyển Dụng (Employer)</h3>
                            <h4 className="sh-cta-left-subtitle">Bán hàng đa kênh – Tiếp cận đa điểm</h4>
                            <ul className="sh-cta-bullets">
                                <li className="sh-cta-bullet-item">Tăng trưởng bền vững với mạng lưới hơn 10,000+ HR Freelancer</li>
                                <li className="sh-cta-bullet-item">Tiếp cận ứng viên đa kênh, đa điểm chạm với Recland AI Matching</li>
                                <li className="sh-cta-bullet-item">Chỉ số hiệu quả rõ ràng, minh bạch, tối ưu chi phí tuyển dụng</li>
                            </ul>
                            <p className="sh-cta-note">*Đặc biệt: Chỉ trả phí theo cam kết chất lượng ứng viên </p>
                            <a href="employer.html" className="sh-cta-action-btn">
                                Tư vấn cho tôi <i className="fa fa-chevron-right"></i>
                            </a>
                        </div>
                        <div className="sh-cta-right">
                            {/* <!-- Sub-item 1 --> */}
                            <div className="sh-cta-sub-item">
                                <div className="sh-cta-sub-icon bg-orange">
                                    <i className="fa fa-link"></i>
                                </div>
                                <div className="sh-cta-sub-details">
                                    <h4 className="sh-cta-sub-title">Recland Affiliate</h4>
                                    <p className="sh-cta-sub-desc">Giải pháp tăng trưởng bằng Affiliate Marketing theo hiệu quả tuyển dụng CPA (CV, Interview, Onboard).</p>
                                    <a href="employer.html" className="sh-cta-sub-link">
                                        Xem thêm <i className="fa fa-angle-right"></i>
                                    </a>
                                </div>
                            </div>
                            {/* <!-- Sub-item 2 --> */}
                            <div className="sh-cta-sub-item">
                                <div className="sh-cta-sub-icon bg-green">
                                    <i className="fa fa-shopping-basket"></i>
                                </div>
                                <div className="sh-cta-sub-details">
                                    <h4 className="sh-cta-sub-title">Market CV</h4>
                                    <p className="sh-cta-sub-desc">Tiếp cận trực tiếp tới ứng viên với chương trình giới thiệu CV trực tiếp từ nguồn chất lượng.</p>
                                    <a href="employer.html" className="sh-cta-sub-link">
                                        Xem thêm <i className="fa fa-angle-right"></i>
                                    </a>
                                </div>
                            </div>
                            {/* <!-- Sub-item 3 --> */}
                            <div className="sh-cta-sub-item">
                                <div className="sh-cta-sub-icon bg-purple">
                                    <i className="fa fa-podcast"></i>
                                </div>
                                <div className="sh-cta-sub-details">
                                    <h4 className="sh-cta-sub-title">FREELANCER ĐA NGÀNH</h4>
                                    <p className="sh-cta-sub-desc">Giải pháp kết nối doanh nghiệp với cộng đồng Freelancer đa ngành có sức ảnh hưởng và chuyên môn cao.</p>
                                    <a href="employer.html" className="sh-cta-sub-link">
                                        Xem thêm <i className="fa fa-angle-right"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <!-- Card 3: Ứng viên (Candidate) --> */}
                    <div className="sh-cta-card theme-candidate" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">
                        <div className="sh-cta-left">
                            <h3 className="sh-cta-left-title">Dành cho Ứng Viên (Candidate)</h3>
                            <h4 className="sh-cta-left-subtitle">Khởi đầu sự nghiệp – Phát triển bản thân</h4>
                            <ul className="sh-cta-bullets">
                                <li className="sh-cta-bullet-item">Tiếp cận việc làm chất lượng cao từ các tập đoàn lớn độc quyền</li>
                                <li className="sh-cta-bullet-item">Tư vấn nghề nghiệp &amp; chỉnh sửa CV hoàn toàn miễn phí</li>
                                <li className="sh-cta-bullet-item">Nhận quà tặng hấp dẫn và Referral Bonus khi giới thiệu thành công</li>
                            </ul>
                            <p className="sh-cta-note">
                                *Đặc biệt: Hỗ trợ chỉnh sửa và tối ưu hóa <strong>mẫu hồ sơ CV chuyên nghiệp</strong>
                            </p>
                            <a href="jobs-list.html" className="sh-cta-action-btn">
                                Tìm việc ngay <i className="fa fa-chevron-right"></i>
                            </a>
                        </div>
                        <div className="sh-cta-right">
                            {/* <!-- Sub-item 1 --> */}
                            <div className="sh-cta-sub-item">
                                <div className="sh-cta-sub-icon bg-orange">
                                    <i className="fa fa-link"></i>
                                </div>
                                <div className="sh-cta-sub-details">
                                    <h4 className="sh-cta-sub-title">Recland Affiliate</h4>
                                    <p className="sh-cta-sub-desc">Mạng lưới việc làm đa dạng, dễ dàng nộp hồ sơ trực tuyến chỉ với 1 click.</p>
                                    <a href="jobs-list.html" className="sh-cta-sub-link">
                                        Xem thêm <i className="fa fa-angle-right"></i>
                                    </a>
                                </div>
                            </div>
                            {/* <!-- Sub-item 2 --> */}
                            <div className="sh-cta-sub-item">
                                <div className="sh-cta-sub-icon bg-green">
                                    <i className="fa fa-shopping-basket"></i>
                                </div>
                                <div className="sh-cta-sub-details">
                                    <h4 className="sh-cta-sub-title">Market CV</h4>
                                    <p className="sh-cta-sub-desc">Kết nối trực tiếp tới nhà tuyển dụng, nhận kết quả và lịch hẹn phỏng vấn minh bạch.</p>
                                    <a href="jobs-list.html" className="sh-cta-sub-link">
                                        Xem thêm <i className="fa fa-angle-right"></i>
                                    </a>
                                </div>
                            </div>
                            {/* <!-- Sub-item 3 --> */}
                            <div className="sh-cta-sub-item">
                                <div className="sh-cta-sub-icon bg-purple">
                                    <i className="fa fa-podcast"></i>
                                </div>
                                <div className="sh-cta-sub-details">
                                    <h4 className="sh-cta-sub-title">REVIEW CV</h4>
                                    <p className="sh-cta-sub-desc">Chỉnh sửa và tối ưu mẫu hồ sơ CV chuyên nghiệp cùng đội ngũ tuyển dụng hàng đầu.</p>
                                    <a href="jobs-list.html" className="sh-cta-sub-link">
                                        Xem thêm <i className="fa fa-angle-right"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
