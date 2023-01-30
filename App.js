// api url 
const api_url =
  "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=";
let new_api_url ;

// function to get image
async function getImage() {

  let response = await fetch(new_api_url);
  
  // if status is 200 ok
  if (response.status === 200) {

    // getting blob data from api 
    const imageBlob = await response.blob();
    const imageObjectURL = URL.createObjectURL(imageBlob);

    // getting img element and setting new created image
    let image = document.getElementById("img");
    image.src = imageObjectURL;

    // changing img display from none to inline
    image.style.display = 'inline';
  }else
    console.log("HTTP-Error: " + response.status)
  
}

// event listener for generate button
let submitBtn = document.getElementById("submit");
submitBtn.addEventListener("click",()=>{

    // takes input from the user
    let input  = document.getElementById("input").value;

    // updating the url as per user input to make api call
    new_api_url = api_url + input;

    // calling getImage function
    getImage();
})

