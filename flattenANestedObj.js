//Implement a function to flatten a nested JSON object, i.e., convert it into a flat JSON object where each key is a dot-separated path to a leaf node in the original object.
function flat(obj,prevKey= ""){
    let flatObj={};
    for(let key in obj){
        if(typeof obj[key] == "object"){
            flatObj={
                ...flatObj,
                ...flat(obj[key],prevKey ? prevKey + "." + key :key),
            };
            }else{
                flatObj[prevKey ? prevKey + "." + key :key] =obj[key];
            }
        }
        return flatObj;
    }


var nestedObject ={
    name:"object",
    data:{
        purpose:"nested",
        info:{
            session:8,
            stuff:{
                topic:"Objects",
                thing:{
                    level:5,
                    moreStuff:{
                        magicNumber:44,
                        something:"foo2"
                    },
                },
            },
        },
    },
};

const flattenedObject ={
    name:"Object",
    "data.purpose":"nested",
    "data.info.session":8,
    "data.info.stuff.topic":"Objects",
    "data.info.stuff.thing.level":5,
    "data.info.stuff.thing.moreStuff.magicNumber":44,
    "data.info.stuff.thing.moreStuff.something":"foo2",
}
console.log(flat(nestedObject));
//Output 
/*
{
  name: 'object',
  'data.purpose': 'nested',
  'data.info.session': 8,
  'data.info.stuff.topic': 'Objects',
  'data.info.stuff.thing.level': 5,
  'data.info.stuff.thing.moreStuff.magicNumber': 44,
  'data.info.stuff.thing.moreStuff.something': 'foo2'
}
*/