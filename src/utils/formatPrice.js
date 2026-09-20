
function formatPrice(price, digit) {
  return new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", maximumFractionDigits:digit }).format(price);
}

export default formatPrice;
