export const hideNumber = (event) => {
  const targetCell = event.target;
  if (
    targetCell.className === "visible" &&
    targetCell.dataset.selected === "no"
  ) {
    targetCell.className = "hidden";
  }
};
