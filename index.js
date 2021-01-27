

var Alerta = document.getElementById("alerta");
Alerta.style.display = 'none';



(function() {
  'use strict';
  window.addEventListener('load', function() {
    
    var forms = document.getElementsByClassName('needs-validation');
    
    var validation = Array.prototype.filter.call(forms, function(form) {
      form.addEventListener('submit', function(event) {
        if (form.checkValidity() === false) {
            Alerta.style.display = "block";
            event.preventDefault();
            event.stopPropagation();
            
        }
        form.classList.add('was-validated');
      }, false);
    });
    
  }, false);
  
})();



(function() {
  'use strict';
  window.addEventListener('load', function() {
    
    var forms = document.getElementsByClassName('needs-validation');
    
    var validation = Array.prototype.filter.call(forms, function(form) {
      form.addEventListener('submit', function(event) {
        if (form.checkValidity() === true) {
          alert("El formulado ha sido enviado de forma exitosa");
        }
        form.classList.add('validated');
      }, true);
    });
    
  }, true);
  
})();


(function() {
  'use strict';
  window.addEventListener('load', function() {
    
    var forms = document.getElementsByClassName('needs-validation');
    
    var validation = Array.prototype.filter.call(forms, function(form) {
      form.addEventListener('reset', function(event) {
        if (form.checkValidity() === false) {
            Alerta.style.display = "block";
            
            $(this)[0].reset();
            setTimeout(() => { $(this).attr('class', "needs-validation") }, 1);
            Alerta.style.display = 'none';
        }
        form.classList.add('was-validated');

      }, false);
    });
    
  }, false);
  
})();

