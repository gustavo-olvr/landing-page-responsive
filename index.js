// Bloqueia o envio real do formulário (demonstração)
document.querySelector('form').addEventListener('submit', function(e) {
  e.preventDefault()
  alert('Obrigado pela mensagem! (Este é apenas um exemplo)')
  this.reset()
})
