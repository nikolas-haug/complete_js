// Challenge 2

// Parks - name, buildYear, numberOfTrees, parkArea, age
// Streets - name, buildYear, length, size (tiny/small/normal/big/huge/(default is normal if size unknown)) 

// Parks
class Park {
    constructor(name, buildYear, numberOfTrees, parkArea) {
        this.name = name;
        this.buildYear = buildYear;
        this.numberOfTrees = numberOfTrees;
        this.parkArea = parkArea;
    }

    calculateParkAge() {
        return new Date().getFullYear() - this.buildYear;
    }

    calculateTreeDensity() {
        const density = this.numberOfTrees / this.parkArea;
        console.log(`${this.name} has a tree density of ${density.toFixed(2)} trees per square km.`);
    }
}

// Streets
class Street {
    constructor(name, buildYear, streetLength, size = 'normal') {
        this.name = name;
        this.buildYear = buildYear;
        this.streetLength = streetLength;
        this.size = size; 
    }
}

// All Parks
const shadyOakPark = new Park('Shady Oak Park', 1976, 1200, 50);
const blueElmPark = new Park('Blue Elm Park', 1955, 990, 23);
const walnutWayPark = new Park('Walnut Way Park', 1987, 859, 44);
const hazyDrivePark = new Park('Hazy Drive Park', 1982, 1100, 72);

// All Streets
const longViewRoad = new Street('Long View Road', 1978, 5);
const windyAvenue = new Street('Windy Avenue', 1990, 7, 'big');
const narrowBoulevard = new Street('Narrow Boulevard', 1921, 10, 'tiny');
const uphillDrive = new Street('Uphill Drive', 1965, 13);

// Arrays
const parks = [shadyOakPark, blueElmPark, walnutWayPark, hazyDrivePark];
const streets = [longViewRoad, windyAvenue, narrowBoulevard, uphillDrive];

// Parks functions
function getAverageParkAge(parksArr) {
    let sum = 0;
    parksArr.forEach(park => {
        sum += park.calculateParkAge();
    });
    return Math.floor(sum / parks.length);
}

function getParksReport(parksArr) {
    console.log(`---- PARKS REPORT ----`);
    console.log(`Our ${parksArr.length} parks have an average age of ${getAverageParkAge(parks)} years.`);
    parksArr.forEach(park => {
        park.calculateTreeDensity();
        if(park.numberOfTrees > 1000) {
            console.log(`${park.name} has more than 1000 trees.`);
        }
    });
}

// Streets functions
function getStreetsAverage(streetsArr) {
    let sum = 0;
    streetsArr.forEach(street => {
        sum += street.streetLength;
    });
    console.log(`Our ${streetsArr.length} streets have a total length of ${sum} km, with an average of ${sum / streetsArr.length} km.`);
}

function getStreetsReport(streetsArr) {
    console.log(`---- STREETS REPORT ----`);
    getStreetsAverage(streetsArr);
    streetsArr.forEach(street => {
        console.log(`${street.name}, built in ${street.buildYear}, is a ${street.size} street.`);
    });
}

// Combined functions
function getAllReports() {
    getParksReport(parks);
    getStreetsReport(streets);
}

getAllReports();

// =================================================
// INSTRUCTOR SOLUTION
// =================================================

// Super class
// class Element {
//     constructor(name, buildYear) {
//         this.name = name;
//         this.buildYear = buildYear;
//     }
// }



// // Park sub class
// class Park extends Element {
//     constructor(name, buildYear, area, numTrees) {
//         super(name, buildYear);
//         this.area = area; // km2
//         this.numTrees = numTrees;
//     }

//     treeDensity() {
//         const density = this.numTrees / this.area;
//         console.log(`${this.name} has a tree density of ${density} trees per square km.`);
//     }
// }

// // Street sub class
// class Street extends Element {
//     constructor(name, buildYear, length, size = 3) {
//         super(name, buildYear);
//         this.length = length;
//         this.size = size;
//     }

//     classifyStreet() {
//         const classification = new Map();
//         classification.set(1, 'tiny');
//         classification.set(2, 'small');
//         classification.set(3, 'normal');
//         classification.set(4, 'big');
//         classification.set(5, 'huge');
//         console.log(`${this.name}, built in ${this.buildYear}, is a ${classification.get(this.size)} street.`);
//     }
// }

// // Element arrays
// const allParks = [new Park('Green Park', 1987, 0.2, 215),
//                   new Park('National Park', 1894, 2.9, 3541),
//                   new Park('Oak Park', 1953, 0.4, 949)];

// const allStreets = [new Street('Ocean Avenue', 1999, 1.1, 4),
//                     new Street('Evergreen Street', 2008, 2.7, 2),
//                     new Street('4th Street', 2015, 0.8),
//                     new Street('Sunset Boulevard', 1982, 2.5, 5)];

// // External function to calculate total and average
// function calc(arr) {
//     const sum = arr.reduce((previous, current, index) => previous + current, 0);

//     return [sum, sum / arr.length];
// }

// // Reports functions
// function reportParks(p) {
//     console.log(`---- PARKS REPORT ----`);
//     // Density
//     p.forEach(el => el.treeDensity());
//     // Average age
//     const ages = p.map(el => new Date().getFullYear() - el.buildYear);
//     const [totalAge, avgAge] = calc(ages);
//     console.log(`Our ${p.length} have an average of ${avgAge} years.`);
//     // Which park has more than 1000 trees
//     const i = p.map(el => el.numTrees).findIndex(el => el >= 1000);
//     console.log(`${p[i].name} has more than 1000 trees.`);
// }

// function reportStreets(s) {
//     console.log(`---- STREETS REPORT ----`);
//     // Total and average length of the town's streets
//     const [totalLength, avgLength] = calc(s.map(el => el.length));
//     console.log(`Our ${s.length} streets have a total length of ${totalLength} km, with and average of ${avgLength} km.`);
//     // Classify sizes
//     s.forEach(el => el.classifyStreet());
// }

// reportParks(allParks);
// reportStreets(allStreets);