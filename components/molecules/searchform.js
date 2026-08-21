"use client";

import { useState } from "react";
import Button from "../atoms/button";

export default function SearchForm({ onSearch }) {
  const [query, setQuery] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    onSearch(query);
  }

  return (
    <form
      onSubmit={handleSubmit}
      role="search"
      style={{
        display: "flex",
        gap: "8px",
        width: "100%",
        maxWidth: "500px",
        margin: "0 auto",
      }}
    >
      <input
        id="heritage-search"
        type="search"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        placeholder="Search heritage sites..."
        style={{
          flex: 1,
          minWidth: 0,
          padding: "11px 14px",
          border: "1px solid #D1D5DB",
          borderRadius: "8px",
          fontSize: "16px",
        }}
      />

      <Button type="submit">Search</Button>
    </form>
  );
}