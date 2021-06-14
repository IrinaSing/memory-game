export const openNumber = (event) => {
  const targetCell = event.target;
  console.log(targetCell);
  if (targetCell.className === "hidden") {
    targetCell.className = "visible";
    targetCell.dataset.selected = "yes";
    event.stopPropagation();
  } else {
    targetCell.className = "hidden";
    targetCell.dataset.selected = "yes";
  }
};
