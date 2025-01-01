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

console.log(buyChocolate(11, "KitKat",2));
