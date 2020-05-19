
var StockSpanner = function() {
    this.stock = [];
    this.span = [];
};

/** 
 * @param {number} price
 * @return {number}
 */
StockSpanner.prototype.next = function(price) {
    this.stock.push(price);
    let res = 1;
    let i = this.stock.length-2;
    while(this.stock[i] <= price) {
        res += this.span[i];
        i -= this.span[i];
    }
    this.span.push(res);
    return res;
};

/** 
 * Your StockSpanner object will be instantiated and called as such:
 * var obj = new StockSpanner()
 * var param_1 = obj.next(price)
 */