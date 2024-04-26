import {Link, LoaderFunction, useLoaderData} from "react-router-dom";

export type Product = {
    id: number,
    name: string,
}
const loader: LoaderFunction = async function getData() {
    return fetch('http://localhost:3000/products')

}

export default function ProductList() {
    const productList: Product[] = useLoaderData() as Product[];

    return (
        <div>
            <h1>Product List</h1>
            <ul>
                {productList.map(product => (
                    <li key={product.id}>
                        <Link to={`/products/${product.id}`}>
                            {product.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

ProductList.loader = loader;