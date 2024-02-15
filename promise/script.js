// creating a promise
let p = new Promise((resolve, reject) => {
    setTimeout(() => {
        const randomNum = Math.floor(Math.random()*100);
        if(randomNum > 50){
            resolve(randomNum);
        }
            reject(new Error('Something went Wrong!!'));

    }, 2000);
})
// consuming a promise
p
.then(function(num){
        console.log('Number inside first resolve: ',num);
        return num;
    })
.then(function(num){
        console.log('Number inside second resolve', 2*num)
    })
.catch(function(er/r){
        console.log(err);
    })
