export default function Icon({ symbol = "●", label = "" }) {
  return (
    <span
      role="img"
      aria-label={label}
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "20px",
      }}
    >
      {symbol}
    </span>
  );
}