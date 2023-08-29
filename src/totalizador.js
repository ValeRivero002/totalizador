export function totalizador(a) { 
    return a;
  }
  
  export function multiplicar(a, b) { 
    return a * b;
  }
  export function sumar(a, b) { 
    return a + b;
  }
  export function descuento(a) { 
    if(a>=1000 && a<3000)
    {
        return 0.03;
    }
    if(a>=3000 && a<7000)
    {
        return 0.05;
    }
    else
    {
        return 0;
    }
  }
  