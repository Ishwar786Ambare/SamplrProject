const clearButton =  document.getElementById('clear-btn')
const input_search =  document.getElementById("input-search")
const search_btn =  document.getElementById("search-btn")

clearButton.addEventListener("click", ()=>{  input_search.value = '';});

search_btn.addEventListener("click", search_btn_functions);

function search_btn_functions() {
  fetch('travel_recommendation_api.json').then(function (response) {
    return response.json()
  }).then(function (data) {
    console.log(data);
  }).catch(function (error) {
    console.error("Somthis error happend", error)
  })
}


// function search_btn_functions() {
//
//   fetch('http://127.0.0.1:9876/travel_recommendation_api.json',{
//     mode:'no-cors',
//
//   })
//   .then((response) => response.json())
//   .then((data) => {
//     alert(data)
//     console.log(data)
//   })
//   .catch((error) => console.log(error.message))
// }
