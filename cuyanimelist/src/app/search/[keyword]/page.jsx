import AnimeList from "@/components/AnimeList";
import Header from "@/components/AnimeList/Header";
import { getAnimeResponse } from "@/libs/api-libs";

const Page = async ({ params }) => {
  const { keyword } = await params;
  const decodedKeyword = decodeURI(keyword)
  console.log({decodedKeyword})

  const searchAnime = await getAnimeResponse("anime", `q=${decodedKeyword}`)

  return (
    <>
    {/* Search Results */}
      <section>
        <Header title={`Search results for "${decodedKeyword}"`} />
        <AnimeList api={searchAnime}/>
      </section>
    </>
  );
};

export default Page;
