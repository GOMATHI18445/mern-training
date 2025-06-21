const students=[
    { name:"Alice",marks:[75,80,90]},{name:"Bob",marks:[60,50,70]},{name:"Charlie",marks:[95,85,90]}
];
const totals=students.map(student=>{
    return{
        name:student.name,
        total:student.marks.reduce((a,b)=>a+b,0)
    };
});
console.log("Total Marks:",totals);
const above200=
totals.filter(student=>student.total>200);
console.log("Above 200 Marks:",above200);
const topper=totals.reduce((max,student)=>{
    return student.total > max? student.total:max;
},0);
console.log("Topper's Marks:",topper);


let abc=new Set([1,6,9,5,7,8,9,8,28,6,6]);
console.log(abc);
abc.add(99);
