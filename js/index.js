import $ from "jquery";
import "../css/index.css";
$("#theme").on("change", () => {
    changeTheme(!nowTheme);
    changePref(!nowTheme);
})

let addr = "http://rings.mimbol.ru:3000"
if (localStorage.auth === 'true') {
    window.location.replace("/schedule.html");
}
$("#button").on("click", () => {
    var email = $("#email").val(),
        password = $("#password").val()
    if (email == "")
        Swal.fire(
            'Ошибочка',
            'Поле почты пустое',
            'error'
        )
    else if (password == "")
        Swal.fire(
            'Ошибочка',
            'Поле пароля пустое',
            'error'
        )
    else {
        $.ajax({
            url: addr + '/auth',
            method: 'get',
            dataType: 'json',
            data: {
                email: email,
                password: password
            },
            success: function(data) {
                console.log(data)
                if (data.status == "success") {
                    localStorage.auth = true;
                    localStorage.jwt = data.jwt;
                    window.location.replace("/schedule.html");
                } else {
                    Swal.fire(
                        'Ошибочка',
                        'Неизвестная ошибка',
                        'error'
                    )
                }
            },
            error: function(data, b, c) {
                console.log(data, b, c)
                if (data.status == 404) {
                    Swal.fire(
                        'Ошибочка',
                        'Неверный логин или пароль',
                        'error'
                    )
                } else {
                    Swal.fire(
                        'Ошибочка',
                        'Неизвестная ошибка',
                        'error'
                    )
                }

            }
        });
    }
})