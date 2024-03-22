interface CheckBoxProps {
    id: string;
    label: string;
}

export function CheckBox({id, label}: CheckBoxProps) {
    return (
        <div className="form-check mb-2">
            <input className="form-check-input" type="checkbox" value="" id={id} />
            <label className="form-check-label" htmlFor={id}>
                {label}
            </label>
        </div>
    )
}