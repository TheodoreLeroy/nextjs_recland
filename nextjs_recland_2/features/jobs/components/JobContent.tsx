import { BANNERS, JOBS, WIDGETS } from "../data/job.mock"
import Banner from "./Banner";
import { JobCard } from "./JobCard";
import Widget from "./Widget";
export default function JobContent() {
    return (
        <>
            <div className="main-container container">
                <div className="row">
                    {/* <!-- Main Column (Left) --> */}
                    <div className="col-lg-8 col-md-12 mb30">
                        {/* Job sorting */}
                        <div className="flex align-center space-between pb-3 mb-4 border-b border-[#e2e8f0]">
                            <div className="txt_20 font-['Inter'] font-bold text-[#0f4654]">
                                Tìm thấy <span className="text-[#1297af]">157</span> việc làm</div>
                            <div className="d-flex align-items-center">
                                <form method="GET" action="jobs-list.html" className="d-inline min-w-45">
                                    <input type="hidden" name="page" value="1" />
                                    <input type="hidden" name="lang" value="vi" />
                                    <input type="hidden" name="limit" value="30" />
                                    <select className="form-select select-not-border shadow-none" name="sort_by">
                                        <option value="">Sắp xếp theo</option>
                                        <option value="salary_desc">Lương cao</option>
                                        <option value="salary_asc">Lương thấp</option>
                                    </select>
                                </form>
                            </div>
                        </div>
                        {/* Job showcase */}
                        <div className="sh-jobs-list">
                            {JOBS.map((job) => (
                                <JobCard
                                    key={job.id}
                                    image={job.image}
                                    alt={job.alt}
                                    isHot={job.isHot}
                                    tag={job.tag}
                                    name={job.name}
                                    location={job.location}
                                    company={job.company}
                                    bonus={job.bonus}
                                    slug={job.slug}
                                />
                            ))}
                        </div>
                        <div className="control-slide mt-3">
                            <div className="swiper-button-prev disabled"></div>
                            <div className="page">
                                <span className="swiper-pagination-current">1</span> /
                                <span className="swiper-pagination-total">6</span> page
                            </div>
                            <a href="jobs-list4658.html?page=2" className="swiper-button-next"></a>
                        </div>
                    </div>
                    {/* Side bar */}
                    <div className="col-lg-4 col-md-12 mb30">
                        {/* Widgets */}
                        {WIDGETS.map((widget) => {
                            const id = widget.id;
                            const role = widget.role;
                            const content = widget.content;
                            const widgetList = widget.widget_list;
                            const buttonText = widget.button_text;
                            return (
                                <Widget
                                    key={id}
                                    role={role}
                                    content={content}
                                    widgetList={widgetList}
                                    buttonText={buttonText}
                                />
                            )
                        })}
                        {/* Banners */}
                        {BANNERS.map((banner) => (
                            <Banner
                                key={banner.id}
                                href={banner.href}
                                src={banner.src}
                                alt={banner.src}
                            />
                        ))}
                    </div>
                </div>

            </div>
        </>

    );
}