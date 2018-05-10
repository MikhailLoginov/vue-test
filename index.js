var testTask = new Vue({
    el: "#main",
    methods: {
        run: function (event) {
            var inputData = document.getElementById('input');
            try {
                var data = eval("(" + inputData.value + ")");
                actions(data);
            }
            catch (error) {
                alert('Невозможно обработать этот массив');
            }
        }
    }
});

var actions = function(data) {
    switch (data.code) {
        case 450:
            console.log("OK");
            break;
        case 506:
            alert(data.message);
            break;
        case 310:
            location.href = 'http://www.yandex.ru/';
            break;
        case 570:
            console.log("ERROR");
            alert(data.message);
            break;
        case 605:
            var parentElement = document.getElementsByClassName("container")[0];
            var div = document.createElement('div');
            div.className = "message";
            div.innerHTML = data.message;
            parentElement.appendChild(div);
            break;
        default:
            alert("Неизвестный код");
    }
}
