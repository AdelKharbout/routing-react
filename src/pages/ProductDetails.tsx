import {LoaderFunction, useLoaderData} from "react-router-dom";
import '../assets/ProductDetails.css';
import {Product} from "./ProductList.tsx";

const loader: LoaderFunction = function getData({params}) {
    const {productId} = params;
    return fetch(`http://localhost:3000/products/${productId}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to fetch product details');
            }
            return response.json();
        })
        .catch(error => {
            console.error('Error fetching product details:', error);
            throw error;
        });
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
