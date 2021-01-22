//Problem 1 : solving kilometerToMeter.

function kilometerToMeter(kilometer) {
    var meter = kilometer * 1000;
    return meter;
}

var convert = kilometerToMeter(112.52);
console.log(convert);




//Problem 2 : solving budgetCalculator.

function budgetCalculator(watch, phone, laptop) {
    var watchNumber = watch * 10;
    var phoneNumber = phone * 20;
    var laptopNumber = laptop * 30;
    var totalNumber = watchNumber + phoneNumber + laptopNumber ;
    return totalNumber;
}

var totalPrice = budgetCalculator(50, 100, 500);
console.log(totalPrice);




//Problem 3 : solving hotelCost.

function hotelCost(daysSpent) {
    var cost = 0;
    if (daysSpent <= 10) {
        cost = daysSpent * 100;
    } else if (daysSpent <= 20) {
        var firstCost = 10 * 100;
        var remaining = daysSpent - 10;
        var secondCost = remaining * 80;
        cost = firstCost + secondCost;
    } else {
        var firstCost = 10 * 100;
        var secondCost =10 * 80;
        var remaining = daysSpent - 20;
        var thirdCost = remaining * 50;
        cost = firstCost + secondCost + thirdCost;
    }
    return cost;
}

var totalCost = hotelCost(27);
console.log(totalCost);




//Problem 4 : solving megaFriend.

var names = ['Mohammad', 'Eusha', 'Showaib', 'Azam', 'Afroza'];

function megaFriend(names) {
    var megaName = names[0];
    for (var i = 0; i < names.length; i++) {
        if (names[i].length > megaName.length) {
            megaName = names[i];
        }
        
    }
    return megaName;
}

console.log(megaFriend(names));



//Finished...