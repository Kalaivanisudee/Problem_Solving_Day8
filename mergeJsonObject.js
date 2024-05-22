//Write a function that takes two JSON objects as input and merges them into a single JSON object. Handle conflicts if both objects have the same property.

function combine(obj1,obj2){
    const obj={...obj1}
    for(let key in obj2){
        if(
            obj[key]===undefined ||
             typeof obj2[key] == "function" ||
                obj[key]<obj2[key]
             ){
                    obj[key]=obj2[key]; 
                }
            
        }
        return obj;
    }
const obj1 ={
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
const obj2={
    name:"Silambarasan",
    place:"Trichy",
    work:"Developer",
}
console.log(obj1.getFullAddress());
console.log(combine(obj1,obj2))