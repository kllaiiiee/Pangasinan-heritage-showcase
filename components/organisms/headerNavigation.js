import Link from "next/link";
import Icon from "../atoms/icon";

export default function HeaderNavigation() {
  return (
    <header
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "16px 5%",
        backgroundColor: "#FFFFFF",
        borderBottom: "1px solid #D1D5DB",
      }}
    >
     
      <Link
        href="/"
        style={{
          textDecoration: "none",
          color: "#0B5D8C",
          fontSize: "20px",
          fontWeight: "700",
          display: "flex",
          alignItems: "center",
          gap: "8px",
        }}
      >
        <Icon symbol="★" label="Heritage" />
        Pangasinan Heritage
      </Link>

      
      <nav
        style={{
          display: "flex",
          gap: "28px",
          alignItems: "center",
        }}
      >
        <Link
          href="/"
          style={{
            textDecoration: "none",
            color: "#168C8C",
            fontWeight: "600",
          }}
        >
          Home
        </Link>

        <Link
          href="/#heritage"
          style={{
            textDecoration: "none",
            color: "#234D3C",
            fontWeight: "600",
          }}
        >
          Heritage Sites
        </Link>

        <Link
          href="/#about"
          style={{
            textDecoration: "none",
            color: "#234D3C",
            fontWeight: "600",
          }}
        >
          About
        </Link>
      </nav>
    </header>
  );
}