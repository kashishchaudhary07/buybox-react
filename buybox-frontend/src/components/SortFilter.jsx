function SortFilter({ sortBy, setSortBy }) {
  return (
    <select
      value={sortBy}
      onChange={(e) => setSortBy(e.target.value)}
    >
      <option value="">Sort Products</option>

      <option value="low">
        Price: Low to High
      </option>

      <option value="high">
        Price: High to Low
      </option>

      <option value="rating">
        Rating
      </option>
    </select>
  );
}

export default SortFilter;