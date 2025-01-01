let pocketMoney= 200
//Q1. expected output: 
//You can buy 20 kitkat with your pocketmoney
// You can buy 10 dairymilk with your pocketmoney


const buyChocolate = (price, chocolate,quantity) => {
  if (pocketMoney < price) return `you are short on rs ${price-pocketMoney}`
  if(quantity) {
    const remainingMoney = pocketMoney - (quantity * price);
    if (pocketMoney < price*quantity) return `you are short on rs ${price*quantity -pocketMoney}`
    pocketMoney = remainingMoney 
    return `You will have rs ${remainingMoney} remaining.`;
  }
  const _quantity = Math.floor(pocketMoney / price);
  const remainingMoney = pocketMoney - (_quantity * price);
  pocketMoney = remainingMoney 
  return `You can buy ${_quantity} ${chocolate}(s) with your pocket money, and the remaining money is ${remainingMoney}.`;
};

// console.log(buyChocolate(11, "KitKat",2));
//Q2. 
console.log(buyChocolate(10, 'kitkat', 3)) //arguments
console.log(buyChocolate(20, 'dairymilk',4))
//expected output is 
// You have 170 Rs remaining
// You have 90 Rs remaining









// Q3. convert the following syntax to ES6 arrow function

function callMe(){
    return 'hi'
}
>>>>>>> 9ef9261 (add function question3)
