export const showNumber = (event) => {
  const targetCell = event.target;
  if (targetCell.className === "hidden") {
    targetCell.className = "visible";
  } else {
    targetCell.className = "hidden";
  }
};
