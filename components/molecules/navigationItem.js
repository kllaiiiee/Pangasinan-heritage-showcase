import Link from "next/link";

export default function NavigationItem({ href, label, active = false }) {
  return (
    <Link
      href={href}
      aria-current={active ? "page" : undefined}
      style={{
        textDecoration: "none",
        color: active ? "#168C8C" : "#234D3C",
        fontWeight: active ? "700" : "500",
        padding: "8px 10px",
        borderRadius: "6px",
      }}
    >
      {label}
    </Link>
  );
}