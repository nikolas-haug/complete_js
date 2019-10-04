import axios from 'axios';

// 2b450b0055bc32d46c596f3041d92f76
// https://www.food2fork.com/api/search

async function getResults(query) {
    const proxy = 'https://cors-anywhere.herokuapp.com/';
    const key = '2b450b0055bc32d46c596f3041d92f76';
    try {
        const res = await axios(`${proxy}https://www.food2fork.com/api/search?key=${key}&q=${query}`);
        const recipes = res.data.recipes;
        console.log(recipes);
    } catch (error) {
        alert(error);
    }
}
getResults('pizza');