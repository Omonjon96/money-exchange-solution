// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    // Return an object containing the minimum number of coins needed to make change
    var ExchangeCoins = {
        H: "",
        Q: "",
        D: "",
        N: "",
        P: ""
    };

    
    var nickels = 5;
    var dimes = 10;
    var quarter = 25;
    var half_dollar = 50;
    var emptyObject = {};
    var nextObject = {error: "You are rich, my friend! We don't have so much coins for exchange"};

    switch(true){
        case 1:
            if(currency<=0){
                return emptyObject;
            }

        case 2:
            if(currency>10000){
                return nextObject;
            }

    }


    var remainCounter = currency % half_dollar;
    var newH = currency/half_dollar;
    ExchangeCoins.H = parseInt(newH);
    var newQ = remainCounter/quarter;
    ExchangeCoins.Q = parseInt(newQ);
    remainCounter %= quarter;
    var newD = remainCounter/dimes;
    ExchangeCoins.D = parseInt(newD);
    remainCounter %= dimes;
    var newN = remainCounter/nickels;
    ExchangeCoins.N = parseInt(newN);
    remainCounter %= nickels;
    var newP = remainCounter;
    ExchangeCoins.P = parseInt(newP);

    var resultObject = {};
    for (keyValue in ExchangeCoins){
        var resultValue = ExchangeCoins[keyValue];
        if(resultValue > 0) {
            resultObject = {... resultObject, [keyValue]: resultValue}
        }
    }
    return resultObject;
}
