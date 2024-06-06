let containerRow = document.getElementById("containerRow");

function makeGrid(numRows, numCols){
    for(let i=0; i < numRows; i++){
        let row = document.createElement("div");
        containerRow.appendChild(row).className = "row";
        for(let i=0; i < numCols; i++){
            let col = document.createElement("div");
            row.appendChild(col).className = "column";
        }
    }
}

/*row.addEventListener("mouseover", event => {
    event.target.style.backgroundColor = "royalblue";
})

col.addEventListener("mouseover", event => {
    event.target.style.backgroundColor = "royalblue";
})

/*setTimeout(() => {
    col.removeEventListener("mouseover",event => {
        event.target.style.backgroundColor = "royalblue";
    } )
}, 2000);*/

const btn = document.getElementById("button");

btn.addEventListener("click",  ()=> {
    let size = prompt("How many squares per side should the grid have?:");
    makeGrid(size, size);
    let rows = document.getElementsByClassName("row");
});