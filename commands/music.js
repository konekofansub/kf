module.exports = {
  name: 'play',
  aliases : ['p'],
  description: 'joujou de la music',
  
 
    async  execute(client, message, args) {
      if (!message.guild) return;
      
      if (message.member.voice.channel) {
          const ytdl = require('ytdl-core')
          const connection = await message.member.voice.channel.join();
          const dispatcher = connection.play(ytdl(args[0]), {
              volume: 0.5,
            });

           
        dispatcher.on('error', () => {
          message.reply("Pas réussi à lire ;-;")
          message.member.voice.channel.leave();
    
  });

        dispatcher.on('finish', () =>{
            dispatcher.destroy();
            message.member.voice.channel.leave();
        })
      }
        else {
          message.reply("Tu dois d'abord être dans le channel audio, <:baka:722925781713420371>");
        }
}
};