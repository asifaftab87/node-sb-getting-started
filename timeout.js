const tof = t=> {
    console.log('Function will execute after '+(t/1000)+' seconds');
}

setTimeout(tof, 4000, 4000);