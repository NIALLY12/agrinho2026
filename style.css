// Controle do Sistema de Abas (Tabs) do Painel Interativo
function switchTab(tabName) {
    // Remove classe ativa de todas as abas e conteúdos
    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
    document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));
    
    // Adiciona classe ativa na aba e conteúdo selecionado
    if(tabName === 'calc') {
        document.querySelectorAll('.tab-btn')[0].classList.add('active');
        document.getElementById('tab-calc').classList.add('active');
    } else {
        document.querySelectorAll('.tab-btn')[1].classList.add('active');
        document.getElementById('tab-quiz').classList.add('active');
    }
}

// 🧮 Lógica da Calculadora de Impacto Ambiental Real
function runCalculator() {
    const hectaresInput = document.getElementById('hectares').value;
    const resultDiv = document.getElementById('calc-result');
    
    // Validação de segurança do dado inserido
    if (!hectaresInput || hectaresInput <= 0) {
        resultDiv.style.display = "block";
        resultDiv.className = "hidden-result";
        resultDiv.style.backgroundColor = "#ffebee";
        resultDiv.style.color = "#c62828";
        resultDiv.innerHTML = "<strong>Erro:</strong> Por favor, insira um número válido de hectares maior do que zero.";
        return;
    }
    
    const hectares = parseFloat(hectaresInput);
    
    // Métricas reais aproximadas de economia com Agricultura de Precisão por Hectare/Ano
    const aguaEconomizada = hectares * 45000; // litros de água salvos
    const quimicosEvitados = hectares * 12.5; // kg de defensivos evitados
    const dieselSalvo = hectares * 8.2; // litros de diesel poupados pela rota inteligente

    // Montando a resposta de forma estruturada e elegante na tela
    resultDiv.style.display = "block";
    resultDiv.className = "hidden-result result-box";
    resultDiv.innerHTML = `
        <h3>Simulação Concluída para ${hectares} Hectares!</h3>
        <p>Ao implementar sistemas tecnológicos inteligentes, sua propriedade rural gerará a seguinte economia ecológica anual:</p>
        <ul style="margin-top: 10px; padding-left: 20px;">
            <li>💧 <strong>${aguaEconomizada.toLocaleString('pt-BR')} Litros de Água</strong> preservados nos lençóis freáticos.</li>
            <li>🌱 <strong>${quimicosEvitados.toFixed(1).replace('.', ',')} kg de Insumos Químicos</strong> que deixaram de sobrecarregar o solo.</li>
            <li>🚜 <strong>${dieselSalvo.toFixed(1).replace('.', ',')} Litros de Combustível</strong> economizados, diminuindo a emissão de CO₂ na atmosfera.</li>
        </ul>
        <p style="margin-top: 10px; font-weight: bold; color: #1b5e20;">Resultado: Alta performance econômica em total equilíbrio com o meio ambiente!</p>
    `;
}

// 🧠 Lógica do Quiz Tecnológico de Sustentabilidade
function runQuiz() {
    const r1 = document.querySelector('input[name="r1"]:checked');
    const r2 = document.querySelector('input[name="r2"]:checked');
    const resultDiv = document.getElementById('quiz-result');
    
    // Validação para checar se o aluno respondeu tudo
    if (!r1 || !r2) {
        resultDiv.style.display = "block";
        resultDiv.className = "hidden-result";
        resultDiv.style.backgroundColor = "#ffebee";
        resultDiv.style.color = "#c62828";
        resultDiv.innerHTML = "<strong>Atenção:</strong> Por favor, responda todas as questões do quiz antes de avaliar.";
        return;
    }
    
    // Processamento da pontuação acumulada
    const totalScore = parseInt(r1.value) + parseInt(r2.value);
    
    resultDiv.style.display = "block";
    resultDiv.className = "hidden-result result-box";
    
    // Renderizando o diagnóstico baseado na pontuação
    if (totalScore === 20) {
        resultDiv.innerHTML = `
            <h3>Pontuação: 20 / 20 Pontos - Fazenda Modelo Sustentável!</h3>
            <p>Excelente! A propriedade fictícia adota os pilares da <strong>Agricultura 4.0</strong>. O uso de taxa variável de fertilizantes e drones evita a degradação ambiental e maximiza a rentabilidade de forma limpa.</p>
        `;
    } else if (totalScore === 10) {
        resultDiv.innerHTML = `
            <h3>Pontuação: 10 / 20 Pontos - Transição Tecnológica</h3>
            <p>Bom trabalho, mas há espaço para evoluir! A propriedade já entendeu o valor da automação em uma das frentes, porém a falta de precisão na outra área ainda gera desperdício econômico e pegada ecológica negativa.</p>
        `;
    } else {
        resultDiv.innerHTML = `
            <h3>Pontuação: 0 / 20 Pontos - Alerta de Impacto Crítico</h3>
            <p>Atenção! Práticas agrícolas baseadas puramente em calendários fixos e pulverizações maciças destroem os nutrientes do solo e causam contaminações severas. É urgente a implementação de ferramentas tecnológicas de precisão.</p>
        `;
    }
}
