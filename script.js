let boxes = document.querySelectorAll(".box");
let resbtn = document.querySelector(".res-btn");
let newbtn = document.querySelector(".new-btn");
let msgcontainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO =true;
let count = 0;

let winpattern = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
];

const resetGame = () => {
    turnO = true;
    enableboxes();
    msgcontainer.classList.add("hide");

}



boxes.forEach((box)  => {
    box.addEventListener("click", () => {
        console.log("box was clicked");
        if(turnO){
            box.innerText = "O";
            turnO = false; }
            else{
                box.innerText = "X";
                turnO = true;

            }
            box.disabled = true;
            
    count++;

    let isWinner = checkWinner();

    if (count === 9 && !isWinner) {
      gameDraw();
    }

            
        });
    });


    const gameDraw = () => {
        msg.innerText = `Game was a Draw.`;
        msgcontainer.classList.remove("hide");
        disableboxes();
      };
      


    const disableboxes = () => {
        for( let box of boxes ){
            box.disabled = true;
        }  
     }


     
    const enableboxes = () => {
        for( let box of boxes ){
            box.disabled = false;
            box.innerText = "";
        }  
     }


    const showWinner = (winner) => {
        msg.innerText = `Congratulations , Winner is ${winner}`;
        msgcontainer.classList.remove("hide");
        disableboxes();


    }



    const checkWinner = () => {
        for(pattern of winpattern){
            let pos1Val = boxes[pattern [0]].innerText;
            let pos2Val = boxes[pattern [1]].innerText;
            let pos3Val = boxes[pattern [2]].innerText;

            if(pos1Val != "" && pos2Val != "" && pos3Val != ""){
                if(pos1Val === pos2Val && pos2Val  === pos3Val){
                    console.log("winner",pos1Val);
                    showWinner(pos1Val);
                }
            }
        }
        };

        newbtn.addEventListener("click" ,resetGame);
        resbtn.addEventListener("click" ,resetGame);
    


