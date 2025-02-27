//Typescript va a inferir nuestra variable en la primer asignacion
let variableInferida = 2;

//O podemos definir explicitamente el tipado en el momento de su declaracion
let variableExplicita: number = 2;

//si hacemos hover sobre resultado, vemos que visual studio code infiere que "resultado"
//es un number, porque la suma de dos numeros es SIEMPRE un numero.
let resultado = variableExplicita + variableInferida

//completar el tipado correspondiente para cada variable

let unString: string = 'mati';

let unNumber: number = 2;

let unBoolean: boolean = true;

let unNull: null = null; //que pasa aca? el tipo null solo puede ser valor null, pero null se puede asignar a otros tipos de variables

let unUndefined: undefined = undefined //y aca?

	
// Enum
enum Fases {
    Primera, //0
    Segunda, //1
    Tercera //2
}
let phase  : Fases = Fases.Primera; //0
let phase2 : Fases = Fases.Segunda; //1
let phase3 : Fases = Fases.Tercera; //2

enum userActions {
    fetchUser = "FETCH_USER", // "FETCH_USER"
    postUser = "POST_USER" // "POST_USER"
}

let fetchUser : userActions = userActions.fetchUser
let postUser : userActions = userActions.postUser


export {}