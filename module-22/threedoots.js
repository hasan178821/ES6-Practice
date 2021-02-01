/* const age = [19, 13, 15, 21, 14];
const ages2 = [15, 16, 17, 18, 19];
const ages3 = [35, 26, 27, 28, 31];
const allAges = age.concat(ages2).concat([7]).concat(ages3);
const allAges2 = [...age, ...ages2, 7, ...ages3];
console.log(allAges2);



const business = 350;
const minister = 550;
const socib = 850;
const maximum = Math.max(business, minister, socib);
console.log(maximum)

const income = [350, 550, 850, 950, 750, 650];
const maximumIncom = Math.max(...income);
console.log(maximumIncom); */

// Practice for Self
const arry1 = [12, 14, 16, 18, 17];
const arry2 = [21, 25, 23, 26, 27, 29];
const allArry = [...arry1, ...arry2];
console.log(allArry);

const arry2Big = Math.max(...arry2);
console.log(arry2Big);

const arry1Small = Math.min(...arry1);
console.log(arry1Small);