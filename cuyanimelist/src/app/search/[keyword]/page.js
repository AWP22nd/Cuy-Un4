const Page = async ({ params }) => {
    const resolvedParams = await params;

    console.log(resolvedParams);

    return (
        <>
            <h1>Search Page for : {resolvedParams.keyword}</h1>
            <p>This is the search page.</p>
        </>
    );
};

export default Page;
