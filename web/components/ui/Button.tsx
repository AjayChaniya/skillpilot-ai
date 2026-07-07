interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
}

export default function Button({
  children,
  variant = "primary",
}: ButtonProps) {
  const base =
    "rounded-lg px-6 py-3 font-medium transition";

  const styles = {
    primary:
      "bg-blue-600 text-white hover:bg-blue-700",

    secondary:
      "border border-gray-300 hover:bg-gray-100",
  };

  return (
    <button className={`${base} ${styles[variant]}`}>
      {children}
    </button>
  );
}