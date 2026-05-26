export default function JobsPage() {
    const jobs = [];
    for (let i = 0; i <= 15; i++) {
        jobs.push({
            id: i,
            title: `Software Engineer ${i}`,
            company: `Tech Company ${i}`,
            location: "Hanoi, Vietnam",
            salary: "15-20 million VND",
            description:
                "We are looking for a skilled Software Engineer to join our team.",
        });
    }

    return (
        <>
            <section className="inline-grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 md:grid-rows-3 gap-4 p-4 pt-30">
                {jobs.map((job) => (
                    <div
                        key={job.id}
                        className="border rounded-lg p-4 shadow-md"
                    >
                        <h2 className="text-xl font-bold mb-2">{job.title}</h2>
                        <p className="text-gray-600 mb-1">{job.company}</p>
                        <p className="text-gray-600 mb-1">{job.location}</p>
                        <p className="text-gray-600 mb-1">{job.salary}</p>
                        <p className="text-gray-700">{job.description}</p>
                    </div>
                ))}
                {/* Add more job listings here */}
            </section>
        </>
    );
}
