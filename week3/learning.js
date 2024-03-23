/*
//For Each
const employees1 = [
    {
        id: 101,
        name: 'Alex',
        sal: 10000
    },
    {
        id: 102,
        name: 'Clark',
        sal: 13000
    },
    {
        id: 103,
        name: 'John',
        sal: 12000
    },
    {
        id: 104,
        name: 'Tony',
        sal: 20000
    }
]
employees1.forEach(function(emp) {
    console.log(emp.name.toUpperCase());
});
/*Output:
ALEX
CLARK
JOHN
TONY*/
/*
//Map
const employees3 = [
    {
        id: 101,
        name: 'Alex',
        sal: 10000
    },
    {
        id: 102,
        name: 'Clark',
        sal: 13000
    },
    {
        id: 103,
        name: 'John',
        sal: 12000
    },
    {
        id: 104,
        name: 'Tony',
        sal: 20000
    }
];
const names1 = employees3.map(function(emp) {
      return emp.name;
});
console.log(names1); // ['Alex', 'Clark', 'John', 'Tony']

//Find
const employees = [
    {
        id: 101,
        name: 'Alex',
        sal: 10000
    },
    {
        id: 102,
        name: 'Clark',
        sal: 23000
    },
    {
        id: 103,
        name: 'John',
        sal: 22000
    },
    {
        id: 104,
        name: 'Tony',
        sal: 20000
    }
];
const emp = employees.find(e => e.sal >= 20000)
console.log(emp) // {id: 102, name: 'Clark', sal: 23000}

//Filter
const names = ['Jimmy Shah','Ram Sharma','Vikram Gupta','Shyam Sharma'];
const result = names.filter(name => name.includes('Sharma'))
console.log(result); //  ['Ram Sharma', 'Shyam Sharma']

//Every
//It returns boolean value.
const words = ['kia','karen','king','korean'];
// Check all words starts with k
console.log(words.every(word => word[0] === 'k')) // true
// Check all words ends with g
console.log(words.every(word => word[words.length-1] === 'g')) // false

//Some
const words2 = ['kia','karen','king','korean'];
// Check all words starts with k
console.log(words2.some(word => word[0] === 'k')) // true
// Check all words ends with g
console.log(words2.some(word => word[words.length-1] === 'g')) // true

//Sort
const nums = [1,20,10,22,30,44,100,11]; //Natural Order Sorting
nums.sort(); // [1, 10, 100, 11, 20, 22, 30, 44]

const nums = [1,20,10,22,30,44,100,11]; //Ascending order sorting
nums.sort((a,b) => a - b); // [1, 10, 11, 20, 22, 30, 44, 100]

//reduce
const nums = [1,2,3,4,5]; //Sum of array elements
let output = nums.reduce((accumulator,currentValue) => accumulator + currentValue);
console.log(output); //15

const nums2 = [44,2,66,45,17]; //Find maximum using reducer() method
let result2 = nums.reduce((max,item) => Math.max(max,item))
console.log(result); // 66

const votes = ['y','y','n','y','n','n','n'];
const result = votes.reduce((tally,vote) => {
   tally[vote] = ( tally[vote] || 0 ) + 1 
    return tally;
},{}); // Initial value: {}
// Output: {y: 3, n: 4}
*/
fetch('json.json') 
  .then(response => response.json()) 
  .then(data => {
    
    console.log(data); // Exibe os dados JSON no console
    
  })
  .catch(error => {
    console.error('Erro ao carregar ou processar o JSON:', error);
  });
