// Create a map object
var myMap = L.map("map", {
  center: [40.4637, 3.7492],
  zoom: 3
});

// Add a tile layer
L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
  attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
  maxZoom: 18,
  id: "mapbox.streets",
  accessToken: API_KEY
}).addTo(myMap);

// An array containing each city's name, location, and population
var places = [
  {
    location: [22.3213, 113.9433    ],
    name: "AsiaWorld-Expo",
    date: "6/1/2014, 8/16/2015, 2/11/2017, 6/2/2018"
  },
  {
    location: [3.0538, 101.6935     ],
    name: "Axiata Arena",
    date: "6/7/2018"
  },
  {
    location: [39.9105, 116.2760    ],
    name: "Cadillac Arena",
    date: "9/20/2014, 7/18/2015"
  },
  {
    location: [30.6660,	104.0650    ],
    name: "Chengdu Sports Centre",
    date: "7/5/2014, 8/1/2015"
  },
  {
    location: [29.5279, 106.5042    ],
    name: "Chongqing Olympic Sports Center",
    date: "6/28/2014, 9/12/2015"
  },
  {
    location: [22.1475,	113.5589],
    name: "Cotai Arena",
    date: "11/21/2015, 8/10/2018"
  },
  {
    location: [38.9784098,	121.5249561    ],
    name: "Dalian Sports Center",
    date: "3/5/2016"
  },
  {
    location: [33.6046,	130.4036],
    name: "Fukuoka Convention Center",
    date: "11/11/2014, 10/31/2015,10/2/2016, 12/22/2017"
  },
  {
  location: [37.499395,	126.866787],
  name: "Gocheok Sky Dome",
  date: "11/24/2017, 7/13/2018"
  },
  {
    location: [23.1234375	,113.5324026    ],
    name: "Guangzhou International Sports Arena",
    date: "8/30/2014, 10/17/2015"
  },
  {
    location: [28.1789	,112.982    ],
    name: "Helong Sports Center Stadium",
    date: "7/27/2014"
  },
  {
    location: [34.3994, 132.4550],
    name: "Hiroshima Prefectural Sports Center",
    date: "9/13/2016    "
  },
  {
    location: [30.2661, 120.1337],
    name: "Huanglong Stadium",
    date: "9/30/2016    "
  },
  {
    location: [13.9129,	100.5478],
    name: "Impact, Muang Thong Thani",
    date: "9/13/2014, 6/20/2015, 9/10/2016, 3/16/2018"
  },
  {
    location: [-6.300258	,106.6366    ],
    name: "Indonesia Convention Exhibition",
    date: "2/27/2016    "
  },
  {
    location: [ -6.2186, 106.8018    ],
    name: "Lapangan D Senayan Gelora Bung Karno Main Stadium",
    date: "9/6/2014    "
  },
  {
    location: [34.013, -118.285    ],
    name: "Los Angeles Memorial Sports Arena",
    date: "2/14/2016    "
  },
  {
    location: [42.9994, 141.3474   ],
    name: "Makomanai Ice Arena",
    date: "10/12/2016    "
  },
  {
    location: [14.5321, 120.9838   ],
    name: "Mall of Asia Arena",
    date: "1/23/2016, 4/28/2018   "
  },
  {
    location: [31.1893, 121.4931  ],
    name: "Mercedes-Benz Arena",
    date: "7/18/2014, 5/30/2015       "
  },
  {
    location: [19.4976, -99.1751  ],
    name: "Mexico City Arena",
    date: "4/27/2017    "
  },
  {
    location: [32.0082, 118.7183  ],
    name: "Nanjing Olympic Sports Center Gymnasium",
    date: "12/12/2015    "
  },
  {
    location: [35.0958, 136.9236 ],
    name: "Nippon Gaishi Hall",
    date: "11/7/2016    "
  },
  {
    location: [37.5192,	127.1272    ],
    name: "Olympic Gymnastics Arena",
    date: "5/23/2014, 3/7/2015, 3/18/2016, 7/22/2016 "
  },
  {
    location: [34.6693, 135.4761    ],
    name: "Osaka Dome",
    date: "11/13/2015, 12/9/2016, 2/23/2018"
  },
  {
    location: [34.6896, 135.5301   ],
    name: "Osakajo Hall",
    date: "12/22/2014    "
  },
  {
    location: [40.7340615,	-74.1702238    ],
    name: "Prudential Center",
    date: "2/21/2016, 4/25/2017       "
  },
  {
    location: [41.9762374,	-87.86431806    ],
    name: "Rosemont Theatre",
    date: "2/19/2016    "
  },
  {
  location: [35.8951,	139.6307],
  name: "Saitama Super Arena",
  date: "1/27/2018"
  },
{
  location: [37.51502615,	127.0737253  ],
  name: "Seoul Olympic Stadium  ",
  date: "5/27/2017  "
},
{
  location: [34.2427052,	108.934415  ],
  name: "Shaanxi Province Stadium  ",
  date: "8/2/2014, 8/22/2015    "
},
{
  location: [1.300152,	103.874376],
  name: "Singapore Indoor Stadium",
  date: "8/23/2014, 1/9/2016, 4/2/2017, 3/3/2018"
},
{
  location: [14.6211, 121.0530],
  name: "Smart Araneta Coliseum",
  date: "2/25/2017  "
},
{
  location: [3.1400, 101.7003],
  name: "Stadium Merdeka",
  date: "3/12/2016, 3/18/2017    "
},
{
  location: [25.0514,	121.5497],
  name: "Taipei Arena",
  date: "7/11/2014, 6/12/2015, 11/26/2016, 2/10/2018"
},
{
  location: [33.95822585,	-118.3419808  ],
  name: "The Forum",
  date: "4/28/2017  "
},
{
  location: [32.76680575,	-96.98243162  ],
  name: "The Theatre at Grand Prairie",
  date: "2/10/2016  "
},
{
  location: [49.260531,	-123.2447642  ],
  name: "Thunderbird Sports Centre",
  date: "2/12/2016  "
},
{
  location: [35.7056, 139.7519  ],
  name: "Tokyo Dome",
  date: "11/6/2015, 11/30/2016    "
},
{
  location: [30.5005, 114.1719  ],
  name: "Wuhan Sports Center",
  date: "6/14/2014  "
},
{
  location: [35.6676, 139.7001  ],
  name: "Yoyogi National Gymnasium",
  date: "11/18/2014  "
}
];


//df["location"] = [df["longitude"], df["latitude"]]
// df.to_json

/*
// Loop through the cities array and create one marker for each city, bind a popup containing its name and population add it to the map
for (var i = 0; i < places.length; i++) {
  var place = places[i];
  L.marker(place.location)
    .bindPopup("<h3>" + place.name + "</h1> <hr> <h3>Date " + place.date + "</h3>")
    .addTo(myMap);
}
*/

// STARTHERE 
// Create a new marker cluster group
var markers = L.markerClusterGroup();

// Loop through data
// for place in places --in python
for (var i = 0; i < places.length; i++) {

  // Set the data location property to a variable
  var place = places[i];

  // Check for location property
  if (place.location) {

    // Add a new marker to the cluster group and bind a pop-up
    markers.addLayer(L.marker(place.location)
    .bindPopup("<h3>" + place.name + "</h1> <hr> <h3>Date " + place.date + "</h3>"));
  }

}

// Add our marker cluster layer to the map
myMap.addLayer(markers);