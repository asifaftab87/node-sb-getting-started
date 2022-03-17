//const PI = Math.PI;
//const E = Math.E;
//const SQRTZ = Math.SQRTZ;

const { PI, E, SQRTZ } = Math;

// With require 
// const { readFile } = require('fs);

const circle = {
    label: 'cicleX',
    radius: 2
};

const cicrleArea = ({radius}) => (PI * radius * radius).toFixed(2);
console.log(cicrleArea(circle));
