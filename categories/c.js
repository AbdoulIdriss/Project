function validateForm(){
    //alert("alert")

    var name = document.custom_form.name;
    var email = document.custom_form.email;
        var message = document.custom_form.message;
    var conditions = document.custom_form.conditions;

    
    if(name.value == ""){
        name.nextElementSibling.style.display ="block";
        name.style.border ="1px solid #f00";
        return false;
    }else{
        name.nextElementSibling.style.display ="none";
        name.style.border ="1px solid transparent";
    }
     
    if(!email.value.match(/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/) || email.value == ""){
        email.nextElementSibling.style.display ="block";
        email.style.border ="1px solid #f00";
        return false;
    }else{
        email.nextElementSibling.style.display ="none";
        email.style.border ="1px solid transparent";
    }
    if(message.value == ""){
        message.nextElementSibling.style.display ="block";
        message.style.border ="1px solid #f00";
        return false;
    }else{
        message.nextElementSibling.style.display ="none";
        message.style.border ="1px solid transparent";
    }
    if(conditions.checked == false){
        conditions.nextElementSibling.style.display ="block";
        conditions.style.border ="1px solid #f00";
        return false;
    }else{
        conditions.nextElementSibling.style.display ="none";
        conditions.style.border ="1px solid transparent";
    }
    

}