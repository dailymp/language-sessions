console.log("This is your playground, experiment with TS code and check the console");

const frutas = ["bananas", "peras", "manzanas", "mango"]
const sabores = ["chocolate", "vainilla", "caramelo"]
const numbers = [1, 2, 3, 4, 5, 6, 7]
const obj1 = { name: "Maria", surname: "Ibañez", country: "SPA" }
const obj2 = { name: "Luisa", age: 31, married: true }

interface book {
    title: string;
    isRead: boolean;
}

const books: book[] = [
    { title: "Harry Potter y la piedra filosofal", isRead: true },
    { title: "Canción de hielo y fuego", isRead: false },
    { title: "Devastación", isRead: true },
];
//1. Head
const head = (first: Array<string>) => first
console.log("head " + head(frutas));

//1. Tail
const tail = ([, ...last]: Array<string>) => last
console.log("tail " + tail(frutas))

//1. Init
const init = (array = []) => array.slice(0, array.length - 1)
console.log("init " + init(frutas))

//1. Last
const last = (array) => array.slice(array.length - 1, array.length)
console.log("last " + last(frutas))

//2. Concat
const concat = (array1, array2) => [...array1, ...array2]
console.log("concat " + concat(frutas, sabores))

//2. Concat n arrays, opcional  => Arreglarrr para TS.... 
function concatNArrays([]) {
    return [].concat(...arguments)
}
console.log("concat n arrays " + concatNArrays(frutas, sabores, numbers, frutas, numbers))

//3. Clone 
function clone(source) {
    const copied = { ...source }
    console.log("the objects are not the same, they are copies" + source !== copied)
    return copied;
}
console.log("clone " + clone({ test1: 1, test2: 2 }))

//3. Merge
function merge(source, target) {
    const merged = { ...target, ...source }
    console.log(merged)
    return merged;
}
console.log("Merge" + merge(obj1, obj2))

//4. Read Books + opcional 
function isBookRead(books: book[], titleToSearch: string): boolean {
    return books.some(book => {
        return book.title === titleToSearch && book.isRead === true ? true : false;
    })
}
console.log(isBookRead(books, "Devastación")); // true
console.log(isBookRead(books, "Canción de hielo y fuego")); // false
console.log(isBookRead(books, "Los Pilares de la Tierra")); // false
console.log(isBookRead(books, "Harry Potter y la piedra filosofal")); // true

//5. Slot Machine




