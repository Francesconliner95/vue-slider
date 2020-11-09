var app = new Vue({
    el: '#root',
    data: {
        testo: 'Ciao a tutti!',
        immagini: ["https://c4.wallpaperflare.com/wallpaper/703/272/886/landscape-mist-hill-wallpaper-preview.jpg",
        "https://c4.wallpaperflare.com/wallpaper/622/0/6/lake-landscape-mountains-valley-wallpaper-preview.jpg",
        "https://sp-images.summitpost.org/130603.jpg?auto=format&fit=max&h=800&ixlib=php-2.1.1&q=35&s=a22fafa48e320a05164f152c6effdeba",
        "https://c4.wallpaperflare.com/wallpaper/695/352/975/usa-landscape-panorama-sunset-mountains-hd-wallpaper-preview.jpg"],
        index: 0,
        numero: 0,
        },
    methods: {
        /*quando premo avanti viene incrememntato l'indice e quindi cambia la mia immagine anche nell'html in quanto src="immagini[index]" */
        next_f: function(){
            this.index++;
            /*se il valore supera la lunghezza dell'array torna a 0*/
            if(this.index > this.immagini.length - 1) {
                this.index = 0;
            }
        },
        prev_f: function(){
            this.index--;
            /*se il valore è inferiore a 0 torna a all'ultimo valore indice*/
            if(this.index < 0) {
                this.index = this.immagini.length - 1;
            }
        },
        /*la funzione set_img viene chimata non appena premo un pallino, e ne viene passato il valore dell'indice che ci segnala la posizione */
        set_img: function(indice){
            console.log(indice);
            /*per cambiare immagine non ci resta che settare il suo indice  uguale al valore(indice) dell'pallino cliccato*/
            this.index = indice;
        }
    },
    /*'l'oggetto' created: ci permette di eseguire al suo interno pozioni di codice in maniera automatica*/
    created: function() {
        /*la funzione setInterval ci permette di eseguire una porzione di codice ogni tot tempo*/
		setInterval(()=> {
        console.log('avanti');
        this.next_f();
        }, 5000);
	},

})
