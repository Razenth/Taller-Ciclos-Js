//------------------- 1

let num=0, sum=0

num=+prompt('Ingrese un número')
while (num!=0){
    num=+prompt('Ingrese otro número')
    sum+=num
}
alert(`La suma de los números es de ${sum}`)

//-------------------- 2

let random=0

random=Math.floor(Math.random()*10)

while (random!=0){
    random=Math.floor(Math.random()*10)
    console.log(random)
}

//--------------------- 3 

let num=0,max=1000, min=1

for (i=1;i<=20;i++){
    num=Math.floor(Math.random()*(max-min)+min)
    console.log(num)
}

//---------------------- 4 

let num=+prompt('Ingrese un número entero positivo')

if (num>0){
    for (i=1;i<=num;i++){

        if (i%2==1){
            console.log(i)

        }else{
            continue
        }
    }

}else{
    alert('El número debe ser mayor a 0')
}    

//---------------------  5

let niños=0,pesonin=0,jovenes=0,pesojov=0,adultos=0,pesoadul=0,viejos=0,pesoviej=0,categoria=0,peso=0

for (i=1;i<=10;i++){

    categoria=+prompt(`
    Edad Persona ${i}
    
    1. 0-12 años
    2. 13-29 años
    3. 30-59 años
    4. 60 años en adelante`)

    peso=+prompt('Ingrese peso de Persona',(i))

    switch (categoria){

        case 1:
            niños+=1
            pesonin+=peso
            break

        case 2:
            jovenes+=1
            pesojov+=peso
            break

        case 3:
            adultos+=1
            pesoadul+=peso
            break
            
        case 4:
            viejos+=1
            pesoviej+=peso
            break
    }    
}

alert(`

Peso Promedios

Cantidad Niños: ${niños}
Promedio Peso de niños: ${pesonin/niños}

Cantidad Jovenes: ${jovenes}
Promedio Peso de Jovenes: ${pesojov/jovenes}

Cantidad Adultos: ${adultos}
Promedio Peso de Adultos: ${pesoadul/adultos}

Cantidad Viejos: ${viejos}
Promedio Peso de Viejos: ${pesoviej/viejos}`)

//------------------------------ 6 

for (let i=1;i<=5;i++){
    for (let j=1;j<=4;j++){
        if (j<4){
        document.write(`1.${i}.${j}-`)
        }

        else if (j==4){
        document.write(`1.${i}.${j}<br>`)
        }
    }
    
}

//-------------------------------- 7 

let estudio=0,rango=0,edadanimal=0,cont=0,animal,edad1=0,edad2=0,edad3=0

estudio=+prompt(`
Qué animal desea estudiar 

1. Elefantes
2. Jirfas
3. Chimpancés`)

if (estudio==1){
    rango=20
    animal='Elefante'

}else if (estudio==2){
    rango=15
    animal='Jirafa'

}else if (estudio==3){
    rango=40
    animal='Chimpancé'

}else{
    alert('Número no coincide con los dados')
}

for (i=1;i<=rango;i++){

    edadanimal=+prompt(`
    Edad ${animal} ${i}

    1. 0 a 1 año 
    2. De más de 1 año y menos de 3 
    3. De 3 o más años.`)

    if (edadanimal==1){
        edad1+=1

    }else if (edadanimal==2){
        edad2+=1

    }else if (edadanimal==3){
        edad3+=1
    }
}
alert(`
Porcentaje edades

0 a 1 año: ${Math.round((edad1/rango)*100)}%

Más de 1 año y menos de 3: ${Math.round((edad2/rango)*100)}%

De 3 o más años: ${Math.round((edad3/rango)*100)}%
`)

//------------------------- 8 

let cantidadTrab=0,sueldoBase=0,totalventas=0,comision=0,cont=0;

cantidadTrab=+prompt('Ingrese cantidad de vendedores en su empresa')

sueldoBase=+prompt('Ingrese el sueldo base')
if (cantidadTrab>0 && sueldoBase>0){
    for (i=1;i<=cantidadTrab;i++){
        vent1=+prompt(`
        Trabajador ${i}
        Ingrese valor de Venta 1`)
        vent2=+prompt(`
        Trabajador ${i}
        Ingrese valor de Venta 2`)
        vent3=+prompt(`
        Trabajador ${i}
        Ingrese valor de Venta 3`)
        totalventas=vent1+vent2+vent3
        comision=totalventas*0.1
        cont+=(`
        Trabajador ${i}

        Valor Comisiones: ${comision}
        Total Semana (Sueldo,Ventas+Comision):${totalventas+comision+sueldoBase}
        `)
    
    }
}else{
    alert('Error en los datos ingresados')
}
alert(cont)

//------------------------- 9 

let salario=950000,comision=170000,extra=0,NdeAutos=0,valorAuto=0,valorTotal=0,valorFinal=0

NdeAutos=+prompt('Ingrese número de autos vendido')

for (i=1;i<=NdeAutos;i++){
    valorAuto=+prompt(`Ingrese valor de auto ${i}`)
    valorTotal+=valorAuto
}

extra=valorTotal*0.05

valorFinal=(NdeAutos*comision)+extra+valorTotal+salario

alert(`
El salario del Vendedor es de $${valorFinal}
`)

//-------------------------- 10 

let nombre='', nota1,nota2,nota3,nota4,nota5

nombre=prompt('Ingrese nombre del estudiante')

nota1=parseFloat(prompt(`
Nota 1 del 40%
Ingrese nota `))
nota2=parseFloat(prompt(`
Nota 2 del 40%
Ingrese nota `))
nota3=parseFloat(prompt(`
Nota 1 del 60%
Ingrese nota `))
nota4=parseFloat(prompt(`
Nota 2 del 60%
Ingrese nota `))
nota5=parseFloat(prompt(`
Nota 3 del 40%
Ingrese nota `))

prom1=((nota1+nota2)/2)*0.4
prom2=((nota3+nota4+nota5)/3)*0.6
promFinal=prom1+prom2

alert(`El promedio de ${nombre} es de ${(promFinal)}`)
