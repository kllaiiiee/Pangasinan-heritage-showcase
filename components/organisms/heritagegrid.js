import HeritageCard from "../molecules/heritagecard";

const heritageSites = [
  {
    name: "Hundred Islands",
    location: "Alaminos, Pangasinan",
    description:
      "A famous island destination known for its beautiful islands and coastal scenery.",
    image: "/images/hundred-islands.jpg",
    slug: "hundred-islands",
  },
  {
    name: "Bolinao Lighthouse",
    location: "Bolinao, Pangasinan",
    description:
      "A historic lighthouse and landmark overlooking the coast of Bolinao.",
    image: "/images/bolinao-lighthouse.jpg",
    slug: "bolinao-lighthouse",
  },
  {
    name: "Balungao Hot Spring",
    location: "Balungao, Pangasinan",
    description:
      "A natural attraction known for its hot spring waters and relaxing environment.",
    image: "/images/balungao-hot-spring.jpg",
    slug: "balungao-hot-spring",
  },
];

export default function HeritageGrid({ searchQuery = "" }) {
  const filteredSites = heritageSites.filter((site) => {
    const text = (
      site.name +
      " " +
      site.location +
      " " +
      site.description
    ).toLowerCase();

    return text.includes(searchQuery.toLowerCase());
  });

  return (
    <section
      id="heritage"
      aria-labelledby="heritage-sites-heading"
      style={{
        padding: "40px 20px",
      }}
    >
      <h2
        id="heritage-sites-heading"
        style={{
          color: "#FFFFFF",
          marginBottom: "24px",
          fontSize: "28px",
        }}
      >
        Explore Pangasinan
      </h2>

      {filteredSites.length === 0 ? (
        <p
          style={{
            color: "#FFFFFF",
            textAlign: "center",
            padding: "30px",
          }}
        >
          No heritage sites found.
        </p>
      ) : (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "24px",
          }}
        >
          {filteredSites.map((site) => (
            <HeritageCard
              key={site.slug}
              name={site.name}
              location={site.location}
              description={site.description}
              image={site.image}
              slug={site.slug}
            />
          ))}
        </div>
      )}
    </section>
  );
}