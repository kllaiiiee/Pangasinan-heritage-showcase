const basePath = "/Pangasinan-heritage-showcase";

const heritageSites = {
  "hundred-islands": {
    name: "Hundred Islands",
    location: "Alaminos, Pangasinan",
    description:
      "A famous island destination known for its beautiful islands and coastal scenery.",
    image: `${basePath}/images/hundred-islands.webp`,
    secondImage: `${basePath}/images/hundred-islands-2.webp`,
  },

  "bolinao-lighthouse": {
    name: "Bolinao Lighthouse",
    location: "Bolinao, Pangasinan",
    description:
      "A historic lighthouse and landmark overlooking the coast of Bolinao.",
    image: `${basePath}/images/bolinao-lighthouse.webp`,
    secondImage: `${basePath}/images/bolinao-lighthouse-2.webp`,
  },

  "balungao-hot-spring": {
    name: "Balungao Hot Spring",
    location: "Balungao, Pangasinan",
    description:
      "A natural attraction known for its hot spring waters and relaxing environment.",
    image: `${basePath}/images/balungao-hot-spring.webp`,
    secondImage: `${basePath}/images/balungao-hot-spring-2.webp`,
  },
};

export function generateStaticParams() {
  return [
    { slug: "hundred-islands" },
    { slug: "bolinao-lighthouse" },
    { slug: "balungao-hot-spring" },
  ];
}

export default async function HeritagePage({ params }) {
  const { slug } = await params;

  const site = heritageSites[slug];

  if (!site) {
    return (
      <main
        style={{
          minHeight: "100vh",
          padding: "60px 20px",
          backgroundColor: "#000000",
          color: "#FFFFFF",
          textAlign: "center",
        }}
      >
        <h1>Heritage Site Not Found</h1>

        <a
          href="/Pangasinan-heritage-showcase/"
          style={{
            display: "inline-block",
            marginTop: "20px",
            padding: "12px 20px",
            backgroundColor: "#159A9C",
            color: "#FFFFFF",
            textDecoration: "none",
            borderRadius: "8px",
          }}
        >
          Back to Home
        </a>
      </main>
    );
  }

  return (
    <main
      style={{
        minHeight: "100vh",
        backgroundColor: "#000000",
        color: "#FFFFFF",
        padding: "40px 20px",
      }}
    >
      <div
        style={{
          maxWidth: "900px",
          margin: "0 auto",
        }}
      >
       <a
  href="/Pangasinan-heritage-showcase/"
  style={{
    display: "inline-flex",
    alignItems: "center",
    gap: "8px",
    marginBottom: "25px",
    color: "#FFFFFF",
    textDecoration: "none",
    fontWeight: "600",
    fontSize: "16px",
  }}
>
  <span
    style={{
      fontSize: "20px",
      position: "relative",
      top: "-2px",
    }}
  >
    ⌂
  </span>
  Back to Home
</a>

        <div
          style={{
            backgroundColor: "#B0F2D4",
            borderRadius: "16px",
            overflow: "hidden",
            color: "#234D3C",
          }}
        >
         <img
  src={site.secondImage}
  alt={`${site.name} additional view`}
  style={{
    width: "100%",
    height: "450px",
    objectFit: "cover",
    display: "block",
  }}
/>

          <div
            style={{
              padding: "30px",
            }}
          >
            <h1
              style={{
                marginTop: 0,
                marginBottom: "10px",
                fontSize: "36px",
              }}
            >
              {site.name}
            </h1>

            <p
              style={{
                fontSize: "18px",
                fontWeight: "600",
                marginBottom: "20px",
              }}
            >
              {site.location}
            </p>

            <p
              style={{
                fontSize: "17px",
                lineHeight: "1.7",
              }}
            >
              {site.description}
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}