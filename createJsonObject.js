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
        return new Date().getFullYear()- this.age;
       
    },
    getFullAddress(){
        let {house,street,city,state,country,pincode}=this.address;
        return `${house},${street}, ${city},${state},${country},${pincode}`
    }
}
console.log(person.getBirthYear());//1993
console.log(person.getFullAddress());//12,south street, cbe,TN,IN,641680