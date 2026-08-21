export default function Button({
  children,
  onClick,
  variant = "primary",
}) {
  const styles = {
    primary: {
      backgroundColor: "#168C8C",
      color: "#FFFFFF",
    },

    secondary: {
      backgroundColor: "#234D3C",
      color: "#FFFFFF",
    },
  };

  return (
    <button
      onClick={onClick}
      style={{
        ...styles[variant],
        border: "none",
        borderRadius: "8px",
        padding: "10px 18px",
        fontSize: "16px",
        cursor: "pointer",
      }}
    >
      {children}
    </button>
  );
}