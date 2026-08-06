import { useState } from "react";
import Hero from "../components/Hero";
import Brands from "../components/Brands";
import ProductCard from "../components/ProductCard";
import SearchBar from "../components/SearchBar";
import SortFilter from "../components/SortFilter";
import products from "../data/products";

function Home({
  setCartItems,
  wishlistItems,
  setWishlistItems,
}) {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [priceFilter, setPriceFilter] = useState("All");
  const [sortBy, setSortBy] = useState("");

  const filteredProducts = products.filter((product) => {
    const matchSearch = product.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchCategory =
      category === "All" ||
      product.name
        .toLowerCase()
        .includes(category.toLowerCase());

    let matchPrice = true;

    if (priceFilter === "Below3000") {
      matchPrice = product.price < 3000;
    } else if (priceFilter === "3000to3500") {
      matchPrice =
        product.price >= 3000 &&
        product.price <= 3500;
    } else if (priceFilter === "Above3500") {
      matchPrice = product.price > 3500;
    }

    return (
      matchSearch &&
      matchCategory &&
      matchPrice
    );
  });

  const sortedProducts = [...filteredProducts];

  if (sortBy === "low") {
    sortedProducts.sort((a, b) => a.price - b.price);
  }

  if (sortBy === "high") {
    sortedProducts.sort((a, b) => b.price - a.price);
  }

  if (sortBy === "rating") {
    sortedProducts.sort((a, b) => b.rating - a.rating);
  }

  return (
    <div>

      {/* Hero Banner */}
      <Hero />

      {/* Featured Brands */}
      <Brands />

      {/* Products Section */}
      <div className="hero">

        <h2>🛒 Shop Our Products</h2>

        <SearchBar
          search={search}
          setSearch={setSearch}
        />

        <br />

        <SortFilter
          sortBy={sortBy}
          setSortBy={setSortBy}
        />

        <br />
        <br />

        <div className="category-buttons">

          <button onClick={() => setCategory("All")}>
            All
          </button>

          <button onClick={() => setCategory("Nike")}>
            Nike
          </button>

          <button onClick={() => setCategory("Adidas")}>
            Adidas
          </button>

          <button onClick={() => setCategory("Puma")}>
            Puma
          </button>

          <button onClick={() => setCategory("Reebok")}>
            Reebok
          </button>

        </div>

        <br />

        <select
          value={priceFilter}
          onChange={(e) =>
            setPriceFilter(e.target.value)
          }
        >
          <option value="All">
            All Prices
          </option>

          <option value="Below3000">
            Below ₹3000
          </option>

          <option value="3000to3500">
            ₹3000 - ₹3500
          </option>

          <option value="Above3500">
            Above ₹3500
          </option>

        </select>

        <br />
        <br />

        <div className="products">

          {sortedProducts.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              name={product.name}
              price={product.price}
              rating={product.rating}
              setCartItems={setCartItems}
              wishlistItems={wishlistItems}
              setWishlistItems={setWishlistItems}
            />
          ))}

        </div>

      </div>

    </div>
  );
}

export default Home;