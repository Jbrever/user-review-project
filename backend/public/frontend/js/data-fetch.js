
let api_url = `http://localhost:9000/`;

async function api(){
    try{
        let respone = await fetch(api_url);
        let data = await respone.json();
        if(!respone.ok){
          throw new Error('snsnsns');
        }
        else{
            return data;
        }
    }catch(error){
        console.log(error);
    }

}
let data = await api()

let container = document.querySelector('.container');
let id = document.querySelector('.id');
let img = document.querySelector('.img');
let name1 = document.querySelector('.name');
let age = document.querySelector('.age');
let profession = document.querySelector('.profession');
let about = document.querySelector('.about');
let both_btn = document.querySelectorAll('.both-btn');
console.log(both_btn);
let r_btn = document.querySelector('.r-btn');
let l_btn = document.querySelector('.l-btn');
let add_review = document.querySelector('.add-review-btn');
let view_word = document.querySelector('.view-word');
let day_nigth_mode =document.querySelector('.day-nigth-mode');
let moon = document.querySelector('.fa-moon');
let sun = document.querySelector('.fa-cloud-sun');
let data_length = data.length;  

function insertData(index){
   id.innerText = data[index].id;
   img.style.backgroundImage = `url('${data[index].image}')`      
   name1.innerText = data[index].name;
   age.innerText = data[index].age;
   profession.innerText = data[index].profession;
   about.innerText = data[index].intro;
}  
insertData(0)

let i=0;

 r_btn.addEventListener('click',function(e){
    i++;
    if(i>data_length-1){
        i = 0;
    } 
        viewColorChange(i);
        insertData(i);
    });
    // console.log(colorValue1 ," ", colorValue2," ",colorValue3);

    l_btn.addEventListener('click',function(e){
    console.log(i);
    i--;
    if(i<0){
        i = data_length -1;
    } 
        viewColorChange(i);
        insertData(i);
})

function viewColorChange(j){
    view_word.style.color = `rgb(${20+(190*(j*.35))},${ 20+(190*j*.35)},${20+(195*j*.35)})` 
}

day_nigth_mode.addEventListener('click',(e)=>{
    moon.classList.toggle('active');
    sun.classList.toggle('active');
    let mode = moon.classList.contains('active');
    darkMode(mode);
});

function darkMode(mode){
     if(!mode){
      document.body.style.backgroundColor = null;
      container.style.backgroundColor = null;
      day_nigth_mode.style.backgroundColor =null;
      name1.style.color = null;
      about.style.color = null;
      both_btn[0].style.backgroundColor = null;
      both_btn[1].style.backgroundColor = null;
     }
     else{
      document.body.style.backgroundColor = `rgb(110, 110, 110)`;
      container.style.backgroundColor = 'rgb(70, 70, 70)'
      day_nigth_mode.style.backgroundColor ='white';
      sun.style.color = 'black';
      name1.style.color = 'white';
      about.style.color = 'rgb(191, 192, 194)'
      profession.style.color= 'rgb(0, 98, 255)'
      both_btn[0].style.backgroundColor = 'white';
      both_btn[1].style.backgroundColor = 'white';
     }
}