function toggleList() {
  const allItems = document.querySelectorAll("#brand-link_item li");
  const button = document.getElementById("toggleButton");

  const isCollapsed = !allItems[5].classList.contains("visible");

  if (isCollapsed) {
    for (let i = 5; i < allItems.length; i++) {
      setTimeout(() => {
        allItems[i].classList.add("visible");
      }, (i - 5) * 100);
    }

    button.textContent = "Thu gọn";

    const totalDelay = (allItems.length - 5) * 100;

    setTimeout(() => {
      requestAnimationFrame(() => {
        window.scrollTo({
          top: document.body.scrollHeight,
          behavior: "smooth"
        });
      });
    }, totalDelay + 100); 
  } else {
    for (let i = 5; i < allItems.length; i++) {
      allItems[i].classList.remove("visible");
    }

    button.textContent = "Xem thêm sản phẩm";

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }
}
