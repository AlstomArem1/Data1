import Box from "./Box";
import BoxGame from "./BoxGame";
import { useState } from "react";
export default function App1() {
    const [check, setcheck] = useState(true);
    const handle_alert = () => {
        alert("I see you in the everning, Alstom");
    };
    const [board, setboard] = useState(["", "", "", "", "", "", "", "", ""]);
    const handle_play = (index) => {
        let newBoard = [...board];
        newBoard[index] = show ? "X" : "O";
        setboard(newBoard);
        setshow(!show);
    };
    const [show,setshow] = useState(true);
    return (
        <div>
            {check ? <Box name={"Alstom"} old={21} handle_alert={handle_alert} /> : ""}
            <button onClick={() => setcheck(!check)}>Handle_toggle</button>
            <div class="game">
                {board.map((value, key) => {
                        return (
                            <BoxGame 
                            value={board[key]} 
                            handle_play={handle_play} 
                            index={key}
                            key={key}/>
                        )
                    })};
            </div>
        </div>
    );
}