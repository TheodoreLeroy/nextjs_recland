import SearchBar from "@/components/ui/SearchBar";
import JobContent from "@/features/jobs/components/JobContent";
import JobFilter from "@/features/jobs/components/JobFilter";

export default function JobPage() {
  return <>
  <section className="container clearfix mt30">
    {/* Job filter */}
    <JobFilter/>
    {/* Job content */}
    <JobContent/>
  </section>
    
    
  </>
}
