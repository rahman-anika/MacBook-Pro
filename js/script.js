
// Extra Memory Cost Calculation

function memoryCost(memoryGB) {

    const memory = document.getElementById('memory-' + memoryGB);
    const extraMemoryCostField = document.getElementById('extra-memory-cost');

    if (memoryGB == '8gb') {
        extraMemoryCostField.innerText = 0;

    }

    else if (memoryGB == '16gb') {
        extraMemoryCostField.innerText = 180;

    }


    calculateTotalCost();

}


// Extra Storage Cost Calculation

function storageCost(storageGB) {

    const storage = document.getElementById('storage-' + storageGB);
    const extraStorageCostField = document.getElementById('extra-storage-cost');


    if (storageGB == '256gb') {
        extraStorageCostField.innerText = 0;
    }


    else if (storageGB == '512gb') {
        extraStorageCostField.innerText = 100;
    }


    else if (storageGB == '1tb') {
        extraStorageCostField.innerText = 180;
    }


    calculateTotalCost();

}

// Delivery Charge Calculation

function deliveryCharge(isAvailable) {

    const extraDeliveryChargeField = document.getElementById('delivery-charge');

    if (isAvailable == true) {
        extraDeliveryChargeField.innerText = 20;

    }

    else {
        extraDeliveryChargeField.innerText = 0;

    }

    calculateTotalCost();

}

// Total Cost Calculation

function calculateTotalCost() {

    const bestPrice = document.getElementById('best-price');
    const bestPriceAmount = parseFloat(bestPrice.innerText);

    const memoryCost = document.getElementById('extra-memory-cost');
    const memoryCostAmount = parseFloat(memoryCost.innerText);

    const storageCost = document.getElementById('extra-storage-cost');
    const storageCostAmount = parseFloat(storageCost.innerText);


    const deliveryCost = document.getElementById('delivery-charge');
    const deliveryCostAmount = parseFloat(deliveryCost.innerText);


    const totalCost = document.getElementById('total-price');
    // const grandTotal = document.getElementById('grand-total-price');


    const totalCostAmount = bestPriceAmount + memoryCostAmount + storageCostAmount + deliveryCostAmount;

    totalCost.innerText = totalCostAmount;
    grandTotalCost(totalCostAmount);
    // grandTotal.innerText = totalCostAmount;

}



//Grand Total Cost Calculation

function grandTotalCost(amount) {
    const grandTotal = document.getElementById('grand-total-price');
    grandTotal.innerText = amount;
    return parseFloat(grandTotal.innerText);

}


// Promo Code and Grand Total Cost Calculation

document.getElementById('apply-promo-button').addEventListener('click', function () {
    const promoCode = document.getElementById('promo-code');
    if (promoCode.value == 'stevekaku') {
        const total = document.getElementById('total-price');
        const totalAmount = parseFloat(total.innerText);
        const grandTotal = document.getElementById('grand-total-price');
        let grandTotalAmount = parseFloat(grandTotal.innerText);
        grandTotalAmount = totalAmount - (totalAmount * 0.20);
        grandTotal.innerText = grandTotalAmount;
        promoCode.value = '';

    }

    else {
        // console.log('Promo code is not valid');
        alert("Promo code is not valid!");
        promoCode.value = '';

    }

});


