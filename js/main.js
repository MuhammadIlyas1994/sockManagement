var app = new Vue({
    el: "#app",
    data: {
        product: "sock",
        brand: "Vu mastery",
        inventory: 0,
        onSale: true,
        selectedVarient: 0,

        details: ["90% cotton", "10% polyneer", "Grend natural"],
        cart: 0,
        varienty: [{
                varentId: 1234,
                varentColor: "green",
                varentImage: "./assests/vmSocks-green.jpg",
                varentQuantity: 100
            },
            {
                varentId: 21234,
                varentColor: "blue",
                varentImage: "./assests/vmSocks-blue.jpg",
                varentQuantity: 0
            }
        ]
    },
    methods: {
        addToCart() {
            this.cart += 1;
        },
        removeToCart() {
            this.cart -= 1;
        },
        updateProduct(index) {
            this.selectedVarient = index;
            console.log(index);
        }
    },
    computed: {
        title() {
            return this.product + " " + this.brand;
        },
        image() {
            return this.varienty[this.selectedVarient].varentImage;
        },
        inStock() {
            return this.varienty[this.selectedVarient].varentQuantity;
        }
    }
});