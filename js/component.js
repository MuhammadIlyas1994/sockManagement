Vue.component("product", {
    template: ` 
   <div>
            <div class="menu-container">
                <div class="menu">
                    <div class="card">
                        <p>Cart({{ cart }})</p>
                    </div>
                </div>
            </div>
            <div class="product">
                <div class="product-info">
                    <h1> {{ title }}</h1>
                </div>
                <div class="product-image">
                    <img v-bind: src="image" />
    
                <button class="add_cart" v-on: click="addToCart" :disabled="!inStock" :class="{disabledButton:!inStock}"> Add Cart</button>
                <button class="add_cart" v-if="cart > 0" v-on: click="removeToCart"> Remove To Cart</button>
            <div class="description">
                <p v-if="inStock">In stock</p>
                <p v-else : class="{text: !inStock}">Out of stock</p>

            <ul>
                <li v-for="detail in details">{{ detail }}</li>
            </ul>

            <div class="color-box" v-for="(varient ,index) in varienty" : key="varient.varntId" :style="{backgroundColor:varient.varentColor}" @mouseover="updateProduct(index)">
                    </div>
        <!-- < p v -else> Out of Stock</p >
<p v-if="inventory > 10">In stock</p>
<p v-else-if="inventory <= 10 && inventory >0 "> Almost sold out</p>
<p v-else>out of stock</p>
<span v-show="onSale">On Sale !</span> -->
                </div >
            </div >

        </div >
   </div>`
});