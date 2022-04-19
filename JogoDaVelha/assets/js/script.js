const cellElements = document.querySelectorAll("[data-cell]");

let isCircleTurn;

const placeMark = (cell, classToAdd) => {
    cell.classList.add(classToAdd);
}

const handleClick = (e) => {
    const cell = e.target;
    const classToAdd = isCircleTurn ? "circle" : "x";
    placeMark(cell,classToAdd)
}

for (const cell of cellElements) {
    cell.addEventListener("click", handleClick, { once: true });
}