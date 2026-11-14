import AnimeList from "@/components/AnimeList";
import Header from "@/components/AnimeList/Header";
import { getAnimeResponse, getNestedAnimeResponse, reproduce } from "@/libs/api-libs";

const Page = async () => {

  // const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?limit=10`)
  // const topAnime = await response.json()

  const topAnime = await getAnimeResponse("top/anime", "limit=10")
  let recomAnime = await getNestedAnimeResponse("recommendations/anime", "entry")
  console.log("File page.jsx:12 ~ Page ~recomAnime", recomAnime.length)
  recomAnime = reproduce(recomAnime, 20) 

  return (
    <>
    {/* Most Populer Anime List */}
      <section>
        <Header title="Most Popular Anime" linkHref="/popular" linkTitle="See All" />
        <AnimeList api={topAnime}/>
      </section>
      <section>
        <Header title="Recommendation Anime"/>
        <AnimeList api={recomAnime}/>
      </section>
    </>
  );
};

export default Page;
