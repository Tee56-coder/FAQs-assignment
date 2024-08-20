// const buttons = document.querySelectorAll('button');

// buttons.forEach( button =>{
//     button.addEventListener('click',()=>{
//         const faq = button.nextElementSibling;
//         const icon = button.children[1];

//         faq.classList.toggle('show');
//         icon.classList.toggle('rotate');
//     })
// } )


const buttons = document.querySelectorAll('button');

function toggleFAQ(button) {
    const faq = button.nextElementSibling;
    const icon = button.children[1];

    faq.classList.toggle('show');
    icon.classList.toggle('rotate');
}



buttons.forEach(button => {
    button.addEventListener('click', () => toggleFAQ(button));
});