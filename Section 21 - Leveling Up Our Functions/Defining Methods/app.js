//An example of creating our own methods on an object, in this case the object is myMath and the methods are multiple,
//divide, square, and PI
const myMath = {
    multiply: function(x, y){
        return x * y;
    },
    divide: function (x, y){
        return x / y;
    },
    square: function(x){
        return X * x;
    },
    PI: 3.14159
};

//Now rewritten in "shorthand" (basically remove the ": function" part of the method)
const myMathShorthand = {
    multiply(x, y){
        return x * y;
    },
    divide(x, y){
        return x / y;
    },
    square(x){
        return X * x;
    },
    PI: 3.14159
};