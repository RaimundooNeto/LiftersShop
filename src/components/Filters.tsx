import { CheckBox } from "./Checkbox";
import { ColorCircle } from "./ColorCircle";

const categories = [
    { id: 'jackets', label: 'Jackets' },
    { id: 'fleece', label: 'Fleece' },
    { id: 'sweatshirtsAndHoodies', label: 'Sweatshirts & Hoodies' },
    { id: 'shirts', label: 'Shirts' },
    { id: 't-shirts', label: 'T-shirts' },
    { id: 'pantsAndJeans', label: 'Pants & Jeans' },
];

const colors = [
    '#DF9167', '#7B61FF', '#219653', '#2F80ED', '#EB5757',
    '#56CCF2', '#4F4F4F', '#BB6BD9', '#F2F2F2', '#6FCF97'
];

export function Filters() {
    return (
        <div>
            <div className="d-flex align-items-center mb-3">
                <h4>Filters</h4>
                <button type="button" className="btn btn-link">Clear filters</button>
            </div>
            <div className="mb-4">
                <h6>Categories</h6>
                {categories.map(category => {
                    return <CheckBox key={category.id} id={category.id} label={category.label} />
                })}
            </div>
            <div>
                <h6 className="mb-2">Color</h6>
                <div className="container">
                    {Array.from({ length: Math.ceil(colors.length / 5) }, (_, rowIndex) => (
                        <div key={rowIndex} className="row">
                            {colors.slice(rowIndex * 5, (rowIndex + 1) * 5).map(color => (
                                <ColorCircle key={color} color={color} size="30px" />
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}