

// Task 1: Create a constructor function for the Account object with properties for accountNumber, balance, and owner.

class Account {
    // like __init__
    constructor(accountNumber, balance, owner) {
        this.accountNumber = accountNumber;
        this.balance = balance;
        this.owner = owner;
    }
    
    displayAccountInfo = () => {
        console.log(`${this.owner}'s account with account number ${this.accountNumber} balance: $${this.balance}`)
    }

    depositMoney = () => {
        let deposit = parseInt(prompt("How much would you like to deposit? Max is $500 per transaction"))
        if (deposit > 500) {
            console.log("Woops! That is over the maximum per transaction. Must be less than $500 per transaction")
        }else{
            this.balance = this.balance + deposit
            console.log(`${this.owner}'s new balance is $${this.balance}`)
        }
    }

    withdrawMoney = () => {
        let withdraw = parseInt(prompt(`How much would you like to withdraw? Must be less than current balance of $${this.balance}`))
        if (withdraw > this.balance) {
            console.log("Insufficient funds :(")
        }else{
            this.balance = this.balance - withdraw
            console.log(`${this.owner}'s new balance is $${this.balance}`)
        }
    }

    compoundInterest = () => {
        let r = .12 // 2% interest
        let t = 5 // calculated for 3 years
        let n = 12 // one year = 12 months
        let postInterest = (this.balance*((1 + r/n)**(n*t)))
        console.log(`${this.owner}'s current balance of $${this.balance} will inflate to $${postInterest.toFixed(2)} after compound interest is applied over ${t} years.`)
    }
}

let joseAccount = new Account(1, 400, "Jose")

// Compound interest formula A = P(1 + r/n) ^ (n*t):
// A = final amount.
// P = initial principal.
// r = interest rate.
// n = number of times applied per time period.
// t = number of time periods.
