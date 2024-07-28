import { displaycategory, games } from "./api.module.js"
import { apidetails } from "./details.module.js"
export let id

document.addEventListener('DOMContentLoaded',function(){
  document.querySelector('.loader').classList.replace('d-none','d-inline')
  document.querySelector('.lood').classList.replace('d-none','d-flex')
  document.querySelector('body').classList.replace('overflow-auto','overflow-hidden')
})
 document.querySelectorAll(' ul  a').forEach(function(id){
   
 
  id.addEventListener('click',function(e){
// id.classList.remove('active')
document.querySelector('.active').classList.remove('active')
e.target.classList.add('active')
// console.log(clor);
  let  link= e.target.getAttribute('id');
    displaycategory(link)

   document.querySelector('.loader').classList.replace('d-none','d-inline')
   document.querySelector('.lood').classList.replace('d-none','d-flex')
   document.querySelector('body').classList.replace('overflow-auto','overflow-hidden')
  })
} )
 
export function displaydate(Date){
  let carton=''
 for(let i=0;i<Date.length;i++){
      
carton+=`  <div id="${Date[i].id}" class="col-12 col-md-6 design col-lg-4 col-xl-3 g-3 align-items-center">
<div  id="${Date[i].id}" class="card  bg-transparent ">
   <div  id="${Date[i].id}"  class="card-header bg-transparent  mx-auto  w-100 " >
       <img src="${Date[i]. thumbnail}"  id="${Date[i].id}" class="w-100 opa " alt="">
   </div>
   <div id="${Date[i].id}" class="card-body  d-flex justify-content-between align-items-center">
  <span id="${Date[i].id}" class="text-light">${Date[i].title}</span>
  <span  id="${Date[i].id}" >
   <button  id="${Date[i].id}"  class="btn    btn-info text-light ">free </button>
  </span>
   </div>
   <div  id="${Date[i].id}"  class="card-design mb-2 " >
     <p  id="${Date[i].id}" class="text-light text-center my-auto h-100 ">${Date[i].short_description}</p>
   </div>
  <div  id="${Date[i].id}"  class="card-footer m-2 d-flex justify-content-between align-items-center">
   <a  id="${Date[i].id}"  href="${Date[i].freetogame_profile_url}" target="_blank" class="  m-2 text-decoration-none bg-secondary  clo  ">${Date[i].genre}</a>
   <a  id="${Date[i].id}"  href="${Date[i].game_url}" target="_blank" class="text-decoration-none  bg-secondary  clo ">${Date[i].platform}</a>
  </div>
</div>
            </div>
         
         `
 
     }
      document.getElementById('row-date').innerHTML=carton
 document.getElementById('row-date').addEventListener('click',function(e){
  document.querySelector('.loader').classList.replace('d-none','d-inline')
  document.querySelector('.lood').classList.replace('d-none','d-flex')
  document.querySelector('body').classList.replace('overflow-auto','overflow-hidden')
  id=e.target.getAttribute('id')
  apidetails(id);



     })
     
     }
  
     games()

// console.log(id);
   export  function displaydetails(alldetails){
      let cartoon=`
      <div class=" p-2 col-12 d-flex   ">
      <div class="  d-flex flex-wrap ">
    <div  class="logo-game  col-12 col-md-5  mt-5 ">
      <h4 class="text-light">Details Game</h4>
    <img src="${alldetails.thumbnail}" class="w-100 mt-3" alt="">
     </div>
       
    
     
    <div class="game-discr m-2 mt-5 col-12 col-md-6 text-light ">
      <h2><span>Title:</span> <span class="bg-info rounded-1 foont"> ${alldetails.title}</span></h2>
      <h5><span>Category:</span> <span class="bg-info rounded-1 foont"> ${alldetails.genre } </span></h5>
      <h5><span>Platform:</span> <span class="bg-info rounded-1 foont"> ${alldetails.platform}</span></h5>
      <h5><span>Status: </span> <span class="bg-info rounded-1 foont"> ${alldetails.status}</span></h3>
        <p>${alldetails.description}</p>
   <a href="${alldetails.game_url}" target="_blank" > <button class="btn btn-outline-warning mt-4">Show Game</button></a>
    
      </div>
      </div>
      <div>
        <div class="mark p-2 col-1 bg-transparent text-light ">
      <span  id="xmark" class="font btn-close btn-close-white"><i class="fa-solid fa-xmark"></i></span>
    </div>

      `
  
  document.getElementById('details-date').innerHTML=cartoon

  document.getElementById('xmark').addEventListener('click',function(){
    document.getElementById('details-date').classList.add('d-none')
    document.getElementById('display').classList.remove('d-none')
  
  
  })
  
  }
     

 
   export function changed(change){
  let cartoon=""
  for(let i=0;i<change.length;i++){
     
    cartoon+=`
    
     <div id="${change[i].id}" class="col-12 col-md-6 design col-lg-4 col-xl-3 g-2 align-items-center">
        <div  id="${change[i].id}" class="card  bg-transparent ">
           <div class="card-header bg-transparent  mx-auto  w-100 " >
               <img src="${change[i]. thumbnail}"  id="${change[i].id}" class="w-100 opa " alt="">
           </div>
           <div id="${change[i].id}" class="card-body  d-flex justify-content-between align-items-center">
          <span id="${change[i].id}" class="text-light">${change[i].title}</span>
          <span>
           <button class="btn    btn-info text-light ">free </button>
          </span>
           </div>
           <div class="card-design mb-2 " >
             <p  id="${change[i].id}" class="text-light text-center h-100 ">${change[i].short_description}</p>
           </div>
          <div class="card-footer p-2 d-flex justify-content-between align-items-center">
           <a href="${change[i].freetogame_profile_url}" class="  text-decoration-none text-light bg-secondary  fonto  text-lowercase ">${change[i].genre}</a>
           <a href="${change[i].game_url}" class="text-decoration-none text-light bg-secondary fonto  ">${change[i].platform}</a>
          </div>
        </div>
       </div>
    
    `

}
// console.log(cartoon);
 document.getElementById('row-date').innerHTML=cartoon
 } 
 
