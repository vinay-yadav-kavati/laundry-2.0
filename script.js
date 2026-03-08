const menu_icon=document.getElementById('menu-icon');
const menu_bar=document.querySelector('.menu-bar');
const menu_item=document.querySelectorAll('.menu-item');
const services_container=document.getElementById('services-container');

//services
let services=[
        {
            image:"https://i.ibb.co/XkDMTDyj/wash-and-fold.jpg",
            alt:"wash&fold",
            heading:"Wash & Fold",
            text:"Keep your everyday clothes fresh and spotless with our efficient wash and fold service",
        },
        {
            image:"https://img.freepik.com/premium-photo/row-suit-jackets-hanging-hanger-with-word-one-right_820340-16646.jpg?w=2000",
            alt:"dry-clean",
            heading:"Dry Cleaning",
            text:"Professional care for delicate fabrics, suits, and formal wear to maintain their pristine condition",
        },
        {
            image:"https://images.wisegeek.com/steam-iron.jpg",
            alt:"ironing",
            heading:"Ironing & Pressing",
            text:"Crisp, wrinkle-free clothing ready to wear",
        },
        {
            image:"https://static.vecteezy.com/system/resources/previews/010/291/088/non_2x/conceptual-flat-design-icon-of-on-time-delivery-vector.jpg",
            alt:"pickup & delivery",
            heading:"Fast & Reliable",
            text:"Convenient door-to-door pickup and drop-off service to save your valuable time",
        },
        {
            image:"https://i.ibb.co/Hp222xhY/care.jpg",
            alt:"caring of cloth",
            heading:"Expert Care",
            text:"Treat your fabrics with gentle care to preserve their beauty, texture, and life for years to come",
        },
        {
            image:"https://i.ibb.co/wh5R7RVg/XSONI-SYSTEMS.jpg",
            alt:"matrix and pillow",
            heading:"Mattress & Pillow",
            text:"Deep cleaning to remove dust mites and allergens",
        },
        {
            image:"https://i.ibb.co/Sw3nj675/10-Common-Laundry-Mistakes-That-Make-Your-Clothes-Fade-Faster.jpg",
            alt:"coloring",
            heading:"Color Restoration",
            text:"Special treatment for faded clothes",
        },
        {
            image:"https://img.freepik.com/premium-vector/eco-friendly-green-leaf-label-sticker_100147-344.jpg?w=2000",
            alt:"eco-fiendly",
            heading:"Eco Friendly",
            text:"We care for your clothes clean and the planet — every wash is powered by eco‑friendly, biodegradable products",
        },

    ];

//rendering sevices 
services.forEach((service)=>{
    let data=`<div class="item">
                <img src='${service.image}' alt='${service.alt}'>
                <div class="description">
                    <h2>${service.heading}</h2>
                    <p>${service.text}</p>
                </div>
            </div>`;
    services_container.insertAdjacentHTML('beforeEnd',data);
})

//handle menu bar in phone
menu_icon.addEventListener('click',()=>{
    menu_bar.classList.toggle('show-menu');
})
menu_item.forEach(item =>{
    item.addEventListener('click',()=>{
         menu_bar.classList.remove('show-menu');
    })
});