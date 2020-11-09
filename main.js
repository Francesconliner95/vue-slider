var app = new Vue({
    el: '#root',
    data: {
        testo: 'Ciao a tutti!',
        immagini: ["https://c4.wallpaperflare.com/wallpaper/703/272/886/landscape-mist-hill-wallpaper-preview.jpg",
        "https://c4.wallpaperflare.com/wallpaper/622/0/6/lake-landscape-mountains-valley-wallpaper-preview.jpg",
        "https://www.pixelstalk.net/wp-content/uploads/2016/04/Landscape-Wallpaper-download-free.jpg",
        "https://c4.wallpaperflare.com/wallpaper/695/352/975/usa-landscape-panorama-sunset-mountains-hd-wallpaper-preview.jpg"],
        index: 0,
        },
    methods: {
        next_f(){
            this.index++;
            if(this.index > this.immagini.length - 1) {
                this.index = 0;
            }
        },
        prev_f(){
            console.log('ciao');
            this.index--;
            if(this.index < 0) {
                this.index = this.immagini.length - 1;
            }
        }
    }
})

/*Timer*/
setInterval(myTimer, 3000);

function myTimer() {
    next_f();
}
