function showChecked() {

    console.log('insid')
    if (document.querySelectorAll(`input:checked:enabled`).length == 5) {
        alert('Congrats, 5 tasks have been completed')
    }

}



function myFunction() {
    setTimeout(function () {

        document.querySelectorAll(`input[type="checkbox"]`).forEach(i => {

            i.onclick = function () {
                showChecked();
                return true;
            }
        });
    }, 2000);

    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function () {

        if (this.readyState == 4 && this.status == 200) {

            var response = JSON.parse(this.responseText);
            var ulList = `<ul class="list-group ">`
            for (i = 0; i < response.length; i++) {
                if (response[i].completed === true) {

                    ulList += `<li class="list-group-item bg-transparent"><input type="checkbox" class="form-check-input" checked disabled> ${response[i].title}</li>`;


                } else {
                    ulList += `<li class="list-group-item bg-transparent"><input type="checkbox" enabled">  ${response[i].title}</li>`;
                }
            }


            ulList += "</ul>";

            document.getElementById("tbl").innerHTML = ulList;
        }
    }
    xhttp.open("get", "https://jsonplaceholder.typicode.com/todos", true);
    xhttp.send();

}






function login(callback) {
    let pass = document.getElementById("password");
    let email = document.getElementById("email");
    if (pass.value === "12345" && email.value === "admin") {
        callback();
    } else {
        alert('Invalid username or password, please try again!');
        return false;
    }

}

function redirect() {
    document.getElementById("todo").action = "todoList.html"
}



myFunction();