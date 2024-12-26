let menuList = document.getElementById('menuList')
menuList.style.maxHeight = '0px';
// let menuIcon = document.getElementById('menuIcon')

function toggleMenu(){
    if(menuList.style.maxHeight == '0px'){
        menuList.style.maxHeight = '500px';
    }
    else {
        menuList.style.maxHeight = '0px'
    }
}
