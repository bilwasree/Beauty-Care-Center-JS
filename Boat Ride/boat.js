// var seater2 = getElementById("2s")
// var seater4 = getElementById("4s")
// var seater8 = getElementById("2s")
// var seater15 = getElementById("2s")

// function calculateBoatCount(btype, noOfPersons) {
//     if (btype === "4 Seater Boat") {
//         let boatCount = Math.floor(noOfPersons / 4); // Calculate the quotient
//         if (noOfPersons % 4 > 0) {
//             boatCount += 1; // Add 1 if there's a remainder
//         }
//         return boatCount;
//     } else {
//         // Handle other boat types here if necessary
//         return 0; // Return 0 for other boat types for now
//     }
// }

// // Example usage:
// console.log(calculateBoatCount("4 Seater Boat", 10)); // Output 3





function personCount(event) {
    let noOfPersons = parseInt(document.getElementById("noOfPersons").value);
    let seatCount = parseInt(document.getElementById("seatCount").value);
    let duration = parseInt(document.getElementById("duration").value);

    let boatCount = 0;
    const Charges = {
        2: 240,
        4: 260,
        8: 560,
        15: 990
    };

    if ((noOfPersons % seatCount === 0) && (noOfPersons !== 0) && (duration !== 0)) {
        boatCount = parseInt(noOfPersons / seatCount);
    } else {
        boatCount = parseInt(noOfPersons / seatCount) + 1;
    }

    if ((noOfPersons === 0) || (duration === 0)) {
        window.alert("noOfPersons and duration fields can't be empty");
    } else {
        let boatPrice = boatCount * Charges[seatCount];
        let totalBill = boatPrice * duration;
        document.getElementById('total').innerHTML = `You have been allotted ${boatCount}. Total Amount will be ${totalBill}`;
    }
}