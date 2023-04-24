function Box(props) {
    return (
        <div onClick={props.handle_alert}>
            <h1>
                I'am {props.name} and years old: {props.old}
            </h1>
        </div>
    );
}
export default Box;