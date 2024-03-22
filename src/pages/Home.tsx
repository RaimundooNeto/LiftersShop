import { useEffect, useState } from "react";

import { Filters } from "../components/Filters";
import { Product, ProductProps } from "../components/Product";

export function Home() {
    const [products, setProducts] = useState<ProductProps[]>([]);

    useEffect(() => {
        fetch('https://gist.githubusercontent.com/thiagossampaio/060e82b4801b0841fc683b0ce5efa06d/raw/e3cc555d9c71fd1b1160e20d7b10c083b5abcd61/desafio_front_end')
            .then(response => response.json())
            .then((data: ProductProps[]) => setProducts(data))
            .catch(error => console.error('Houve um erro ao buscar os produtos:', error));
    }, []);

    return (
        <div>
            <div className="container-fluid bg-dark">
                <div className="container text-white p-4">
                    <h1 className="mb-2">Shop Men's</h1>
                    <p>
                        Revamp your style with the latest designer trends in men's<br />
                        clothing or achieve a perfectly curated wardrobe thanks to our<br />
                        line-up of timeless pieces.
                    </p>
                </div>
            </div>
            <div className="container">
                <div className="row mt-5">
                    <div className="col">
                        <Filters />
                    </div>
                    <div className="col-9">
                        <div className="d-flex justify-content-end mb-3">
                            <span>Showing {products.length} products</span>
                        </div>
                        <div className="row">
                            {products.map((product, index) => {
                                return (
                                    <div className="col-12 col-md-4 mb-4" key={index}>
                                        <Product {...product} />
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}