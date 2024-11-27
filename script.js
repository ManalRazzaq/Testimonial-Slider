const testiarray = [
    {
    user_name: "James C" ,
    photoUrl : "https://images.unsplash.com/photo-1678286742832-26543bb49959?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    user_message : "Absolutely loved it! The ambiance was cozy, and the staff was super friendly. A perfect spot for a relaxing coffee break."
    },
    {
        user_name: "Emily B" ,
        photoUrl : "https://images.unsplash.com/photo-1704272788764-d9bac602c300?q=80&w=1923&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        user_message : "The coffee was delicious, but the service was slow. I would not recommend this place to anyone."
    },
    {
        user_name: "John D" ,
        photoUrl : "https://images.unsplash.com/photo-1727990474915-4e7d5d7a2187?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        user_message : "I absolutely love this place! The ambiance is just perfect for a coffee break. The staff is friendly and helpful."
    }
];
const testImg = document.querySelector('img');
const textEl = document.querySelector('.text');
const nameEl = document.querySelector('.user-name');
let idx = 0;
updateTestimonial();
function updateTestimonial (){
    const {user_name,photoUrl, user_message} = testiarray[idx];
    testImg.src = photoUrl;
    textEl.innerText = user_message;
    nameEl.innerText = user_name;
    idx++;
    if (idx === testiarray.length) {
        idx = 0;
    }
    setTimeout(() => {
        updateTestimonial()
    }, 5000);
}



