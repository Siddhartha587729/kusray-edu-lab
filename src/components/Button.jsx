export default function Button({ 
  children, 
  onClick, 
  variant = 'primary', 
  size = 'md', 
  className = '', 
  type = 'button', 
  disabled = false 
}) {
  const baseClasses = "font-medium rounded transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2";
  
  const variantClasses = {
    primary: "bg-[#0072BC] hover:bg-[#005B96] text-white focus:ring-[#0072BC]",
    secondary: "bg-[#42B4E6] hover:bg-[#0072BC] text-white focus:ring-[#42B4E6]",
    outline: "bg-transparent border border-[#0072BC] text-[#0072BC] hover:bg-[#0072BC] hover:text-white focus:ring-[#0072BC]",
    neutral: "bg-[#689F38] hover:bg-opacity-90 text-white focus:ring-[#689F38]",
    light: "bg-[#F5F7FA] hover:bg-[#CFD8DC] text-[#2C3E50] focus:ring-[#CFD8DC]",
  };
  
  const sizeClasses = {
    sm: "px-3 py-1 text-sm",
    md: "px-5 py-2",
    lg: "px-6 py-3 text-lg",
  };
  
  const disabledClass = disabled ? "opacity-50 cursor-not-allowed" : "";
  
  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${disabledClass} ${className}`;
  
  return (
    <button
      className={classes}
      onClick={onClick}
      type={type}
      disabled={disabled}
    >
      {children}
    </button>
  );
} 