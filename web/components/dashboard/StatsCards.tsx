import StatCard from "./StateCard";
import { dashboardStats } from "@/constants/dashboard";

export default function StatsCards() {
  return (
    <div className="grid grid-cols-3 gap-4 mb-6">
      {dashboardStats.map((item) => (
        <StatCard
          key={item.title}
          title={item.title}
          value={item.value}
          color={item.color}
        />
      ))}
    </div>
  );
}
