import $ from "jquery";
import Swal from 'sweetalert2'
import "../css/schedule.css";
Swal.fire({
    title: 'Error!',
    text: 'Do you want to continue',
    icon: 'error',
    confirmButtonText: 'Cool'
})
let addr = "http://rings.mimbol.ru:3000"
var schedule = [];
var day_now = 0;
var lesson = ''
window.onload = () => updSch(0);
// $("#add").on("click", () => {
//     $("#schedule").append(lesson.replace("{1}", "12:00").replace("{2}", "14:00"))
//     'error'
// })
$("#exit").on("click", () => {
    localStorage.auth = false;
    delete localStorage.jwt;
    window.location.replace("/index.html");
})
$("#save").on("click", () => {
    var lessons = $(".lesson");
    var schedule_now = [];
    console.log(lessons);
    for (var i = 0; i < lessons.length; i++) {
        console.log(i)
        var a = [$(".lesson")[i].children[0].value.split(":"), $(".lesson")[i].children[2].value.split(":")];
        console.log(a)
        schedule_now.push(a)
    }
    console.log(schedule_now)
    full_schedule[day_now] = schedule_now;
    console.log(full_schedule);
    $.ajax({
        url: addr + '/schedule',
        method: 'put',
        dataType: 'json',
        headers: {
            'Authorization': "Bearer " + localStorage.jwt
        },
        data: JSON.stringify(full_schedule),
        processData: false,
        contentType: 'application/json',
        success: function(data) {
            console.log(data)
            if (data.status == "success") {
                Swal.fire(
                    'Успешно',
                    'Расписание обновлено!',
                    'success'
                )
            } else {
                Swal.fire(
                    'Ошибочка',
                    'Неизвестная ошибка',
                    'error'
                )
            }
        },
        error: function(data) {
            console.log(data)
            Swal.fire(
                'Ошибочка',
                'Неизвестная ошибка',
                'error'
            )
        }
    });
})

function updSch(day) {
    day_now = day;
    $.ajax({
        url: addr + '/schedule',
        method: 'get',
        dataType: 'json',
        success: function(data) {
            now = new Date()
            schedule = data[day]
            full_schedule = data;
            console.log(schedule)
            var render = ""
            for (var i = 0; i < schedule.length; i++) {
                item = schedule[i]
                if (String(item[0][0]).length == 1)
                    item[0][0] = "0" + item[0][0]
                if (String(item[0][1]).length == 1)
                    item[0][1] = "0" + item[0][1]
                if (String(item[1][0]).length == 1)
                    item[1][0] = "0" + item[1][0]
                if (String(item[1][1]).length == 1)
                    item[1][1] = "0" + item[1][1]
                render += lesson.replace("{1}", item[0][0] + ":" + item[0][1]).replace("{2}", item[1][0] + ":" + item[1][1])
            }
            $("#schedule").html(render)
        },
        error: function(data) {
            console.log(data)
            Swal.fire(
                'Ошибочка',
                'Неизвестная ошибка',
                'error'
            )
        }
    });

}
$("#week").on('change', () => {
    updSch($("#week").val())
});