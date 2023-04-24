export default function BoxGame(props) {
    return (
        <div class="BoxGame" onClick={() => props.handle_play(props.index)}>
            {props.value}
        </div>
    );
}