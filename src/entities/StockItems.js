export default class StockItem  {
    constructor ({name, description, quantity, price, category}) {
        this.name = name
        this.id = Math.floor(Math.random() * 10000000)
        this.price = +price
        this.quantity = +quantity
        this.description = description
        this.category = category

        
    }
}