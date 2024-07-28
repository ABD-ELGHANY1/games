import { displaydetails } from "./ui.module.js";
export  async function apidetails(id){
            const options = {
                method: 'GET',
                headers: {
                    'x-rapidapi-key': '3f5db8eb29msh105e45944015039p18d1efjsn9ce20ac39ad9',
                    'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
                }
            };
            const api = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`,options);
    const response= await api.json()
      document.getElementById('display').classList.add('d-none')
      document.getElementById('details-date').classList.remove('d-none') 
      document.querySelector('.loader').classList.replace('d-inline','d-none')
document.querySelector('.lood').classList.replace('d-flex','d-none')
document.querySelector('body').classList.replace('overflow-hidden','overflow-auto') 
      displaydetails(response)
    }
    