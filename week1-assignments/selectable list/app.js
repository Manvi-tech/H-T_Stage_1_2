
var checkboxes = document.querySelectorAll("input[type=checkbox]");


checkboxes.forEach(function(checkbox) {

    checkbox.addEventListener('change', function() {
        
        let li = checkbox.parentElement;

        if(li.classList.contains("bg")){
            li.classList.remove("bg");
        }
        else{
            li.classList.add("bg");
        }
            
  });

});