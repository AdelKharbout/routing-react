import {LoaderFunction, useLoaderData} from "react-router-dom";
import '../assets/ProductDetails.css';
import {Product} from "./ProductList.tsx";

const loader: LoaderFunction = function getData({params}) {
    const {productId} = params;
    return fetch(`http://localhost:3000/products/${productId}`);

}

export default function ProductDetails() {
    const product: Product = useLoaderData() as Product;

    return (
        <>
            <h1 className={"product-details-container"}>ProductDetails</h1>
            <p className={"product-details-content"}>ProductDetails for Product {product.id}</p>
            <p> ProductDetails for Product {product.name}</p>
        </>
    )
}

ProductDetails.loader = loader;
