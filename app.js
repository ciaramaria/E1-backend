const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function solicitarCantidad() {
  return new Promise((resolve, reject) => {
    rl.question('Ingrese una cantidad de dinero (o "salir" para finalizar): ', (cantidad) => {
      if (cantidad.toLowerCase() === 'salir') {
        rl.close();
        resolve(null); 
      } else {
        resolve(parseFloat(cantidad));
      }
    });
  });
}

async function main() {
  console.log('¡Bienvenido a la aplicación de gastos!');

  let gastoTotal = 0;

  while (true) {
    const cantidad = await solicitarCantidad();

    if (cantidad === null) {
      break; 
    }

    if (!isNaN(cantidad)) {
      gastoTotal += cantidad;
      console.log(`Cantidad agregada: $${cantidad.toFixed(2)}`);
      console.log(`Gasto total actual: $${gastoTotal.toFixed(2)}`);
    } else {
      console.log('Entrada inválida. Por favor, ingrese un número válido.');
    }
  }

  console.log(`Total gastado: $${gastoTotal.toFixed(2)}`);
}

main();

