/* const data = `{"ticker":{"base":"BTC","target":"USD","price":"31343.08048084","volume":"60110.73784771","change":"-191.51848410"},"timestamp":1652240465,"success":true,"error":""}` */

/* const req = new XMLHttpRequest(); 

req.onload = function(){
    console.log('loaded..');
    const data = JSON.parse(this.responseText);
    console.log(data.name,data.height);
}

req.onerror = function(){
console.log('error');
console.log(this);
}

req.open("GET","https://swapi.dev/api/people/1/");
req.send();
 */


//Sending requests via fetch();
/* fetch("https://swapi.dev/api/people/1/")
    .then(res => {
        console.log("resolved", res);
        return res.json();
    })
    .then(data => {
        console.log("Json done", data)
        return fetch("https://swapi.dev/api/people/2/")
    })
    .then(res => {
        console.log("second time the data is working");
        return res.json();
    })
    .then((data)=>{
        console.log(data);
    })
    .catch(e => {
        console.log("error", e);
    }) */

/*  const loadStarWars = async () => {
     try{
         const res = await fetch("https://swapi.dev/api/people/1");
         const data = await res.json();
         console.log(data);
         const res2 = await fetch("https://swapi.dev/api/people/2");
         const data2 = await res2.json();
         console.log(data2);
         const res3 = await fetch("https://swapi.dev/api/people/3");
         const data3 = await res3.json();
         console.log(data3);
     }
    catch(e)
    {
        console.log("Unortunately you are not on correct location");
    }
 };

 loadStarWars(); */


// sending requests with axios
/* axios.get("https://swapi.dev/api/people/6")
.then(res => {
    console.log("good you got your results",res);
}).catch(e => {
    console.log("got an error",e)
})
 */

// sending requests with axios
/* const getStarWars = async (id) =>{
    try{
        const res = await axios.get(`https://swapi.dev/api/people/${id}`);
        console.log("you got ur results", res.data);
    }
    catch(e)
    {
        console.log("Sry!!, you got an error",e);
    }
}

getStarWars(10);
getStarWars(9); */

const jokes = document.querySelector('#jokes');
const button = document.querySelector('button');



const addNewJokes = async () => {
    const dJoke = await getDadJoke()
    const newLI = document.createElement('li');
    newLI.append(dJoke);
    jokes.append(newLI);
}

const getDadJoke = async () => {
    try{
    const conFig = { headers: { Accept: 'application/json' } };
    const resUlt = await axios.get('https://icanhazdadjoke.com/', conFig);
    return resUlt.data.joke;
    }
    catch(e)
    {
        return "Oops!!!!!, Sry for the inconvinience:("
    }
}

button.addEventListener('click', addNewJokes);