export const showNumber = (event) => {
  const targetCell = event.target;
  if (targetCell.nodeName === "TD" && targetCell.className === "hidden") {
    targetCell.className = "visible";
    event.stopPropagation();
  } else if (
    targetCell.nodeName === "TD" &&
    targetCell.className === "visible"
  ) {
    targetCell.className = "hidden";
  }
};
