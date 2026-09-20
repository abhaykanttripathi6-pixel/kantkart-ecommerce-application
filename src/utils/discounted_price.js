
const discounted_price = (price, disPercentage) => {
    return price - Math.round((price * disPercentage) / 100);
}

export default discounted_price;