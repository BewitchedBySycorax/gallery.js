var gallery = {
    init: function() {
        console.log('init');
        this.items = [ 'img/1.jpg', 'img/2.jpg', 'img/3.jpg' ];
        this.el = document.getElementById('big');
        this.image = null;
        this.index = 0;
        document.addEventListener('click', this.onClick.bind(this));
    },
    onClick: function(e) {
        if ( e.target.id == 'prev' ) {
            --this.index;

            if ( this.index < 0 ) {
                this.index = this.items.length - 1;
            }

            this.show();
            
        } else if ( e.target.id == 'next' ) {
            ++this.index;

            if ( this.index >= this.items.length ) {
                this.index = 0;
            }

            this.show();

        } else if ( e.target.getAttribute('data-id') ) {
            this.index = parseInt(e.target.getAttribute('data-id')) - 1;

            this.show();
            
        }
    },
    show: function() {
        console.log('show');
    },
};

window.onload = function() {
    gallery.init();
};