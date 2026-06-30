import { getJobs } from "@/app/lib/actions";

export default async function DashboardPage() {
  const jobs = await getJobs();

  return (
    <main>
      <h1>Job Applications</h1>
      <p>{jobs.length} applications</p>
      <pre>{JSON.stringify(jobs, null, 2)}</pre>
    </main>
  );
}