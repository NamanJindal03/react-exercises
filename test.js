let obj ={name: 'naman'}
  
function keyAdd(key, value){
    //obj.key = value;
    
    obj[key] = value
    console.log(obj);
}
  
keyAdd('age', 25)