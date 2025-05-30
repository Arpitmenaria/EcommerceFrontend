const fetchProducts = async (category) => {
    try {
      const response = await fetch(`http://localhost:5000/api/products?category=${category}`);
      if (!response.ok) {
        throw new Error("Failed to fetch products");
      }
      const data = await response.json();
      return data; // Returns the fetched product list
    } catch (error) {
      console.error("Error fetching products:", error);
      return [];
    }
};

export default fetchProducts;
