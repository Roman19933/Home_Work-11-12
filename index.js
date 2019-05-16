module.exports = {
    fibonacci: fibonacci = {
        0:0,
        1:1,
        2:1,
        3:2,
        4:3,
        5:5
    },
    
    
    IteratorProp: IteratorProp = function (){
    this.index = 0;
    this.fibonacci = fibonacci;
    },
    
    IteratorPrototype:IteratorProp.prototype = {
        current: function () {
            return this.fibonacci[this.index]
        },
        next: function () {
            return this.fibonacci[this.index++]
           
        },
        prev: function () {
            return this.fibonacci[this.index--]
          
        },
    
        rewind: function () {
            return this.fibonacci[this.index = 0]
        },
    
        key: function () {
            return parseInt(Object.keys(this.fibonacci)[this.index])
        }
        
    },
    iterator:iterator = new IteratorProp
    
    };
    