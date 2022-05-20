/* const multiply = (x,y) => x*y;

const square = (x) => multiply(x,x);

const isRightAngle = (a,b,c) => {
    square(a) + square(b) === square(c);
}

isRightAngle(3,4,5); */


/* setTimeout(function () {
    document.body.style.backgroundColor = 'orange';

    setTimeout(function () {
        document.body.style.backgroundColor = 'pink';


        setTimeout(function () {
            document.body.style.backgroundColor = 'yellow';

            setTimeout(function () {
                document.body.style.backgroundColor = 'green';
            }, 1000);
        }, 1000);
    }, 1000);
}, 1000); */

/*  const delayedColorChange = (newColor, delay, doNext) => {
    setTimeout(() =>{
        document.body.style.backgroundColor = newColor;
        doNext && doNext();
    },delay);
}; */

/* delayedColorChange('olive', 1000, () =>{
    delayedColorChange('teal', 1000, ()=>{
        delayedColorChange('magenta', 1000, ()=>{

        });
    });
}); 
 */

const delayedColorChange = (color, delay) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            document.body.style.backgroundColor = color;
            resolve();
        }, delay)
    })
}

/* delayedColorChange('red', 1000)
    .then(() => delayedColorChange('orange', 1000))
.then(() => delayedColorChange('yellow', 1000))
.then(() => delayedColorChange('green', 1000))
.then(() => delayedColorChange('blue', 1000))
.then(() => delayedColorChange('indigo', 1000))
.then(() => delayedColorChange('violet', 1000)) */

async function rainbow() {
    await delayedColorChange('red', 1000)
    await delayedColorChange('orange', 1000)
    await delayedColorChange('yellow', 1000)
    await delayedColorChange('green', 1000)
    await delayedColorChange('blue', 1000)
    await delayedColorChange('indigo', 1000)
    await delayedColorChange('violet', 1000)
    return 'all done'
}

rainbow().then(() => console.log("ENd of rainbow"))


/* const fakeRequestCallback = (url, success, failure) => {
    const delay = Math.floor(Math.random() * 4500) + 500;
    setTimeout(() => {
        if (delay > 4000) {
            failure('Connection Timeout :(')
        } else {
            success(`Here is your fake data from ${url}`)
        }
    }, delay)
}
// THE PROMISE VERSION 
const fakeRequestPromise = (url) => {
    return new Promise((resolve, reject) => {
        const delay = Math.floor(Math.random() * (4500)) + 500;
        setTimeout(() => {
            if (delay > 4000) {
                reject('Connection Timeout :(')
            } else {
                resolve(`Here is your fake data from ${url}`)
            }
        }, delay)
    })
}
 */
/* fakeRequestCallback('books.com/page1',
    function (response) {
        console.log("IT WORKED!!!!")
        console.log(response)
        fakeRequestCallback('books.com/page2',
            function (response) {
                console.log("IT WORKED AGAIN!!!!")
                console.log(response)
                fakeRequestCallback('books.com/page3',
                    function (response) {
                        console.log("IT WORKED AGAIN (3rd req)!!!!")
                        console.log(response)
                    },
                    function (err) {
                        console.log("ERROR (3rd req)!!!", err)
                    })
            },
            function (err) {
                console.log("ERROR (2nd req)!!!", err)
            })
    }, function (err) {
        console.log("ERROR!!!", err)
    }) */

/* fakeRequestPromise('yelp.com/api/coffee/page1')
.then(() => {
        console.log('It worked as always');
        fakeRequestPromise('yelp.com/api/coffee/page2')
            .then(() => {
                console.log('It worked as always2');
            }).catch(() => {
                console.log("ohno! its error")
            });
    }).catch(() => {
        console.log("ohno! its error")
    });

 */
