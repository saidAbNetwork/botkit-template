module.exports = function (controller) {

    controller.hears([/^test$/], 'direct_message,direct_mention', function (bot, message) {

        bot.startConversation(message, function (err, convo) {
            convo.say('Create a Ticket.');
        
            convo.ask('What is your ticket about?', function (response, convo) 
            {
                if(response.text != null)
                {
                    convo.ask('Please give a short description: ', function (rep, convo) 
                    {
                        convo.next();
                    });
                    
                    convo.say('ticket about ' + response.text + ' is created!');
                }            
                convo.next();
            });
        });

    });
};
