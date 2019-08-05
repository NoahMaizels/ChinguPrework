
mapboxgl.accessToken = 'pk.eyJ1Ijoibm9haG5pdXdhIiwiYSI6ImNqeXR0emI4bTA0bnMzZWxweXBucDRtbjYifQ.WQImaF6QATc2YuWYggPVhA';

let map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/dark-v10',
    center: [116.3, 39.9],
    zoom: 10,
});

let places = [
  {
   name: "City Center",
  location:[ 116.35, 39.9],
  },
  {
    name: "Forbidden City",
    location: [116.397, 39.915],
   },

  {
    name: "Tiananmen Square",
    location: [116.39, 39.90],
  },
  {
    name: "Beijing National Stadium",
    location: [116.39, 39.99],
  },
  {
    name: "Drum Tower Gulou",
    location: [116.3959, 39.9412],
  },
  {
    name: "Sanlitun Soho",
    location: [116.4542, 39.9327],
  },
  {
    name: "798 Art Zone",
    location: [116.4961, 39.9841],
  },
  {
    name: "Peking University",
    location: [116.3059, 39.9869],
  },

  
]

let markers = []

places.forEach(
  (place) => {
    let popup = new mapboxgl.Popup({ 
      offset: 25,
    })
    .setHTML(`<h1>${place.name}</h1>`)
   
    let marker = new mapboxgl.Marker()
    .setLngLat([place.location[0], place.location[1]])
    .setPopup(popup)
    .addTo(map)
    place.marker = marker
    place.resultElement = document.createElement('div')
    place.resultElement.className = "result-container"
    place.resultElement.innerHTML = `<div class='result'>${place.name}</div><hr>`
    place.resultElement.id = place.name
    sidebar.appendChild(place.resultElement)
  }
)



let menu = document.getElementById("sidebar")

function menuBarClick() {
  menu.classList.toggle("hidden")
}

let input = document.getElementById("input")






function onInputChange() {
  let elementsToRender = []
  places.forEach(place => {
    place.marker.remove()
    let placeElement = document.getElementById(place.name)
    if (placeElement) placeElement.remove()
  })

  if (input.value.trim() === ""){
    places.forEach(place => {
      place.marker.addTo(map)
      sidebar.appendChild(place.resultElement)
    })
    return
  }

  let regex = new RegExp(`${input.value}`, 'gi')
  places.forEach( (place) => {
    if(place.name.search(regex) !== -1) {
      place.marker.addTo(map)
      sidebar.appendChild(place.resultElement)
    }
  })
}




  