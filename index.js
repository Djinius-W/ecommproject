let app = new Vue({
    el: '#app',
    data: {
        selectedItem: null,
        item:
        {
            id: 1,
            name: 'cravate ' + this.color,
            description: "Une cravate " + this.color + " en soie ultra classe pour les soirées.",
            variantes: [
                {
                    id: 1,
                    color: "rouge",
                    quantity: 20,
                    price: 30,
                    image: '/images/cravate_rouge.jpg'
                },
                {
                    id: 2,
                    color: "bleue",
                    quantity: 1,
                    price: 33,
                    image: '/images/cravate_bleue.jpg'
                },
                {
                    id: 3,
                    color: "verte",
                    quantity: 18,
                    price: 34,
                    image: '/images/cravate_verte.jpg'
                },
                {
                    id: 4,
                    color: "bleue nuit",
                    quantity: 3,
                    price: 35,
                    image: '/images/cravate_bleuenuit.jpg'
                },
            ],
            

        },

        cart:
        {
            items: [],
            totalQuantity: 0,
            totalPrice: 0,
            isPremium : false
        }
    },


    computed: {
        productsFiltered() {
            return this.products.filter(product => product.quantity > 0)
        }

    },

    methods: {

        addToCart(item) {
            let index = this.cart.items.findIndex(i => i.id === item.id);
            this.cart.items[index].push(item);
            this.cart.totalQuantity++;
            this.cart.totalPrice += item.price;
            if (this.selectedItem == item.id) {
                this.variante.quantity--;
            }
            if (totalPrice >= 300){
                this.becomePremium();
                alert('You are now a premium member!')
            }

        },
            
        
        becomePremium(){
            cart.isPremium=true;
        },

        resetCart(index) {
            if (this.selectedItem == index) {
                this.selectedItem = null;

            
            } else {
                this.selectedItem = index;
            }

        },

        removeFromCart(item) {
            let index = this.cart.items.indexOf(item);
            Vue.delete(this.cart.items, index);
            totalQuantity -= item.quantity;
            totalPrice -= item.quantity * item.price;
            if (totalQuantity <= 0) {
                alert("Your cart is empty!");
                window.location.reload();
            }
        },

        selectVariante(variante) {
            this.selectedItem = variante;
        },
    }
})