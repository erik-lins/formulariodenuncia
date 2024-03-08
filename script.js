function submitReport() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var incidentReport = document.getElementById('incidentReport').value;
    var isAnonymous = document.getElementById('anonymousCheckbox').checked;

    if (incidentReport.trim() !== '') {
        alert('Sua denúncia foi enviada com sucesso. Obrigado por contribuir para a segurança.');
        // Limpar o formulário após o envio bem-sucedido
        document.getElementById('incidentForm').reset();
        // Exibir a mensagem de sucesso
        document.getElementById('successMessage').innerHTML = 'Sua denúncia foi enviada com sucesso. Obrigado por contribuir para a segurança.';
        // Adicionar lógica para enviar a denúncia para um servidor ou armazenar localmente
    } else {
        alert('Por favor, descreva o incidente antes de enviar.');
    }
}
