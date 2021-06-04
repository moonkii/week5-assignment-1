const BASE_URL = 'https://eatgo-customer-api.ahastudio.com';

export async function fetchRegions() {
  const url = `${BASE_URL}/regions`;
  const response = await fetch(url);

  const data = await response.json();

  return data;
}

export async function fetchCategories() {
  const url = `${BASE_URL}/categories`;
  const response = await fetch(url);

  const data = await response.json();

  return data;
}

export async function fetchRestaurants({ region, categoryId }) {
  const url = `${BASE_URL}/restaurants?region=${region}&category=${categoryId}`;
  const response = await fetch(url);

  const data = await response.json();

  return data;
}
