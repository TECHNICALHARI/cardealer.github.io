        window.addEventListener('load', () => document.querySelector('.preloader')
            .classList.add('hidePreloader'))
        function validation() {
            var user = document.getElementById("user").value;
            var correct_way = /^[A-Za-z]+$/
            var mobileNumber = document.getElementById("mobileNumber").value;
            var email = document.getElementById("email").value;
            if (user == "") {
                document.getElementById("username").innerHTML = "**Please enter the username";
                return false;
            };
            if (user.match(correct_way)) {
                true;
            }
            else {
                document.getElementById("username").innerHTML = "** Only characters are allowed";
                return false;
            };
            if ((user.length <= 2) || (user.length >= 20)) {
                document.getElementById("username").innerHTML = "** Username should be between 2 to 20 characters";
                return false;
            };
            if (mobileNumber == "") {
                document.getElementById("mobile-number").innerHTML = "** Please fill the Mobile no.";
                return false;
            };
            if (isNaN(mobileNumber)) {
                document.getElementById("mobile-number").innerHTML = "** Only No.are allowed";
                return false;
            };
            if (mobileNumber.length != 10) {
                document.getElementById("mobile-number").innerHTML = "** Invalid number";
                return false;
            };
            if (email == "") {
                document.getElementById("emailid").innerHTML = "** Please enter the email";
                return false;
            };
            if (email.indexOf('@') == 0) {
                document.getElementById("emailid").innerHTML = "** Please write the correct email id";
                return false;
            };
            // if ((email.charAt(email.length - 4) != '.') || (email.charAt(email.length - 3) != '.')) {
            //     document.getElementById("emailid").innerHTML = "** Invalid domain name";
            //     return false;
            // }
        }
        // // counter start
        // jQuery(document).ready(function ($) {
        //     $('.count').counterUp({
        //         delay: 10,
        //         time: 2000
        //     });
        // });
        // // counter end
        // get the button;
        mybutton = document.getElementById("myBtn");
        // when the user scrolls down 20px from the top of the document, show the button
        window.onscroll = function () { scrollFunction() };
        function scrollFunction() {
            if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
                mybutton.style.display = "block"
            } else {
                mybutton.style.display = "none"
            }
        }
        // When the user clicks on the button,scroll to the top of the document
        function topFunction() {
            document.body.scrollTop = 0; //for safari
            document.documentElement.scrollTop = 0;//for crome, firefox, IE and Opera
        };


