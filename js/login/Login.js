//Alpha X Software Company
//Mindula Dilthushan
// GMA v2.0.3
// 21-06-25
// Complete
$("#btn_Login").click(function () {
        let userName = $('#txtUserName').val();
        let password = $('#txtPassword').val();

        if (userName != "") {
            if (password !== "") {
                if (userName == "admin" && password == "1023") {
                    window.location = "../../loading.htm";
                } else {
                            alert("Invalid User Name and Password");
                        
                    }
                
            } else {
                alert("place Enter Password");
            }
        } else {
            alert("place Enter User Name");
        }

    }
);
