import FeaturedNews from "./components/main_news";
import { getFeaturedNews } from "./api/news_data";

export default async function Home() {
  const newsData = await getFeaturedNews();
  return (
    <main>
      <FeaturedNews news={newsData}/>
    </main>
  );
}
