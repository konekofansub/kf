const fetch = require('node-fetch');
const { MessageEmbed } = require('discord.js');
const querystring = require('querystring');
const axios = require('axios');
const { send } = require('process');
const { url } = require('inspector');
const { cp } = require('fs');




module.exports =
 {

    name: "w",
	help: prefix => `Lists all active feeds for this channel. Usage: \`${prefix}search\``,
    admin: false,

	invoke: async (args, message, bot) => {
    const truc = ['neko','shinobu','megumin','cuddle','cry','hug','awoo','kiss','lick','pat','smug','bonk','yeet','blush','smile','wave','highfive','handhold','nom','bite','glomp','slap','kill','kick','happy','wink','poke','dance','cringe',
      ]
      var lululu = Math.floor(Math.random() * truc.length);
      const query = args[0];


          const response = await fetch(`https://api.waifu.pics/sfw/${lululu}`);
          console.log(lululu)
          // Convert the response to a json
          const data = await response.json();

          const embed = new MessageEmbed()
          .setColor("RANDOM")
          .setImage(data.url)
          .setDescription(`[**Si l'image ne s'affiche pas, cliquez ici**](${data.url})`)
          .setAuthor(
              "Koneko Toujou",
              "https://konekofansub.gq/wp-content/uploads/2021/10/206ccfd530548da188c69bebca21d41b.png",)
    
            
            
            .setFooter(
              "Powered by Koneko Fansub || waifu.pics",
              "https://konekofansub.gq/wp-content/uploads/2021/10/2905f2334c6fea514aa9daf2a0dd11db.png"
            )
          
          message.channel.send(embed);
          console.log(embed)


      
  }
};