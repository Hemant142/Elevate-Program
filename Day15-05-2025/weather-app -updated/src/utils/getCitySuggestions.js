// src/utils/getCitySuggestions.js
export default async function getCitySuggestions(query) {
  // This is a placeholder. Replace with actual API or logic.
  if (!query) return [];

  return [
    { name: "New York" },
    { name: "London" },
    { name: "Paris" },
    { name: "Tokyo" },
  ].filter(city => city.name.toLowerCase().includes(query.toLowerCase()));
}
