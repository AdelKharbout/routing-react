import { Link } from "react-router-dom";

const productList = [
    { id: 1, name: 'Product 1', description: 'Description of Product 1' },
    { id: 2, name: 'Product 2', description: 'Description of Product 2' },
    { id: 3, name: 'Product 3', description: 'Description of Product 3' },
    { id: 4, name: 'Product 4', description: 'Description of Product 4' },
    { id: 5, name: 'Product 5', description: 'Description of Product 5' }
];
const ProductList = () => {


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

export default ProductList;