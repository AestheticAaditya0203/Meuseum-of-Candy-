/* String.prototype.yell = function(){
    return `OMG!!!!!!  ${this.toUpperCase()}`
} */

//String.prototype is a "template object" for every single string.
//We could go crazy and add our own method called yell...
/* String.prototype.yell = function() {
    return `OMG!!! ${this.toUpperCase()}!!!!! AGHGHGHG!`;
};

'bees'.yell(); //"OMG!!! BEES!!!!! AGHGHGHG!"

//We can overwrite an existing Array method like pop (not a good idea):
Array.prototype.pop = function() {
    return 'SORRY I WANT THAT ELEMENT, I WILL NEVER POP IT OFF!';
};
const nums = [ 6, 7, 8, 9 ];
nums.pop(); // "SORRY I WANT THAT ELEMENT, I WILL NEVER POP IT OFF!" */

/* function hex(r, g, b)
{
    return '#' + ((1<<24) + (r<<16) + (g<<8) + b).toString(16).slice(1);
}
function rgb(r, g, b)
{
    return `rgb(${r}, ${g}, ${b})`;
}

hex (255,100,25);
rgb(255,100,25);

function makeColor(r,g,b)
{
    const color = {};
    color.r = r;
    color.g = g;
    color.b = b;
    color.rgb = function (){
        const{r, g, b} = this;
        return `rgb(${r}, ${g}, ${b})`;
    }
    return color;
}

const firsts = makeColor(35,355,150);
firsts.rgb(); */


/* // Function creating new objects
// without use of 'new' keyword
function createRobot(name) {
    return {
        name: name,
        talk: function () {
            console.log('My name is '
            + name + ', the robot.');
        }
    };
}

//Create a robot with name Chitti
const robo1 = createRobot('Chitti');

robo1.talk();


// Create a robot with name Chitti 2.O Upgraded
const robo2 = createRobot('Chitti 2.O Upgraded');

robo2.talk(); */


//Best example of Factory functions
/* function getAddition(x, y) {
    return {
        x: x,
        y: y,
        z: function () {
            return x + y;
        }
    };
}

const onces = getAddition(2, 4);
onces.z(); */


// This is a Constructor Function...
/* function Color(r, g, b) {
	this.r = r;
	this.g = g;
	this.b = b;
}

//If you call it on its own like a regular function...
Color(35, 60, 190); //undefined
//It returns undefined. Seems useless!

// *****************
// THE NEW OPERATOR!
// *****************

// 1. Creates a blank, plain JavaScript object;
// 2. Links (sets the constructor of) this object to another object;
// 3. Passes the newly created object from Step 1 as the this context;
// 4. Returns this if the function doesn't return its own object.

Color.prototype.rgb = function() {
	const { r, g, b } = this;
	return `rgb(${r}, ${g}, ${b})`;
};

Color.prototype.hex = function() {
	const { r, g, b } = this;
	return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
};

Color.prototype.rgba = function(a = 1.0) {
	const { r, g, b } = this;
	return `rgba(${r}, ${g}, ${b}, ${a})`;
};

const color1 = new Color(40, 255, 60);
color1.hex();
const color2 = new Color(0, 0, 0);
color2.hex(); */





