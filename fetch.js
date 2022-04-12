let button = document.querySelector('.button')
let inputValue = document.querySelector('.inputValue')
let name = document.querySelector('.name');
let desc = document.querySelector('.description');
let temp = document.querySelector('.temp');


button.addEventListener('click', function(){
    fetch('http://api.openweathermap.org/data/2.5/weather?q='+inputValue.value+'&units=metric&appid=f52a5a29e26bfc5c12481c3d159509ae'
    )
    .then(response => response.json())
    .then(data => {
        
        let nameValue = data['name'];
        let tempValue = data['main']['temp'];
        let descValue = data['weather'][0]['description'];
    
        name.innerHTML = nameValue;
        temp.innerHTML = tempValue;
        desc.innerHTML = descValue;
       
    })
    
    
    .catch(err => alert("Mauvaise ville!"));
    })