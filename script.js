document.addEventListener("DOMContentLoaded", function(){
  $(document).ready(function () {
    $.ajax({
        url: 'https://randomuser.me/api/',
        dataType: 'json',
        success: function (data) {
            var user = data.results[0];
            $('#email').attr('href', 'mailto:' + user.email);
            $('#email').html(user.email);
            $('#num_contacto').attr('href', 'tel:' + user.cell);
            $('#num_contacto').html(user.cell);
            $('#location').html(user.location.city + ', ' + user.location.state);
            $('#nombre').html(user.name.first + ' ' + user.name.last);
            $('#foto').attr('src', user.picture.large);
        }
    });
  });
});