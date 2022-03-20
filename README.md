# Email Send API
API criado exclusivamente para um propósito, intermediar envio de emails a partir de qualquer projeto, apenas fazendo uma requsição a um Endpoint.
Utiliza os serviços da [SendGrid](https://www.sendgrid.com) integrados na API para resolver o Host SMTP.

### Como funciona:
Utilizando o método `POST`, deve-se fazer a solicitação contendo um _**body**_ exatamente com o seguinte formato:
```json
{
    "email": "mario@brossemail.com", // Email destino
    "sender_name": "Mario", // Nome de quem envia
    "subject": "It's Me Mario!", // Assunto do email
    "text": "Sorry! But our princess is in another castle!", // Email em formato "plain text"
    "html": "<h2'>Sorry!</h2><p>But your princess is in another castle!</p>" // Email em formato HTML
}
```
O _body_ será validado com um middleware utilizando _**Joi**_ e, se tudo certo, o email será enviado.

Requisitos:
- Email em formato correto;
- Nome, assunto e plain text com no mínimo 2(dois) caracteres;
- HTML com no mínimo 9 caracteres `Ex: "<b>Oi</b>"`.

## IMPORTANTE!
_Por motivos obvios, o email provavelmente chegará na **caixa de spans** do destinatário._

---
Quer utilizar? Encontrou Bugs?
Entre em contato! :D
