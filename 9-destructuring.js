const [first, ...restOfItems] = [10, 20, 30, 40];
console.log(restOfItems);

const data = {
    temp1: '001',
    temp2: '002',
    name: 'asif',
    title: 'alam'
}

const {temp1, temp2, ...obj} = data;
console.log(obj);