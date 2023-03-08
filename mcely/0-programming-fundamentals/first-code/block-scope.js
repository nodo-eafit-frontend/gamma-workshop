console.clear();

// Mundo
let deporte = 'futbol ⚽';

// Sudafrica
{
  let deporteLocal = 'Rugby 🏉';

  console.log('Deporte Sudafrica local:', deporteLocal);
}

// USA
{
  let deporteLocal = 'Basket 🏀';

  console.log('Deporte USA local:', deporteLocal);

  // Estado
  {
    const deporte = 'Voely 🏐';
    console.log('=>>>>Deporte USA Estado local:', deporte);
  }
}

// Ver finalmente en pantalla
console.log('Deporte global:', deporte);
