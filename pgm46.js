let example = [
  {
    name: "sajitha",
    gender: "female",
  },
  {
    name: "savitha",
    gender: "female",
  },
  { name: "aneesh", gender: "male" },
];

const objectGame = (obj) => {
  let count = 0;
  obj.forEach(function(ele){
    if(ele.gender !== "male"){
        count ++
    }
  })
 
  for(let i = 0; i<=count;i++){
    for (let j=0;j<obj.length ; j++){
        if(obj[j].gender !== "male"){
            obj.splice(j,1);
        }
    }
  }
  return obj;
}
console.log(objectGame(example));
