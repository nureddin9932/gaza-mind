function Button({ children, variant = "primary", onClick }) {
  const styles = {
    primary:
      "bg-gradient-to-r from-[#47DAFF] to-[#0067F7] text-white hover:opacity-90",
    secondary: "bg-gray-200 text-gray-700 hover:bg-gray-300",
  };

  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-lg text-sm font-medium transition cursor-pointer flex items-center gap-2 ${styles[variant]}`}
    >
      {children}
    </button>
  );
}

export default Button;
