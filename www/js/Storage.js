(function(){
    var app = angular.module('starter.Storage', []);
    
    app.factory('Storage', function(){
        
        var bd = angular.fromJson(window.localStorage['bd'] || '{}');
        function persist(){
            window.localStorage['bd'] = angular.toJson(bd);
        }
        
        return {
          nuevo: function(){
              bd = {
                        receta: [
                            {id: 1, nombre: "Huitlacoche con crema", img: "../img/hui.jpg"},
                            {id: 2, nombre: "Fritada de ranas", img: "../img/rana.jpg"},
                            {id: 3, nombre: "Tlacoyos", img: "../img/tla.png"},
                            {id: 4, nombre: "Tostadas de pata", img: "../img/pata.png"},
                            {id: 5, nombre: "Nopales con chipotle ", img: "../img/taco.jpg"}
                        ],
                        receta_ingrediente: [
                                                {id_receta: 1, id_ingrediente: 1},
                                                {id_receta: 2, id_ingrediente: 3},
                                                {id_receta: 2, id_ingrediente: 4},
                                                {id_receta: 3, id_ingrediente: 4},
                                                {id_receta: 4, id_ingrediente: 3},
                                                {id_receta: 4, id_ingrediente: 1},
                                                {id_receta: 5, id_ingrediente: 4}
                                            ],
                        ingrediente: [
                            {id: 1, nombre: "Crema"},
                            {id: 2, nombre: "Ostiones en su Centro"},
                            {id: 3, nombre: "Rana"},
                            {id: 4, nombre: "Queso Bas"},
                            {id: 5, nombre: "Salsa"},
                            {id: 6, nombre: "Nopales"}
                        ],
                        //pedido_receta: [],
                        pedido: [],
                        cliente: [
                            {
                                nombre: "Jaime", 
                                password: "12345", 
                                email: "Jaime@gmail.com", 
                                telefono: "5569696969", 
                                ubicacion: "Olimpo"
                            },
                            {
                                nombre: "Raul",
                                password: "6969",
                                email: "raulms@itesm.mx",
                                telefono: "5569696969",
                                ubicacion: "El cuarto de la princesa"
                            }
                        ]
               };
               
               persist();
               return;
              
          },
          getBd: function(){
            return bd;  
          },
          getCliente: function(nombre, pass){
              for (var i = 0; i < bd.cliente.length; i++){  
                    if(pass === bd.cliente[i].password && nombre.toLowerCase() === bd.cliente[i].nombre.toLowerCase()){
                        return bd.cliente[i];
                    }
              }
              
              return;
          },
          getPass: function(nombre, pass){
              for (var i = 0; i < bd.cliente.length; i++){  
                    if(pass === bd.cliente[i].password && nombre.toLowerCase() === bd.cliente[i].nombre.toLowerCase()){
                        return true;
                    }
              }
              
              return false;
          },
          pushPedido: function(pedido){
              bd.pedido.push(pedido);
              persist();
              return;
          },
          getImagen: function(platillo){
              
              for(var i = 0; i < bd.receta.length; i++){
                  if(platillo === bd.receta[i].nombre){
                      return bd.receta[i].img;
                  }
              }
              
              return;
          },
          getIngredientes: function(id_receta){
              
              var ingredientes = [];
              
              for (var i = 0; i < bd.receta_ingrediente.length; i++){
                  if(id_receta === bd.receta_ingrediente[i].id_receta){
                      for(var j = 0; j < bd.ingrediente.length; j++){
                          if(bd.receta_ingrediente[i].id_ingrediente == bd.ingrediente[j].id){
                              ingredientes.push(bd.ingrediente[j].nombre);
                          }
                      }
                  }
              }
              
              return ingredientes;
          },
          getIdReceta: function(receta){
              
              for(var i = 0; i < bd.receta.length; i++){
                  if(receta === bd.receta[i].nombre){
                      return bd.receta[i].id;
                  }
              }
              
          }
            
        };
    });
}());