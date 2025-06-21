const students = [
  { name: "Alice", marks: [70, 80, 90] },
  { name: "Bob", marks: [60, 50, 70] },
  { name: "Charlie", marks: [95, 85, 90] }
];

// 1. map() to get total marks for each student
const totals = students.map(student => {
  return {
    name: student.name,
    total: student.marks.reduce((a, b) => a + b, 0)
  };
});
console.log("Total Marks:", totals);

// 2. filter() to find students with total > 200
const above200 = totals.filter(student => student.total > 200);
console.log("Above 200 Marks:", above200);

// 3. reduce() to find topper's total marks
const topper = totals.reduce((max, student) => {
  return student.total > max ? student.total : max;
}, 0);
console.log("Topper's Marks:", topper);
