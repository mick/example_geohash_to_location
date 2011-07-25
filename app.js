var express = require("express"),
    app = express.createServer(),
    geohash = require("geohash").GeoHash;

app.get('/:id', function(req, res){
        var latlon = geohash.decodeGeoHash(req.params['id']);
        lat = latlon.latitude[2];
        lon = latlon.longitude[2];
        zoom = req.params["id"].length+2;

        res.render('index.ejs', { layout: false, lat:lat, lon:lon, zoom:zoom, geohash:req.params['id']});
    });

app.listen(8000);