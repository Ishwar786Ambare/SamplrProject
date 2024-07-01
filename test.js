class Bank {
    print() {
        console.log("Welcome to Banking system");
    }
}

class SBI extends Bank {

    constructor(bid, name) {
        super();
        this.bid = bid; 
        this.name = name;
        console.log("Inside Child constructor");
}
}


let sbi = new SBI(101, "SBI Noida")

sbi.print();


// const conditionsCount = {
//   Diabetes: 0,
//   Thyroid: 0,
//   "High Blood Pressure": 0,
// }

// const genderConditionsCount = {
//   Male:{
//       Diabetes: 0,
//       Thyroid: 0,
//       "High Blood Pressure": 0,
//   },
//   Female:{
//       Diabetes: 0,
//       Thyroid: 0,
//       "High Blood Pressure": 0,
//   }
// }
p1 = new Promise((resolve, reject) => setTimeout(() => resolve(1), 3000))
p2 = new Promise((resolve, reject) => setTimeout(() => resolve(2), 2000))
p3 = new Promise((resolve, reject) => setTimeout(() => resolve(3), 1000) )

Promise.all([p1,p2,p3]).then(values => { console.log(values); }) 
.catch(error => {console.error(error. message) }); 

