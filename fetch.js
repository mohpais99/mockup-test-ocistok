// var data = [
//     {
//         "collection": "baju-anak-lengan-pendek-celana-pendek-suit-t-shirt-anak-laki-laki-dan-perempuan-bayi-kecil-anak-pakaian",
//         "URL": "/products/baju-anak-lengan-pendek-celana-pendek-suit-t-shirt-anak-laki-laki-dan-perempuan-bayi-kecil-anak-pakaian",
//         "gambar": "//cdn.shopify.com/s/files/1/0268/7480/6307/products/13295251981_1255748472_large.jpg?v=1600923623"
//     },
//     {
//         "collection": "2020-anak-anak-baru-lengan-pendek-celana-pendek-suit-murni-kapas-baru-anak-pakaian-gaya-korea-perempuan-t-shirt-suit-one-produk-dropshipping-1",
//         "URL": "/products/2020-anak-anak-baru-lengan-pendek-celana-pendek-suit-murni-kapas-baru-anak-pakaian-gaya-korea-perempuan-t-shirt-suit-one-produk-dropshipping-1",
//         "gambar": "//cdn.shopify.com/s/files/1/0268/7480/6307/products/13111298259_1818026357_large.jpg?v=1603775058"
//     },
//     {
//         "collection": "piyama-wanita-piyama-wanita-baju-tidur-lengan-pendek-wanita-lucu-ukuran-besar",
//         "URL": "/products/piyama-wanita-piyama-wanita-baju-tidur-lengan-pendek-wanita-lucu-ukuran-besar",
//         "gambar": "//cdn.shopify.com/s/files/1/0268/7480/6307/products/14034485752_1087251833_large.jpg?v=1619238172"
//     },
//     {
//         "collection": "legging-warna-solid-kartun-renda-korea-kecil-dan-menengah-gadis",
//         "URL": "/products/legging-warna-solid-kartun-renda-korea-kecil-dan-menengah-gadis",
//         "gambar": "//cdn.shopify.com/s/files/1/0268/7480/6307/products/19827311062_1196347226_large.jpg?v=1599717346"
//     },
//     {
//         "collection": "pakaian-anak-lengan-pendek-katun-baju-bayi-laki-laki-dan-bayi-perempuan-musim-panas-anak-katun",
//         "URL": "/products/pakaian-anak-lengan-pendek-katun-baju-bayi-laki-laki-dan-bayi-perempuan-musim-panas-anak-katun",
//         "gambar": "//cdn.shopify.com/s/files/1/0268/7480/6307/products/13899747132_83815196_large.jpg?v=1609732387"
//     },
//     {
//         "collection": "anak-lengan-pendek-jas-musim-panas-murni-kapas-anak-laki-laki-korea-bayi-salah-satu-produk-dropshipping-2020-kaos-baru-anak-perempuan-pakaian-2",
//         "URL": "/products/anak-lengan-pendek-jas-musim-panas-murni-kapas-anak-laki-laki-korea-bayi-salah-satu-produk-dropshipping-2020-kaos-baru-anak-perempuan-pakaian-2",
//         "gambar": "//cdn.shopify.com/s/files/1/0268/7480/6307/products/14071860986_1196347226_large.jpg?v=1601892670"
//     },
//     {
//         "collection": "setelan-piyama-anak-pria-dan-wanita-long-johns-atas-bawah-set-lengan-panjang-suit-fashion",
//         "URL": "/products/setelan-piyama-anak-pria-dan-wanita-long-johns-atas-bawah-set-lengan-panjang-suit-fashion",
//         "gambar": "//cdn.shopify.com/s/files/1/0268/7480/6307/products/19759952298_11263094_large.jpg?v=1605261488"
//     },
//     {
//         "collection": "piyama-wanita-musim-panas-longgar-manis-lucu-lengan-pendek-celana-pendek-bisa-dipakai-di-luar-homewear-suit",
//         "URL": "/products/piyama-wanita-musim-panas-longgar-manis-lucu-lengan-pendek-celana-pendek-bisa-dipakai-di-luar-homewear-suit",
//         "gambar": "//cdn.shopify.com/s/files/1/0268/7480/6307/products/15440850644_1087251833_large.jpg?v=1606472769"
//     },
//     {
//         "collection": "piyama-anak-pakaian-tidur-anak-celana-panjang-katun-set-baju-lengan-panjang",
//         "URL": "/products/piyama-anak-pakaian-tidur-anak-celana-panjang-katun-set-baju-lengan-panjang",
//         "gambar": "//cdn.shopify.com/s/files/1/0268/7480/6307/products/8530488428_1818026357_large.jpg?v=1600507424"
//     }
// ]

// function getData(array) {
//     const html = array
//         .map(product => {
//             return `
//                 <div href="${product.URL}" class="col-md-2 col-sm-6 my-1">
//                     <div class="card border-radius-15">
//                         <div class="card-body">
//                             <img class="card-img-top border-radius-15" src="assets/images/product/produk.jpg" alt="produk">
//                             <h5 class="card-title font-16 my-2 text-justify text-uppercase mb-3" style="font-weight: inherit">${convertSlug(product.collection)}</h5>
//                             <div class="btn btn-block btn-custom-product">
//                                 ADD CART
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             `
//         })
//         .join("")
//     document.querySelector("#product").insertAdjacentHTML("afterbegin", html)

//     function convertSlug(params) {
//         const replace = params.replace(/\-/g, ' ');
        
//         return replace.length > 40 ? replace.substring(0, 40) + '...' : replace
//     }
// }

// getData(data)
async function fetchData() {
    await fetch(`https://ocistok.com/pages/json-produk`)
        .then(response => response.text())
        .then(html => {
            // console.log(html)
            var parser = new DOMParser();
            var doc = parser.parseFromString(html, "text/html");
            console.log(doc.querySelector('#shopify-section-json-produk-template').innerHTML);
        })
}

fetchData()
