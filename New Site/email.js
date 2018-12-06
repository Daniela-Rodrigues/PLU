function sendEmail(){
//valores caixas de texto
    const name =document.querySelector ("#txtName").value
    const message  =document.querySelector ("#txtMessage").value
    const group= document.querySelector("#selectGroup").value
    const email= document.querySelector("#textEmail").value

 //inicializa componente Emails
 emailjs.init("user_DqN91i76hZEFbdP4Kbjc3")

  const template_params = {
    "reply_to": "reply_to_value",
    "from_name": name,
    "to_emaill": email,
    "to_group": group,
    "message_html": message,
 }
 
 const service_id = "default_service"
 const template_id = "template_tR7u9Ddm"
 emailjs.send(service_id,template_id,template_params)

console.log ("Olá " + name)

}