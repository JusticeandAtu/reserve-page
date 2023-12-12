function sendAppoin() {
    var params = {
      name: document.getElementById("name").value,
      email: document.getElementById("email_address").value,
      phone: document.getElementById("phone").value,
      hairdresser: document.getElementById("hairdresser").value,
      date: document.getElementById("date").value,
      message: document.getElementById("message").value,
    };
  
    const serviceID = "service_z9o7naz";
    const templateID = "template_w2pany6";
  
      emailjs.send(serviceID, templateID, params)
      .then(res=>{
          document.getElementById("name").value = "";
          document.getElementById("email_address").value = "";
          document.getElementById("phone").value = "";
          document.getElementById("hairdresser").value = "";
          document.getElementById("date").value = "";
          document.getElementById("message").value = "";
          
       
          console.log(res);
          alert("Request Submitted Successfully!!")
  
      })
      .catch(err=>console.log(err));
  
  }