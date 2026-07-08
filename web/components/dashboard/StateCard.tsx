

type StatCardProps = {
  title: string;
  value: string;
  color: string;
};

export default function StatCard({
  title,
  value,
  color,
}: StatCardProps) {
  return (
    <div
      className={`rounded-xl p-4 ${color}`}
    >
      <p className="text-sm text-gray-500">
        {title}
      </p>

      <h3 className="mt-2 text-2xl font-bold">
        {value}
      </h3>
    </div>
  );
}