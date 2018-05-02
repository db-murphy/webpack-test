
// var myMap = new Map();

// myMap.set('lkkj', "和键'a string'关联的值");
//
// class Person{
//     constructor(opts) {
//         this.a = opts.a;
//     }
//
//     aa() {
//         console.log(this.a);
//     }
// }
//
// var k = new Person({a: 123});
//
// k.aa();

function* idMaker(){
    let index = 0;
    while(true)
        yield index++;
}

let gen = idMaker(); // "Generator { }"

console.log(gen.next().value);
// 0
console.log(gen.next().value);
// 1
console.log(gen.next().value);
