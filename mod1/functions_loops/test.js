//Nested FOR LOOPS

//Output 1:

/*
1
12
123
1234
12345
*/

for (let i = 0; i <= 3; i++) { //start with i
    let str =" "
    for (let j = 1; j <= i; j++) {
        str += j
    }
    console.log(str)
}

// think of i as the row (going across), will always start at 1
//five rows,i less than or equal to 5
//as long as rows are less than columns, j = i
//after code runs, prints

// j resets because loop ends


/*
1. initialize the variable i to 1
2: checking if i(1) is less than or equal to 3 (true)
3: initialize variable str as blank string 
4: initializes variable j to 1
5: checks if j(1) is less than or equal to i (true)
6: concatenates 1 as string to the variable str ("1")
7: increments j by 1 (2)
8: checks if j(2) is less than or equal to i (1) (false)
9: print the variable str ("1")
10: increment i by 1 (2)
11: checks if i (2) is less than or equal to 3 (true)
12: initialize variable str as blank string (step 3)
13: initialize j to 1
14: checks if j (1) i less than or equal to i (2) (true)
15: concatenates 1 as string to the variable str ("1")
16: increment j by 1 (2)
17: checks if j (2) is less than or equal to i (2) (true)
18: concatenates 2 as string to the variable str ("12")
19: increments j by 1 (3)
20: checks if j (3) is less than or equal to i (2) (false)
21: print str variable ("12")
22: increments i by 1 (3)
23: checks if i (3) is less than or equal to 3 (true)
24: initialize str variable to an empty string
25: initializes j to 1
26: checks if j (1) is less than or equal i (3) (true)
27: concatenates 1 as string to the variable str ("1")
28: increments j by 1 (2)
29: checks if j (2) is less than or equal to i (3)
30: concatenates 2 as a string to the variable str ("12")
31: increment j by 1 (3)
32: checks if j (3) is less than or equal to i (3) (true)
33: concatenates 2 as a string to the variable str ("123")
34: increment j by 1 (4)
35: checks if j (4) is less than or equal to i (3) (false)
36: print str variable ("123")
37: increments i by 1 (4)
38: checks if i (4) is less than or equal to 3 (false)
39: Loop ends

*/

