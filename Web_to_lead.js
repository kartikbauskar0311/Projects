function beforesubmit() {
  let inputDate = document.querySelector(".InputDate");
  let OutputDate = document.querySelector(".OutputDate");
  console.log("Input date value",inputDate.value);//string - date(en_CA)

  let formattedDate = new Date(inputDate.value).toLocaleDateString("en-CA");//use hyphen (-) and not _
  OutputDate.value = formattedDate;
}