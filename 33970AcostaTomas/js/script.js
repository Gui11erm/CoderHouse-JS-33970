/*  VAMOS A SIMULAR UN LIBRO CONTABLE
    DONDE SE VA A SOLICITAR REGISTRAR
         INGRESOS Y EGRESOS
     DE VALORES Y EN CONCEPTO DE QUE
    
    AL FINAL SE DEVOLVERA EL SALDO FINAL
    ACLARANDO SI ES A FAVOR, NEGATIVO O EN 0 */

let presupuesto = 0
let importe
let concepto 
let consulta
let tipo 
let i = 1

/*EN LA PAGINA VAMOS A REGISTRAR INGRESOS Y EGRESOS */
do{
    if(i === 1){
        consulta = prompt("¿Quiere realizar un registro? (SI / NO)").toLowerCase()
        i = i + 1
    } else (consulta = prompt("¿Quiere realizar otro registro? (SI / NO)").toLowerCase())

    if(consulta == "si"){
        tipo = prompt("¿Que tipo de registro quiere hacer? (INGRESO / EGRESO)").toLowerCase()
        while (tipo !== "egreso" && tipo !== "ingreso"){
            alert("Respuesta no valida. Ingrese como respuesta INGRESO o EGRESO")
            tipo = prompt("¿Que tipo de registro quiere hacer? (INGRESO / EGRESO)").toLowerCase()
        }
        if(tipo === "egreso"){
            importe = parseFloat(prompt("Ingrese el importe sin el signo '-'"))
            while (isNaN(importe) || (importe < 1) || (importe === 0)){
            alert("Número no valido. Ingrese un número mayor a 0.")
            }
            presupuesto = presupuesto - importe
            concepto = prompt(`$${importe} de EGRESO en concepto de`) // no se condiciona a "concepto" ya que puede ser númerico el string
            console.log(`$${importe} en concepto de pago de ${concepto}`)
            
        } 
        
        if (tipo === "ingreso"){
            importe = parseFloat(prompt("Ingrese el importe"))
            while (isNaN(importe) || (importe < 1) || (importe === 0)){
                alert("Número no valido. Ingrese un número mayor a 0.")
                importe = parseFloat(prompt("Ingrese el importe"))
            }
            presupuesto = importe + presupuesto
            concepto = prompt(`$${importe} de INGRESO en concepto de`) // no se condiciona a "concepto" ya que puede ser númerico el string
            console.log(`$${importe} en concepto de cobro de ${concepto}`)            
        }
    } 
    
    if (consulta !== "si" && consulta !== "no"){
        alert("Ingrese como respuesta SI o NO.")
    }
} while (consulta !== "no")

if(presupuesto > 0){
    alert(`Tiene un saldo a favor de $${presupuesto}`)
    console.log(`Tiene un saldo a favor de $${presupuesto}`)
}

if(presupuesto < 0){
    alert(`Tiene un saldo negativo de -$${presupuesto}`)
    console.log(`Tiene un saldo negativo de -$${presupuesto}`)
}

if(presupuesto == 0){
    alert(`Su saldo es $${presupuesto}`)
    console.log(`Su saldo es $${presupuesto}`)
}