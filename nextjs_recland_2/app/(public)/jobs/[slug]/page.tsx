import { JobDetailHeader, JobDetailInfor } from "@/features/jobs/components/JobCard";
import { JOBS } from "@/features/jobs/data/job.mock";
import { notFound } from "next/navigation";

interface JobPostPageProps {
    params: Promise<{
        slug: string;
    }>;
}
export default async function JobPostPage({ params }: JobPostPageProps) {
    // 1. Lấy slug trên URL xuống
    const { slug } = await params;

    // 2. Tìm kiếm job tương ứng trong file Mock dữ liệu
    const currentJob = JOBS.find((item) => item.slug === slug);

    // 3. Nếu gõ bừa URL không có trong mock data -> Đẩy về trang 404
    if (!currentJob) {
        notFound();
    }
    return (
        <div id="app" className="rec-job-detail-body">
            <div className="rec-container">
                {/* Left column */}
                <div className="rec-main-col">
                    {/* Header */}
                    <JobDetailHeader/>
                    {/* Infor */}
                    <JobDetailInfor/>
                </div>
            </div>
        </div>
    )
}