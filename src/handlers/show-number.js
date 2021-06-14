export const showNumber = (event) => {
  const targetCell = event.target;
  if (targetCell.className === "hidden") {
    targetCell.className = "visible";
  }

  if (targetCell.className === "visible") {
    targetCell.className = "hidden";
  }
};
