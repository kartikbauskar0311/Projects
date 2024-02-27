let captchachecked = false;
function beforesubmit(event) {
  if(captchachecked) {
  let inputDate = document.querySelector(".InputDate");
  let OutputDate = document.querySelector(".OutputDate");
  console.log("Input date value",inputDate.value);//string - date(en_CA)

  let formattedDate = new Date(inputDate.value).toLocaleDateString("en-CA");//use hyphen (-) and not _
  OutputDate.value = formattedDate;
  }else{
    alert("Please check the Captcha first!");
    event.preventDefault();
  }
  
}

// code generated from captcha 
function timestamp() 
{ var response = document.getElementById("g-recaptcha-response");
 if (response == null || response.value.trim() == "") {
  var elems = JSON.parse( 
    document.getElementsByName("captcha_settings")[0].value
    );
    elems["ts"] = JSON.stringify(new Date().getTime());
  document.getElementsByName("captcha_settings")[0].value = JSON.stringify(elems);
 } }
  setInterval(timestamp, 500); 
function captchsuccess() {
  captchachecked= true;
}