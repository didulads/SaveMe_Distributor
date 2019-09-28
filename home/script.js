const prompt = require('electron-prompt');
$(document).ready(function () {
    $("#ofr").click(function () {
        location.href = "../home/index.html";
    });

    $("#itm").click(function () {

        prompt({
            title: 'Please enter client ID',
            inputAttrs: {
                type: 'text'
            }
        })
            .then((r) => {
                if (r === null) {
                    console.log('user cancelled');
                } else {
                    $.ajax({
                        url: "https://savemeapp.000webhostapp.com/Transactions/check_gamer.php",
                        type: "POST",
                        data: { player: r },
                        success: function (res) {
                            console.log('result', res);
                            if (res === "1") {
                                localStorage.setItem("gamer", r);
                                location.href = "../index.html";
                            } else {
                                localStorage.setItem("gamer", 0);
                                alert("Invalid Gamer ID");
                            }
                        }
                    });
                }
            })
            .catch(console.error);
    });
});