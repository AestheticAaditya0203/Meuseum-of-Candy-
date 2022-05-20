/* const fakeRequest = (url) => {
    return new Promise((resolve, reject) => {
        const rand = Math.random();
        setTimeout(() => {
            if (rand < 0.5) {
                resolve('your fake data is here');
            }
            reject('Oops yo got error');
        }, 1000)
    })
}

fakeRequest('/dogs/1')
    .then(() => {
        console.log("Done with me");
    }).catch((err)=>{
        console.log("Ohno u got error");
    }); */


/* const verdict = async  () => {
    throw 'Uh Oh!'
return 'lalala'
}

verdict().then((data) => {
    console.log('pro resolve',data);
}).catch(err=>{
    console.log('error please');
    console.log(err)
}) */

/* const login = async(un, pass) =>{
    if(!un || !pass){
        throw 'missing credentials';
    }
    else if(pass === 'corginate'){
        return 'welcome'
    }
    else{
        throw 'invalid password'
    }
}

login('corginate', 'corginate').then(msg => {
    console.log('logged in ');
    console.log(msg)
}).catch(err=>{
    console.log("Error")
    console.log(err);
}) */

const fakeRequest = (url) => {
    return new Promise((resolve, reject) => {
        const delay = Math.floor(Math.random() * 4500) + 500;
        setTimeout(() => {
            if (delay > 2000) {
                reject('Connection Timeout :(')
            } else {
                resolve(`Here is your fake data from ${url}`)
            }
        }, delay)
    })
}

async function makeTwoRequests() {
    try {
        let data1 = await fakeRequest('/page1');
        console.log(data1);
    }
    catch (e) {
        console.log("Caught in error");
        console.log("Caught in error", e);
    }
}