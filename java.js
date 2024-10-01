 
            function  validationform(){
              var name = document.myform.name.value;
              var email = document.myform.email.value
              var password = document.myform.password.value;
              if(name==null || name==""){
                alert('form is blank')

              }else if (password.length<5){
                alert("password must be 5")
              }
            }
         