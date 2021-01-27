






(function() {
  'use strict';
  window.addEventListener('load', function() {
    
    var forms = document.getElementsByClassName('needs-validation');
    
    var validation = Array.prototype.filter.call(forms, function(form) {
      form.addEventListener('submit', function(event) {
        if (form.checkValidity() === false) {
            
            let ZonaAlerta = document.getElementById("zonaAlerta");
            let newDiv = document.createElement('DIV');
            newDiv.innerHTML = "<div class='col-12 p-3 bg-danger text-white rounded' id='alerta'><strong>Faltan espacios por completar</strong></div>";
            ZonaAlerta.appendChild(newDiv);
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






