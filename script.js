// Selecionar todas as perguntas
const questions = document.querySelectorAll('.question');

// Adicionar um evento de clique a cada pergunta
questions.forEach(question => {
    question.addEventListener('click', () => {
        // Selecionar a resposta associada a esta pergunta
        const answer = question.nextElementSibling;

        // Alternar a visibilidade da resposta (mostrar/ocultar)
        if (answer.style.display === 'none' || answer.style.display === '') {
            answer.style.display = 'block';
            question.classList.add('open'); // Adicione a classe 'open' à pergunta
        } else {
            answer.style.display = 'none';
            question.classList.remove('open'); // Remova a classe 'open' da pergunta
        }
    });
});

        // Código JavaScript para rolagem suave
        document.addEventListener('DOMContentLoaded', function () {
            const smoothScrollLinks = document.querySelectorAll('.smooth-scroll');
            
            smoothScrollLinks.forEach(link => {
                link.addEventListener('click', function (e) {
                    e.preventDefault();
                    
                    const targetId = link.getAttribute('href').substring(1);
                    const targetElement = document.getElementById(targetId);
                    
                    if (targetElement) {
                        window.scrollTo({
                            top: targetElement.offsetTop,
                            behavior: 'smooth'
                        });
                    }
                });
            });
        });