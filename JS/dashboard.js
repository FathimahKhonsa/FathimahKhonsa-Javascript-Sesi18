//Membuat Function Card
function itemCard(data){
    console.log(data, 'data')
    return(
    `<div class="card_container" id='item_card'>
        <div class="img_card">
            <img src=${data.images[0]} alt="item image"/>
        </div>
        <div class="content_card">
            <h4>${data.title}</h4>
            <p>Rp.${data.price},00</p>
            <div class="rating">
                <p><i class="fa-solid fa-star"  style='font-size:11px'></i>${data.rating}</p>
                <p><i class="fa-solid fa-cart-shopping" style='font-size:11px'></i>${data.stock}</p>
            </div>
        </div>
    </div>`
    )
}

//Mengambil Data dari API
function getData(){
    fetch('https://dummyjson.com/products').then((item) => {
        //mengubah data ke json
        item.json().then((res) => {
            displayItem(res.products)
//            console.log(res.products)
        }).catch((err) => {
            console.error(err)
        })
    })
}

getData()

//Menampilkan item card
function displayItem(data){
    console.log(data,'ini display data')
    const containerItem = document.getElementById('item_card')

    data.forEach(function(product){
        let taskItem = document.createElement('div')
        taskItem.innerHTML = itemCard(product)
        containerItem.appendChild(taskItem)
    })
}
