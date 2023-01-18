$(document).ready(function () {

  // $('.modal').hide()
  $('.btn-open').click(function(){
    $('.modal').fadeIn(300)
    $('.overlay').removeClass('hidden')
  })
  $('.btn-close').click(function(){
    $('.modal').fadeOut(200)
    $('.overlay').addClass('hidden')
  })
  $('.overlay').click(function(){
    $('.modal').fadeOut(200)
    $('.overlay').addClass('hidden')
  })


  $('#payment_form').submit(function (e) {
    e.preventDefault();
    let first_name = $('#first_name').val();
    let last_name = $('#last_name').val();
    let phone = $('#phone').val();
    let email = $('#email').val();

    $('.error').remove();

    // Firstname validation
    if (first_name.length < 1) {
      $('#first_name').after(
          '<span class="error">This field is required</span>')
    } else {
      let regEx = /^[a-zA-Z]+[a-zA-Z]+$/
      let validFirstName = regEx.test(first_name);
      if (!validFirstName) {
        $('#first_name').after('<span class="error">Enter a valid first name</span>');
      }
    }

    // Lastname validation
    if (last_name.length < 1) {
      $('#last_name').after(
          '<span class="error">This field is required</span>',
      );
    } else {
      let regEx = /^[a-zA-Z]+[a-zA-Z]+$/
      let validLastName = regEx.test(last_name);
      if (!validLastName) {
        $('#last_name').after('<span class="error">Enter a valid last name</span>');
      }
    }

    // Email validation
    if (email.length < 1) {
      $('#email').after('<span class="error">This field is required</span>');
    } else {
      let regEx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      let validEmail = regEx.test(email);
      if (!validEmail) {
        $('#email').after('<span class="error">Enter a valid email</span>');
      }
    }

    // Phone validation
    if (phone.length < 1) {
      $('#phone').after('<span class="error">This field is required</span>');
    } else if (phone.split(' ').join('').length < 11) {
      $('#phone').after('<span class="error">Too short phone number</span>');
    } else {
      let regEx = /^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]*$/g
      let validPhone = regEx.test(phone);
      if (!validPhone) {
        $('#phone').after('<span class="error">Enter a valid phone number</span>');
      }
    }
  });
});
