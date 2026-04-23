const canvas = document.getElementById("lineChart");
const ctx = canvas.getContext("2d");

//DATOS PARA GRAFICAR
const labels = ['Ene','Feb','Mar','Abr','May','Jun','Jul','Ago','Sept','Oct','Nov','Dic'];
const sanSalvador = [30,32,34,35,36,37,36,35,34,32,31,30];
const santaTecla = [25,26,28,29,31,32,32,31,30,28,27,26];

const marginLeft = 50;
const marginRight = 50;

function drawLineWithLabels(data,color){
    ctx.beginPath();
    ctx.lineWidth = 2;
    ctx.strokeStyle = color;

    //SE RECORRE CADA VALOR DE data
    for(let i = 0; i<data.lenght; i++){
        //SE AJUSTA POSICIÓN DE LA GRÁFICA
        const x = (i/(data.lenght - 1)) * (canvas.width - marginLeft - marginRight) + marginLeft;
        const y = canvas.heigth() - (data[i]-15) * 10;

        //COMENZAMOS A DIBUJAR
        if(i === 0){
            ctx.moveTo(x,y);
        }else{
            ctx.lineTo(x,y);
        }

        ctx.fillStyle = color;
        ctx.font = "12px Arial";
        ctx.fillText(data[i]+"°C",x+5,y-5); //SE ESCRIBE EL VALOR DE LA ETIQUETA
    }
    ctx.stroke();
}
/*
function drawAxes(){
    ctx.beginPath();
    ctx.strokeStyle = "#000000";
    ctx.lineWidth = 1;

    ctx.moveTo();
}
*/