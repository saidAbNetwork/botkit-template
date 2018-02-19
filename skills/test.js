module.exports = function (controller) {

    controller.hears([/^test$/], 'direct_message,direct_mention', function (bot, message) {

        bot.startConversation(message, function (err, convo) {
            convo.say('Create a ticket');

            convo.ask('What is your ticket about?', function (response, convo) {
                convo.say('ticket about' + response.text + ' is created!');
                convo.next();
            });
        });
    });
};
