import {LoaderFunction, useParams} from "react-router-dom";
import '../assets/ProductDetails.css';

const loader: LoaderFunction = async function getData() {
    return fetch('http://localhost:3000/products')

}
export default function ProductDetails() {

    const {productId} = useParams();

    return (
        <>
            <h1 className={"product-details-container"}>ProductDetails</h1>
            <p className={"product-details-content"}>ProductDetails for Product {productId}</p>
        </>

    )
}

ProductDetails.loader = loader;
