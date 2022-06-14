{const autos = require("./autos")

const concesionaria = {
    autos: autos
    buscarAuto : function(patente){
        let i = autos.findIndex (x => x.patente == patente);
      
        return i != -1 ? autos[i] : null;
     },
    
     venderAuto: function (patente) {
        let auto = this.buscarAuto(patente);
        if (auto) {
          auto.vendido = true;
         }
},

autosParaLaVenta: function(){
    return autos = this.autos.filter(function (autos){
          return !autos.vendido
       })
    },
autosNuevos : function(autos){
    const auto = this.autosParaLaVenta(function(autos){
   if (auto.km<100){
            return auto
        }
    })
}
};

}