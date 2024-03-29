export async function getCategories() {
  const data = await fetch('https://api.mercadolibre.com/sites/MLB/categories');
  const info = await data.json();

  return info;
}

export async function getProductsFromCategoryAndQuery(category, query) {
  const data = await fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${category}&q=${query}`);
  const info = await data.json();
  return info;
}

export async function getItemById(id) {
  const data = await fetch(`https://api.mercadolibre.com/items/${id}`);
  const info = await data.json();
  return info;
}
