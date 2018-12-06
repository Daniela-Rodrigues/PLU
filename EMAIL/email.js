function sendEmail(){

    const name =document.querySelector ("#txtname").value
    const message  =document.querySelector ("#txtmessage").value


  //inicializa componente
    emailjs.init("user_DqN91i76hZEFbdP4Kbjc3")
    const template_params = {
        "reply_to": "reply_to_value",
        "from_name": name,
        "to_name": "to_name_value",
        "message_html": message
     }
     
     const service_id = "default_service";
     const template_id = "template_tR7u9Ddm";
     emailjs.send(service_id,template_id,template_params)

console.log ("Olá " + name)

}