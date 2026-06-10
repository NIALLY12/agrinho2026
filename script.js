// Vetores dinâmicos do ecossistema de partículas
let aspersaoParticulas = [];
let gotejamentoParticulas = [];

// Elementos de interface capturados
let seletorCultura;
let entradaArea;

// Fatores de consumo reais (Litros consumidos por m² ao dia por cultura)
// Fonte de Referência Técnica: Parâmetros médios Embrapa Agrobiologia
const dadosCulturas = {
    horta: { nome: "Hortaliças", taxaAspersao: 8, taxaGotejamento: 3.2, custoLitro: 0.004 },
    soja:  { nome: "Soja", taxaAspersao: 6, taxaGotejamento: 2.8, custoLitro: 0.003 },
    milho: { nome: "Milho", taxaAspersao: 7, taxaGotejamento: 3.0, custoLitro: 0.003 }
};

function setup() {
    // Configura o canvas profissional de alta resolução espacial
    let canvas = createCanvas(800, 420);
    canvas.parent('canvas-holder');
    
    // Vincula os seletores DOM do HTML
    seletorCultura = select('#culturaSelect');
    entradaArea = select('#areaInput');

    // Instancia o pool físico de partículas da Aspersão (Chuva Parabólica)
    for (let i = 0; i < 60; i++) {
        aspersaoParticulas.push(criarParticulaAspersao());
    }

    // Instancia o pool físico do Gotejamento (Fluxo Vertical Perfeito)
    for (let i = 0; i < 20; i++) {
        gotejamentoParticulas.push({
            x: random(440, 750),
            y: random(235, 240),
            vel: random(1.2, 2.8),
            tamanho: random(4, 7)
        });
    }
}

function draw() {
    background(15, 23, 42); // Tema Dark Dashboard (Moderno)

    // Coleta dados dos inputs em tempo real
    let chaveCultura = seletorCultura.value();
    let area = float(entradaArea.value());
    if (isNaN(area) || area <= 0) area = 0;

    let info = dadosCulturas[chaveCultura];

    // Cálculos Matemáticos Avançados de Impacto Ambiental
    let consumoAspersao = area * info.taxaAspersao;
    let consumoGotejamento = area * info.taxaGotejamento;
    let economiaLitros = consumoAspersao - consumoGotejamento;
    let economiaFinanceira = economiaLitros * info.custoLitro;

    // Interface Visual: Linha Divisória de Modos Hidrodinâmicos
    stroke(51, 65, 85);
    strokeWeight(2);
    line(width / 2, 20, width / 2, 260);

    // ==========================================
    // SIMULAÇÃO ESQUERDA: ASPERSÃO TRADICIONAL
    // ==========================================
    desenharCenarioAgro(40, "ASPERSÃO CONVENCIONAL", color(239, 68, 68), "Alto Desperdício por Evaporação/Vento");

    // Renderiza e atualiza partículas de aspersão com comportamento de spray parabólico
    fill(56, 189, 248, 180); // Azul Celeste Translúcido
    noStroke();
    for (let p of aspersaoParticulas) {
        ellipse(p.x, p.y, p.w, p.h);
        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.08; // Simulação de Gravidade

        // Reseta partícula ao colidir com a linha do solo
        if (p.y > 240) {
            Object.assign(p, criarParticulaAspersao());
        }
    }

    // ==========================================
    // SIMULAÇÃO DIREITA: GOTEJAMENTO INTELIGENTE
    // ==========================================
    desenharCenarioAgro(440, "GOTEJAMENTO SUSTENTÁVEL", color(34, 197, 94), "Precisão Hídrica Direto na Raiz");

    // Mangueira de Alta Pressão Tecnológica
    stroke(100, 116, 139);
    strokeWeight(6);
    line(420, 236, 780, 236);

    // Renderiza o fluxo cirúrgico das gotas do gotejador
    noStroke();
    fill(14, 165, 233);
    for (let g of gotejamentoParticulas) {
        ellipse(g.x, g.y, g.tamanho, g.tamanho * 1.2);
        g.y += g.vel;

        if (g.y > 248) {
            g.y = 236; // Retorna para a saída da mangueira
            g.x = random(440, 750);
        }
    }

    // ==========================================
    // GRÁFICOS E METRICAS DO DASHBOARD (INFERIOR)
    // ==========================================
    desenharDashboardMetricas(area, consumoAspersao, consumoGotejamento, economiaLitros, economiaFinanceira, info.nome);
}

// Helper para gerar o comportamento parabólico (spray) da aspersão comum
function criarParticulaAspersao() {
    return {
        x: random(180, 220), // Origem do bocal aspersor central
        y: 210,
        vx: random(-3.5, 3.5),
        vy: random(-4.5, -1.5),
        w: random(3, 5),
        h: random(5, 8)
    };
}

// Desenha a base física de cada cenário agrícola (Céu, Solo, Plantas)
function desenharCenarioAgro(offsetX, titulo, corDestaque, sub) {
    noStroke();
    // Identificador do Modo
    fill(corDestaque);
    rect(offsetX, 20, 320, 28, 6);
    fill(255);
    textSize(12);
    fontStyle(BOLD);
    textAlign(CENTER, CENTER);
    text(titulo, offsetX + 160, 34);
    
    // Subtítulo descritivo
    fontStyle(NORMAL);
    fill(148, 163, 184);
    textSize(10);
    text(sub, offsetX + 160, 60);

    // Solo Orgânico
    fill(67, 42, 25);
    rect(offsetX, 240, 320, 20, 4);

    // Desenho Computacional das Plantas Viva/Seca
    fill(offsetX < 400 ? color(34, 139, 34) : color(0, 200, 80));
    for (let i = 40; i < 300; i += 70) {
        ellipse(offsetX + i, 228, 30, 24);
        ellipse(offsetX + i + 10, 222, 20, 20);
    }

    // Se for aspersão, desenha a haste física do equipamento aspersor mecânico
    if (offsetX < 400) {
        stroke(148, 163, 184);
        strokeWeight(4);
        line(200, 240, 200, 210);
    }
}

// Renderiza os gráficos estatísticos comparativos na base do canvas
function desenharDashboardMetricas(area, cAsp, cGot, ecoLitros, ecoFin, nomeCultura) {
    // Fundo do Painel Informativo Integrado
    noStroke();
    fill(30, 41, 59);
    rect(20, 285, 760, 115, 12);

    // Textos de Informações Gerais
    textAlign(LEFT, TOP);
    fill(241, 245, 249);
    textSize(14);
    fontStyle(BOLD);
    text("Mapeamento Agro-Sustentável: " + nomeCultura + " (" + area.toLocaleString('pt-BR') + " m²)", 40, 300);

    // Alinhamentos dos indicadores chave
    fontStyle(NORMAL);
    textSize(12);
    fill(148, 163, 184);
    text("Economia de Água Diária:", 40, 330);
    text("Retenção de Custo Estimado:", 40, 360);

    // Valores em Destaque Comercial de Impacto
    textSize(16);
    fontStyle(BOLD);
    fill(56, 189, 248); // Destaque Azul
    text(ecoLitros.toLocaleString('pt-BR', { minimumFractionDigits: 1, maximumFractionDigits: 1 }) + " Litros / Dia", 220, 328);
    
    fill(34, 197, 94); // Destaque Verde Eco
    text("R$ " + ecoFin.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + " em Recursos", 220, 358);

    // ==========================================
    // RENDERIZAÇÃO DO GRÁFICO DE BARRAS DINÂMICO
    // ==========================================
    let maxX = 140; // Comprimento máximo da barra gráfica
    let escala = max(cAsp, cGot) > 0 ? maxX / max(cAsp, cGot) : 0;

    // Título do Mini-Gráfico
    fill(241, 245, 249);
    textSize(11);
    text("Comparativo de Gasto Diário (L)", 520, 300);

    // Barra Aspersão (Vermelha)
    fill(71, 85, 105);
    rect(520, 325, maxX, 14, 4);
    fill(239, 68, 68);
    rect(520, 325, cAsp * escala, 14, 4);
    fill(255);
    textSize(10);
    text(round(cAsp) + " L", 530 + (cAsp * escala > 40 ? 0 : 40), 327);

    // Barra Gotejamento (Verde)
    fill(71, 85, 105);
    rect(520, 355, maxX, 14, 4);
    fill(34, 197, 94);
    rect(520, 355, cGot * escala, 14, 4);
    fill(255);
    text(round(cGot) + " L", 530 + (cGot * escala > 40 ? 0 : 40), 357);
    
    fontStyle(NORMAL);
}
