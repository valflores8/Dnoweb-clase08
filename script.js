const filas = document.querySelector("tbody");
const texto = document.querySelector("#promedio");
var total = 0;
function carita(nota) {
    var emoji;
      if (nota > 5.9) {
      	emoji = "😃";
    } else if (nota == 5.9) {
    	emoji = "😐";
    } else if (nota <= 4) {
    	emoji = "😭";
    } else {
    	emoji = "🙁";
    }
    return emoji;
    // if (nota > 5.9) {  return "😃" } else
	}

//function.barrita (n){ let ancho = n=70; let mono = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 210 10">` }

	// viewbox {0 0 70 10}



            async function notas() {
                let consulta = await fetch("https://raw.githubusercontent.com/profesorfaco/opr/refs/heads/main/clase-08/notas.json");
                let data = await consulta.json();
                console.log(data);
                data.forEach((d) => {
                    filas.innerHTML += `<tr> <td>${carita(d.nota)}</td> <td>${d.nombre}</td><td>${(d.nota).toFixed(1)}</td>  </tr>`;
                    total = total + d.nota;
                });
                texto.innerHTML = (total / 12).toFixed(1);
                //              Math.round(total/12);
                //console.log(total/12);
                //document.getElementById("promedio").innerHTML = (toal/12).tofixed(2);
            }
<g transform="translate(0 ${ajuste * 3})">
<rect x="0" y="0" height="2" width="70" fill="var(--claro)"></rect>
<rect x="0" y="0" height="2" width="${x.promedio.toFixed(1) * 10}" fill="var(--acento)"></rect>



//  <td> ${(d.nota).toFixed(1)} </td>  

            notas().catch((error) => console.error(error));
