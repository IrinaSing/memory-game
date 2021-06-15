export const openNumber = (event) => {
  const targetCell = event.target;
  if (targetCell.nodeName === "TD" && targetCell.dataset.selected === "no") {
    targetCell.dataset.selected = "yes";
    targetCell.className = "visible";
  } else if (
    targetCell.nodeName === "TD" &&
    targetCell.className === "visible"
  ) {
    targetCell.dataset.selected = "no";
    targetCell.className = "hidden";
  }
};
