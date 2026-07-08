import DashboardHeader from "./DashboardHeader";
import ProgressCard from "./ProgressCard";
import StatsCards from "./StatsCards";
import TaskCard from "./TaskCard";

export default function DashboardPreview() {
  return (
    <div className="rounded-3xl border bg-white p-6 shadow-2xl">
      <DashboardHeader />

      <StatsCards />

      <ProgressCard />

      <TaskCard />
    </div>
  );
}