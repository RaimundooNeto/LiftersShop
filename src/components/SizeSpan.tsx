interface SizeSpanProps {
    size: string;
}

export function SizeSpan({size}: SizeSpanProps) {
    
    const style = {
        width: '35px', 
        height: '35px', 
        cursor: 'pointer'
    }

    return (
        <span 
            className="border border-1 border-dark-subtle rounded d-flex justify-content-center align-items-center" 
            style={style}>
                {size}
        </span>
    )
}