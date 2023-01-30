const hambuguerIcon = document.querySelector('.nav_hamburguer');
const navOverlay = document.querySelector('.nav_overlay');

hambuguerIcon.addEventListener('click', ()=>{
    hambuguerIcon.classList.toggle('nav_hamburguer--open'); 

    navOverlay.classList.toggle('nav_overlay--show');  
});

navOverlay.addEventListener('click', (e)=>{
    e.preventDefault();
    const currentElement = e.target;
  //  console.log(e.target.classList.value);

  if ( isActive(currentElement, 'nav_parent') ){
    
    const subMenu = currentElement.parentElement.children[1];
    console.log(subMenu);
    
    if(window.innerWidth < 768){

        let height = (subMenu.clientHeight == 0)
                 ? subMenu.scrollHeight : 0;
          
       subMenu.style.height = `${height}px`;  
       //console.log(subMenu.clientHeight);     
    }
    else{

}  
 } 
});

function isActive (element,string){
    return element.classList.value.includes(string);
}
window.addEventListener('resize', () =>{
  if (window.innerWidth > 768){
    const navInners = document.querySelectorAll('.nav_inner');

    navInners.forEach(navInner =>{
      navInner.style.height = '';
    })
  }

});