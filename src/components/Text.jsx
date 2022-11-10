export default function Text(props){
    return (
        <div className="container">
            <h1>{props.titulo}</h1>
            <h3>{props.subtitulo}</h3>
            <p>
                {props.mitexto}
            </p>
            <p>El resultado es: {props.valor1 * props.valor2}</p>
        </div>
    );
}