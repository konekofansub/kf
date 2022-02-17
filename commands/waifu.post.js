const fetch = require('node-fetch');
const { MessageEmbed } = require('discord.js');
const querystring = require('querystring');
const axios = require('axios');
const { send } = require('process');
const { url } = require('inspector');




module.exports =
 {

    name: "w",
	help: prefix => `Lists all active feeds for this channel. Usage: \`${prefix}search\``,
    admin: false,

	invoke: async (args, message, bot) => {
        //var argt = args.toString().replace(/,/g, '+');
        const query = args[0];
        //const categories = ['megumin', 'neko', 'shinobu', 'waifu', 'trap'];
        //if (categories.includes(query)) {
          // Request a response from the waifu.pics API
          const response = await fetch(`https://api.waifu.pics/nsfw/${args}`);
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

      
  }
};