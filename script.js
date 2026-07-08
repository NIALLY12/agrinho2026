// Armazena as respostas do usuário
let score = 0;
let answersCount = 0;

function checkAnswer(questionNumber, option) {
    // Se a opção B for escolhida (opção sustentável), aumenta a pontuação
    if (option === 'B') {
        score++;
    }
    
    answersCount++;

    // Desabilita os botões da pergunta respondida para evitar cliques duplos
    const questionDivs = document.querySelectorAll('.question');
    const buttons = questionDivs[questionNumber - 1].querySelectorAll('button');
    buttons.forEach(btn => {
        btn.disabled = true;
        btn.style.opacity = '0.6';
    });

    // Quando responder as duas perguntas, mostra o resultado final
    if (answersCount === 2) {
        showDiagnosis();
    }
}

function showDiagnosis() {
    const resultDiv = document.getElementById('result');
    
    if (score === 2) {
        resultDiv.style.backgroundColor = '#d4edda';
        resultDiv.style.color = '#155724';
        resultDiv.innerText = "Parabéns! Essa propriedade rural utiliza tecnologia de ponta e alcança o equilíbrio perfeito entre alta produção e sustentabilidade!";
    } else if (score === 1) {
        resultDiv.style.backgroundColor = '#fff3cd';
        resultDiv.style.color = '#856404';
        resultDiv.innerText = "Bom começo! A propriedade já adota algumas tecnologias, mas ainda pode melhorar o uso dos recursos para proteger mais o meio ambiente.";
    } else {
        resultDiv.style.backgroundColor = '#f8d7da';
        resultDiv.style.color = '#721c24';
        resultDiv.innerText = "Alerta de Desperdício! A falta de tecnologia nesta lavoura está gerando impactos ambientais negativos. É hora de inovar!";
    }
}
