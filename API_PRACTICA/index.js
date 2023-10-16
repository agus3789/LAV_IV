document.addEventListener('DOMContentLoaded', function () {

    const listasEmpleados = document.getElementById("listasDeEmpleados");
    const btnGET = document.getElementById("getAPI");
    const formulario = document.getElementById("formulario");
    const formDELETE = document.getElementById("formDELETE");

    btnGET.onclick = () =>{
      asyncCall();
    };

    formulario.addEventListener('submit', (e) => {
      e.preventDefault();
      const empleado = {
        companyId: 3,
        email: 'aaaa@adasd.com',
        employeeId: 1006,
        firstName: 'example@firstName',
        lastName: 'example@lastName',
      }
      asyncCallPost(JSON.stringify(empleado));
    });

    formDELETE.addEventListener('submit',(e) => {
      e.preventDefault();
      const employeeId = document.getElementById('idDELETE');
      
      asyncCallDelete(employeeId.value);
    });

    function PedidoAPI(pedido, url, dato) {
      return new Promise( (resolve,reject) => {
    
        const xhr = new XMLHttpRequest(); //1
  
        xhr.open(pedido, url); //2
        
        if(dato || pedido === 'DELETE'){
          xhr.setRequestHeader('Content-Type', 'application/json');
        }

        xhr.onload = function() { //4
          if (xhr.status == 200) {
            if(!dato && pedido !== 'DELETE'){
              console.log(this.response);
              let data = JSON.parse(this.response);
              resolve(data);
            }
            else{
              resolve(xhr.response);
            }
          }else{
            reject(new Error('Error en la conexion'));
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
    
    async function asyncCallDelete(employeeId) {
        try{ 
            PedidoAPI('DELETE', `https://utn-lubnan-api-1.herokuapp.com/api/Employee/${employeeId}`).then(responseData => {
              console.log(responseData);
            });
      }catch(error){
        console.log(error);
      };
    }

  
});