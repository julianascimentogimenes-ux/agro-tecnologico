css/* ==========================================================================
   1. ESTILOS GLOBAIS E VARIÁVEIS
   ========================================================================== */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

:root {
    --primary-color: #2e7d32;    /* Verde Agro */
    --secondary-color: #37474f;  /* Grafite escuro */
    --accent-color: #81c784;     /* Verde claro */
    --light-bg: #f5f5f5;         /* Fundo claro */
    --white: #ffffff;            /* Branco */
    --transition-fast: 0.3s ease;
}

html {
    scroll-behavior: smooth;
}

body {
    background-color: var(--light-bg);
    color: var(--secondary-color);
    line-height: 1.6;
}

/* ==========================================================================
   2. COMPONENTES REUTILIZÁVEIS (BOTÕES E TÍTULOS)
   ========================================================================== */
.btn {
    display: inline-block;
    background-color: var(--primary-color);
    color: var(--white);
    padding: 0.75rem 2rem;
    text-decoration: none;
    border-radius: 4px;
    font-weight: bold;
    border: none;
    cursor: pointer;
    transition: background var(--transition-fast), transform var(--transition-fast);
}

.btn:hover {
    background-color: #1b5e20;
    transform: translateY(-2px);
}

.btn:disabled {
    background-color: #9e9e9e !important;
    cursor: not-allowed;
    transform: none;
}

.section-title {
    text-align: center;
    font-size: 2rem;
    margin-bottom: 3rem;
    position: relative;
}

.section-title::after {
    content: '';
    display: block;
    width: 50px;
    height: 4px;
    background-color: var(--primary-color);
    margin: 0.5rem auto 0;
    border-radius: 2px;
}

section {
    padding: 5rem 2rem;
    max-width: 1200px;
    margin: 0 auto;
}

/* ==========================================================================
   3. CABEÇALHO E NAVEGAÇÃO
   ========================================================================== */
header {
    background-color: var(--white);
    box-shadow: 0 2px 5px rgba(0,0,0,0.1);
    position: sticky;
    top: 0;
    z-index: 1000;
    transition: all var(--transition-fast);
}

.navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
    padding: 1rem 2rem;
}

.logo {
    font-size: 1.5rem;
    font-weight: bold;
    color: var(--primary-color);
}

.nav-links {
    list-style: none;
    display: flex;
    gap: 2rem;
}

.nav-links a {
    text-decoration: none;
    color: var(--secondary-color);
    font-weight: 500;
    transition: color var(--transition-fast);
}

.nav-links a:hover {
    color: var(--primary-color);
}

/* ==========================================================================
   4. SEÇÃO HERO (DESTAQUE PRINCIPAL)
   ========================================================================== */
.hero {
    background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), 
                url('https://unsplash.com') no-repeat center center/cover;
    height: 70vh;
    color: var(--white);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 0 1rem !important; /* Sobrescreve o padding padrão de seções */
    max-width: 100% !important;
}

.hero h1 {
    font-size: 3rem;
    margin-bottom: 1rem;
    animation: fadeInDown 1s ease;
}

.hero p {
    font-size: 1.25rem;
    max-width: 600px;
    margin-bottom: 2rem;
    animation: fadeInUp 1s ease 0.2s;
    animation-fill-mode: both;
}

/* ==========================================================================
   5. SEÇÃO SOLUÇÕES (GRID DE SERVIÇOS)
   ========================================================================== */
.grid-services {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 2rem;
}

.card {
    background-color: var(--white);
    padding: 2.5rem;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0,0,0,0.05);
    text-align: center;
    transition: transform var(--transition-fast), box-shadow var(--transition-fast);
}

.card:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 15px rgba(0,0,0,0.1);
}

.card-icon {
    font-size: 3rem;
    margin-bottom: 1rem;
}

.card h3 {
    margin-bottom: 1rem;
    color: var(--primary-color);
}

/* ==========================================================================
   6. SEÇÃO SOBRE NÓS
   ========================================================================== */
.about-section {
    background-color: var(--white);
    max-width: 100%;
}

.about-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
}

.about-content {
    display: flex;
    gap: 3rem;
    align-items: center;
    flex-wrap: wrap;
}

.about-text {
    flex: 1;
    min-width: 300px;
}

.about-text p {
    margin-bottom: 1.5rem;
}

/* ==========================================================================
   7. SEÇÃO CONTATO (FORMULÁRIO)
   ========================================================================== */
.contact-form {
    max-width: 600px;
    margin: 0 auto;
    background-color: var(--white);
    padding: 3rem;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0,0,0,0.05);
}

.form-group {
    margin-bottom: 1.5rem;
}

.form-group label {
    display: block;
    margin-bottom: 0.5rem;
    font-weight: 500;
}

.form-group input, 
.form-group textarea {
    width: 100%;
    padding: 0.75rem;
    border: 1px solid #ccc;
    border-radius: 4px;
    outline: none;
    font-size: 1rem;
    transition: border-color var(--transition-fast);
}

.form-group input:focus, 
.form-group textarea:focus {
    border-color: var(--primary-color);
    box-shadow: 0 0 0 2px rgba(46, 125, 50, 0.1);
}

.form-submit-btn {
    width: 100%;
}

/* ==========================================================================
   8. RODAPÉ (FOOTER)
   ========================================================================== */
footer {
    background-color: var(--secondary-color);
    color: var(--white);
    text-align: center;
    padding: 2rem;
    margin-top: 5rem;
}

/* ==========================================================================
   9. ANIMAÇÕES
   ========================================================================== */
@keyframes fadeInDown {
    from { opacity: 0; transform: translateY(-20px); }
    to { opacity: 1; transform: translateY(0); }
}

@keyframes fadeInUp {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
}

/* ==========================================================================
   10. RESPONSIVIDADE (MEDIA QUERIES)
   ========================================================================== */
@media (max-width: 768px) {
    .navbar {
        flex-direction: column;
        gap: 1rem;
        padding: 1.5rem 1rem;
    }
    
    .nav-links {
        gap: 1.5rem;
    }

    .hero h1 {
        font-size: 2rem;
    }

    .hero p {
        font-size: 1rem;
    }

    section {
        padding: 3.5rem 1rem;
    }

    .contact-form {
        padding: 1.5rem;
    }
}
