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
