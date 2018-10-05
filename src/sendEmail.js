const sendMail = (emailStaff, nameStaff, date, nameVisitor, dniVisitor) => {
    $.ajax({
      type: "POST",
      url: "https://mandrillapp.com/api/1.0/messages/send.json",
      data: {
        'key': 'ZGiSDAUGJIgaCMIqm9ysPA',
        'message': {
          "html": `<p>Hola ${nameStaff}</p>`,
          "text": `En recepción se ha presentado, ${nameVisitor} con DNI ${dniVisitor}, por favor comunícate con nosotros para confirmar su visita.`,
          "subject": "Visita en Recepción",
          "from_email": "recepcion@coworking.com",
          "from_name": "Co-working",
          "to": [
              {
                  "email": emailStaff,
                  "name": nameStaff,
                  "type": "to"
              }
          ],
          "headers": {
              "Reply-To": "gonzalo.p@laboratoria.la"
          }
   
      },
      "async": false,
      "ip_pool": "Main Pool",
      "send_at": date
      }
    });
   }