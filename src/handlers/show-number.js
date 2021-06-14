export const showNumber = (event) => {
  const targetCell = event.target;
  if (targetCell.className === "hidden") {
    targetCell.className = "visible";
    event.stopPropagation();
  } else {
    targetCell.className = "hidden";
  }
};
