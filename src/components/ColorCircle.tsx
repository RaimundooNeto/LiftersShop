interface ColorCircleProps {
    color: string;
    size: string;
}

export function ColorCircle({color, size}: ColorCircleProps) {

    const style = {
        width: size,
        height: size,
        backgroundColor: color,
        cursor: 'pointer',
        border: '1px solid #C4C4C4'
    }
    
    return (
        <div className="m-1 rounded-circle" style={style}></div>
    )
}