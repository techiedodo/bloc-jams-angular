(function() {
    function AlbumCtrl() {
       // put the album data here and attach elements to scope that you want to use in the html
        this.albumData = angular.copy(albumPicasso);
    }

    angular
        .module('blocJams')
        .controller('AlbumCtrl', AlbumCtrl);
})();