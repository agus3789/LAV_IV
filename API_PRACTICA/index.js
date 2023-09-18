document.addEventListener('DOMContentLoaded', function () {

    const listasEmpleados = document.getElementById("listasDeEmpleados");
    const btnGET = document.getElementById("getAPI");
    const formulario = document.getElementById("formulario");

    btnGET.onclick = () =>{
      asyncCall();
    };

    formulario.addEventListener('submit', (e) => {
      e.preventDefault();
      const empleado = {
        companyId:document.getElementById('idCompania').value,
        email: document.getElementById('email').value,
        employeeId: document.getElementById('idEmpleado').value,
        firstName: document.getElementById('nombre').value,
        lastName: document.getElementById('apellido').value,
      }
      asyncCallPost(JSON.stringify(empleado));
    });

    function PedidoAPI(pedido, url, dato) {
      return new Promise( (resolve,reject) => {
    
        const xhr = new XMLHttpRequest(); //1
  
        xhr.open(pedido, url); //2
        
        if(dato){
          xhr.setRequestHeader('Content-Type', 'application/json');
        }

        xhr.onload = function() { //4
          if (xhr.status == 200) {
            let data = JSON.parse(this.response);
            resolve(data);
          }else{
            reject(new Error('error en la conexion'));
          }
        };
        
        xhr.send(dato); //5
      });
    }
      
    async function asyncCall() {
      try{ 
            let companias = new Array();
            let empleados = new Array();
            companias = await PedidoAPI('GET','https://utn-lubnan-api-1.herokuapp.com/api/Company');
            empleados = await PedidoAPI('GET','https://utn-lubnan-api-1.herokuapp.com/api/Employee');
            
            console.log(companias); 
            console.log(empleados);

            filtrarEmpleados(companias, empleados);
      }catch(error){
        console.log(error);
      };
    }

    function filtrarEmpleados(companias, empleados) {
      companias.forEach(compania => {
          const ulCompania = viewCompanias(compania);
          empleados.forEach(empleado => { 
              if(empleado.companyId == compania.companyId) {
                  viewEmpleado(empleado, ulCompania);
              }
          });
      });
    }

    function viewCompanias(compania) {
        const li = document.createElement('li');
        const ulCompania = document.createElement('ul');
        ulCompania.setAttribute('id',compania.companyId);
        li.innerHTML = `ID: ${compania.companyId} // Nombre compania: ${compania.name}`;
        li.appendChild(ulCompania);
        listasEmpleados.appendChild(li);
        return ulCompania;
    }

    function viewEmpleado(empleado, ulCompania) {
        const li = document.createElement('li');
        datos = toString(empleado);
        li.innerHTML = `${datos}`;
        ulCompania.appendChild(li);
    }   

    function toString(dato) {
        return `ID: ${dato.employeeId}
                - Nombre: ${dato.firstName}
                - Apellido: ${dato.lastName}
                  - Email: ${dato.email}`;
    }

    async function asyncCallPost(dato) {
        try{ 
            PedidoAPI('POST', 'https://utn-lubnan-api-1.herokuapp.com/api/Employee', dato).then(responseData => {
              console.log(responseData);
            });
      }catch(error){
        console.log(error);
      };
    }
    

  
});