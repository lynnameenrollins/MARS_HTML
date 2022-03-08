 class Sales{
    #item;
    #stock;
    #original;
    #discount;
    #salesPrice;
    #total;
    constructor(item, stock, original, discount, salesPrice, total){
        this.#item = item;
        this.#stock = stock;
        this.#original = original;
        this.#discount = discount;
        this.salesPrice =salesPrice;
        this.total = total
    }

    get item() {
        return this.#item
    }
    set item(item){
    
        this.#item = item;
    }
    get stock() {
        return this.#stock
    }
    set stock(stock){
        //don't really need this because we are catching errors on client side
        //but put it here for reference
        if (stock === 0){
            throw new Error('Employee ID cannot be 0')
        }
        this.#stock = stock;
    }
    get original() {
        return this.#original
    }
    set original(original){
        
        this.#original = original;
    }
    get discount() {
        return this.#discount
    }
    set discount(discount){
        
        this.#discount = discount;
    }
    get salesPrice() {
        return this.#salesPrice
    }
    set salesPrice(salesPrice){
        
        this.#salesPrice = salesPrice;
    }
    get total() {
        return this.#total
    }
    set total(total){
        
        this.#total = total;
    }
    
    
}

    let sales = [
        { item: 'PS4 Pro', stock: 3, original: 399.99 },
        { item: 'Xbox One X', stock: 1, original: 499.99, discount: 0.1 },
        { item: 'Nintendo Switch', stock: 4, original: 299.99 }, 
        { item: 'PS2 Console', stock: 1, original: 299.99, discount: 0.8 }, 
        { item: 'Nintendo 64', stock: 2, original: 199.99, discount: 0.65 } 
    
    ]    
    console.log("Before edits: ")
    console.log(sales)
    for (const key in sales){
        calcSales(sales)
    }
    
    console.log("After edits: ")
    console.log(sales)
    function calcSales (obj)
    {
        let {item, stock, original, discount = 0, salesPrice, total} = sales.pop()
        salesPrice = original - original * discount;
        total = stock*salesPrice;

        // console.log('original price: ' + original)
        // console.log('discount: ' + discount)
        // console.log('salesPrice: ' + salesPrice)
        // console.log('total: ' + total)
        const temp = new Sales(item, stock, original, discount, salesPrice, total)
        // console.log(temp.item)
        // console.log(temp.stock)
        // console.log(temp.original)
        // console.log(temp.discount)
        // console.log(temp.salesPrice)
        // console.log(temp.total)
        
        sales.unshift({item: temp.item, stock: temp.stock, original: temp.original, discount: temp.discount, salesPrice: temp.salesPrice, total: temp.total})
        // console.log(sales)
     
    }
  