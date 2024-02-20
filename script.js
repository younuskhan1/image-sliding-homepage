let next = document.querySelector('.next');
let prev = document.querySelector('.prev');

next.addEventListener('click', function(){
    let items = document.querySelectorAll('.item');
    // console.log(items);
    const slideValue = document.querySelector(".slide");
    // console.log(slideValue);
    document.querySelector('.slide').appendChild(items[0]);
})

prev.addEventListener('click', function(){
    let items = document.querySelectorAll('.item');
    // console.log(items);
    const slideValue = document.querySelector(".slide");
    // console.log(slideValue);
    document.querySelector('.slide').prepend(items[items.length - 1]) // here the length of items = 6
})