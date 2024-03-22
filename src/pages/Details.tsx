import { useNavigate } from "react-router-dom";

import { ColorCircle } from "../components/ColorCircle";
import { SizeSpan } from "../components/SizeSpan";
import { useProduct } from "../hooks/useProduct";

export function Details() {
    const { selectedProduct } = useProduct();

    const navigate = useNavigate();

    const handleBack = () => {
        navigate('/');
    };

    if (!selectedProduct) {
        return <div>Nenhum produto selecionado</div>;
    }

    return (
        <div className="container my-5">
            <div className="row">
                <div className="col-md-6">
                    <div className="container">
                        {Array.from({ length: Math.ceil(selectedProduct.fotos.length / 2) }, (_, rowIndex) => (
                            <div key={rowIndex} className="row">
                                {selectedProduct.fotos.slice(rowIndex * 2, (rowIndex + 1) * 2).map(foto => (
                                    <img key={foto.url} src={foto.url} className="img-thumbnail mx-2 mt-3 p-0" alt={`Thumbnail ${foto.url}`} style={{ width: '300px', height: '300px' }} />
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
                <div className="col-md-4 ms-5 mt-2">
                    <h1 className="product-title">{selectedProduct.titulo}</h1>
                    <h5 className="mb-4">{selectedProduct.valor}</h5>
                    <p className="product-description mb-4">{selectedProduct.descricao}</p>
                    <div className="color-options mb-4">
                        <h5>Color</h5>
                        <div className="d-flex">
                            {selectedProduct.cores.map(color => {
                                return <ColorCircle key={color.codigo} color={color.codigo != '#0000' ? color.codigo : '#000000'} size="40px" />
                            })}
                        </div>
                    </div>
                    <div className="size-options">
                        <h5>Size</h5>
                        <div className="d-flex mb-5">
                            {selectedProduct.tamanhos.map((size) => {
                                return (
                                    <div className="me-3">
                                        <SizeSpan key={size} size={size} />
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                    <div className="d-flex justify-content-between">
                        <button type="button" className="btn btn-dark add-to-bag-btn" style={{width: 300}}>
                            <i className="bi bi-bag me-3"></i>
                            Add to bag
                        </button>
                        <button type="button" className="btn btn-secondary" style={{width: 100}} onClick={handleBack}>Back</button>
                    </div>
                </div>
            </div>
        </div>
    );
}