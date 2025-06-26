const contArticle = document.getElementById("contVapesFeatured");

fetch("vapes.json")
    .then(answer=> answer.json())
    .then(products =>{
        products.forEach(product => {
            if(product.stock > 0){
                contArticle.innerHTML=`<article>
                    <h3>nombre</h3>
                    <img src="nombre.png" alt="imagen de nombre">
                    <p class="itemDesc">descripcion</p>
                    <p class="price">precio</p>
                    <a href="#">comprar</a>
                </article>`;
            }
        });
    });
