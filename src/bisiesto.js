function bisiesto(a) {
  if(a%400==0)
  {
    return "es bisiesto";
  }
  if((a%100==0)&&(a%400!=0))
  {
    return "No es bisiesto";
  }
  return a;
}

export default bisiesto;

