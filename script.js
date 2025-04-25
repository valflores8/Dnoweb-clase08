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

function barrita(n){  let width= n*30;  return width;   }

//let mono = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 210 10">` }

	// viewbox {0 0 70 10}

async function notas() {
    let consulta = await fetch("https://raw.githubusercontent.com/profesorfaco/opr/refs/heads/main/clase-08/notas.json");
    let data = await consulta.json();
    console.log(data);
    data.forEach((d) => {
        filas.innerHTML += 
        `<tr> 
        <td>${carita(d.nota)}</td>
        <td>${d.nombre}</td> 
        <td>
            <svg width="210" height="30"> 
            <rect x="0" y="0" width="210" height="30" fill="lightyellow"> </rect>
            <rect x="0" y="0" width="${barrita(d.nota)}" height="30" fill="purple"> </rect>
                <text x="10%" y="70%" fill="white" font-weight="700">
                ${(d.nota).toFixed(1)} </text>
            </svg>

        </td>
        </tr> `;

        total = total + d.nota;
    });
    texto.innerHTML = (total / 12).toFixed(1);
    //              Math.round(total/12);
    //console.log(total/12);
    //document.getElementById("promedio").innerHTML = (toal/12).tofixed(2);
            }

    //  <td> ${(d.nota).toFixed(1)} </td>  

notas().catch((error) => console.error(error));

//x="10%" y="50%" 
//<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 210 20"> <rect x="0" y="0" width="${barrita(d.nota)}" height="20" fill="blue"></rect> <text x="20%" y="60%" fill="black"> ${d.nota} </text> </svg>