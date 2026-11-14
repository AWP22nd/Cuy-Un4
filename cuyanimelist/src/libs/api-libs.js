export const getAnimeResponse = async(resource, query) => {
    const url = query
        ? `${process.env.NEXT_PUBLIC_API_BASE_URL}/${resource}?${query}`
        : `${process.env.NEXT_PUBLIC_API_BASE_URL}/${resource}`
    const response = await fetch(url)
    const anime = await response.json()
    return anime
}

export const getNestedAnimeResponse = async(resource, objectProperty) => {
    const response = await getAnimeResponse(resource)
    return response.data.flatMap(item => item.entry)
}