
const maxPrice = (products) => {
      return products.map((item)=>item.price).sort((a,b)=> Number(b) - Number(a))[0];

}

export default maxPrice;
