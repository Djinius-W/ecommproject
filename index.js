let app = new Vue({
    el: '#app',
    data() {
        return {
            produits: {
                id: 1,
                nom: 'Cravate',
                modeleSelectionne: 0,
                modeles: [
                    {
                        id: 1,
                        couleur: 'bleue',
                        description: "La cravate classique passe partout.",
                        prix: 52,
                        image: 'img/cravate_bleue.png',
                        stock: 4
                    },
                    {
                        id: 2,
                        couleur: 'bleue nuit',
                        description: "Idéale pour accompagner vos plus beaux costumes.",
                        prix: 55,
                        image: 'img/cravate_bleuenuit.png',
                        stock: 5
                    },
                    {
                        id: 3,
                        couleur: 'rouge',
                        description: "Une cravate pour la personne qui aime se faire remarquer.",
                        prix: 51,
                        image: 'img/cravate_rouge.png',
                        stock: 6
                    },
                    {
                        id: 4,
                        couleur: 'turquoise',
                        description: "Pour la personne qui a de l'audace.",
                        prix: 49,
                        image: 'img/cravate_verte.png',
                        stock: 4
                    },
                ]
            },

            panier: {
                articles: [],
                total: 0
            }
        }
    },

    computed: {
        varianteSelectionnee() {
            return this.produits.modeles[this.produits.modeleSelectionne];
        },
        estPremium() {
            return this.panier.total >= 300;
        }
    },

    methods: {
        ajouterAuPanier() {
            let variante = this.varianteSelectionnee;
            if (variante.stock > 0) {
                let articlePanier = this.panier.articles.find(article => article.id === variante.id);
                if (articlePanier) {
                    articlePanier.quantite++;
                } else {
                    this.panier.articles.push({ ...variante, quantite: 1 });
                }
                this.mettreAJourTotalPanier();
                variante.stock--;
            }
        },

        mettreAJourTotalPanier() {
            this.panier.total = this.panier.articles.reduce((total, article) => total + (article.prix * article.quantite), 0);
        },
        
        viderPanier() {
            this.panier.articles.forEach(article => {
                let variante = this.produits.modeles.find(variante => variante.id === article.id);
                if (variante) {
                    variante.stock += article.quantite;
                }
            });
            this.panier.articles = [];
            this.mettreAJourTotalPanier();
        }
    }
});