

function greaterThan(){
    a= document.getElementById("txt1").value
    b= document.getElementById("txt2").value
    c= document.getElementById("txt3").value

    if(a>b){
        if (c>a){
        console.log("The Greater Number is",c);
        }
        
        else{
            console.log("The Greater Number is",a)
        }
    }

    else{
        if (b>c){
        console.log("The Greater Number is",b)
        }

        else{
            console.log("The Greater Number is",c)
        }
    }

}


