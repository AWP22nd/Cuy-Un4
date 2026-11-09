import AnimeList from "@/components/AnimeList";
import Header from "@/components/AnimeList/Header";

const Page = async () => {

  const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?limit=10`)
  const topAnime = await response.json()

  return (
    <>
    {/* Most Populer Anime List */}
      <section>
        <Header title="Most Popular Anime" linkHref="/popular" linkTitle="See All" />
        <AnimeList api={topAnime}/>
      </section>
    </>
  );
};

export default Page;
