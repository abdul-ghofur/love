const target = document.getElementById('no');
let yes = document.getElementById('yes');

yes.addEventListener('click',() => {
alert("Aku Juga Mencintaimu 😍🥰😘❤️");
// document.querySelector("#tpl").innerHTML = 'haha'
})
function moveTarget(){
    const maxWidth = 400;
    const maxHeight = 400;

    const ranomX = Math.floor(Math.random() * maxWidth);
    const ranomY = Math.floor(Math.random() * maxHeight);

    target.style.left = ranomX + 'px';
    target.style.top = ranomY + 'px';
}

target.addEventListener('mousemove',function(){
    moveTarget();
})