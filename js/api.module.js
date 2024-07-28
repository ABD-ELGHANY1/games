import{displaydate}from"./ui.module.js"
import { changed } from "./ui.module.js";
export async function games(){     
    const options = {
    method: 'GET',
    headers: {
        'x-rapidapi-key': '3f5db8eb29msh105e45944015039p18d1efjsn9ce20ac39ad9',
        'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
    }
};
const date=await fetch('https://free-to-play-games-database.p.rapidapi.com/api/games?category=shooter',options)
const result = await date.json();


displaydate(result)
document.querySelector('.loader').classList.replace('d-inline','d-none')
document.querySelector('.lood').classList.replace('d-flex','d-none')
document.querySelector('body').classList.replace('overflow-hidden','overflow-auto') 

}
 export async function displaycategory(link){
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': '3f5db8eb29msh105e45944015039p18d1efjsn9ce20ac39ad9',
            'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
        }
    };
      const api = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${link}`,options);
    
    let response= await api.json()
  let change=response
    changed(change)
    document.querySelector('.loader').classList.replace('d-inline','d-none')
    document.querySelector('.lood').classList.replace('d-flex','d-none')
    document.querySelector('body').classList.replace('overflow-hidden','overflow-auto') 
    
    }
   