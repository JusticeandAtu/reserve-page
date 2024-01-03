function sendAppoin() {
    var params = {
      name: document.getElementById("name").value,
      email: document.getElementById("emailaddress").value,
      phone: document.getElementById("phone").value,
      hairdresser: document.getElementById("hairdresser").value,
      category: document.getElementById("servcategory").value,
      date: document.getElementById("date").value,
      time: document.getElementById("time").value,
      message: document.getElementById("message").value
    };
  
    const serviceID = "service_z9o7naz";
    const templateID = "template_w2pany6";
  
      emailjs.send(serviceID, templateID, params)
      .then(res=>{
          document.getElementById("name").value = "";
          document.getElementById("emailaddress").value = "";
          document.getElementById("phone").value = "";
          document.getElementById("hairdresser").value = "";
          document.getElementById("servcategory").value = "";
          document.getElementById("date").value = "";
          document.getElementById("time").value = "";
          document.getElementById("message").value = "";
          
       
          console.log(res);
          alert("Request Submitted Successfully!")
  
      })
      .catch(err=>console.log(err));

      var foreignPage = 'https://www.fresha.com/a/peakpamper-salon-spa-lusaka-9138b-kasiya-crescent-kalundu-x5xhlemt/booking?menu=true&offerItems=sv%3A15719783';

      window.open(foreignPage, '_blank');
  
  }
/*
  function openForeign() {
    // link sample
    var foreignPage = 'https://www.fresha.com/a/peakpamper-salon-spa-lusaka-9138b-kasiya-crescent-kalundu-x5xhlemt/booking?menu=true&offerItems=sv%3A15719783';

      window.open(foreignPage, '_blank');
  }
  // event listener to the button
document.getElementById('appointment-btn').addEventListener('click', openForeign);
*/
