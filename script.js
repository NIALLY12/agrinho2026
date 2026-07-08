// Alternar abas do painel hídrico de forma limpa e corrigida
function toggleWaterTab(tabId) {
    // Esconde todos os painéis e remove seleções de botões
    document.getElementById('panel-calc').classList.remove('active');
    document.getElementById('panel-check').classList.remove('active');
    document.getElementById('btn-calc').classList.remove('active');
    document.getElementById('btn-check').classList.remove('active');

    // Ativa os elementos corretos baseados no ID passado
    if (tabId === 'calc') {
        document.getElementById('panel-calc').classList.add('active');
        document.getElementById('btn-calc').classList.add('active');
    } else {
        document.getElementById('panel-check').classList.add('active');
        document.getElementById('btn-check').classList.add('active');
    }
}

// Lógica de cálculo da economia real de água por hectare irrigado de forma inteligente
function calculateWaterSavings() {
    const areaInput = document.getElementById('area-lavoura').value;
    const output = document.getElementById('result-calc-water');

    if (!areaInput || areaInput <= 0) {
        output.style.display = "block";
        output.className = "water-output-box error-water";
        output.innerHTML = "<strong>⚠️ Erro:</strong> Digite uma quantidade válida de hectares.";
        return;
    }

    const area = parseFloat(areaInput);
    
    // Média de economia anual: 120.000 litros de água poupados por hectare usando sensores
    const litrosSalvos = area * 120000; 
    const energiaPoupada = area * 85; // economia em kWh de bombas de água ligadas menos tempo

    output.style.display = "block";
    output.className = "water-output-box success-water";
    output.innerHTML = `
        <h4>💧 Diagnóstico de Impacto Concluído!</h4>
        <p>Ao modernizar a irrigação em <strong>${area.toLocaleString('pt-BR')} hectares</strong>, os resultados ecológicos estimados serão:</p>
        <ul style="margin: 10px 0; padding-left: 20px;">
            <li>Volume de Água Preservado: <strong>${litrosSalvos.toLocaleString('pt-BR')} Litros/Ano</strong>.</li>
            <li>Redução de Consumo Energético: <strong>${energiaPoupada.toLocaleString('pt-BR')} kWh</strong> devido à otimização das motobombas.</li>
        </ul>
        <p style="font-weight:600;">Sua plantação produz com eficiência máxima e protege os mananciais locais!</p>
    `;
}

// Avaliação do gerenciamento de água da fazenda
function evaluateWaterManagement() {
    const q1 = document.querySelector('input[name="water-q1"]:checked');
    const q2 = document.querySelector('input[name="water-q2"]:checked');
    const output = document.getElementById('result-check-water');

    if (!q1 || !q2) {
        output.style.display = "block";
        output.className = "water-output-box error-water";
        output.innerHTML = "<strong>⚠️ Atenção:</strong> Responda todas as perguntas do checklist.";
        return;
    }

    const score = parseInt(q1.value) + parseInt(q2.value);
    output.style.display = "block";
    output.className = "water-output-box success-water";

    if (score === 20) {
        output.innerHTML = `
            <h4>🏆 Nível de Manejo: Sustentabilidade Hidrológica Máxima!</h4>
            <p>Excelente! A propriedade armazena água pluvial de forma inteligente e só aciona a irrigação baseando-se em leituras reais de sensores, anulando o estresse hídrico e o desperdício.</p>
        `;
    } else if (score === 10) {
        output.innerHTML = `
            <h4>⚠️ Nível de Manejo: Risco Moderado de Escassez</h4>
            <p>A propriedade já possui boas iniciativas em uma das frentes, mas a dependência de processos manuais ou sem leitura técnica de solo em outras etapas gera desperdício silencioso de recursos hídricos.</p>
        `;
    } else {
        output.innerHTML = `
            <h4>🚨 Nível de Manejo: Crítico e Antieconômico</h4>
            <p>Alerta total! Irrigar por rotinas fixas sem considerar a umidade real da terra gera saturação de solo, lixiviação de nutrientes e desperdício severo de água preciosa. É vital atualizar as tecnologias de manejo.</p>
        `;
    }
}
