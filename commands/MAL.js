require('dotenv').config();
const axios = require('axios')
const { MessageEmbed } = require('discord.js');
const Discord = require('discord.js');
const formatNumber = require('../commands/numbering');

module.exports = {
  name: 'whatanime',
  async execute(args, msg, client) {
    var Attachment = (msg.attachments).array();
     console.log(Attachment)
    if(Attachment.length < 1){
      msg.channel.send(`Merci de mettre une pièce jointe pour l'image <:790001108126400513:815349035174592522>`).then(sent => sent.delete({ timeout: 5e3 }));;
      msg.delete();
      
   

    }
    else{
      const URL = encodeURI(`https://api.trace.moe/search?url=${Attachment[0].url}`)
      msg.channel.send('Generating <a:emoji_46:814085465288081448> ').then(message => {
        axios.get(URL).then(res => {
          if (res.data.docs.length < 1) {
            message.edit('Anime tidak ditemukan');
          }else{
            const embed = {
              color: 3117311,
              footer: {
                text: 'Powered by Koneko Fansub || Trace.moe'
              },
              image: {
                url: Attachment[0].image
              },
              author: {
                name:  res.data.docs[0].title,
                url: `https://myanimelist.net/anime/${res.data.docs[0].mal_id}`,
              },
              fields: [
             
                {
                  name: 'Title',
                  value: res.data.docs[0].title_english,
                  inline: false
                },
                {
                  name: 'MyAnimeList',
                  value: `https://myanimelist.net/anime/${res.data.docs[0].mal_id}`,
                  inline: false
                },
                {
                  name: 'Similarity',
                  value: res.data.docs[0].similarity.toFixed(2),
                  inline: false
                },
                {
                  name: 'Episode',
                  value: res.data.docs[0].episode,
                  inline: false
                }
              ],
            }
            message.edit("Voilà ce que j'ai trouvé <:choupi:790242996800323604>");
            msg.channel.send({embed: embed})
            msg.channel.send("\nSi ce n'est pas la bonne source ou que cela vient d'un FanArt. Faire `kf!sauce`")
          }
        }).catch(err => {
          console.log(err)
          message.edit('<:emoji_5:638906549963849729> Pas trouvé');
        })
      })
    }
  },
};