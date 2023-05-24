let medida = prompt("Digite um valor em metros para ser convertido");
medida = parseFloat(medida);

let unidade = prompt(
  "Para qual medida deseja converter ?" +
    "\n1 milimetro(mm)" +
    "\n2 centimetro(cm)" +
    "\n3 decimetro(dm)" +
    "\n4 decametro(dam)" +
    "\n5 hectômetro(hm)" +
    "\n6 quilometro(km)"
);
unidade = parseFloat(unidade);

switch (unidade) {
  case 1:
    alert(
      "a conversão de " +
        medida +
        "m" +
        " para milimetro é " +
        medida * 1000 +
        " mm"
    );
    break;
  case 2:
    alert(
      "a conversão de " +
        medida +
        "m" +
        " para centimetro é " +
        medida * 100 +
        " cm"
    );
    break;
  case 3:
    alert(
      "a conversão de " +
        medida +
        "m" +
        " para decimetro é " +
        medida * 10 +
        " dm"
    );
    break;
  case 4:
    alert(
      "a conversão de " +
        medida +
        "m" +
        " para decametro é " +
        medida / 100 +
        " dam"
    );
    break;
  case 5:
    alert(
      "a conversão de " +
        medida +
        "m" +
        " para hectometro é " +
        medida / 100 +
        " hm"
    );
    break;
  case 6:
    alert(
      "a conversão de " +
        medida +
        "m" +
        " para centimetro é " +
        medida / 1000 +
        " km"
    );
    break;
  default:
    alert("Opção invalida");
}
