export default function Card({ title, children, className = "", variant = "default" }) {
  const variantClasses = {
    default: "bg-[#FFFFFF] shadow-md hover:shadow-lg",
    outlined: "bg-[#FFFFFF] border border-[#CFD8DC]",
    colored: "bg-[#0072BC] text-white"
  };

  return (
    <div className={`rounded-lg p-6 transition-all ${variantClasses[variant]} ${className}`}>
      {title && <h2 className="text-xl font-semibold mb-4 text-[#2C3E50]">{title}</h2>}
      <div>{children}</div>
    </div>
  );
} 