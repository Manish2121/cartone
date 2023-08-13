
const sizeOptions = ["S", "M", "L", "XL", "XXL"];
const colorOptions = ["Black", "Safron", "navy blue", "purple"];
const prices = {
    pair1: 195.00,
    pair2: 345.00,
    pair3: 528.00,
};


function generateOptions(options) {
    let innerHTML = '';
    for (let option of options) {
        innerHTML += `<option value="${option}">${option}</option>`;
    }
    return innerHTML;
}

let selectedDiscount = 0;
function calculateTotal(x) {
    selectedDiscount = x || 0;
    const selectedOption = document.querySelector('input[name="productOption"]:checked').value;
    let total = 0;
    let price = prices[selectedOption];
    total = price * x;
    let formattedTotal = total.toFixed(2);
    document.getElementById("totalPrice").innerHTML = `Total : DKK ${formattedTotal}`;
}


