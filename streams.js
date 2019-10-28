

const x = ['a','b','c']
.filter((val,i,arr) => val === 'b')
.map((val,i)=>val+1)
.reduce((prev,curr,index,arr)=>prev+curr);
const animals = ['bennett','snek','slippery-snek','4','5']
let ans = animals.filter((val,i,animals)=> val.length <9)
.map(v => v[0].toUpperCase()+ v.slice(1))
                 .map((v,i)=> i ? ' '+ v :v)
                 .reduce((prev,curr)=>prev+curr,'Animals: ')
                 .concat('.');
console.log(ans);