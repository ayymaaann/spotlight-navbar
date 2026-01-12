const nav = document.querySelector(".nav");
const items = document.querySelectorAll(".nav-item");
const spotlight = document.querySelector(".spotlight");

function moveSpotlight(target) {
  if (!target) return;

  const iconRect = target.getBoundingClientRect();
  const navRect = nav.getBoundingClientRect();

  const centerX =
    iconRect.left -
    navRect.left +
    iconRect.width / 2 -
    spotlight.offsetWidth / 2;

  spotlight.style.left = `${centerX}px`;
}

items.forEach(item => {
  item.addEventListener("click", () => {
    items.forEach(i => i.classList.remove("active"));
    item.classList.add("active");
    moveSpotlight(item);
  });
});

 
moveSpotlight(document.querySelector(".nav-item.active"));
