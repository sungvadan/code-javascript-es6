const aGreatNumber = 10;

const aGreateObject = { withCredentials : true }
aGreateObject.withCredentials =false;

if (true) {
   // aGreatNumber = 42;
  // (() => {
  //   var aGreatNumber = 42;
  // })()

}

setTimeout(() => {
  console.log(aGreatNumber);
}, 1000)

console.log('Waiting...');
console.log(aGreateObject);