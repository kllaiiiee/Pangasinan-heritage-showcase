import Link from "next/link";
import Image from "next/image";
import Button from "../atoms/button";

export default function HeritageCard({
  name,
  location,
  description,
  image,
  slug,
}) {
  return (
    <article
      style={{
        backgroundColor: "#b1f9d5",
        borderRadius: "12px",
        overflow: "hidden",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.12)",
        display: "flex",
        flexDirection: "column",
        height: "100%",
      }}
    >
      <div
        style={{
          width: "100%",
          height: "230px",
          overflow: "hidden",
        }}
      >
        <Image
          src={image}
          alt={name}
          width={500}
          height={300}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </div>

      <div
        style={{
          padding: "20px",
          display: "flex",
          flexDirection: "column",
          flex: 1,
        }}
      >
        <h3
          style={{
            margin: "0 0 8px",
            fontSize: "28px",
            color: "#234D3C",
          }}
        >
          {name}
        </h3>

        <p
          style={{
            margin: "0 0 8px",
            color: "#4B665B",
            fontSize: "16px",
          }}
        >
          {location}
        </p>

        <p
          style={{
            margin: "0 0 18px",
            color: "#4B665B",
            lineHeight: "1.5",
            flex: 1,
          }}
        >
          {description}
        </p>

        <Link
          href={`/Pangasinan-heritage-showcase/heritage/${slug}`}
          style={{
            textDecoration: "none",
            alignSelf: "flex-start",
          }}
        >
          <Button>Explore</Button>
        </Link>
      </div>
    </article>
  );
}