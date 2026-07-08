export default function StatsCards() {
  return (
    <div className="mb-6 grid grid-cols-3 gap-4">
      <div className="rounded-xl bg-blue-50 p-4">
        Resume
      </div>

      <div className="rounded-xl bg-green-50 p-4">
        Interview
      </div>

      <div className="rounded-xl bg-purple-50 p-4">
        Jobs
      </div>
    </div>
  );
}