
        // Função para abrir o pop-up
        function openModal1() {
            document.getElementById("myModal1").style.display = "flex";
        }

        // Função para fechar o pop-up
        function closeModal1() {
            document.getElementById("myModal1").style.display = "none";
        }

        // Fechar o pop-up ao clicar fora dele
        window.onclick = function(event) {
            let modal = document.getElementById("myModal1");
            if (event.target === modal) {
                closeModal1();
            }
        }



    // Função para abrir o pop-up
    function openModal2() {
        document.getElementById("myModal2").style.display = "flex";
    }

    // Função para fechar o pop-up
    function closeModal2() {
        document.getElementById("myModal2").style.display = "none";
    }

    // Fechar o pop-up ao clicar fora dele
    window.onclick = function(event) {
        let modal = document.getElementById("myModal2");
        if (event.target === modal) {
            closeModal2();
        } 
    }
