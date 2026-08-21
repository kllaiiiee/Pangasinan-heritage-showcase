export default function Typography({
  children,
  variant = "body",
}) {
  const styles = {
    heading: {
      fontSize: "28px",
      fontWeight: "700",
      marginBottom: "12px",
      color: "#234D3C",
    },

    subheading: {
      fontSize: "20px",
      fontWeight: "600",
      marginBottom: "8px",
      color: "#168C8C",
    },

    body: {
      fontSize: "16px",
      lineHeight: "1.6",
      color: "#234D3C",
    },

    caption: {
      fontSize: "14px",
      color: "#4B665B",
    },
  };

  return <div style={styles[variant]}>{children}</div>;
}