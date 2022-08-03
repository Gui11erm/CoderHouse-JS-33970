/*      VAMOS A SIMULADOR UN REGISTRO
        DE PRODUCTOS CON TRAZABILIDAD
        PARA UNA DROGUERIA QUE LE COMPRA
        PRODUCTOS A LABORATORIOS
        --------------------------------
        INGRESAREMOS EL NOMBRE DEL PRODUCTO,
        UN SECTOR QUE LE ASIGNAREMOS, 
        EL LABORATORIO QUE LO FABRICA 
        SU TRAZABILIDAD (INVENTAREMOS CODIGOS)
        SU COSTO Y CANTIDAD, SUPONIENDO QUE ESTAMOS REGISTRANDO
        INGRESOS DE PRODUCTOS EN UN INVENTARIO
        AL FINALIZAR NOS DEVOLVERA UN TABLA CON LOS PRODUCTOS INGRESADOS
        
*/

class Producto {
    constructor (nombreProducto, laboratorio, trazabilidad, costo, stock, sector){
        this.nombreProducto = nombreProducto
        this.laboratorio = laboratorio
        this.trazabilidad = trazabilidad
        this.costo = costo
        this.stock = stock
        this.sector = sector
    }
}

const producto1 = new Producto ("ACTRON 600 X 30", "LABORATORIOS BAYER", "7501318634756", 403.5, 60, "A01")
const producto2 = new Producto ("TAFIROL 1G X 50", "GENOMMA LAB", "7798140258667", 700, 200, "A02")
const producto3 = new Producto ("TAFIROL 1G X 100", "GENOMMA LAB", "4040404040401", 1500, 250, "A03")
const producto4 = new Producto ("LOSACOR 50 X 30", "ROEMMERS SAICF", "7795345009636", 1800, 3000, "A04")
const productos = [producto1, producto2, producto3, producto4]
console.table(productos)


let i = 1, x = 0


do {
    // INICIAMOS CONSULTANDO AL USUARIO
    if(i === 1){
        consulta = prompt("¿Quiere realizar un registro? (SI / NO)").toLowerCase()
        i = i++
    } else (consulta = prompt("¿Quiere realizar otro registro? (SI / NO)").toLowerCase())

    if (consulta !== "si" && consulta !== "no"){
        alert("Ingrese como respuesta SI o NO.")
    }

    if(consulta === "si"){
        let producto = new Producto (
            prompt(`Ingrese el nombre del producto:`).toUpperCase(),
            prompt(`Ingrese el laboratorio fabricante:`).toUpperCase(),
            prompt(`Ingrese la trazabilidad:`),
            parseFloat(prompt(`Ingrese el costo:`)),
            parseInt(prompt("Ingrese la cantidad (stock):")),
            prompt(`Ingrese el sector que le quiere asignar:`).toUpperCase())
                
        productos.push(producto)
    }

        /*
        if(isNaN(Producto.costo) || Producto.costo < 0){
            while(isNaN(Producto.costo) || Producto.costo < 0){
                alert("COSTO NO VALIDO. Ingrese un valor mayor a cero.")
                productos(Producto.costo) = parseFloat(prompt("Ingrese el costo:"))
            }
        }
        
        if(isNaN(Producto.stock) || Producto.stock < 0){
            while(isNaN(Producto.stock) || Producto.stock < 0){
                alert("STOCK NO VALIDO. Ingrese un valor mayor a cero.")
                productos(Producto.stock) = parseInt(prompt("Ingrese la cantidad a ingresar:"))
            }*/

        /* 
                MENSAJE IMPORTANTE
        NO PUDE CREAR UNA CONDICION QUE MODIFIQUE Producto.costo Y Producto.stock EN CASO DE QUE SE INGRESASE UN NUMERO NEGATIVO O ISNAN
        VOY A SEGUIR INVESTIGANDO COMO SE MODIFICA, PERO LO DEJO COMENTADO PARA MOSTRAR LA INTENCION */
        

} while(consulta !== "no")

console.table(productos)