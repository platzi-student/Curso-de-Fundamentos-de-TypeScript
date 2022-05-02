# Curso-de-Fundamentos-de-TypeScript

* https://www.toptal.com/developers/gitignore
* https://www.typescriptlang.org/download
* https://github.com/platzi/curso-typescript-fundamentos/tree/1-step
* https://code.visualstudio.com/docs/nodejs/working-with-javascript#_type-checking-javascript


¿Qué es TypeScript?

TypeScript agrega sintaxis adicional a JavaScript para admitir una integración más estrecha con su editor . Detecte errores temprano en su editor.

El código TypeScript se convierte a JavaScript, que se ejecuta en cualquier lugar donde se ejecute JavaScript : en un navegador, en Node.js o Deno y en sus aplicaciones.

TypeScript entiende JavaScript y utiliza la inferencia de tipos para brindarle excelentes herramientas sin código adicional.

esto nos dice el sitio oficial

ademas desde el 2017 hasta el 2021 typescript ha tenido buena acogida en la comunidad de acuerdo estadisticas de github.

## ¿Por qué usar TypeScript?

- Es uno de los lenguajes de programación más queridos por la comunidad.
- Alta adopción.
- Podemos prevenir muchos errores de JS.
- Mejor experiencia de desarrollo.
- Menor cantidad de bugs.

## TypeScript vs JavaScript

En JavaScript te das cuenta de los errores del código una vez que lo estés ejecutando. En TypeScript con el análisis estático de código nos damos cuenta de los errores en el editor o a la hora de transpilar, por lo que evitamos que los errores lleguen a la ejecución.

Un programador de TS es distinto a uno de JS. El programador de TypeScript añade una capa de análisis de código estático a Javascript. 

## ¿Como se pueden encontrar errores?

En el libro [Software Engineering at Google](https://www.notion.so/96d82b86ea0b43ea86ba33f0f6415846) lo dividen en distintas etapas:

### Static analysis (Acá es donde TS cumple su rol)

- Corre en el editor.
- Puede encontrar typos, llamados incorrectos a funciones.
- Nos permite autocompletar código.

### Unit Tests

- En pocos segundos nos permiten verificar si nuestro código hace lo que pensamos que hace.

### Integration tests

- Toma unos minutos validar si nuestro sistema funciona.
- Podemos encontrar distintos casos límite.

### Code review

- Toma algunas horas validar que estamos siguiendo las prácticas y normas de nuestro equipo.

## Como configurar nuestro proyecto

Iniciamos el proyecto como cualquier otro: 

```bash
git init
npm init
```

Agregamos TS para el proyecto: 

```bash
npm install typescript -D
npx tsc --version //Para comprobar que se ha instalado correctamente.
```
Configuramos archivos extra como el .gitignore y el .editorconfig: 

Archivo .gitignore usado: (Creado con [**gitignore.io**](https://www.toptal.com/developers/gitignore)). Al .gitignore de abajo se le sacaron los comentario. Puedes ver la **[versión completa](https://www.toptal.com/developers/gitignore/api/windows,macos,linux,node)** del archivo o el **[generador](https://www.toptal.com/developers/gitignore?templates=windows,macos,linux,node)** con esa configuración. 

```bash
<*~
.fuse_hidden*
.directory
.Trash-*
.nfs*
.DS_Store
.AppleDouble
.LSOverride
Icon
._*
.DocumentRevisions-V100
.fseventsd
.Spotlight-V100
.TemporaryItems
.Trashes
.VolumeIcon.icns
.com.apple.timemachine.donotpresent
.AppleDB
.AppleDesktop
Network Trash Folder
Temporary Items
.apdisk
logs
*.log
npm-debug.log*
yarn-debug.log*
yarn-error.log*
lerna-debug.log*
.pnpm-debug.log*
report.[0-9]*.[0-9]*.[0-9]*.[0-9]*.json
pids
*.pid
*.seed
*.pid.lock
lib-cov
coverage
*.lcov
.nyc_output
.grunt
bower_components
.lock-wscript
build/Release
node_modules/
jspm_packages/
web_modules/
*.tsbuildinfo
.npm
.eslintcache
.stylelintcache
.rpt2_cache/
.rts2_cache_cjs/
.rts2_cache_es/
.rts2_cache_umd/
.node_repl_history
*.tgz
.yarn-integrity
.env
.env.development.local
.env.test.local
.env.production.local
.env.local
.cache
.parcel-cache
.next
out
.nuxt
dist
.cache/
.vuepress/dist
.temp
.docusaurus
.serverless/
.fusebox/
.dynamodb/
.tern-port
.vscode-test
.yarn/cache
.yarn/unplugged
.yarn/build-state.yml
.yarn/install-state.gz
.pnp.*
.webpack/
.svelte-kit
Thumbs.db
Thumbs.db:encryptable
ehthumbs.db
ehthumbs_vista.db
*.stackdump
[Dd]esktop.ini
$RECYCLE.BI
*.cab
*.msi
*.msix
*.msm
*.msp
*.lnk>
```

Archivo .editorconfig usado:

```bash
<# Editor configuration, see https://editorconfig.org
root = true

[*]
charset = utf-8
indent_style = space
indent_size = 2
insert_final_newline = true
trim_trailing_whitespace = true

[*.ts]
quote_type = single

[*.md]
max_line_length = off
trim_trailing_whitespace = false>
```

Para que funcione el .editorconfig, en VSC hay que instalar esta extensión: 

[EditorConfig for VS Code - Visual Studio Marketplace](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig)

---

La pagina de [gitignore.io](http://gitignore.io) nos ofrece un CLI y una extensión para VSC que nos permite usar su API para generar archivos .gitignore.

[gi - Visual Studio Marketplace](https://marketplace.visualstudio.com/items?itemName=rubbersheep.gi)

El uso se hace con Control + Shift + P `>gi` y elegimos en que plataforma vamos a trabajar, después elegimos si queremos sobrescribir o agregar (en caso de una nueva configuración) y listo.

**[Información de la CLI de gitignore.io](https://docs.gitignore.io/install/command-line)**

## Atrapando errores

Un archivo de Javascript, a simple vista, puede pasar desapercibido los errores que tiene, pero cuando lo analizamos con Typescript salen a la luz y permite que los detectemos al inicio.

A la izquierda esta el archivo JS inicial, a la derecha el corregido. Puedes intentarlo tu mismo agregando en la primera línea del archivo **//@ts-check** (Esta es una función de VSCode → **[Mas información](https://code.visualstudio.com/docs/nodejs/working-with-javascript#_type-checking-javascript)**)y vas a poder observar los errores que van apareciendo. A la derecha esta el archivo ya corregido. Terminamos corrigiendo más de 10 errores que sin esto no los hubiéramos visto hasta la ejecución. Para sacarle mas provecho, podes usar [**ErrorLens](https://marketplace.visualstudio.com/items?itemName=usernamehw.errorlens)** que nos da detalles de cual es el error y no solo lo subraya.

```jsx
(()=> {
  const myCart = [];
  const products = [];
  const limit = 2;

  async function getProducts() {
    const rta = await fetch('http://api.escuelajs.co/api/v1/products', {
      mehtod: 'GET'
    });
    const data = await rta.parseJson();
    products.concat(data);
  }
  function getTotal() {
    const total = 0;
    for (const i = 0; i < products.length(); i++) {
      total += products[i].prize;
    }
    return total;
  }
  function addProduct(index) {
    if (getTotal <= limit) {
      myCart.push(products[index]);
    }
  }

  await getProducts();
  addProducto(1);
  addProducto(2);
  const total = getTotal();
  console.log(total);
  const person = {
    name: 'Nicolas',
    lastName: 'Molina'
  }
  const rta = person +  limit;
  console.log(rta);
});
```

```jsx
//@ts-check

(async ()=> {
  const myCart = [];
  const products = [];
  const limit = 2;

  async function getProducts() {
    const rta = await fetch('http://api.escuelajs.co/api/v1/products', {
      method: 'GET'
    });
    const data = await rta.json();
    products.concat(data);
  }
  function getTotal() {
    let total = 0;
    for (let i = 0; i < products.length; i++) {
      total += products[i].prize;
    }
    return total;
  }
  function addProduct(index) {
    if (getTotal() <= limit) {
      myCart.push(products[index]);
    }
  }

  await getProducts();
  addProduct(1);
  addProduct(2);
  const total = getTotal();
  console.log(total);
  const person = {
    name: 'Nicolas',
    lastName: 'Molina'
  }
  const rta = `${person} ${limit}`;
  console.log(rta);
});
```

## El compilador/transpilador de TypeScript

Nuestro navegador y Node no reconocen nativamente archivos TypeScript, lo que hace el transpilador es traducir el código de .ts a .js.

En nuestros archivos .ts vamos a tener las clases, interfaces, módulos, tipos. El transpilador nos va a convertir el código en .js que va a poder correr en cualquier lugar. Además el transpilador nos permite elegir a que version de ECMAScript vamos a traducir nuestro código.

Para compilar un fichero, ejecutamos

```jsx
npx tsc ruta/archivo.ts
```

Al archivo que ya corregimos en clases anteriores, lo vamos a renombrar a .ts para poder traspilarlo y ver cual es el output de nuestro archivo y que cambios nos genera el transpilador de typescript.

**Por defecto TypeScript transpila el código para la versión de ECMAScript 3, por lo que muchas funciones no van a correr y nos va a dar un error.** 
Para cambiar esto:

```bash
#npx tsc ruta/archivo.ts --target <target>
npx tsc src/demo.ts --target es6
```

A la hora de hacer deploy, no vamos a querer subir también nuestros archivos .ts, por lo que lo ideal, sería que al transpilar estos archivos, lo hagamos en una carpeta distinta. En este caso, la carpeta ./dist

```bash
#npx tsc ruta/archivo.ts --target <target>
npx tsc src/demo.ts --target es6
```

```bash
#npx tsc ruta/*.ts --target <target> --outDir <directory> 
#Con el asterisco, seleccionamos todos los archivos .ts del directorio elegido.

npx tsc src/*.ts --target es6 --outDir dist
```

Al ejecutar esto, podemos tener el siguiente error: 

```bash
error TS6053: File 'src/*.ts' not found.
  The file is in the program because:   
    Root file specified for compilation
```

Se resuelve creando un archivo tsconfig.json.

### Pasos:

1. Posicionate en el directorio raíz de tu proyecto.
2. Ejecutar el comando `npx tsc --init`.Esto creará el archivo **tsconfig.json.**
3. Ejecutar el comando `npx tsc -p ./ -w`
    1. Esto compilará en el mismo directorio todos tus archivos .ts
    2. Para modificar el target o el destino de los archivos compilados, en el archivo tsconfig.json busca el flag “outDir” y modificala para que quede así: `"outDir": "./dist",`**.**

Listo, ya tienes configurado lo necesario para seguir el curso tal cual (hasta el momento).

**Nota:** El tsconfig ya viene configurado para compilar a ES6, en caso de que quieras cambiar, busca la línea “target” y modifícala con el valor que necesites.

<aside>
💡 Créditos a Pepe Sosa (**[Ver comentario](https://platzi.com/comentario/3497852/)**)

</aside>

### ¿Qué es Deno?

Deno es un motor de Javascript que corre del lado del servidor (Al igual que Node.JS) que a diferencia de Node, además de correr Javascript, este también corre TypeScript de forma nativa. 

[Deno. ¿El remplazo de NodeJs?](https://pablomagaz.com/blog/deno-el-remplazo-de-nodejs)

[Deno - A modern runtime for JavaScript and TypeScript](https://deno.land/)

## El TSConfig.json

Para generarlo, ejecutamos `npx tsc --init`

La mayoría de opciones por defecto están comentadas. Para darle uso, simplemente las des-comentamos y la configuramos a nuestro gusto.

Si además del outDir que configuramos antes, configuramos el `"rootDir: "./src",` de ahora en mas vamos a poder compilar todos nuestros archivos a TypeScript con el siguiente comando: 

```bash
npx tsc
```

Los errores que aparecen ahora son debido a que no le estamos dando tipos a nuestro código. TypeScript de igual forma, aunque encuentre errores va a compilar el archivo. 

El flag `--watch`  a la hora de ejecutar `npx tsc --watch` hace que TypeScript se quede escuchando a los archivos para que una vez que realicemos cambios en los archivos, los va a ir compilando automáticamente. 

## ¿Qué es el tipado en TypeScript?

Si bien Javascript tiene tipos, es un lenguaje débilmente tipado, por lo que no se realiza una comprobación de los tipos.

Al hacerlo tipado con TypeScript, evitamos errores ya que el analizador comprueba que no cambiemos los tipos a lo largo del tiempo 

A la hora de declarar variables en javascript lo hacemos de la siguiente forma: 

 

```jsx
const productPrice = 12;
```

Mientras que en TypeScript tenemos que especificar los tipos:

```tsx
const productPrice:number = 12;
```

La parte del tipado, la llamamos **Type Annotation.**

## Tipos Inferidos

El motor de TypeScript nos permite tanto darle el tipo de datos de forma explícita o los puede inferir por si mismo sin que lo tengamos que hacer de forma explicita.

```tsx
let myProductName = 'Product'; //Nos dice que el tipo es string
let myProductPrice = 123; //Nos dice que el tipo es number
```

En caso de querer cambiar los tipos, nos va a advertir que estamos cambiando de tipos y lo va a marcar como un error. 

A su vez, al usar TS tenemos los métodos usados para cada tipo de datos, así en el caso de una variable de tipo string podemos acceder al método `.toLowerCase` de manera mas rapida, ya que el editor solo nos va a mostrar los métodos del tipo que estemos usando. 

Al declarar una constante, el tipo lo infiere como constante, ya que no se puede cambiar.

---

Al no tener el entorno de TypeScript configurado ni delimitado el alcance de las funciones, al hacer una declaración en un archivo distinto con el mismo nombre, nos va a arrojar error. Para delimitarlo, podemos hacer una función anónima autoejecutada y encerrar nuestro código ahí y que su scope este limitado a esa función.

```tsx
(() => {
	let myProductName = 'Product';
	let myProductPrice = 123;
})();
```

# Tipos de Datos

## Numbers

Para utilizar el primitivo number de forma explicita, lo podemos tipar con `:number`

```tsx
let productPrice: number = 100
productPrice = productPrice + 1
productPrice = productPrice + '1' // Esto nos lo alerta, ya que JS lo transformaria a string.
```

También podemos declarar una variable pero sin inicializarla. En estos casos nosotros debemos asignarle a la variable el tipo ya que TS no lo puede inferir.

```tsx
let productInStock: number;
console.log(productInStock) // TS nos alerta que no inicializamos nuestra variable.
```

`parseInt` nos convierte el string a number, por lo que typescript nos va a inferir que el tipo de dato es number:

```tsx
let discount = parseInt('123') // TS infiere que discount es number. 
```

Dentro de el conjunto number, TS nos permite utilizar otro tipo de números como hexadecimal, binario, etcétera.

```tsx
let hex = 0xFFF //Utilizamos 0x para denominar a los hexadecimales.
let bin = 0b1010 //Utilizamos 0b para demnominar a los binarios.

console.log(hex) //4095
console.log(bin) //10
```

<aside>
❗ A la hora de tipar nuestras variables number es importante hacerlo con `number` y no con `Number` ya que este último se refiere al prototipo Number.

</aside>

<aside>
💡 `NaN` es considerado dentro del conjunto `number`.

</aside>

## Booleans

Nos permite utilizar los booleanos `true` y `false` 

```tsx
let isEnabled = true; 
//isEnabled = "hello" //Da error, ya que TS infirio que el dato es de tipo boolean

let isNew : boolean = false;
console.log(isNew) //false
isNew = true;
console.log(isNew) //true
```

```tsx
let isNew: boolean;
const random = Math.random();
//isNew = random >= 0.5 ? "true" : "false" Esto da error ya que se le asignaria un string, tampoco podemos asignar 1 y 0 para ture y false ya que son tipo number
isNew = random >= 0.5 ? true : false
```

Los únicos valores que podemos usar en boolean son true o false.

<aside>
❗ Al igual que en `number` a la hora de tipar nuestra variable, esta tiene que estar en minúsculas como `boolean` y no `Boolean`.

</aside>

## Strings

Al igual que en los anteriores, lo podemos hacer de forma explicita con `:string` o también de forma implícita.

```tsx
let productTitle = 'My amazing product';
// productTitle = null; 
// productTitle = () => {}
// productTitle = 123;
productTitle = 'Newest amazing product'

let productDescription: string = 'Awesome description'
productDescription = "I'm a description (?"
```

También podemos utilizar los template literals para los strings

```tsx
let productTitle:string = 'Newest amazing product';
let productDescription: string = 'Awesome description';
let productPrice: number = 123;

let summary:string = `
title: ${productTitle}
description: ${productDescription}
price: ${productPrice}`
```

## Arrays

En los arrays podemos a su vez definirlos de forma implícita como explicita, y limitamos el tipo de datos que podemos insertar en el array.

```tsx
let prices = [123,312,643,124,12,75] //Aca infiere que el tipo de dato dentro del array es number
//prices.push('asd')
//prices.push(true)
//prices.push({12})
prices.push(111)

let myArr = [123,523,15,'Hola', true] // Aca infiere que los tipos son boolean, number y string
```

Para hacerlo de forma explicita lo hago de la siguiente manera

```tsx
let mixed: (number | string | boolean)[] = ['Hola', true];
mixed.push(123)
mixed.push('mundo')
mixed.push(true)
// mixed.push({})
// mixed.push([])

let numbers = [1,2,3,4,5,6] //Si cambiaria el tipo, automaticamente me mostraria que no puedo multiplicar unalgo que no sea un numero..
numbers.map(number => number * 2)

let arrOfObj: object[] = [{a: 1, b : 2}, {c: 3}]
arrOfObj.push([1,2,3]) // Esto es posible ya que el typeof array es object
```

## Any

- Este tipo de dato desactiva el tipado de TS y nos permite reasignar el tipo de dato de una variable.
- No esta recomendado utilizar `any`, debido a que perdemos la posibilidad de atrapar cualquier error y básicamente estamos utilizando javascript. Sin embargo, si estamos migrando codigo de JS a TS puede ser útil, pero una vez que tengamos un proyecto consolidado con TypeScript, no deberíamos utilizar nunca `any`.

```tsx
let myDinamicVar : any;
myDynamicVar = 100;
myDynamicVar = "Hola";
myDynamicVar = null;
myDynamicVar = {};
```

- Podemos convertir el tipo de `any` a cualquier otro tipo de dato haciendo un **cast** con el `as` operator o utilizando genéricos `<type>`. Para usarlo lo podemos hacer de la siguiente forma:

```tsx
myDynamicVar = 'Hola';
const rta = (myDynamicVar as string);
console.log(rta);

myDynamicVar2 = 1212;
const rta2 = (<number>myDynamicVar2);
console.log(rta2);
```

## Union Types

Union types nos permite mayor flexibilidad en nuestro código, ya que nos permite asignar varios tipos a una variable.

```tsx
let userID: string | number;
userID = 1212;
userID = 'FC45';

function greeting(myText: string | number) {
  if (typeof myText === 'string') {
    `Hola ${myText.toLowerCase()}`;
  } else if (typeof myText === 'number') {
    `Sos el usuario Nº${myText}`;
  }
}
/**Cuando pasa los if, nos habilita el autocompletado por tipos**/
userID = 1212;
greeting(userID);
userID = 'FC45';
greeting(userID);
```

## Alias y tipos literales

Los **alias** nos permiten agrupar varios tipos dentro de un prototipo.

```tsx
type UserID = string | number;

let userID: UserID;
userID = 1212;
userID = 'FC45';

function greeting(myText: UserID) {
  if (typeof myText === 'string') {
    `Hola ${myText.toLowerCase()}`;
  } else if (typeof myText === 'number') {
    `Sos el usuario Nº${myText}`;
  }
}
```

Los **literal types** nos permiten limitar dentro de una variable los valores.

```tsx
type ShirtSizes = 'S' | 'M' | 'L' | 'XL';
let shirtSize: ShirtSizes;
shirtSize = 'M'
```

## Null y Undefined

Para poder usar Null o Undefined en una variable, lo tenemos que especificar con los union types, ya que tanto `null` como `undefined` son su propio tipo de dato.

```tsx
let myNull = null; //Infiere any
let myUndefined = undefined; //Infiere any

let myName: string | null; //Hay veces que necesitamos que una variable

function hi(name: string | null) {
  let hello: string = 'Hello ';
  if (name) {
    hello += name;
  } else {
    hello += 'nobody';
  }
  console.log(hello);
}
myName = null;
hi(myName); // "Hello nobody"
myName = 'Franco';
hi(myName); // "Hello Franco"
```

---

 También esto lo podemos hacer de la siguiente manera con **optional chaining**:

```tsx
function hi(name: string | null) {
  let hello: string = 'Hello ';
  hello += name?.toLowerCase() || 'nobody'
  console.log(hello);
}
```

El optional chaining lo usamos cuando no tenemos la certeza de si tenemos un valor o no. Mas información en **[MDN: Optional chaining (?.)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining)**

---

Tambien lo podemos hacer con el **Nullish Coalesing** de la siguiente forma:

```tsx
function hi(name: string | null) {
  let hello: string = 'Hello ';
	hello += name ?? 'nobody'  
  console.log(hello)
}
```

Más información en **[MDN: Nullish coalescing operator (??)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing_operator)**

## Funciones

En TS tenemos que declarar el tipo de dato de cada parámetro en la función. Además de que vamos a tener la referencia de si nos faltan o sobran parámetros.

```tsx
type ShirtSizes = 'S' | 'M' | 'L' | 'XL';
function createProductToJSON(
title: string,
createdAt: Date,
stock: number,
size: ShirtSizes){
  return {
    title,
    createdAt,
    stock,
    size
  }
}

const product1 = createProductToJSON('Prod 1',new Date(), 12,'XL')
console.log(product1)
console.log(product1.stock)
```

También podemos usar arrow functions y parámetros opcionales que de no ser declarados van a ser `undefined`:

```tsx
type ShirtSizes = 'S' | 'M' | 'L' | 'XL';
const createProductToJSON = (
  title: string,
  createdAt: Date,
  stock: number,
  size?: ShirtSizes
) => {
  return {
    title,
    createdAt,
    stock,
    size,
  };
};
```

## Retorno de funciones

Con TypeScript podemos especificar el tipo de dato de lo que nos va a retornar agregandolo luego de los parámetros o lo puede inferir por si solo.

```tsx
const calcTotal = (prices: number[]):number => {
  let total:number = 0;
  total = prices.reduce((acc,num) => acc + num,0)
	return total
}
const rta = calcTotal([1,2,3,4])
```

En funciones típicas lo hariamos de la siguiente manera:

```tsx
function calc(a:number,b:number):number{
  return a + b;
}
```

<aside>
💡 Al especificar el retorno, TypeScript nos alerta que debemos retornar algo.

</aside>

### Void

`void` nos permite especificar el tipo en funciones que no retornan nada.

```tsx
const printTotal = (price: number):void => {
	console.log(`El total es: $${price}`)
}
```

## Objetos en funciones

Al pasarle como parámetro objetos a typescript este nos permite especificar tanto las keys como los tipos de cada value.

```tsx
const login = (data: {email: string, password: string}):void => {
  const {email, password} = data
  console.log(email,password)
}
login({email: "fran@co.me", password: "N0M3H4CK335"})
```

Ahora analizamos una función con un objeto un poco mas complejo:

```tsx
type ShirtSizes = 'S' | 'M' | 'L' | 'XL';

const products:any[] = [];

const addProduct = (data: {
  title: string,
  createdAt: Date,
  stock: number,
  size?: ShirtSizes
}):void => {
  products.push(data)
};

addProduct({title: "Remera fachera facherita", createdAt: new Date, stock: 10, size: "M"})
addProduct({title: "Gorra", createdAt: new Date(), stock: 15})

```

## Objetos como tipos

Vamos a refactorizar la función anterior para usar literal types y especificar el tipo de nuestro array.

```tsx
type ShirtSizes = 'S' | 'M' | 'L' | 'XL';
type Product = {
  title: string;
  createdAt: Date;
  stock: number;
  size?: ShirtSizes;
};

const products: Product[] = [];

const addProduct = (data: Product): void => {
  products.push(data);
};

addProduct({
  title: 'Remera fachera facherita',
  createdAt: new Date(),
  stock: 10,
  size: 'M',
});
addProduct({ 
  title: 'Gorra', 
  createdAt: new Date(), 
  stock: 15 
});
```

# Módulos y librerías

## Módulos: import y export

Como buena práctica, a los archivos para modelado de datos debemos llamarlos de la siguiente forma: `nombre.model.ts` y a los archivos que van a tratar dichos datos de la siguiente manera: `nombre.service.ts`

---

`product.model.ts`

```tsx
export type ShirtSizes = 'S' | 'M' | 'L' | 'XL';
export type Product = {
  title: string;
  createdAt: Date;
  stock: number;
  size?: ShirtSizes;
};
```

`product.service.ts`

```tsx
import { Product } from '.product.model.ts'

export const products: Product[] = [];
export const addProduct = (data: Product): void => {
  products.push(data);
};
export const calcStock = ():number => {
  let total = 0;
  products.forEach(product => total += product.stock)
  return total;
}
```

`main.ts` o `product.ts`

```tsx
import { addProduct, products, calcStock} from './product.service.ts'

addProduct({
  title: 'Remera fachera facherita',
  createdAt: new Date(),
  stock: 10,
  size: 'M',
});
addProduct({ 
  title: 'Gorra', 
  createdAt: new Date(), 
  stock: 15 
});

console.log(products)
const total = calcStock()
console.log(total)
```

## Usando librerías que soportan TypeScript

Para el ejemplo se usa la librería date-fns que la vamos a instalar con `npm install date-fns —save`

```tsx
import { subDays, format} from 'date-fns';

const date = new Date(1998,1,28)
const rta = subDays(date,30)
const str = format(rta, 'yyyy/MM/dd')

console.log(str) //1998/01/29
```

## Usando librerías que NO soportan TypeScript

En el ejemplo vamos a usar lodash que es una librería que nos agrega funcionalidades a nuestro javascript. Lo instalamos con `npm install lodash`. Cuando TypeScript no soporta la librería, VSC nos puede ofrecer un paquete para instalar con los tipos de esa librería `npm i --save-dev @types/lodash`. Podemos ver cuales son las librerías soportadas de forma manual en el perfil de **[NPM de TypeScript](https://www.npmjs.com/~types)**

```tsx
import _ from 'lodash';

const data = [
  {
    username: 'Franco',
    role: 'admin'
  },
  {
    username: 'Valentina',
    role: 'seller'
  },
  {
    username: 'Santiago',
    role: 'customer'
  },
  {
    username: 'zulema',
    role: 'seller'
  }
]

const rta = _.groupBy(data, item => item.role);
console.log(rta)
```

## Conclusiones

TypeScript nos ayuda a encontrar los errores que aparecen ya que va analizando el código constantemente a medida que lo vamos escribiendo y nos va alertando, además de que ayuda a la legibilidad ya que sabemos que tiene que tipo de datos reciben y retornan las funciones solo leyendo el tipado.

## Extra: Cómo desestructurar en TS

Desestructurar en TypeScript y hacerlo de forma tipada es contraintuitivo. Al usar en el primer objeto los dos puntos, lo que hacemos es renombrar dicha variable.

```tsx
const me: {username: string, age:number, email:string, role: string} = {
  username: 'Franco',
  age: 25,
  email: 'fran@co.me',
  role: 'student'
}

let {username, age, email:correo}: {username:string, age:number, email:string} = me;

console.log(username) // 'Franco'
console.log(correo) // 'fran@co.me'
```
