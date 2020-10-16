require('dotenv').config();

export const fetchTopHeadlines = async () => {
   try {
    const response = await fetch(`${process.env.API_URL}/top-headlines?country=mx&apiKey=${process.env.API_KEY}`);
    const newsTopHeadlines = await response.json();
    return newsTopHeadlines
   } catch (error) {
       console.log(error);
   }
}