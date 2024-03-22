import { ColorCircle } from "./ColorCircle";
import { SizeSpan } from "./SizeSpan";

export interface ProductProps {
    titulo: string;
    valor: string;
    descricao?: string;
    categoria: string;
    cores: Array<{
        nome: string;
        codigo: string;
    }>;
    tamanhos: string[];
    fotos: Array<{
        url: string;
        capa: boolean;
    }>;
}

export function Product({titulo, valor, categoria, cores, tamanhos, fotos}: ProductProps) {

    const coverPhoto = fotos.find(photograph => photograph.capa) || fotos[0];

    return (
        <div className="card p-0" style={{ width: '18rem' }}>
            <img src={coverPhoto.url} className="card-img-top" alt="..." />
            <div className="card-body">
                <div className="d-flex justify-content-between align-items-center mb-2">
                    <h5 className="card-title">{titulo}</h5>
                    <h3>{valor}</h3>
                </div>
                <div className="d-flex justify-content-between mb-2">
                    {tamanhos.map((size) => {
                        return <SizeSpan key={size} size={size} />
                    })}
                </div>
                <div className="d-flex justify-content-between align-items-center mb-2">
                    <h6 className="m-0">{categoria}</h6>
                    <div className="d-flex">
                        {cores.map(color => {
                            return <ColorCircle key={color.codigo} color={color.codigo != '#0000' ? color.codigo : '#000000'} size="20px" />
                        })}
                    </div>
                </div>
                <div className="d-grid">
                    <button className="btn btn-primary" type="button">View details</button>
                </div>
            </div>
        </div>
    )
}