
const getStockColor = (status) => {

    const stockAvailabilityColor = {
        "In Stock": "#16a34a", //green
        "Low Stock": "#ffb900", //yellow
        "Out of Stock": "red"
    }

    return stockAvailabilityColor[status];

}

export default getStockColor;
