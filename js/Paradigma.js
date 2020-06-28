/* 
    --------------------------------------------
        Author : Osvaldo Aquino
        NickName: Owi
        POO - PROGRAMACIÓN ORIENTADA A OBJETOS
    --------------------------------------------
*/

/* 
    ----------------------
        POO - OBJETOS
    ----------------------
*/


/* 
    POO 
        - la idea es traerse a un objeto de la vida real y  meterlo en código
        - Un Objeto de la vida real y generar una representación o forma abastracta 
        de ese objeto de la vida real.
        - Los objetos de la vida real tienen propiedades:
            - Mas bajos.
            - Mas altos. 
            - Mas duros.
            - De colores.
            - Es decir, traernos todas estas propiedades para poder generar ese objeto, que 
            si que existe en la vida real, 
            - Y que aqui va a ser un objeto abstracto que no lo podemos tocar.  
            - Pero si que lo podemos definir. 
        - que no lo podemos tocar pero si le podemos definir.
        - Los objetos se definen por unas llaves.
        - Voy a representar al objeto coche, como si yo lo estuviera viendo en la vida real.
        Lo voy a representar dentro de este codigo. Y eso es la POO.        


        - Si yo creo el objeto coche. Definimos :
            - 1ro las KEYS
            - 2do Los VALUES  
        - Primero vamos a definir las PALABRAS CLAVES, que define las propiedades. 
            - o como es ese coche. Rueda, chasis, etc.
        - Y luego los VALORES. 

        - KEY      :   marca       (o PALABRA CL)
        - VALOR     :   Toyota.

        - marca (Key) : "Toyota" (valor)
*/


// objetos coches 
    // palabras claves para definir el coche {chasis, narca }
var coche = 
    {
        marca : 'Toyota',
        modelo: 'C-HR',      // otra propiedad
        anyo :  '2020'

    };
// ya tenemos un objeto coches, sacado de la realidad y definido en programacion


// ¿como accedo a la informacion de ese objeto "coche"


// esto es como se llama afuera 
// ¿quiero saber la marca?
// Llamada a una propiedad. Accedemos a la información de una propiedad 
coche.marca;          // pues ya esta . 



/* 
    -------------------------------------
        POO - MÉTODO DE LOS OBJETOS
    -------------------------------------
*/
/*
    - Ya sabemos generar un objeto y como acceder a ellos 
    - Ahora vamos a definir lo que son los metodos de un objeto
    - Los Métodos vendrian a ser que pueden hacer un objeto 
*/



//como generar un metodo 
var coche = 
    {
        marca : 'Toyota',
        modelo: 'C-HR',      // otra propiedad
        anyo :  '2020',
        // metodo de un objetos
        detalles : function()
        {
            // cualquier "fucion" que estan dentro de un objeto se le conose como m"etodo"
            // ahora detalle se a convertido en un metodo 
            console.log(`${this.marca}: ${this.modelo} \\${this.anyo} `);
            //sabemos como coger una propiedad y ahora como cogemos un metodo 
        }
    };

/* 
    - "this" - es una variable hace referencia al padre. El padre es coche  
    - "this" es la representacion de ese objeto.
    - A que es lo mismo que sustituya 
        - "this" por "coche" es lo mismo que  "coche.marca" 
        - Si
    - "this" es una propiedad interna. 
    - Esto es como se llama afuera
        - coche.marca
    - Y esto es como se llama  adentro
        - this.marca
*/



//llamar a un metodo del objeto
// esto es como se llama adentro
coche.detalles();



//Estamos definiendo una "botella de agua "
var botellaAgua = 
    {
        altura : "10",
        marca: "Fombella",
        contenido: "agua",
        cantidad : "250 ml",
        color : "transparente",
        TipoTapon : "Ecológico ",
    }