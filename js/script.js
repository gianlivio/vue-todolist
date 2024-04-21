const { createApp } = Vue;
createApp({
    data() {
        return {
            todos: [
                {
                    text: "compra nutella",
                    fatto: false
                },
                {
                    text: "compra mele",
                    fatto: false
                },
                {
                    text: "compra spazzolino",
                    fatto: false
                },
                {
                    text: "compra pepenero",
                    fatto: true
                }


            ]

        }
    }
}).mount('#app');