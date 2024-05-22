//Create a JSON object representing a person with properties like name, age, and address. Add methods to the object to calculate the person's birth year and full address.

let person ={
    name:"alex",
    age:31,
    address:{
        house:12,
        street:"south street",
        city:"cbe",
        state:"TN",
        country:"IN",
        pincode:"641680"
    },
    getBirthYear: function(){
        let currenyear= new Date().getFullYear();
        // console.log(currenyear);
        let birthYear=currenyear-this.age;
        return birthYear;
    },
    getFullAddress(){
        let fullAddress="";
        for(let key in this.address){
            fullAddress +=this.address[key] + "-";
        }
        console.log(fullAddress);
        return `fullAddress: ${fullAddress}`;
    }
}
console.log(person.getBirthYear());
console.log(person.getFullAddress())