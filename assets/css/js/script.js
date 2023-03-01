
// FORM VALIDATION


const validate = (form) => {
    console.log("dette er fra vores form ", form);
  
    let errors = [];
  
    console.log(form.fname.value);
  
    if (form.fname.value === "") {
      errors.push("Navn er påkrævet\n");
    }
  
    if (form.email.value === "") {
      errors.push("Email er påkrævet\n");
    }
  
    if (form.age.value === "") {
      errors.push("Alder er påkrævet\n");
    }
  
    if (form.age.value.value >= 12) {
        return true;
      } 
    else {
      (form.age.value.value <= 12) 
      {
        errors.push("Du skal være over 12 år for at måtte fortsætte\n");
          }
  }
  
    if (errors.length > 0) {
      console.log("Number of errors are ", errors.length);
      let msg = "Følgende fejl var fundet: \n\n";
      for (let i = 0; i < errors.length; i++) {
        msg += errors[i];
      }
      alert(msg);
      return false;
    }
  
    return true;
  };
  
  
  
  /* helper functions*/
  function validateEmail(email) {
      var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(email).toLowerCase());
  }
  
  /* eks på kald:
  if (validateEmail("test@example.com")) {
    console.log("Valid email address");
  } else {
    console.log("Invalid email address");
  }
  */
  