const wan1Status = document.getElementById('wan1-status');
const wan2Status = document.getElementById('wan2-status');
const btnFallo = document.getElementById('btn-fallo');
const btnRestaurar = document.getElementById('btn-restaurar');
const logOutput = document.getElementById('log-output');

btnFallo.addEventListener('click', function() {
    // Estado intermedio: Simulando la detección de falla
    wan1Status.textContent = 'WAN 1: DETECTANDO FALLA...';
    wan1Status.className = 'badge standby'; 
    logOutput.textContent = '[*] PING Timeout en WAN 1. Verificando estado del enlace...';
    logOutput.style.color = '#ffc107';

    // Deshabilita el botón temporalmente para que no hagan doble clic
    btnFallo.disabled = true;

    // Retraso de 2 segundos (2000 ms) para simular la realidad
    setTimeout(function() {
        wan1Status.textContent = 'WAN 1 (Principal): CAÍDA';
        wan1Status.className = 'badge offline'; 

        wan2Status.textContent = 'WAN 2 (Respaldo): ACTIVA';
        wan2Status.className = 'badge active'; 

        logOutput.textContent = '[!] ALERTA: Falla confirmada. Conmutando tráfico a WAN 2 (Failover exitoso).';
        logOutput.style.color = '#ff4d4d'; // Rojo brillante
        btnFallo.disabled = false;
    }, 2000);
});

btnRestaurar.addEventListener('click', function() {
    wan1Status.textContent = 'WAN 1 (Principal - 100 Mbps): ACTIVA';
    wan1Status.className = 'badge active'; 

    wan2Status.textContent = 'WAN 2 (Respaldo - 50 Mbps): EN ESPERA';
    wan2Status.className = 'badge standby'; 

    logOutput.textContent = '[✓] INFO: WAN 1 restablecida. Tráfico regresando a línea principal.';
    logOutput.style.color = '#4af626'; 
});