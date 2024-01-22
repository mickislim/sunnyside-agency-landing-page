const navBtn = document.getElementById('navbtn')
const modalEl = document.getElementById('nav-modal')
const mobileNavEl = document.getElementById('modal-ul')
const footerUlEl = document.getElementById('footer-ul')
const desktopUlEl = document.getElementById('desktop-ul')


const nav=['About','Services','Projects'] 



navBtn.addEventListener('click', (()=>{
modalEl.classList.toggle('hidden')
}))



function renderNav(){
    for(let i=0 ;i < nav.length ; i++ ){
        mobileNavEl.innerHTML += `<li><a href="#" class="hover:text-neutralVeryDarkDesaturatedBlue text-1xl">${nav[i]}</a> </li>`;
footerUlEl.innerHTML += `<li><a href="#" class="hover:text-neutralWhite">${nav[i]}</a> </li>`;

desktopUlEl.innerHTML += `<li><a href="#" class="hover:text-neutralVeryDarkDesaturatedBlue">${nav[i]}</a></li>`

    }
}
renderNav()
