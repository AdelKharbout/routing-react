import {useParams} from "react-router-dom";
import '../assets/ProductDetails.css';
export default function ProductDetails() {
    const {productId} = useParams();

    return (
        <>
            <h1 className={"product-details-container"}>ProductDetails</h1>
            <p className={"product-details-content"}>ProductDetails for Product {productId}</p>
        </>

    )
}
