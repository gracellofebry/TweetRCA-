$(document).ready(function(){
  $('#username').keyup(function(){
    let usernameValue = $('#username').val();
    let passwordValue = $('#password').val();
    cekValue(usernameValue, passwordValue);
  });
  $('#password').keyup(function(){
    let usernameValue = $('#username').val();
    let passwordValue = $('#password').val();
    cekValue(usernameValue, passwordValue);
  });

    function cekValue(usernameValue = '', passwordValue = ''){

          
        if(usernameValue !== '' && passwordValue !==''){
          $('#btn-login').prop('disabled', false);
        }else{
          $('#btn-login').prop('disabled', true);
        }
  };

  cekValue();
});