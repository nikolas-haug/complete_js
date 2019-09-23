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

const shadyOakPark = new Park('Shady Oak Park', 1976, 1200, 50);
const blueElmPark = new Park('Blue Elm Park', 1955, 990, 23);
const walnutWayPark = new Park('Walnut Way Park', 1987, 859, 44);
const hazyDrivePark = new Park('Hazy Drive Park', 1982, 1100, 72);

const parks = [shadyOakPark, blueElmPark, walnutWayPark, hazyDrivePark];

function getAverageParkAge(parksArr) {
    let sum = 0;
    parksArr.forEach(park => {
        sum += park.calculateParkAge();
    });
    return Math.floor(sum / parks.length);
}

function getTreeReport(parksArr) {
    console.log(`Our ${parksArr.length} parks have an average age of ${getAverageParkAge(parks)} years.`);
    parksArr.forEach(park => {
        park.calculateTreeDensity();
        if(park.numberOfTrees > 1000) {
            console.log(`${park.name} has more than 1000 trees.`);
        }
    });
}
