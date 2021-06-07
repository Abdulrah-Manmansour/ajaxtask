
function getcontent(){
    var ajax = new XMLHttpRequest();
    ajax.open("GET","https://reqres.in/api/users?page=2");
    ajax.send();
    var rseult="";
    ajax.onreadystatechange = function(){
        if(ajax.readyState == 4 && ajax.status == 200){
            var data1 = JSON.parse(ajax.response);
            var data2=data1.data;
             for(var i =0 ; i< data2.length; i++){
                 console.log(data2[i]);
                  
                 rseult+=`<div class="item">
                 <img src="${data2[i].avatar}"</img>
                 <h4 class="firstname">  ${"firstname:" +  " " +  data2[i].first_name}</h4>
                 <h4 class="lastname">  ${"lastname:" +  " " +  data2[i].first_name}</h4>
                 <p class="email">${data2[i].email}</p>
                 </div>`
             }
          
        }
        var conainer=document.getElementById("rsu").innerHTML=rseult;
    }
    
}
