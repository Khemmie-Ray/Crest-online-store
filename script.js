const featuredCard = document.querySelector('#featured')
const newArrivals = document.querySelector('#arrivals')

fetch("https://fakestoreapi.com/products/category/jewelery", {
    cache: "force-cache"
})
    .then(res=>res.json())
    .then(data => {
        
    featuredCard.innerHTML = data.map((datum) => displayProduct(datum)).join("") 
    
    const productCards = document.querySelectorAll('.product-card');
    productCards.forEach(card => {
        card.addEventListener('click', () => {
            const productId = card.dataset.id;
            const productData = data.find(product => product.id === parseInt(productId));
            showProduct(productData);
        });
    });
    })

    function displayProduct(info) {
        let card = `<div data-id=${info.id} class="product-card mb-8 lg:mb-0 bg-white p-4 rounded-md lg:w-[22%] w-[100%] lg:h-[380px] cursor-pointer">
        <img src=${info.image} alt="" class="object-cover object-center w-[100%] h-[200px] lg:h-[150px] rounded-md" />
        <p class="font-[700] text-[1.2rem] mt-4">${info.title}</p>
        <p class="text-green-800 font-[700]">$${info.price}</p>
        <a href="" class="text-[2rem] text-black"><i class="ri-shopping-cart-2-fill"></i></a>
        </div>`
        return card;
    }
    
    fetch("https://fakestoreapi.com/products/category/women's clothing", 
    {
        cache: "force-cache"
    })
    .then(res=>res.json())
    .then(data => {
        newArrivals.innerHTML = data.map(displayArrivals).join("")

        const productCards = document.querySelectorAll('.product-card');
        productCards.forEach(card => {
            card.addEventListener('click', () => {
                const productId = card.dataset.id;
                const productData = data.find(product => product.id === parseInt(productId));
                showProduct(productData);
            });
        });
    })

    function displayArrivals(info) {
        let card = `<div class="product-card mb-8 bg-white p-4 rounded-md lg:w-[32%] w-[100%] lg:h-[450px] h-auto cursor-pointer" data-id=${info.id}>
        <img src=${info.image} alt="" class="object-cover object-top w-[100%] h-[220px] lg:h-[250px] rounded-md"/>
        <p class="font-[700] text-[1.2rem] mt-4">${info.title}</p>
        <p class="text-green-800 font-[700]">$${info.price}</p>
        <button class="text-[2rem] text-black"><i class="ri-shopping-cart-2-fill"></i></button>
        </div>`
        return card;
    }

    const showProduct = (productData) => {
        localStorage.setItem("productData", JSON.stringify(productData))
        window.location.href = "product.html";
    }