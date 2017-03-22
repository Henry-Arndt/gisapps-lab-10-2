document.addEventListener('DOMContentLoaded', function() {
var map = L.map('map').setView([40.38, -105.5], 10);
   L.tileLayer('https://api.mapbox.com/styles/v1/htarndt/ciycbsp20007n2snp9kpqsyhl/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiaHRhcm5kdCIsImEiOiJjaXkyY2c2OXkwMDFsMnFwaWlyY2hiMTYzIn0.4mK81XJf357VHjLH_qc_VQ',
      {
  attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18
       }
             ).addTo(map);
    function showLatLng(e) {
      document.getElementById("whereIsThis").innerText = e.latlng.lat + " | " + e.latlng.lng;
}
    map.on('mousemove', showLatLng);
      document.getElementById("goToFRCCBoulder").onclick = function(){
        map.setView([40.1386, -105.12793], 16);
};

          document.getElementById("goToRMNP").onclick = function(){
            map.setView([40.4, -105.8], 12);
};
function onMapClick(e) {
    var popup = L.popup()
    .setLatLng(e.latlng)
    .setContent("<h4>" + e.latlng.lat + " | " + e.latlng.lng + "</h4><center><img src='http://dev.brightrain.com/recreationer/images/icon-map-marker.png'></center>")
    .openOn(map);
                        }
map.on('click', onMapClick);


var maine = {
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "properties": {
        "stroke": "#800040",
        "stroke-width": 2,
        "stroke-opacity": 1,
        "fill": "#8000ff",
        "fill-opacity": 0.5,
        "name": "Portland, Maine",
        "type": "Polygon"
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              -70.35781860351561,
              43.67085166460574
            ],
            [
              -70.27336120605469,
              43.59680319379521
            ],
            [
              -70.22392272949219,
              43.68426007877438
            ],
            [
              -70.30357360839842,
              43.70908256335716
            ],
            [
              -70.35781860351561,
              43.67085166460574
            ]
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "marker-color": "#ff0080",
        "marker-size": "medium",
        "marker-symbol": "",
        "name": "Portland Jetport",
        "Type": "Airport"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -70.31035423278809,
          43.644895390777016
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "stroke": "#000080",
        "stroke-width": 2,
        "stroke-opacity": 1,
        "fill": "#ff8000",
        "fill-opacity": 0.5,
        "name": "Beal's Cove",
        "type": "Ocean portion"
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              -69.98050689697266,
              43.7596885685863
            ],
            [
              -69.971923828125,
              43.763903805293104
            ],
            [
              -69.98273849487305,
              43.7668790876857
            ],
            [
              -69.98050689697266,
              43.7596885685863
            ]
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "marker-color": "#00ff80",
        "marker-size": "medium",
        "marker-symbol": "",
        "Name": "Treetops",
        "Type": "My summer House"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -69.97660160064697,
          43.76338466533817
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "stroke": "#555555",
        "stroke-width": 2,
        "stroke-opacity": 1,
        "fill": "#0000a0",
        "fill-opacity": 0.5,
        "name": "lowell's cove",
        "type": "other place"
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              -69.97365117073059,
              43.759285625996895
            ],
            [
              -69.9733829498291,
              43.75981255037557
            ],
            [
              -69.97286796569824,
              43.76049444562423
            ],
            [
              -69.97364044189453,
              43.76049444562423
            ],
            [
              -69.97544288635254,
              43.75975055951306
            ],
            [
              -69.97612953186035,
              43.75950259542069
            ],
            [
              -69.97673034667969,
              43.75863471300471
            ],
            [
              -69.97818946838379,
              43.75584500569063
            ],
            [
              -69.97784614562988,
              43.7580147892859
            ],
            [
              -69.9788761138916,
              43.75789080377141
            ],
            [
              -69.97921943664551,
              43.75646495188919
            ],
            [
              -69.97947692871094,
              43.75547303488856
            ],
            [
              -69.98067855834961,
              43.752745178356285
            ],
            [
              -69.97531414031982,
              43.75330315912644
            ],
            [
              -69.97488498687744,
              43.75429511209459
            ],
            [
              -69.9744987487793,
              43.75524055196311
            ],
            [
              -69.97434854507446,
              43.756635435967816
            ],
            [
              -69.97400522232056,
              43.757945047465626
            ],
            [
              -69.97387111186981,
              43.75848748170304
            ],
            [
              -69.97376382350922,
              43.75889042966756
            ],
            [
              -69.97365117073059,
              43.759285625996895
            ]
          ]
        ]
      }
    }
  ]
};
L.geoJSON(maine).addTo(map);
    });