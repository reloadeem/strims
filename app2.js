        function checkPassword() {
            var password1 = "streamkiontop";
            var input = document.getElementById("password").value;
            
            if (input === password1) {
                window.location.href = "ogladaj4.html"; // Przekierowanie do strony z transmisją
            } else {
                document.getElementById("error-message").style.display = "block";
            }
        }
