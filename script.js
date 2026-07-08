/* Definição de Variáveis e Design System Moderno */
:root {
    --bg-main: #f4f6f0;
    --primary: #1b5e20;
    --primary-light: #4c8c4a;
    --primary-dark: #003300;
    --accent: #26a69a;
    --text-dark: #212121;
    --text-muted: #616161;
    --white: #ffffff;
    --shadow: 0 8px 30px rgba(0, 0, 0, 0.08);
    --border-radius: 12px;
    --transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

/* Reset Geral */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    scroll-behavior: smooth;
}

body {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
    background-color: var(--bg-main);
    color: var(--text-dark);
    line-height: 1.7;
}

.container {
    width: 92%;
    max-width: 1100px;
    margin: 0 auto;
}

/* Banner de Entrada Premium */
.main-header {
    background: linear-gradient(135deg, rgba(27,94,32,0.9) 0%, rgba(0,51,0,0.85) 100%), url('https://unsplash.com') center/cover no-repeat;
    color: var(--white);
    padding: 100px 0;
    text-align: center;
    position: relative;
}

.badge {
    background-color: var(--accent);
    color: var(--white);
    padding: 6px 16px;
    border-radius: 50px;
    font-size: 0.85rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 1px;
    display: inline-block;
    margin-bottom: 20px;
}

.main-header h1 {
    font-size: 3rem;
    font-weight: 800;
    letter-spacing: -1px;
    margin-bottom: 15px;
}

.subtitle {
    font-size: 1.25rem;
    max-width: 700px;
    margin: 0 auto;
    opacity: 0.9;
}

/* Barra de Navegação Flutuante */
.nav-bar {
    background-color: var(--white);
    box-shadow: 0 4px 12px rgba(0,0,0,0.05);
    position: sticky;
    top: 0;
    z-index: 100;
    padding: 15px 0;
}

.nav-flex {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.logo {
    font-size: 1.4rem;
    color: var(--primary);
}

.nav-links a {
    color: var(--text-muted);
    text-decoration: none;
    margin-left: 25px;
    font-weight: 500;
    transition: var(--transition);
}

.nav-links a:hover {
    color: var(--primary);
}

/* Grid de Conteúdo */
.grid-layout {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 30px;
    margin-top: 50px;
}

.width-full {
    grid-column: span 2;
}

.info-card {
    background-color: var(--white);
    padding: 40px;
    border-radius: var(--border-radius);
    box-shadow: var(--shadow);
    transition: var(--transition);
    border-top: 4px solid var(--primary);
}

.info-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 40px rgba(0,0,0,0.12);
}

.card-icon {
    font-size: 2.5rem;
    margin-bottom: 15px;
}

.info-card h2 {
    color: var(--primary-dark);
    margin-bottom: 15px;
    font-size: 1.6rem;
}

/* Recursos Internos */
.features-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    margin-top: 25px;
}

.feature-item {
    background-color: #fafbfc;
    padding: 20px;
    border-radius: 8px;
    border-left: 3px solid var(--accent);
}

.feature-item h3 {
    font-size: 1.1rem;
    color: var(--primary);
    margin-bottom: 8px;
}

/* Painel Interativo Avançado */
.interactive-panel {
    background-color: var(--white);
    border-radius: var(--border-radius);
    box-shadow: var(--shadow);
    margin: 50px 0;
    overflow: hidden;
}

.panel-header {
    background-color: var(--primary-dark);
    color: var(--white);
    padding: 30px;
    text-align: center;
}

.tab-buttons {
    display: flex;
    background-color: #eee;
}

.tab-btn {
    flex: 1;
    background: none;
    border: none;
    padding: 15px;
    font-size: 1.05rem;
    font-weight: 600;
    cursor: pointer;
    color: var(--text-muted);
    transition: var(--transition);
}

.tab-btn.active {
    background-color: var(--white);
    color: var(--primary);
    border-bottom: 3px solid var(--primary);
}

.tab-content {
    display: none;
    padding: 40px;
}

.tab-content.active {
    display: block;
}

/* Formulários e Componentes de Interação */
.input-group {
    margin: 25px 0;
    display: flex;
    flex-direction: column-reverse;
}

.input-group input {
    padding: 12px;
    font-size: 1.1rem;
    border: 2px solid #ddd;
    border-radius: 6px;
    outline: none;
    transition: var(--transition);
}

.input-group input:focus {
    border-color: var(--primary);
}

.input-group label {
    font-weight: 600;
    margin-bottom: 6px;
    color: var(--primary);
}

.btn-action {
    background-color: var(--primary);
    color: var(--white);
    padding: 14px 28px;
    border: none;
    border-radius: 6px;
    font-size: 1.1rem;
    font-weight: 600;
    cursor: pointer;
    transition: var(--transition);
    width: 100%;
}

.btn-action:hover {
    background-color: var(--primary-light);
}

.radio-option {
    display: block;
    background-color: #f9f9f9;
    padding: 15px;
    margin: 12px 0;
    border-radius: 6px;
    cursor: pointer;
    border: 1px solid #eee;
    transition: var(--transition);
}

.radio-option:hover {
    background-color: #f1f8e9;
    border-color: var(--primary-light);
}

.radio-option input {
    margin-right: 12px;
}

/* Resultados Estilizados */
.hidden-result {
    display: none;
    margin-top: 30px;
    padding: 25px;
    border-radius: 8px;
    line-height: 1.6;
}

.result-box {
    background-color: #e8f5e9;
    border-left: 6px solid var(--primary);
    color: var(--primary-dark);
}

/* Referências e Rodapé */
.references-section {
    background-color: var(--white);
    padding: 40px;
    border-radius: var(--border-radius);
    box-shadow: var(--shadow);
    margin-bottom: 50px;
}

.references-section ul {
    margin-top: 15px;
    padding-left: 20px;
}

.references-section li {
    margin-bottom: 12px;
}

.main-footer {
    background-color: var(--primary-dark);
    color: var(--white);
    text-align: center;
    padding: 40px 0;
    margin-top: 60px;
    font-size: 0.95rem;
}

/* Animação Fade-in */
.fade-in {
    animation: fadeInUp 0.8s ease forwards;
}

@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

/* Responsividade Avançada */
@media (max-width: 900px) {
    .grid-layout, .features-grid {
        grid-template-columns: 1fr;
    }
    .width-full {
        grid-column: span 1;
    }
    .nav-flex {
        flex-direction: column;
        gap: 15px;
    }
    .main-header h1 {
        font-size: 2.2rem;
    }
}
