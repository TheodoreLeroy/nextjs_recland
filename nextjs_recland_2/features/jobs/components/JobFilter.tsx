export default function JobFilter(){
    return (
        <>
        <form method="GET" action="jobs-list.html" id="filter-form">
                {/* <!-- Search Console Row --> */}
                <div className="sh-search-row">
                    <div className="sh-search-box-wrapper">
                        <input type="search" className="sh-search-input" name="search" autoComplete="off" value=""
                            placeholder="Tìm kiếm việc làm, công ty, kỹ năng..." />
                        <button type="submit" className="sh-search-btn">Tìm kiếm</button>
                    </div>

                </div>

                {/* <!-- Hidden Inputs to sync state --> */}
                <input type="hidden" name="address" value=""/>
                <input type="hidden" name="salary" value=""/>
                <input type="hidden" name="rank" value=""/>
                <input type="hidden" name="bonus_type" value=""/>
                <input type="hidden" name="experience" value=""/>
                <input type="hidden" name="career" value=""/>
                <input type="hidden" name="sort_by" value=""/>

                {/* <!-- Liepin-style Filter Board --> */}
                <div className="sh-filter-board">
                    {/* <!-- Career/Industry Row --> */}
                    <div className="sh-filter-row">
                        <div className="sh-filter-label">Lĩnh vực</div>
                        <div className="sh-filter-tags-list">
                            <a className="sh-filter-tag-link active" data-name="career" data-value="">Tất cả</a>
                            <a className="sh-filter-tag-link" data-name="career" data-value="cntt-phan-mem">CNTT - Phần
                                mềm</a>
                            <a className="sh-filter-tag-link" data-name="career" data-value="ban-hang-kinh-doanh">Bán hàng /
                                Kinh doanh</a>
                            <a className="sh-filter-tag-link" data-name="career" data-value="tai-chinh-dau-tu">Tài chính /
                                Đầu tư</a>
                            <a className="sh-filter-tag-link" data-name="career" data-value="marketing">Marketing</a>
                            <a className="sh-filter-tag-link" data-name="career" data-value="hanh-chinh-nhan-su">Hành chính
                                / Nhân sự</a>

                            {/* <!-- Hidden Careers --> */}
                            <a className="sh-filter-tag-link sh-filter-tag-hidden hidden" data-name="career"
                                data-value="ke-toan-kiem-toan" >Kế toán / Kiểm toán</a>
                            <a className="sh-filter-tag-link sh-filter-tag-hidden hidden" data-name="career"
                                data-value="giao-duc-dao-tao" >Giáo dục / Đào tạo</a>
                            <a className="sh-filter-tag-link sh-filter-tag-hidden hidden" data-name="career"
                                data-value="y-te-duoc-pham" >Y tế / Dược phẩm</a>
                            <a className="sh-filter-tag-link sh-filter-tag-hidden hidden" data-name="career"
                                data-value="xay-dung-bat-dong-san" >Xây dựng / BĐS</a>
                            <a className="sh-filter-tag-link sh-filter-tag-hidden hidden" data-name="career"
                                data-value="dich-vu-khach-hang" >Dịch vụ khách hàng</a>
                            <a className="sh-filter-tag-link sh-filter-tag-hidden hidden" data-name="career"
                                data-value="thiet-ke-my-thuat" >Thiết kế / Mỹ thuật</a>

                            <a className="sh-filter-toggle-btn" data-target="career">Xem thêm <i
                                    className="fa fa-angle-down"></i></a>
                        </div>
                    </div>

                    {/* <!-- Location Row --> */}
                    <div className="sh-filter-row">
                        <div className="sh-filter-label">Địa điểm</div>
                        <div className="sh-filter-tags-list">
                            <a className="sh-filter-tag-link active" data-name="address" data-value="">Toàn quốc</a>
                            <a className="sh-filter-tag-link" data-name="address" data-value="ha-noi">Hà Nội</a>
                            <a className="sh-filter-tag-link" data-name="address" data-value="ho-chi-minh">Hồ Chí Minh</a>
                            <a className="sh-filter-tag-link" data-name="address" data-value="da-nang">Đà Nẵng</a>

                            {/* <!-- Hidden Locations --> */}
                            <a className="sh-filter-tag-link sh-filter-tag-hidden hidden" data-name="address"
                                data-value="binh-duong" >Bình Dương</a>
                            <a className="sh-filter-tag-link sh-filter-tag-hidden hidden" data-name="address" data-value="dong-nai"
                                >Đồng Nai</a>
                            <a className="sh-filter-tag-link sh-filter-tag-hidden hidden" data-name="address"
                                data-value="hai-phong" >Hải Phòng</a>
                            <a className="sh-filter-tag-link sh-filter-tag-hidden hidden" data-name="address" data-value="can-tho"
                                >Cần Thơ</a>
                            <a className="sh-filter-tag-link sh-filter-tag-hidden hidden" data-name="address" data-value="dbscl"
                                >ĐBSCL</a>
                            <a className="sh-filter-tag-link sh-filter-tag-hidden hidden" data-name="address" data-value="an-giang"
                                >An Giang</a>
                            <a className="sh-filter-tag-link sh-filter-tag-hidden hidden" data-name="address"
                                data-value="ba-ria-vung-tau" >Bà Rịa - Vũng Tàu</a>
                            <a className="sh-filter-tag-link sh-filter-tag-hidden hidden" data-name="address" data-value="bac-kan"
                                >Bắc Kạn</a>

                            <a className="sh-filter-toggle-btn" data-target="address">Xem thêm <i
                                    className="fa fa-angle-down"></i></a>
                        </div>
                    </div>

                    {/* <!-- Salary Row --> */}
                    <div className="sh-filter-row">
                        <div className="sh-filter-label">Mức lương</div>
                        <div className="sh-filter-tags-list">
                            <a className="sh-filter-tag-link active" data-name="salary" data-value="">Tất cả</a>
                            <a className="sh-filter-tag-link" data-name="salary" data-value="under-10">Dưới 10 triệu</a>
                            <a className="sh-filter-tag-link" data-name="salary" data-value="10-15">10 - 15 triệu</a>
                            <a className="sh-filter-tag-link" data-name="salary" data-value="15-20">15 - 20 triệu</a>
                            <a className="sh-filter-tag-link" data-name="salary" data-value="20-30">20 - 30 triệu</a>
                            <a className="sh-filter-tag-link" data-name="salary" data-value="30-50">30 - 50 triệu</a>
                            <a className="sh-filter-tag-link" data-name="salary" data-value="over-50">Trên 50 triệu</a>
                            <a className="sh-filter-tag-link" data-name="salary" data-value="negotiable">Thỏa thuận</a>
                        </div>
                    </div>

                    {/* <!-- Rank Row --> */}
                    <div className="sh-filter-row">
                        <div className="sh-filter-label">Cấp bậc</div>
                        <div className="sh-filter-tags-list">
                            <a className="sh-filter-tag-link active" data-name="rank" data-value="">Tất cả</a>
                            <a className="sh-filter-tag-link" data-name="rank" data-value="1">Thực tập sinh</a>
                            <a className="sh-filter-tag-link" data-name="rank" data-value="2">Trưởng nhóm</a>
                            <a className="sh-filter-tag-link" data-name="rank" data-value="3">Nhân viên</a>
                            <a className="sh-filter-tag-link" data-name="rank" data-value="4">Trưởng phòng</a>
                            <a className="sh-filter-tag-link" data-name="rank" data-value="5">Giám Đốc và Cấp Cao Hơn</a>
                        </div>
                    </div>

                    {/* <!-- Experience Row --> */}
                    <div className="sh-filter-row">
                        <div className="sh-filter-label">Kinh nghiệm</div>
                        <div className="sh-filter-tags-list">
                            <a className="sh-filter-tag-link active" data-name="experience" data-value="">Tất cả</a>
                            <a className="sh-filter-tag-link" data-name="experience" data-value="fresh">Sinh viên/Thực
                                tập</a>
                            <a className="sh-filter-tag-link" data-name="experience" data-value="less-1-year">Dưới 1 năm</a>
                            <a className="sh-filter-tag-link" data-name="experience" data-value="1-3-years">1 - 3 năm</a>
                            <a className="sh-filter-tag-link" data-name="experience" data-value="3-5-years">3 - 5 năm</a>
                            <a className="sh-filter-tag-link" data-name="experience" data-value="5-10-years">5 - 10 năm</a>
                            <a className="sh-filter-tag-link" data-name="experience" data-value="over-10-years">Trên 10
                                năm</a>
                        </div>
                    </div>

                    {/* <!-- More Row --> */}
                    <div className="sh-filter-row">
                        <div className="sh-filter-label">Khác</div>
                        <div className="sh-filter-row-more">
                            <div className="select2-item">
                                <select name="education" className="form-select">
                                    <option value="">Học vấn</option>
                                    <option value="none">Không yêu cầu</option>
                                    <option value="high-school">Trung học</option>
                                    <option value="vocational">Trung cấp</option>
                                    <option value="college">Cao đẳng</option>
                                    <option value="university">Đại học</option>
                                    <option value="postgraduate">Sau đại học</option>
                                </select>
                            </div>
                            <div className="select2-item">
                                <select name="job_type" className="form-select">
                                    <option value="">Hình thức làm việc</option>
                                    <option value="full-time">Toàn thời gian</option>
                                    <option value="part-time">Bán thời gian</option>
                                    <option value="internship">Thực tập</option>
                                    <option value="freelance">Dự án / Freelance</option>
                                </select>
                            </div>
                            <div className="select2-item">
                                <select name="enterprise_nature" className="form-select">
                                    <option value="">Loại hình DN</option>
                                    <option value="state-owned">Nhà nước</option>
                                    <option value="private">Tư nhân</option>
                                    <option value="joint-stock">Cổ phần</option>
                                    <option value="fdi">FDI / Nước ngoài</option>
                                    <option value="joint-venture">Liên doanh</option>
                                </select>
                            </div>
                            <div className="select2-item">
                                <select name="bonus_type" className="form-select">
                                    <option value="">Hình thức bonus</option>
                                    <option value="0">cv</option>
                                    <option value="1">onboard</option>
                                </select>
                            </div>
                            <div className="select2-item">
                                <select name="bonus" className="form-select">
                                    <option value="">Mức hoa hồng</option>
                                    <option value="0-1000">$0 - $1000</option>
                                    <option value="1000-2000">$1000 - $2000</option>
                                    <option value="2000-3000">$2000 - $3000</option>
                                    <option value="3000-4000">$3000 - $4000</option>
                                    <option value="5000">= $5000</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </>
    );
}