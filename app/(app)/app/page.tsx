import { getJobs } from "@/app/lib/actions";
import { Card } from "@/components/ui/card";

export default async function DashboardPage() {
  const jobs = await getJobs();

  return (
    <main>{
      
      <Card className="w-300 h-100">
        <h1>Job Applications</h1>
        <h2>{jobs.company}</h2>
      </Card>
    }

      
    </main>
  );
}