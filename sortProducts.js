// testing array
const products = [
    {name: "car", price: 1000},
    {name: "house", price:5000},
    {name:"plane", price:10000},
    {name:"boat", price:20000},
    {name:"yatch", price:1500},
    {name:"Tv", price:10500},
]
// sortProducts
const sortProducts = (items) => {
  return items.sort((a, b) => a.price - b.price)
}
console.log(sortProducts(products));