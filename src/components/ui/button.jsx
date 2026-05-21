export function Button({ children, className = "", variant, ...props }) {
  return (
    <button
      className={`transition-all ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}