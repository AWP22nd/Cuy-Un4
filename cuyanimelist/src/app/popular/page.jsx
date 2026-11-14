"use client"

import React, { useEffect, useState } from 'react'
import HeaderMenu from '@/components/Utilities/HeaderMenu'
import Pagination from '@/components/Utilities/Pagination'
import AnimeList from '@/components/AnimeList'
import { getAnimeResponse } from '@/libs/api-libs'

const Page = () => {
  const [page, setPage] = useState(1)
  const [topAnime, setTopAnime] = useState({ pagination: { last_visible_page: 1 } })

  const fetchData = async (page) => {

    const popularAnime = await getAnimeResponse("top/anime", `page=${page}`)
    setTopAnime(popularAnime)
  }

  useEffect(() => {
    fetchData(page)
  }, [page])

  return (
    <>
    <HeaderMenu title={`Popular Anime #${page}`} />
    <AnimeList api={topAnime} />
    <Pagination page={page} lastPage={topAnime?.pagination?.last_visible_page ?? 1} setPage={setPage} />
    </>
  )
}

export default Page
