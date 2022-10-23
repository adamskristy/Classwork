//spread operator
//take items from array, and individually insert them into the data structure

let meats = ['ham', 'turkey', 'bacon']

console.log(meats)
//['ham', 'turkey', 'bacon']

console.log(...meats)
// ham turkey bacon

////////////////////////////////////////////////////////////

let nums1 = [1,2,3]
let nums2 = [...nums1,4,5,6]

console.log(nums2)
//[4,5,6]

//nums2 = [nums1,4,5,6]
//[ [ 1, 2, 3 ], 4, 5, 6 ]

//nums2 = [...nums1,4,5,6]
//[ 1, 2, 3, 4, 5, 6 ]

///////////////////////////////////////////////////////////////

