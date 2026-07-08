import StatCard from "./StateCard";


export default function StatsCards() {
  return (
    <div className="grid grid-cols-3 gap-4 mb-6">
      <StatCard
        title="Resume"
        value="92%"
        color="bg-blue-50"
      />

      <StatCard
        title="Interview"
        value="8/10"
        color="bg-green-50"
      />

      <StatCard
        title="Jobs"
        value="24"
        color="bg-purple-50"
      />
    </div>
  );
}