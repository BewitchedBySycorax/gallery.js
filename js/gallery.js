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
        console.log(e.target);
    },
    show: function() {
        console.log('show');
    },
};

window.onload = function() {
    gallery.init();
};