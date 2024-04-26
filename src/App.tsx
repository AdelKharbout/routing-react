import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Main from "./pages/Main.tsx";
import ProductDetails from "./pages/ProductDetails.tsx";
import ProductList from "./pages/ProductList.tsx";
import ErrorPage from "./pages/ErrorPage.tsx";
import RootLayout from "./components/RootLayout.tsx";


export default function App() {
    const router = createBrowserRouter([
        {
            path: '/',
            errorElement: <ErrorPage/>,
            element: <RootLayout/>,
            children: [
                {
                    index: true,
                    element: <Main/>
                },
                {
                    path: 'products',
                    children: [
                        {
                            index: true,
                            element: <ProductList/>,
                            loader: ProductList.loader,

                        },
                        {
                            path: ':productId',
                            element: <ProductDetails/>,
                            loader: ProductDetails.loader,
                        },
                    ]
                },
            ]
        },
    ]);

    return (
        <>
            <RouterProvider router={router}/>
        </>
    );
}
