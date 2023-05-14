'use strict'
// Header fixed.
let header = document.getElementById('header')
header.style = `position: fixed;`

// Navigator stop
let navigatorItems = document.querySelector('.main-menu__items')
navigatorItems.style = `animation: none;`

// Side bar.

/*let sidebarSeason = document.querySelector('.text')
let sidebarSeasonYear = document.querySelector('.sidebar__seasons')
var cnt = 1;

function showOrHideSeasons(){
    if (cnt == 1){
        sidebarSeasonYear.style = `display: inline;`
        cnt = 2
    }
    else {
        sidebarSeasonYear.style = `display: none;`
        cnt = 1
    }
}

sidebarSeason.addEventListener('click', showOrHideSeasons) */

// Modal 

var buyBtns = document.querySelectorAll('.buy-btn')
var modal = document.querySelector('.modal')
var modalContainer = document.querySelector('.modal-container')
var modalClose = document.querySelector('.modal-close')

function showModal(){
    modal.classList.add('open')
}

function hideModal(){
    modal.classList.remove('open')
}

modalClose.addEventListener('click', hideModal)

for (let buyBtn of buyBtns){
    buyBtn.addEventListener('click', showModal)
}

modal.addEventListener('click', hideModal)
modalContainer.addEventListener('click', (e) => e.stopPropagation())

