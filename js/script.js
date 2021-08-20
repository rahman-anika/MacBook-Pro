// Extra Memory Cost 

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


// Extra Storage Cost 

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

// Delivery Charge 

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

// Total Cost & Grand Total Cost

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
    const grandTotal = document.getElementById('grand-total-price');


    const totalCostAmount = bestPriceAmount + memoryCostAmount + storageCostAmount + deliveryCostAmount;

    totalCost.innerText = totalCostAmount;
    grandTotal.innerText = totalCostAmount;

}


// Promo Code and Grand Total Cost 

document.getElementById('apply-promo-button').addEventListener('click', function () {
    const promoCode = document.getElementById('promo-code');
    if (promoCode.value == 'stevekaku') {
        const grandTotal = document.getElementById('grand-total-price');
        grandTotalAmount = parseFloat(grandTotal.innerText);
        grandTotalAmount = grandTotalAmount - (grandTotalAmount * 0.20);
        grandTotal.innerText = grandTotalAmount;
        promoCode.value = '';

    }

    else {
        console.log('Promo code is not valid');

    }

});


// Extra Memory Cost

// document.getElementById('memory-8gb').addEventListener('click', function () {
//     const extraMemoryCostField = document.getElementById('extra-memory-cost');
//     extraMemoryCostField.innerText = 0;

// });

// document.getElementById('memory-16gb').addEventListener('click', function () {
//     const extraMemoryCostField = document.getElementById('extra-memory-cost');
//     extraMemoryCostField.innerText = 180;

// });

// Extra Storage Cost 

// document.getElementById('storage-256gb').addEventListener('click', function () {
//     const extraMemoryCostField = document.getElementById('extra-storage-cost');
//     extraMemoryCostField.innerText = 0;

// });


// document.getElementById('storage-512gb').addEventListener('click', function () {
//     const extraMemoryCostField = document.getElementById('extra-storage-cost');
//     extraMemoryCostField.innerText = 100;

// });


// document.getElementById('storage-1tb').addEventListener('click', function () {
//     const extraMemoryCostField = document.getElementById('extra-storage-cost');
//     extraMemoryCostField.innerText = 180;

// });


// Delivery Charge 

// document.getElementById('free-delivery').addEventListener('click', function () {
//     const extraMemoryCostField = document.getElementById('delivery-charge');
//     extraMemoryCostField.innerText = 0;

// });


// document.getElementById('charged-delivery').addEventListener('click', function () {
//     const extraMemoryCostField = document.getElementById('delivery-charge');
//     extraMemoryCostField.innerText = 20;

// });


