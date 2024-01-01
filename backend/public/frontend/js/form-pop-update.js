 //event deligation , event prapogation
 let selectedItems = [];
 let addCartBtn = document.querySelector('.add-to-cart');


 let update_form = document.querySelector('.update-form');
 let cancel_btn = document.querySelector('.cancel-btn');
 let viewProductBody = document.querySelector('.viewProductBody');
 console.log('sssss')
 console.log(viewProductBody);
 document.addEventListener('click',(e)=>{
      const currentEle  =  e.target;
      if(currentEle.tagName == 'BUTTON' && currentEle.textContent == 'Edit'){
          update_form.classList.add('active');       
           viewProductBody.style.filter = 'blur(20px)';
      }
      else if(currentEle.tagName === 'INPUT' && currentEle.type === "checkbox"){
           const uuid = currentEle.parentElement.parentElement.getAttribute('data-uuid')
           console.log(uuid);
           if(currentEle.checked){
                selectedItems.push(uuid);
                showAddTOCartBtn();
          }else{
               selectedItems = selectedItems.filter((eachUUID)=>{
                     return eachUUID !== uuid;
               });
               showAddTOCartBtn();
          } 
          console.log(selectedItems);
      }

    //   else{     
    //      update_form.classList.remove('active');
    //   }
})
 function proceedItems(){
     //  if(selectedItems.length > 0){

     //  }
 }
function popup(){
     viewProductBody.style.filter = 'blur(0px)'
     update_form.classList.remove('active');
}
cancel_btn.addEventListener('click',(e)=>{
     popup();
     e.preventDefault();
})

viewProductBody.addEventListener('click',(e)=>{
     popup();
})

const showAddTOCartBtn = ()=>{
    if(selectedItems.length > 0 ){
      addCartBtn.style.display = 'block'
    }else{
     addCartBtn.style.display = 'none'
    }    
}