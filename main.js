// Your job is to create an object that represents a financial advisor and has the following properties and methods.

// 1---Company (enumerable, writable, property)
// 2---Specialty (enumerable, writable, property)
// 3---Name (enumerable, property)
// 4---Portfolio (non-enumerable, property) - Should display the stocks the advisor currently holds
// 5---Worth (non-enumerable, method)
// 6---Purchase (non-enumerable, method) - This method takes a stock ticker symbol, a quantity, and a price as arguments
// 7---Sell (non-enumerable, method) - This method takes a stock ticker symbol, a quantity, and a price as arguments

// When sell() or purchase() are invoked, then the stock portfolio should be modified accordingly. Start off with making portfolio property an array that holds transactions.

// When you invoke the worth() method, it should look at every transaction and calculate the advisor's net worth.

//------------------------------------------------------------------------------------------------

const stocksObject = {
    apple: {
        name: "APPL",
        shares: 100,
        price: 200,
        purchased: true,
        sold: false, 
        valutation: shares * price
    },
    nike: {
        name: "NKE",
        shares: 150,
        price: 75,
        purchased: false,
        sold: true,
        valutation: shares * price
    },
    disney: {
        name: "DIS",
        shares: 100,
        price: 105,
        purchased: false,
        sold: true,
        valutation: shares * price
    },
    facebook: {
        name: "FB",
        shares: 150,
        price: 190,
        purchased: false,
        sold: true,
        valutation: shares * price
    },
    twitter: {
        name: "TWTR",
        shares: 100,
        value: 45,
        purchased: true,
        sold: false,
        valutation = shares * price
    }
}

const PortfolioCardiB = Object.create({}, {
    company: {
        value: "Atlantic Records",
        enumerable: true,
        writable: true
    },
    specialty: {
        value: "Rapper",
        enumerable: true,
        writable: true
    },
    firstName: {
        value: "Becalis",
        enumerable: true
    },
    lastName: {
        value: "Almanzar",
        enumerable: true
    },
    alias: {
        value: "Cardi B",
        enumerable: true,
        writable: true
    },
    portfolio: {
        value: [apple, nike, disney, facebook, twitter]
    },
    worth: {
        value: function () {
            let netWorth = this.portfolio
            let dollarAmount = 0
            netWorth.forEach(stocksObject => {
                dollarAmount += stockObject.valuation
            })
            return dollarAmount
        }
    },
    sell: {
        value: function(name, shares, price) {
            let sellvalue = this.portfolio.push(
            let dollarAmount = 0
            sellvalue.forEach(stocksObject => {
                dollarAmount
            })
        {
        name: name,
        shares: shares,
        price: price,
        sold: true
                }
            )
        },
    purchase: {
        value: function (name, shares, price) {
            this.portfolio.push(
        {
        name: name,
        shares: shares,
        price: price,
        purchased: true
        }
        )
    }
    }
