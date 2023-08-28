const allProduct = document.querySelector('#catalogue');
const itemsPerPage = 6;
let currentPage = 1;
let allProductsData = [];

function fetchAllProducts(page) {
    fetch('https://fakestoreapi.com/products', {
        cache: "force-cache"
    })
    .then(res => res.json())
    .then(data => {
        allProductsData = data;

        fetchAndDisplayProducts(currentPage);     
    });
}

function fetchAndDisplayProducts(page) {
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const productsToDisplay = allProductsData.slice(startIndex, endIndex);

    allProduct.innerHTML = productsToDisplay.map(displayAllProduct).join("");

    const productCards = document.querySelectorAll('.product-card');
        productCards.forEach(card => {
            card.addEventListener('click', () => {
                const productId = card.dataset.id;
                const productData = allProductsData.find(product => product.id === parseInt(productId));
                showProduct(productData);
            });
    });
}

function displayAllProduct(info) {
    let card = `<div class="product-card mb-8 bg-white p-4 rounded-md lg:w-[32%] w-[100%] lg:h-[450px] cursor-pointer" data-id=${info.id}>
        <img src=${info.image} alt="" class="object-cover object-top w-[100%] h-[220px] lg:h-[250px] rounded-md"/>
        <p class="font-[700] text-[1.2rem] mt-4">${info.title}</p>
        <p class="text-green-800 font-[700]">$${info.price}</p>
        <a href="" class="text-[2rem] text-black"><i class="ri-shopping-cart-2-fill"></i></a>
    </div>`;
    return card;
}

const prevButton = document.querySelector('#prev-btn');
const nextButton = document.querySelector('#next-btn');

prevButton.addEventListener('click', () => {
    if (currentPage > 1) {
        currentPage--;
        fetchAndDisplayProducts(currentPage);
    }
});
    
nextButton.addEventListener('click', () => {
    const maxPage = Math.ceil(allProductsData.length / itemsPerPage);
    if (currentPage < maxPage) {
        currentPage++;
        fetchAndDisplayProducts(currentPage);
    }
});

fetchAllProducts();

const showProduct = (productData) => {
    localStorage.setItem("productData", JSON.stringify(productData))
    window.location.href = "product.html";
}