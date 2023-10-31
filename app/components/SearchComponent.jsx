import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const SearchComponent = () => {
  const [query, setQuery] = useState("");
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push(`../pages/search?q=${query}`);
  };

  return (
    <div className="mm-headerInput">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search ..."
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default SearchComponent;