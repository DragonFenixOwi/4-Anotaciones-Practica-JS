/* 
    ------------------------------
        Author : Osvaldo Aquino
        NickName: Owi
        BUCLES - ARRAY'S
    ------------------------------
*/



/* 
    ------------------
        BUCLE- FOR
    ------------------
*/

/*
    for (variable, Condición, iterador)
        - Construir la variable dentro  de un for
        - Construir la condición
        - y Construir el iterador o contador ("i++"" = "i=i+1")
*/

for (var i=0; i<20;i++)
    {
        // Mientras "i sea menor a 20" no salimos de la linea 14, 15, 16 y 17
        // Existe un pause - bucle
    }

for (var i=0; i<20;i++)
    {
        console.log("Hola");
    }









/*********************************************************************************************/
/* 
    ---------------------------------------------------------------------------------
        ARRAY - BUCLE "FOR" BÁSICO - lECTURA Y UTILIZACIÓN DEL CONTENIDO DE UN ARRAY
    ---------------------------------------------------------------------------------
*/

/*
    - El objeto "array" es iterable. Podemos trabajar con bucles. Los objetos son iterables
    - Las "variables" no son iterables. 
*/

//ARRAY
var coches = ['Opel','Peugeot' , 'seat', 'toyota'];   //Array o Arreglo. 


//Función para  visualizar por consola
function marcasCochesArray(coches)
    {
        console.log (`este fue uno de mis coches,${coches}`);
    }



// Bucle para enviar contenido por posición del array "coches"
for (var i = 0; i < coches.length; i++)
    {
        marcasCochesArray(coches[i]);
    }






/* 
    ---------------------------------------------------------------------------------
        ARRAY - BUCLE "FOR - OF" ESPECIAL - lECTURA Y UTILIZACIÓN DEL CONTENIDO DE UN ARRAY
    ---------------------------------------------------------------------------------
*/

/*
    - variable "coche" en singular
    - array's de "coches" plural
    - El FOR-OF  hace lo mismo que el apartado de arriba de FOR BÁSICO pero mejor.
    - Por que ya no utilizamos propiedades un poco externas como el ".length" porque ya se ha 
    inventado esta opción.
*/


//ARRAY 
var coches = ['Opel', 'Peugeot', 'seat', 'toyota']; 

//Función para vizualizar por consola
function marcasCoches2(coches)
    {
        console.log (`este fue uno de mis coches,${coches}`);
    }


for (var coche of coches)
    {
        /* 
            -Lo que hace cada vez que itere este FOR-OF  es coger el contenido del array "coches". 
            - En este caso, el primer elemento es "opel"  y lo va a asignar en la variable "coche"
            - Asi, la primera iteración sera "opel"
                - La segunda sera "seat"
                - y asi sucesivamente
        */
            marcasCoches2(coche);
    }




/* 
    --------------------------------
        CONDICIONAL "IF" BÁSICO
    --------------------------------
*/


var numero1 = 10;

    if(numero1 === 10 )
        {
            var resultado1 = "Soy un diez";
        }
    else
        {
            var resultado1 ="Nosoy un diez";
        }
    
    console.log(resultado1);
    

/* 
    ----------------------------
        OPERADOR TERNARIO - IF
    ----------------------------
*/


/*
    - El concepto es muy fácil. Pero Verli por  primera vez "Asusta"
    - Operador Ternario 
        - Lo que hace es una reducción de esa operación "if"
        - A una minimi expresión para poder meterlo en una variable o en algo similar
*/

var numero = 10;

/*
    - Nosotros queremos ya directamente en una variable "resultado", 
    queremos el resultado de una operación del condicional. Si es un "10", etc.
    - La Sintaxis seria
        -"condición" ?  "lo que va a ser verdad " :   "lo falso"
*/
var resultado = numero === 10 ? "Soy un diez" : "No soy un diez";

console.log(resultado);










/*********************************************************************************************/
/* 
    --------------------
        BUCLE - WHILE
    --------------------
*/


/* 
    ------------------------------------
        EJEMPLO DE BUCLE INFINITO -WHILE
    ------------------------------------
*/
/*
    - Los while si no se controlan pueden ser bucles infinitos 
*/
// var edad = 15;

// while (edad < 18)
//     {
//         // esto ahora mismo es un bucle infinito
//         // esta condicion no tiene  finito  
//         console.log('Eres menor de edad');
//     }

// while (edad > 18)
//     {
//         // aqui no va a realizarse sin ninguna iteracion 
//     }







/* 
    -----------------------------------------
        EJEMPLO DE BUCLE NO INFINITO -WHILE
    -----------------------------------------
*/


var coches2 = ['Opel','seat' , 'seat', 'toyota'];

function marcasCoche(coches2)
    {
        console.log(`este fue uno de mis coches, ${coches2} `)
    }
        
while (coches2.length >0)
    {
        var garaje = coches2.shift();
        marcasCoche(garaje);    
        /*
            - ¿por que no existe un bucle infinito? 
            - ¿porque se para el coche? 
                - gracias al shift. 
                - por eso la condicion de while se termina 
        */
    }
        
        
    





/*
    ------------------------------------------
        WHILE ESTRUCTURA ESTANDAR  - BANDERA
    ------------------------------------------
*/


var coches2 = ['Opel','seat' , 'seat', 'toyota'];

function marcasCoche(coches2)
    {
        console.log(`este fue uno de mis coches, ${coches2} `)
    }


var i = 0;   // Bandera 

while (coches2.length > i)
    {
        var garaje = coches2[i];
        marcasCoche(garaje);
        i++;
    }
    




/* 
    ------------------------------------
        EL OTRO WHILE - DO WHILE
    ------------------------------------
*/
    
/*
    - El do while siempre va a generar una sentencia
    - Estructrua o sintaxis
        - do
            {
                // se genera la sentencia y luego se hace el while
            } while();
    
*/


do
    {
        i++;
        consle.log('hola');   
    } while(i<5);