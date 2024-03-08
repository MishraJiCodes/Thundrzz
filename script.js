burger = document.querySelector('.burger')
navbar = document.querySelector('.navbar')
navlist = document.querySelector('.nav-list')


burger.addEventListener("click", ()=>
{
    navbar.classList.toggle('hnav-resp')
   navlist.classList.toggle('vclass-resp')

});


document.getElementById('redirect').addEventListener('click', function()
{
    rdtp();
});

function rdtp()
{
    window.location.href = 'login.html';
}

