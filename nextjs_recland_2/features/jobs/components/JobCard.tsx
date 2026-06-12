import Image from "next/image";
import Link from "next/link";
import { IoLocationOutline } from "react-icons/io5";
import { twMerge } from "tailwind-merge";
import { LuCalendar, LuDownload, LuEye, LuHash, LuHeart, LuShieldCheck, LuUser } from "react-icons/lu";
import * as LucideIcons from "react-icons/lu";
import { JOB_DETAIL_COMMON } from "../data/job.mock";

export const JobCard = ({
  ...props
}: JobCardProps) => {

  return (
    <div className="sh-jobs-card flex-row" data-location={props.location}>
      <div className="sh-jobs-card-left">
        <div className="sh-jobs-logo-wrapper">
          <img src={props.image} alt="Company Logo" />
          {props.isHot ? <span className="sh-jobs-hot-badge">🔥</span> : ""}
        </div>
        <div className="sh-jobs-details">
          <div className="sh-jobs-title-row">
            <span className="sh-jobs-tag hot">{props.tag}</span>
            <Link href={props.slug ? `/jobs/${props.slug}` : "#"}
              className="sh-jobs-card-title">{props.name}</Link>
          </div>
          <p className="sh-jobs-card-company">{props.company}</p>
          <div className="sh-jobs-card-meta">
            <span className="sh-jobs-location">{props.location}</span>
          </div>
        </div>
      </div>
      <div className="sh-jobs-card-right">
        <div className="sh-jobs-bonus-row">
          <i className="fa fa-gift"></i> {props.bonus}
        </div>
        <div className="sh-jobs-card-actions">
          <button className="sh-jobs-heart-btn"><i className="fa fa-heart-o"></i></button>
          <Link href={props.slug ? `/jobs/${props.slug}` : "#"}
            className="sh-jobs-action-btn">Chi tiết</Link>
        </div>
      </div>
    </div>
  );
};

export const JobDetailHeader = () => {
  return (
    // <!-- Header Job Card -->
    <div className="rec-card rec-header-card">
      <img className="rec-company-logo"
        src="https://recland.s3.ap-southeast-1.amazonaws.com/company/6819f384140192799912011824ff2575.png"
        alt="Logo" />
      <div className="rec-header-info">
        <div className="rec-job-title-wrapper">
          <h1 className="rec-job-title">CHIEF SALES OFFICER (CSO)</h1>
          <span className="rec-badge-process">
            <LuShieldCheck className="w-3.5 h-3.5"></LuShieldCheck> Recland
            Process
          </span>
        </div>
        <div className="rec-company-name">Khách hàng của HRI</div>

        <div className="rec-meta-info">
          <div className="rec-meta-item"><LuCalendar
            className="w-3.5 h-3.5" /> Đăng ngày: 05/05/2026</div>
          <div className="rec-meta-item"><LuEye className="w-3.5 h-3.5" />
            1,248 lượt xem</div>
          <div className="rec-meta-item"><LuUser
            className="w-3.5 h-3.5" /> 12 CTV đang tham gia</div>
        </div>
      </div>
      <div className="rec-header-actions flex gap-2.5 items-start ml-3.75"
      >
        <button className="rec-btn-header-action bg-white border border-(--rec-border) text-(--rec-text-sub) w-9 h-9 rounded-(--rec-radius-sm) flex items-center justify-center cursor-pointer transition-all duration-200" id="btn-save-job-header" title="Lưu Job"
        >
          <LuHeart className="w-4.5 h-4.5" />
        </button>
        <a href="#" className="rec-btn-header-action bg-white border border-(--rec-border) text-(--rec-text-sub) w-9 h-9 rounded-(--rec-radius-sm) flex items-center justify-center cursor-pointer transition-all duration-200 no-underline" id="btn-download-jd" title="Tải JD"
        >
          <LuDownload className="w-4.5 h-4.5" />
        </a>
      </div>
    </div>
  )
}

export const JobDetailInfor = () => {
  interface SmallCardProps {
    icon: React.ComponentType<{ className?: string }>; // Nhận vào một Component có prop className
    label: string;
    value: string;
  }
  const SmallCard = ({ icon: IconComponent, label, value }: SmallCardProps) => {
    let colorClass = "text-(--rec-primary)";
    let backgroundColor = ""; // Mặc định nền trống hoặc màu xám nhẹ tùy css gốc của bạn

    // 🌟 Thay đổi màu chữ và màu nền wrapper dựa theo điều kiện label
    if (label === "Mức lương hàng tháng") {
      colorClass = "text-(--rec-green) font-semibold";
      backgroundColor = "bg-(--rec-green-light)!"; // Nền xanh nhạt
    } else if (label === "Hạn nộp hồ sơ") {
      colorClass = "text-(--rec-orange) font-semibold";
      backgroundColor = "bg-(--rec-orange-light)"; // 🌟 Thêm nền cam nhạt cho đồng bộ thiết kế
    }

    return (
      <div className="rec-info-item">
        {/* 🌟 FIX: Đưa backgroundColor vào thẻ div wrapper này */}
        <div className={twMerge("rec-info-icon-wrapper", backgroundColor)}>
          {/* Thẻ icon chỉ nhận kích thước và màu sắc của chính nó (colorClass nếu muốn đổi màu cả icon) */}
          <IconComponent className={twMerge("w-4 h-4", colorClass)} />
        </div>
        <div>
          <div className="rec-info-label">{label}</div>
          <div className={twMerge("rec-info-value", colorClass)}>
            {value}
          </div>
        </div>
      </div>
    );
  };


  const Tag = ({...props}) => {
    return (
      <span className="rec-tag bg-(--rec-green-light) text-(--rec-green)"
                                    ><LuCheck
                                        data-lucide="check" style="width: 14px; height: 14px;"></LuCheck> Ăn trưa tại công
                                    ty</span>
    )
  }

  return (
    // <!-- Thông tin chung & Quyền lợi (Gộp 3 phần) -->
    <div className="rec-card">
      <div className="rec-card-title">
        <i data-lucide="file-text"></i> Thông tin chung tuyển dụng
      </div>

      {/* <!-- Lưới thông số chính --> */}
      <div className="rec-info-grid">
        {JOB_DETAIL_COMMON.map((item) => {

          const IconComponent = (LucideIcons as any)[item.icon] || LucideIcons.LuCircleHelp;
          return (
            <SmallCard key={item.id} icon={IconComponent} label={item.label} value={item.value} />
          )
        })}
        {/* <!-- Phúc lợi & Thiết bị làm việc (Thu gọn thành tags/items) --> */}
        <div className="mt-6 border-t border-(--rec-border) pt-5">
          <div
            className="text-[14px] font-bold text-(var(--rec-text-main)) mb-3 flex items-center gap-2"
          >
            <LucideIcons.LuGift className="text-(var(--rec-primary)) w-4.5 h-4.5"/>
            Phúc lợi & Thiết bị cho ứng viên
          </div>
        </div>
      </div>
    </div>
  )
}
