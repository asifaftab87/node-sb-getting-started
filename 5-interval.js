let i = 0;
const tof = ()=> {
    console.log(i);
    if(i==5){
        clearTimeout(id);
    }
    console.log('Hello World');
    i++;
}
const id = setInterval(tof, 1000);
