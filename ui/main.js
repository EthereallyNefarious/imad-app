//counter code
var button=document.getElementById('counter');
button.onclick = function () {
    
    //Create a request object
    var request = new XMLHttpRequest();
    
    //Capture the response and store it in a variable
    request.onreadystatechange = function (){
        if(request.readyState=== XMLHttpRequest.DONE){
            //Take some action
            if(request.status===200){
                var counter = request.responseText
            }
        }
        //Not done yet
    };
    //Make the request
request.open('GET','http://navinthomsy37.imad.hasura-app.io/counter', true);
request.send(null);

    
};
