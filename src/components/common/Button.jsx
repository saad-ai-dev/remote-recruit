export function Button({
  children,
  variant = "primary",
  className = "",
  ...props
}) {
  const styles =
    variant === "secondary"
      ? "border border-brand-400 bg-white text-brand-800 hover:bg-brand-50"
      : "bg-brand-400 text-white shadow-glow hover:bg-brand-500";

  return (
    <button
      className={`inline-flex min-h-11 items-center justify-center rounded-full px-6 text-sm font-extrabold transition ${styles} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
