function calcularDescuento (precio, procentaje){
    return precio-(precio*procentaje/100);
}

module.exports= calcularDescuento;