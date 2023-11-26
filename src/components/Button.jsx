export default function Button(props) {
    return (
        <button
            onClick={props.onClick}
            style={{ backgroundColor: props.color }}
            className="btn"
        >
            {props.text}
        </button>
    );
}
