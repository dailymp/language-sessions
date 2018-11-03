var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
console.log("This is your playground, experiment with TS code and check the console");
var frutas = ["bananas", "peras", "manzanas", "mango"];
var sabores = ["chocolate", "vainilla", "caramelo"];
var numbers = [1, 2, 3, 4, 5, 6, 7];
var obj1 = { name: "Maria", surname: "Ibañez", country: "SPA" };
var obj2 = { name: "Luisa", age: 31, married: true };
var books = [
    { title: "Harry Potter y la piedra filosofal", isRead: true },
    { title: "Canción de hielo y fuego", isRead: false },
    { title: "Devastación", isRead: true },
];
//1. Head
var head = function (first) { return first; };
console.log("head " + head(frutas));
//1. Tail
var tail = function (_a) {
    var last = _a.slice(1);
    return last;
};
console.log("tail " + tail(frutas));
//1. Init
var init = function (array) {
    if (array === void 0) { array = []; }
    return array.slice(0, array.length - 1);
};
console.log("init " + init(frutas));
//1. Last
var last = function (array) { return array.slice(array.length - 1, array.length); };
console.log("last " + last(frutas));
//2. Concat
var concat = function (array1, array2) { return array1.concat(array2); };
console.log("concat " + concat(frutas, sabores));
//2. Concat n arrays, opcional  => Arreglarrr para TS.... 
function concatNArrays(_a) {
    return [].concat.apply([], arguments);
}
console.log("concat n arrays " + concatNArrays(frutas, sabores, numbers, frutas, numbers));
//3. Clone 
function clone(source) {
    var copied = __assign({}, source);
    console.log("the objects are not the same, they are copies" + source !== copied);
    return copied;
}
console.log("clone " + clone({ test1: 1, test2: 2 }));
//3. Merge
function merge(source, target) {
    var merged = __assign({}, target, source);
    console.log(merged);
    return merged;
}
console.log("Merge" + merge(obj1, obj2));
//4. Read Books + opcional 
function isBookRead(books, titleToSearch) {
    return books.some(function (book) {
        return book.title === titleToSearch && book.isRead === true ? true : false;
    });
}
console.log(isBookRead(books, "Devastación")); // true
console.log(isBookRead(books, "Canción de hielo y fuego")); // false
console.log(isBookRead(books, "Los Pilares de la Tierra")); // false
console.log(isBookRead(books, "Harry Potter y la piedra filosofal")); // true
//5. Slot Machine
