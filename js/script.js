const canvas = document.getElementById("lineChart");
const ctx = canvas.getContext("2d");

//DATOS PARA GRAFICAR
const labels = ['Ene','Feb','Mar','Abr','May','Jun','Jul','Ago','Sept','Oct','Nov','Dic'];
const sanSalvador = [30,32,34,35,36,37,36,35,34,32,31,30]; //TEMPERATURAS REGISTRADAS EN SAN SALVADOR POR MES
const santaTecla = [25,26,28,29,31,32,32,31,30,28,27,26]; //TEMPERATURAS REGISTRADAS EN SANTA TECLA POR MES

const marginLeft = 50; //margen a la izquierda
const marginRight = 50; //margen a la derecha

function drawLineWithLabels(data,color){
    ctx.beginPath();
    ctx.lineWidth = 2; //grosor de la línea
    ctx.strokeStyle = color;

    //SE RECORRE CADA VALOR DE data
    for(let i = 0; i<data.length; i++){
        //SE AJUSTA POSICIÓN DE LA GRÁFICA
        const x = (i/(data.length - 1)) * (canvas.width - marginLeft - marginRight) + marginLeft; // EN EJE X
        const y = canvas.height - (data[i]-15) * 10; // EN EJE Y (escalado vertical)

        //COMENZAMOS A DIBUJAR
        if(i === 0){
            //CUANDO INICIA LA LISTA
            ctx.moveTo(x,y);
        }else{
            ctx.lineTo(x,y);
        }

        ctx.fillStyle = color;
        ctx.font = "12px Arial";
        ctx.fillText(data[i]+"°C", x + 5, y - 5); //SE ESCRIBE EL VALOR DE LA ETIQUETA
    }
    ctx.stroke();
}

function drawAxes(){
    ctx.beginPath();
    ctx.strokeStyle = "#000000";
    ctx.lineWidth = 1;

    //DIBUJAR EJE X
    ctx.moveTo(50, canvas.height - 50);
    ctx.lineTo(canvas.width - 50, canvas.height - 50);

    //DIBUJAR EJE Y
    ctx.moveTo(50,canvas.height - 50);
    ctx.lineTo(50,50);

    ctx.stroke();

    //Escribir etiquetas en eje X
    for(let i=0; i < labels.length; i++){
        const x = ( i / (labels.length - 1) ) * ( canvas.width - 100) + 50;
        ctx.fillText(labels[i],x,canvas.height - 30);
    }

    //Escribir etiqutas en eje Y
    for(let i = 20; i <= 40; i += 5){
        const y = canvas.height - 50 - (i -20) * 10;
        ctx.fillText(i+" °C", 20, y + 5);
    }
}

drawAxes();
drawLineWithLabels(sanSalvador,'red');
drawLineWithLabels(santaTecla,'blue');

//Escribir leyenda
ctx.fillStyle = "red";
ctx.fillRect(70,20,10,10);
ctx.fillStyle = "black";
ctx.fillText("San Salvador",85,30);

ctx.fillStyle = "blue";
ctx.fillRect(170,20,10,10);
ctx.fillStyle = "black";
ctx.fillText("Santa Tecla",185,30);