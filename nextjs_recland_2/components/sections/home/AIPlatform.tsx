"use client";
export default function AIPlatform() {
    return (
        // <!-- Section Home: AI Platform -->
        <section className="sh-ai-section clearfix mb80">
            <div className="container" data-aos="fade-up" data-aos-duration="1000">
                <div className="sh-ai-wrapper">
                    <div className="sh-ai-container">
                        {/* <!-- Left Side: Title, Description & Animated Matching SVG Visualizer --> */}
                        <div className="sh-ai-left">
                            <div className="sh-ai-badge">
                                <span className="sh-ai-badge-dot"></span>
                                Recland AI Platform
                            </div>
                            <div className="sh-ai-title-row">
                                <h2 className="sh-ai-title" id="sh-ai-title-text">
                                    AI-powered <span className="text-gradient-ai">Recruitment Marketplace</span>
                                </h2>
                                <button className="sh-ai-copy-btn" id="sh-ai-copy-title" title="Sao chép tiêu đề">
                                    <i className="fa fa-clone"></i>
                                </button>
                            </div>
                            <div className="sh-ai-desc-row">
                                <p className="sh-ai-desc" id="sh-ai-desc-text">
                                    Ứng dụng AI để kết nối đúng recruiter, đúng ứng viên và đúng nhu cầu tuyển dụng.
                                </p>
                                <button className="sh-ai-copy-btn" id="sh-ai-copy-desc" title="Sao chép mô tả">
                                    <i className="fa fa-clone"></i>
                                </button>
                            </div>
                            {/* <!-- Animated SVG visual network --> */}
                            <div className="sh-ai-visual">
                                <svg viewBox="0 0 400 240" className="sh-ai-svg">
                                    {/* <!-- Defs for Gradients and Filters --> */}
                                    <defs>
                                        {/* <!-- Tech Grid Pattern --> */}
                                        <pattern id="techGrid" width="20" height="20" patternUnits="userSpaceOnUse">
                                            <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(25, 201, 232, 0.05)" strokeWidth="0.8" />
                                            <circle cx="20" cy="0" r="1" fill="rgba(25, 201, 232, 0.15)" />
                                        </pattern>

                                        {/* <!-- Glow Filters --> */}
                                        <filter id="glow-cyan" x="-30%" y="-30%" width="160%" height="160%">
                                            <feGaussianBlur stdDeviation="3.5" result="blur" />
                                            <feMerge>
                                                <feMergeNode in="blur" />
                                                <feMergeNode in="SourceGraphic" />
                                            </feMerge>
                                        </filter>
                                        <filter id="glow-orange" x="-30%" y="-30%" width="160%" height="160%">
                                            <feGaussianBlur stdDeviation="3.5" result="blur" />
                                            <feMerge>
                                                <feMergeNode in="blur" />
                                                <feMergeNode in="SourceGraphic" />
                                            </feMerge>
                                        </filter>
                                        <filter id="glow-green" x="-30%" y="-30%" width="160%" height="160%">
                                            <feGaussianBlur stdDeviation="3.5" result="blur" />
                                            <feMerge>
                                                <feMergeNode in="blur" />
                                                <feMergeNode in="SourceGraphic" />
                                            </feMerge>
                                        </filter>

                                        <linearGradient id="aiHubGrad" x1="0" y1="0" x2="1" y2="1">
                                            <stop offset="0%" stopColor="#19c9e8" />
                                            <stop offset="100%" stopColor="#1297af" />
                                        </linearGradient>
                                    </defs>

                                    {/* <!-- Grid Background --> */}
                                    <rect width="100%" height="100%" fill="url(#techGrid)" rx="16" />

                                    {/* <!-- Connecting lines with path animation --> */}
                                    <g fill="none">
                                        {/* <!-- Recruiter to AI Hub --> */}
                                        <path d="M 60 70 L 200 120" stroke="rgba(244, 148, 32, 0.08)" strokeWidth="6" />
                                        <path d="M 60 70 L 200 120" stroke="rgba(244, 148, 32, 0.25)" strokeWidth="1.5" />
                                        <path d="M 60 70 L 200 120" className="animated-link" stroke="rgba(244, 148, 32, 0.4)" strokeWidth="1" />

                                        {/* <!-- Candidate to AI Hub --> */}
                                        <path d="M 60 170 L 200 120" stroke="rgba(25, 201, 232, 0.08)" strokeWidth="6" />
                                        <path d="M 60 170 L 200 120" stroke="rgba(25, 201, 232, 0.25)" strokeWidth="1.5" />
                                        <path d="M 60 170 L 200 120" className="animated-link" stroke="rgba(25, 201, 232, 0.4)" strokeWidth="1" />

                                        {/* <!-- Jobs to AI Hub --> */}
                                        <path d="M 340 120 L 200 120" stroke="rgba(16, 185, 129, 0.08)" strokeWidth="6" />
                                        <path d="M 340 120 L 200 120" stroke="rgba(16, 185, 129, 0.25)" strokeWidth="1.5" />
                                        <path d="M 340 120 L 200 120" className="animated-link" stroke="rgba(16, 185, 129, 0.4)" strokeWidth="1" />
                                    </g>

                                    {/* <!-- Flying particle dots with glowing trail simulation --> */}
                                    {/* <!-- Recruiter stream particles --> */}
                                    <circle r="3.5" fill="#f49420" filter="url(#glow-orange)">
                                        <animateMotion dur="2.4s" begin="0s" repeatCount="indefinite" path="M 60 70 L 200 120" />
                                    </circle>
                                    <circle r="2" fill="#f49420" opacity="0.6" filter="url(#glow-orange)">
                                        <animateMotion dur="2.4s" begin="0.2s" repeatCount="indefinite" path="M 60 70 L 200 120" />
                                    </circle>
                                    <circle r="1" fill="#f49420" opacity="0.3" filter="url(#glow-orange)">
                                        <animateMotion dur="2.4s" begin="0.4s" repeatCount="indefinite" path="M 60 70 L 200 120" />
                                    </circle>

                                    {/* <!-- Candidate stream particles --> */}
                                    <circle r="3.5" fill="#19c9e8" filter="url(#glow-cyan)">
                                        <animateMotion dur="2.8s" begin="0s" repeatCount="indefinite" path="M 60 170 L 200 120" />
                                    </circle>
                                    <circle r="2" fill="#19c9e8" opacity="0.6" filter="url(#glow-cyan)">
                                        <animateMotion dur="2.8s" begin="0.2s" repeatCount="indefinite" path="M 60 170 L 200 120" />
                                    </circle>
                                    <circle r="1" fill="#19c9e8" opacity="0.3" filter="url(#glow-cyan)">
                                        <animateMotion dur="2.8s" begin="0.4s" repeatCount="indefinite" path="M 60 170 L 200 120" />
                                    </circle>

                                    {/* <!-- Jobs stream particles (flowing into the core) --> */}
                                    <circle r="3.5" fill="#10b981" filter="url(#glow-green)">
                                        <animateMotion dur="3.2s" begin="0s" repeatCount="indefinite" path="M 340 120 L 200 120" />
                                    </circle>
                                    <circle r="2" fill="#10b981" opacity="0.6" filter="url(#glow-green)">
                                        <animateMotion dur="3.2s" begin="0.2s" repeatCount="indefinite" path="M 340 120 L 200 120" />
                                    </circle>
                                    <circle r="1" fill="#10b981" opacity="0.3" filter="url(#glow-green)">
                                        <animateMotion dur="3.2s" begin="0.4s" repeatCount="indefinite" path="M 340 120 L 200 120" />
                                    </circle>

                                    {/* <!-- Central Hub: Recland AI Core --> */}
                                    <g transform="translate(200, 120)">
                                        {/* <!-- Pulsing ambient glow ring --> */}
                                        <circle r="42" fill="none" stroke="rgba(25, 201, 232, 0.15)" strokeWidth="1">
                                            <animate attributeName="r" values="38;44;38" dur="4s" repeatCount="indefinite" />
                                            <animate attributeName="opacity" values="0.3;0.8;0.3" dur="4s" repeatCount="indefinite" />
                                        </circle>

                                        {/* <!-- Outer spinning dashed tech ring --> */}
                                        <circle r="34" fill="none" stroke="rgba(25, 201, 232, 0.4)" strokeWidth="1.5" strokeDasharray="18 6 6 6">
                                            <animateTransform attributeName="transform" type="rotate" from="0" to="360" dur="12s" repeatCount="indefinite" />
                                        </circle>

                                        {/* <!-- Inner counter-spinning dashed tech ring --> */}
                                        <circle r="28" fill="none" stroke="rgba(25, 201, 232, 0.6)" strokeWidth="1" strokeDasharray="8 6 12 6">
                                            <animateTransform attributeName="transform" type="rotate" from="360" to="0" dur="8s" repeatCount="indefinite" />
                                        </circle>

                                        {/* <!-- Glowing core circle --> */}
                                        <circle r="22" fill="url(#aiHubGrad)" filter="url(#glow-cyan)" />

                                        {/* <!-- Recland Brand Stylized 'R' Logo Icon --> */}
                                        <image href="/images/logo/Logo Recland_Icon.png" x="-15" y="-15" width="30" height="30" />

                                        {/* <!-- High-Tech Telemetry Labels --> */}
                                        <text y="42" fontFamily="'Inter', sans-serif" fontWeight="900" fontSize="8" fill="#19c9e8" textAnchor="middle" letterSpacing="1">
                                            RECLAND AI CORE
                                        </text>
                                        <text
                                            y="50"
                                            fontFamily="'Inter', sans-serif"
                                            fontWeight="600"
                                            fontSize="5"
                                            fill="#19c9e8"
                                            opacity="0.8"
                                            textAnchor="middle"
                                            letterSpacing="0.5"
                                        >
                                            MATCH_ENGINE // v2.0
                                        </text>
                                    </g>

                                    {/* <!-- Recruiter Node --> */}
                                    <g transform="translate(60, 70)">
                                        {/* <!-- Outer spinning dashed tech ring --> */}
                                        <circle r="28" fill="none" stroke="rgba(244, 148, 32, 0.3)" strokeWidth="1" strokeDasharray="4 4">
                                            <animateTransform attributeName="transform" type="rotate" from="360" to="0" dur="10s" repeatCount="indefinite" />
                                        </circle>

                                        {/* <!-- Inner glowing ring --> */}
                                        <circle r="21" fill="rgba(244, 148, 32, 0.05)" stroke="rgba(244, 148, 32, 0.6)" strokeWidth="1.5" filter="url(#glow-orange)" />

                                        {/* <!-- Core circle --> */}
                                        <circle r="15" fill="#f49420" />

                                        {/* <!-- Icon --> */}
                                        <text y="4" fontFamily="FontAwesome" fontSize="11" fill="#ffffff" textAnchor="middle">
                                            &#xf0c0;
                                        </text>

                                        {/* <!-- Tech Labels --> */}
                                        <text y="38" fontFamily="'Inter', sans-serif" fontWeight="800" fontSize="8" fill="#ffffff" textAnchor="middle" letterSpacing="0.5">
                                            RECRUITER
                                        </text>
                                        <text
                                            y="46"
                                            fontFamily="'Inter', sans-serif"
                                            fontWeight="600"
                                            fontSize="5.5"
                                            fill="#f49420"
                                            opacity="0.85"
                                            textAnchor="middle"
                                            letterSpacing="0.5"
                                        >
                                            NODE_01 // ONLINE
                                        </text>
                                    </g>

                                    {/* <!-- Candidate Node --> */}
                                    <g transform="translate(60, 170)">
                                        {/* <!-- Outer spinning dashed tech ring --> */}
                                        <circle r="28" fill="none" stroke="rgba(25, 201, 232, 0.3)" strokeWidth="1" strokeDasharray="4 4">
                                            <animateTransform attributeName="transform" type="rotate" from="0" to="360" dur="10s" repeatCount="indefinite" />
                                        </circle>

                                        {/* <!-- Inner glowing ring --> */}
                                        <circle r="21" fill="rgba(25, 201, 232, 0.05)" stroke="rgba(25, 201, 232, 0.6)" strokeWidth="1.5" filter="url(#glow-cyan)" />

                                        {/* <!-- Core circle --> */}
                                        <circle r="15" fill="#19c9e8" />

                                        {/* <!-- Icon --> */}
                                        <text y="4" fontFamily="FontAwesome" fontSize="11" fill="#ffffff" textAnchor="middle">
                                            &#xf19d;
                                        </text>

                                        {/* <!-- Tech Labels --> */}
                                        <text y="38" fontFamily="'Inter', sans-serif" fontWeight="800" fontSize="8" fill="#ffffff" textAnchor="middle" letterSpacing="0.5">
                                            ỨNG VIÊN
                                        </text>
                                        <text
                                            y="46"
                                            fontFamily="'Inter', sans-serif"
                                            fontWeight="600"
                                            fontSize="5.5"
                                            fill="#19c9e8"
                                            opacity="0.85"
                                            textAnchor="middle"
                                            letterSpacing="0.5"
                                        >
                                            NODE_02 // SYNCED
                                        </text>
                                    </g>

                                    {/* <!-- Jobs/Needs Node --> */}
                                    <g transform="translate(340, 120)">
                                        {/* <!-- Outer spinning dashed tech ring --> */}
                                        <circle r="28" fill="none" stroke="rgba(16, 185, 129, 0.3)" strokeWidth="1" strokeDasharray="4 4">
                                            <animateTransform attributeName="transform" type="rotate" from="360" to="0" dur="10s" repeatCount="indefinite" />
                                        </circle>

                                        {/* <!-- Inner glowing ring --> */}
                                        <circle r="21" fill="rgba(16, 185, 129, 0.05)" stroke="rgba(16, 185, 129, 0.6)" strokeWidth="1.5" filter="url(#glow-green)" />

                                        {/* <!-- Core circle --> */}
                                        <circle r="15" fill="#10b981" />

                                        {/* <!-- Icon --> */}
                                        <text y="4" fontFamily="FontAwesome" fontSize="11" fill="#ffffff" textAnchor="middle">
                                            &#xf0b1;
                                        </text>

                                        {/* <!-- Tech Labels --> */}
                                        <text y="38" fontFamily="'Inter', sans-serif" fontWeight="800" fontSize="8" fill="#ffffff" textAnchor="middle" letterSpacing="0.5">
                                            NHU CẦU TUYỂN
                                        </text>
                                        <text
                                            y="46"
                                            fontFamily="'Inter', sans-serif"
                                            fontWeight="600"
                                            fontSize="5.5"
                                            fill="#10b981"
                                            opacity="0.85"
                                            textAnchor="middle"
                                            letterSpacing="0.5"
                                        >
                                            DB_STREAM // ACTIVE
                                        </text>
                                    </g>
                                </svg>
                            </div>
                        </div>

                        {/* <!-- Right Side: Features Grid with Premium Cards & Copy Targets --> */}
                        <div className="sh-ai-right">
                            <div className="sh-ai-features-header">
                                <h3 className="sh-ai-features-title">Tính năng nổi bật</h3>
                                <button className="sh-ai-copy-btn-main" id="sh-ai-copy-features" title="Sao chép toàn bộ tính năng">
                                    <i className="fa fa-clone"></i> Sao chép danh sách
                                </button>
                            </div>

                            <div className="sh-ai-features-grid">
                                {/* <!-- Feature 1 --> */}
                                <div className="sh-ai-feature-card">
                                    <div className="sh-ai-card-glow"></div>
                                    <div className="sh-ai-card-header">
                                        <div className="sh-ai-feature-icon-wrapper bg-teal">
                                            <i className="fa fa-sliders"></i>
                                        </div>
                                        <button className="sh-ai-card-copy-btn" id="sh-ai-copy-feature-1" title="Sao chép tính năng">
                                            <i className="fa fa-copy"></i>
                                        </button>
                                    </div>
                                    <h4 className="sh-ai-feature-card-title">AI Matching</h4>
                                    <p className="sh-ai-feature-card-desc">Tự động phân tích hồ sơ ứng viên và kết nối chính xác với tin tuyển dụng phù hợp nhất.</p>
                                </div>

                                {/* <!-- Feature 2 --> */}
                                <div className="sh-ai-feature-card">
                                    <div className="sh-ai-card-glow"></div>
                                    <div className="sh-ai-card-header">
                                        <div className="sh-ai-feature-icon-wrapper bg-orange">
                                            <i className="fa fa-signal"></i>
                                        </div>
                                        <button className="sh-ai-card-copy-btn" id="sh-ai-copy-feature-2" title="Sao chép tính năng">
                                            <i className="fa fa-copy"></i>
                                        </button>
                                    </div>
                                    <h4 className="sh-ai-feature-card-title">Smart Candidate Ranking</h4>
                                    <p className="sh-ai-feature-card-desc">Sắp xếp danh sách ứng viên thông minh theo mức độ phù hợp công việc thực tế.</p>
                                </div>

                                {/* <!-- Feature 3 --> */}
                                <div className="sh-ai-feature-card">
                                    <div className="sh-ai-card-glow"></div>
                                    <div className="sh-ai-card-header">
                                        <div className="sh-ai-feature-icon-wrapper bg-blue">
                                            <i className="fa fa-pie-chart"></i>
                                        </div>
                                        <button className="sh-ai-card-copy-btn" id="sh-ai-copy-feature-3" title="Sao chép tính năng">
                                            <i className="fa fa-copy"></i>
                                        </button>
                                    </div>
                                    <h4 className="sh-ai-feature-card-title">Hiring Analytics</h4>
                                    <p className="sh-ai-feature-card-desc">Thống kê hiệu quả tuyển dụng, chi phí và thời gian chuyển đổi chi tiết.</p>
                                </div>

                                {/* <!-- Feature 4 --> */}
                                <div className="sh-ai-feature-card">
                                    <div className="sh-ai-card-glow"></div>
                                    <div className="sh-ai-card-header">
                                        <div className="sh-ai-feature-icon-wrapper bg-green">
                                            <i className="fa fa-shield"></i>
                                        </div>
                                        <button className="sh-ai-card-copy-btn" id="sh-ai-copy-feature-4" title="Sao chép tính năng">
                                            <i className="fa fa-copy"></i>
                                        </button>
                                    </div>
                                    <h4 className="sh-ai-feature-card-title">Recruiter Performance Score</h4>
                                    <p className="sh-ai-feature-card-desc">Đánh giá chất lượng hoạt động của CTV tuyển dụng dựa trên dữ liệu thành công thực tế.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
