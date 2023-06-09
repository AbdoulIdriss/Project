 

//let prevNext = document.querySelector("prev");

  // prevNext.removeEventListener("click", change);
 // prevNext.addEventListener("click",   (e) => {
 // e.target.style.backgroundColor = "#fff";
 // });

// subscribe
let subscribeBtn = document.getElementById('subscribe');
let subscribe = false;

subscribeBtn.addEventListener('click', ()=>{
    if(subscribe){
        subscribeBtn.innerText ="subscribed"
        subscribeBtn.style ="background-color: gray;"
        subscribe = false;
        alert('subscription added')
    }else{
        subscribeBtn.innerText ="subscribe"
        subscribeBtn.style = "background-color: red;"
        subscribe = true;
    }
});
// rating


const stars = document.querySelectorAll('.stars strong')

stars.forEach((star, index1) =>{
    star.addEventListener('click',()=>{
        //console.log(index1);
        stars.forEach((star,index2)=>{
            //console.log(index2)
            index1 >= index2 ? star.classList.add('active'): star.classList.remove('active')
        });
    });
});
