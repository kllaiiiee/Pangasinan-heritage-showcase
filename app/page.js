"use client";

import { useState } from "react";
import HeaderNavigation from "../components/organisms/headerNavigation";
import SearchForm from "../components/molecules/searchform";
import HeritageGrid from "../components/organisms/heritagegrid";
import Typography from "../components/atoms/typography";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <>
      <HeaderNavigation />

      <main>
       
        <section
          style={{
            padding: "64px 20px",
            textAlign: "center",
            background:
              "linear-gradient(135deg, #E8F4FA 0%, #FFFFFF 100%)",
          }}
        >
          <p
            style={{
              color: "#0B5D8C",
              fontWeight: "700",
              marginBottom: "10px",
            }}
          >
            PANGASINAN HERITAGE DIGITAL SHOWCASE
          </p>

          <h1
            style={{
              fontSize: "clamp(2rem, 6vw, 4rem)",
              lineHeight: "1.1",
              margin: "0 auto 18px",
              maxWidth: "850px",
              color: "#1F2937",
            }}
          >
            Discover the Heritage of Pangasinan
          </h1>

          <p
            style={{
              maxWidth: "700px",
              margin: "0 auto 28px",
              fontSize: "18px",
              lineHeight: "1.6",
              color: "#6B7280",
            }}
          >
            Explore iconic destinations, landmarks, and natural attractions
            across the province of Pangasinan.
          </p>

         
          <SearchForm onSearch={setSearchQuery} />

         
          <div style={{ marginTop: "20px", color: "#234D3C" }}>
  
</div>
        </section>

       
        <section
          id="heritage"
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "48px 20px",
          }}
        >
          <HeritageGrid searchQuery={searchQuery} />
        </section>

       
        <section
          id="about"
          style={{
            padding: "48px 20px",
            backgroundColor: "#cfeadc",
            textAlign: "center",
          }}
        >
         <Typography variant="heading">
  About the Showcase
</Typography>

          <p
            style={{
              maxWidth: "700px",
              margin: "0 auto",
              lineHeight: "1.6",
              color: "#6B7280",
            }}
          >
            This digital showcase highlights selected heritage and tourism
            destinations in Pangasinan through a responsive and accessible
            web experience.
          </p>
        </section>
      </main>

     
      <footer
        style={{
          padding: "24px 20px",
          textAlign: "center",
          backgroundColor: "#0B5D8C",
          color: "#FFFFFF",
        }}
      >
        <p>© 2026 Pangasinan Heritage Digital Showcase</p>
      </footer>
    </>
  );
}