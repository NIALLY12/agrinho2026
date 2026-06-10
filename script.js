let gotasAspersao = [];
let gotasGotejamento = [];
let inputArea;

function setup() {
    let canvas = createCanvas(700, 350);
    canvas.parent('canvas-holder');
    
    inputArea = select('#areaInput');

    for (let i = 0; i < 45; i++) {
        gotasAspersao.push({
            x: random(40, 310),
            y: random(-150, 220),
            velocidade: random(3, 6)
        });
    }

    for (let i = 0; i < 12; i++) {
        gotasGotejamento.push({
            x: random(410, 660),
            y: random(235, 245),
            velocidade: random(1.5, 2.5)
        });
    }
}

function draw() {
    background(250, 250, 250);

    let area = float(inputArea.value());
    if (isNaN(area) || area <= 0) {
        area = 0;
    }

    let totalEconomizado = area * 6;

    stroke(226, 232, 240);
    strokeWeight(2);
    line(width / 2, 15, width / 2, 260);

    // Aspersão (Esquerda)
    noStroke();
    fill(239, 68, 68);
    rect(60, 20, 160, 30, 6);
    fill(255);
    textSize(13);
    textAlign(CENTER, CENTER);
    text("Aspersão (Alto Consumo)", 140, 35);

    fill(141, 110, 99); 
    rect(30, 240, 290, 20);
    fill(46, 125, 50);
    ellipse(120, 228, 38, 28);
    ellipse(230, 228, 38, 28);

    fill(21, 101, 192, 160);
    for (let g of gotasAspersao) {
        ellipse(g.x, g.y, 4, 8);
        g.y += g.velocidade;
        if (g.y > 240) {
            g.y = random(-40, 0);
            g.x = random(40, 310);
        }
    }

    // Gotejamento (Direita)
    noStroke();
    fill(34, 197, 94);
    rect(470, 20, 170, 30, 6);
    fill(255);
    text("Gotejamento Eficiente", 555, 35);

    fill(109, 76, 65); 
    rect(380, 240, 290, 20);
    fill(76, 175, 80);
    ellipse(470, 225, 44, 34);
    ellipse(580, 225, 44, 34);

    stroke(71, 85, 105);
    strokeWeight(5);
    line(380, 238, 670, 238);

    noStroke();
    fill(21, 101, 192);
    for (let g of gotasGotejamento) {
        ellipse(g.x, g.y, 6, 6);
        g.y += g.velocidade;
        if (g.y > 246) {
            g.y = 238; 
        }
    }

    // Painel de Resultados
    fill(241, 245, 249);
    noStroke();
    rect(30, 280, 640, 55, 8);

    fill(51, 65, 85);
    textSize(15);
    textAlign(LEFT, CENTER);
    text("Economia diária estimada para seu cultivo:", 50, 308);

    textAlign(RIGHT, CENTER);
    textSize(22);
    fill(21, 101, 192);
    text(totalEconomizado.toLocaleString('pt-BR') + " Litros", 650, 308);
}
