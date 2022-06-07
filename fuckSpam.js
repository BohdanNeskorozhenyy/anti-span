let orders = localStorage.getItem("ordersOfCustomer");

document.addEventListener("submit", (e) => {
  orders >= 2 && e.preventDefault();
  localStorage.setItem("ordersOfCustomer", Number(orders) + 1);
});
