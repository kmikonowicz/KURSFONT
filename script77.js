function timeConverter(UNIX_timestamp){
    var a = new Date(UNIX_timestamp * 1000);
    var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    var year = a.getFullYear();
    var month = months[a.getMonth()];
    var date = a.getDate();
    var hour = a.getHours();
    var min = a.getMinutes();
    var sec = a.getSeconds();
    var time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec ;
    return time;
  }
  console.log(timeConverter(0));

let list=[]

const getWeatherInfo = (lat, lon) => {
  fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=04d03c358e8933ac6823da54c340c97b&units=metric&lang=pl`)
  // fetch('https://api.openweathermap.org/data/2.5/forecast?lat=50.2649&lon=19.0238&appid=04d03c358e8933ac6823da54c340c97b&units=metric&lang=pl')
  .then(res => res.json())
  .then(res => {
      // console.log(res.city.name)
      // const h2 = Weatherap.queryselector("h2")
      // document.querySelector(".city h2") .innerText = "KATOWICE"

      // const person = {
      //     name: "John"
      // }

      // console.log(person.name)
        // USTAWIAMY MAIN HEADER
      document.querySelector(".city h2") .innerText = res.city.name
      document.querySelector("img").src = "https://countryflagsapi.com/svg/"+res.city.country
      document.querySelector(".city .sunrise") .innerText = timeConverter(res.city.sunrise)
      document.querySelector(".city .sunset") .innerText = timeConverter(res.city.sunset)

      list = res.list
      changeCubeInfo(0)
      // console.log(res.list)
      // console.log("RES LISTA", res.list)
      // makeWeatherCube(res.list[0])
      // makeWeatherCube(res.list[1])
      // makeWeatherCube(res.list[2])
      // makeWeatherCube(res.list[3])
      // makeWeatherCube(res.list[4])
      // makeWeatherCube(res.list[5])

      // for(const cube of res.list){
      //   console.log(cube)
      //   makeWeatherCube(cube)
      // }

  })
}
// const makeWeatherCube=(params) =>{
//     console.log(params)
//     const cube = document.createElement('div')
//     cube.className = "cube"
//     cube.innerText= "siemanko"
//     document.querySelector('.content').append(cube)

//   // stw??rz nowy div (DOM)
//     const dt_txt = document.createElement('div')
//     // stw??rz nowy div (DOM)
//     dt_txt.innerText = params.dt_txt
//       // przypnij go do cube'a
//     cube.append(dt_txt)


//     document.querySelector('.content').append(cube)
// }

const changeCubeInfo = index =>{
  // console.log("List", list)
  // console.log("INDEX", index)

  console.log("EL", list[index].dt_txt)
  document.querySelector(".cube h3 span").innerHTML = list[index].dt_txt;
  document.querySelector(".cube h3 img").src = `http://openweathermap.org/img/wn/${list[index].weather[0].icon}.png`;
  document.querySelector(".cube h4").innerHTML = list[index].weather[0].description;
  document.querySelector(".weatherMain h3").innerHTML = list[index].main.feels_like +"??C"
  document.querySelector(".minMax .min").innerHTML = list[index].main.temp_min+"??C"
  document.querySelector(".minMax .max").innerHTML = list[index].main.temp_max+"??C"
}

const getLatLonDependOfName = () => {
  const value = document.querySelector("#location").value
  fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${value}&appid=f7475169b48c1a3e45bdcaa1b374c413`)
  .then(res => res.json())
  .then(res => {
    // console.log("lat", res[0].lat)
    // console.log("lon", res[0].lon)
    console.log(res)
    getWeatherInfo(res[0].lat, res[0].lon)
  })

}