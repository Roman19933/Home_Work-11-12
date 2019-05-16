const fibonacci = {
    0:0,
    1:1,
    2:1,
    3:2,
    4:3,
    5:5
}


const iteratorProp = function (){
this.index = 0;
this.fibonacci = fibonacci;

    
};

iteratorProp.prototype = {
    current: function () {
        return `this current number: ${this.fibonacci[this.index]}`
    },
    next: function () {
        return `next number: ${this.fibonacci[this.index++]}`
       
    },
    prev: function () {
        return `prev number: ${this.fibonacci[this.index--]}`
      
    },

    rewind: function () {
        return `rewind number: ${this.fibonacci[this.index=0]}`
    },

    key: function () {
        return `key of this number: ${parseInt(Object.keys(this.fibonacci)[this.index])}`
    }
    
};

let iterator = new iteratorProp

console.log(iterator.current());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.prev());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.rewind());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.key());



  


