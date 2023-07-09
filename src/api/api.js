import axios from "axios";

export const fetchTopStories = async () => {
  const url = "/api/v1/collections/top-story";
  const response = await axios.get(url);
  return response.data.items.slice(0, 7);
};
export const fetchStoryBySlug = async (slug1, slug2) => {
    const url = `/api/v1/stories-by-slug?slug=news/${slug1}/${slug2}`;
    const response = await axios.get(url);
    return response.data.story;
};
export const fetchNewsMain = async () => {
  const url = "/api/v1/collections/news";
  const response = await axios.get(url);
  return response.data.items.slice(0, 10);
}
export const SearchNews = async (slug1) => {
  const url = `/api/v1/search?q=${slug1}`;
  const response = await axios.get(url);
  console.log(response.data.results);
  return response.data.results.stories.slice(0, 10);
}