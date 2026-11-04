// export default function Page() {
//     return (
//         <div>
//             <h1>Search Page</h1>
//         </div>
//     );
// }

const Page = ({ params }) => {
    return (
        <>
            <h1>Search Page for : {params.keyword}</h1>
            <p>This is the search page.</p>
        </>
    );
};

export default Page;