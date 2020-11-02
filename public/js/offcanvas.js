const init = () => {
    const menu = document.getElementById("offcanvas-usage")

    UIkit.offcanvas(menu).hide();
}

init();

document.getElementById("hamburger").addEventListener("click", function() {
    const menu = document.getElementById("offcanvas-usage")
    const overlay = document.getElementById("titleOverlay")
    UIkit.offcanvas(overlay).toggle();
    UIkit.offcanvas(menu).toggle();
  });
 
