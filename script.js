const featuredCard = document.querySelector('#featured')
const newArrivals = document.querySelector('#arrivals')


fetch("https://fakestoreapi.com/products/category/jewelery")
    .then(res=>res.json())
    .then(data => {
    featuredCard.innerHTML = data.map(displayProduct).join("")     
    })

    function displayProduct(info) {
        let card = `<div class="mb-8 lg:mb-0 bg-white p-4 rounded-md lg:w-[22%] w-[100%] lg:h-[380px]">
        <img src=${info.image} alt="" class="object-cover object-center w-[100%] h-[200px] lg:h-[150px] rounded-md"/>
        <p class="font-[700] text-[1.2rem] mt-4">${info.title}</p>
        <p class="text-green-800 font-[700]">$${info.price}</p>
        <a href="" class="text-[2rem] text-black"><i class="ri-shopping-cart-2-fill"></i></a>
        </div>`
        return card;
    }
    
    fetch("https://fakestoreapi.com/products/category/women's clothing")
    .then(res=>res.json())
    .then(data => {
    newArrivals.innerHTML = data.map(displayArrivals).join("")
    })

    function displayArrivals(info) {
        let card = `<div class="mb-8 bg-white p-4 rounded-md lg:w-[32%] w-[100%] lg:h-[450px]">
        <img src=${info.image} alt="" class="object-cover object-top w-[100%] h-[220px] lg:h-[250px] rounded-md"/>
        <p class="font-[700] text-[1.2rem] mt-4">${info.title}</p>
        <p class="text-green-800 font-[700]">$${info.price}</p>
        <a href="" class="text-[2rem] text-black"><i class="ri-shopping-cart-2-fill"></i></a>
        </div>`
        return card;
    }