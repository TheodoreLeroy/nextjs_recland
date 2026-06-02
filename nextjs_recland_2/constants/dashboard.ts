import { 
  LayoutDashboard, 
  Briefcase, 
  Users, 
  DollarSign, 
  BarChart3, 
  MessageSquare, 
  Bell, 
  Settings, 
  FolderKanban, 
  CreditCard, 
  FileText, 
  Heart, 
  Sparkles 
} from "lucide-react";

export interface DashboardMenuItem {
  title: string;
  path: string;
  icon?: any;
}

// 1. RECRUITER DASHBOARD CONSTANTS
export const RECRUITER_DASHBOARD_MENU: DashboardMenuItem[] = [
  {
    title: "Overview",
    path: "/dashboard/recruiter",
    icon: LayoutDashboard,
  },
  {
    title: "Active Jobs",
    path: "/dashboard/recruiter/active-jobs",
    icon: Briefcase,
  },
  {
    title: "Submitted Candidates",
    path: "/dashboard/recruiter/submitted-candidates",
    icon: Users,
  },
  {
    title: "Earnings",
    path: "/dashboard/recruiter/earnings",
    icon: DollarSign,
  },
  {
    title: "Analytics",
    path: "/dashboard/recruiter/analytics",
    icon: BarChart3,
  },
  {
    title: "Messages",
    path: "/dashboard/recruiter/messages",
    icon: MessageSquare,
  },
  {
    title: "Notifications",
    path: "/dashboard/recruiter/notifications",
    icon: Bell,
  },
  {
    title: "Settings",
    path: "/dashboard/recruiter/settings",
    icon: Settings,
  },
];

// 2. EMPLOYER DASHBOARD CONSTANTS
export const EMPLOYER_DASHBOARD_MENU: DashboardMenuItem[] = [
  {
    title: "Hiring Overview",
    path: "/dashboard/employer",
    icon: LayoutDashboard,
  },
  {
    title: "Posted Jobs",
    path: "/dashboard/employer/posted-jobs",
    icon: Briefcase,
  },
  {
    title: "Candidate Pipeline",
    path: "/dashboard/employer/candidate-pipeline",
    icon: FolderKanban,
  },
  {
    title: "Recruiter Network",
    path: "/dashboard/employer/recruiter-network",
    icon: Users,
  },
  {
    title: "Analytics",
    path: "/dashboard/employer/analytics",
    icon: BarChart3,
  },
  {
    title: "Billing",
    path: "/dashboard/employer/billing",
    icon: CreditCard,
  },
  {
    title: "Settings",
    path: "/dashboard/employer/settings",
    icon: Settings,
  },
];

// 3. CANDIDATE DASHBOARD CONSTANTS
export const CANDIDATE_DASHBOARD_MENU: DashboardMenuItem[] = [
  {
    title: "Applied Jobs",
    path: "/dashboard/candidate", // Giữ root cho trang mặc định của ứng viên
    icon: Briefcase,
  },
  {
    title: "Saved Jobs",
    path: "/dashboard/candidate/saved-jobs",
    icon: Heart,
  },
  {
    title: "CV Profile",
    path: "/dashboard/candidate/cv-profile",
    icon: FileText,
  },
  {
    title: "Recommendations",
    path: "/dashboard/candidate/recommendations",
    icon: Sparkles,
  },
  {
    title: "Settings",
    path: "/dashboard/candidate/settings",
    icon: Settings,
  },
];

// 4. MAP TOÀN BỘ DASHBOARD THEO ROLE (Dùng khi render Sidebar động)
export const DASHBOARD_MENUS_BY_ROLE = {
  candidate: CANDIDATE_DASHBOARD_MENU,
  recruiter: RECRUITER_DASHBOARD_MENU,
  employer: EMPLOYER_DASHBOARD_MENU,
};