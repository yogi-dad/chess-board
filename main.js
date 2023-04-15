const chessContainer = document.querySelector(".chess");
const rows = +chessContainer.getAttribute('-data-rows');
const cols = +chessContainer.getAttribute('-data-cols');
for(let i=0;i<rows;i++){
    const row = document.createElement("div");
    row.setAttribute('class','row');
    for(let j=0;j<cols;j++){
        const column = document.createElement("div");
        column.setAttribute('class','column')
        row.appendChild(column);
    }
    chessContainer.appendChild(row);
}