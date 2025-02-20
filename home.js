const body = document.querySelector("body")
      sidebar = document.querySelector(".sidebar")
      toggle = document.querySelector(".toggle")


      toggle.addEventListener("click", () =>{
        sidebar.classList.toggle("close");
      });

      