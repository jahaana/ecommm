let products=[
    {
        id:1,
        name:"Bag",
        image:"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png"
    },{
         id:2,
        name:"T-shirt",
        image:"https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_t.png"
    },{ id:3,
        name:"Jacket",
        image:"https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_t.png"
    }
]

let product_list=""
async function getallproducts(){
    let product_response=await fetch("https://dummyjson.com/products",
        {
            method:"GET"
        }
    )
    let data=await product_response.json()
    for(let prod of data.products){
    product_list=product_list+`<div class="card" style="width: 18rem;">
  <img src="${prod.thumbnail}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${prod.title}</h5>
    <p class="card-text">${prod.des}</p>
    <a href="#" class="btn btn-danger">Go somewhere</a>
  </div>
</div>`

}
document.getElementById("result").innerHTML=product_list
}

getallproducts()