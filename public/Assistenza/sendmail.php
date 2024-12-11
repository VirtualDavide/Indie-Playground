<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Ottieni i dati dal modulo
    $nome = htmlspecialchars($_POST['nome']);
    $email = htmlspecialchars($_POST['email']);
    $messaggio = htmlspecialchars($_POST['messaggio']);

    // Impostazioni email
    $to = "indieplaygroundgames@gmail.com";  // Cambia con l'indirizzo email dove vuoi ricevere i messaggi
    $subject = "Messaggio da: $nome";
    $message = "Nome: $nome\nEmail: $email\n\nMessaggio:\n$messaggio";
    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "X-Mailer: PHP/" . phpversion();

    // Invia l'email
    if (mail($to, $subject, $message, $headers)) {
        echo "Il messaggio è stato inviato con successo.";
    } else {
        echo "Si è verificato un errore durante l'invio del messaggio.";
    }
}
?>