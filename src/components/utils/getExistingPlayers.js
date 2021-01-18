export function getExistingPlayer1() {
    const player = localStorage.getItem("player1");
   
    if(!player) {
        return [];
    }else {
        return JSON.parse(player);
    } 
}

export function getExistingPlayer2() {
   
    const player = localStorage.getItem("player2");

     if(!player) {
        return [];
    }else {
        return JSON.parse(player);
    }
}