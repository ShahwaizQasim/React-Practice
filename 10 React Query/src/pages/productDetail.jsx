import { Link, useParams } from 'react-router';
import { useQuery } from 'react-query'

const fetchProductsDetail = async (id) => {
    let data = await fetch(`https://dummyjson.com/products/${id}`);
    data = await data.json();
    return data;
}

function ProductDetail() {
    let { id } = useParams();
    console.log("id", id);

    const { data, isLoading, isError } = useQuery({
        QueryKey: ['products', id],
        queryFn: () => fetchProductsDetail(id),

    })
    console.log("products", data);

    if (isLoading) return <p>Loading...</p>
    if (isError) return <p>Something Went Wrong</p>

    return (
        <>
           <h1>Product Detail</h1>

        </>
    )
}

export default ProductDetail;
