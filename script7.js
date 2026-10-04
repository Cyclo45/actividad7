function verificar() {
  const email = document.querySelector('#email').value
  const password = document.querySelector('#password').value
  const resultado = document.querySelector('#resultado')

  if (email === 'fernando.moya.ibanez@gmail.com' && password === '0045') {
    resultado.innerHTML = 'Usuario correcto'
  } else {
    resultado.innerHTML = 'Usuario incorrecto'
  }
}

function aceptar() {
  const aceptar = document.querySelector('#aceptar')
  aceptar.innerHTML = 'alma aceptada ✓'
  aceptar.disabled = true

  document.querySelector('#continuar').disabled = false
  document.querySelector('#mensaje').innerHTML = ''
}

function continuar() {
  document.querySelector('#mensaje').innerHTML = 'Continuando...' 
  window.location.href = 'https://youtu.be/mV7451mcw-E'
}