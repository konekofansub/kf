const fetch = require('node-fetch');
const Discord = require("discord.js");
const querystring = require('querystring');
const axios = require('axios')




module.exports =
 {

    name: "search",
	help: prefix => `Lists all active feeds for this channel. Usage: \`${prefix}search\``,
    admin: false,

	invoke: async (args, message, bot) => {
        var argt = args.toString().replace(/,/g, '+');
        
        axios.get(`https://konekofansub.gq/index.php/wp-json/wp/v2/categories?search=${argt}`)
       
    
        

        .then((res) => {
            // handle success
            console.log('RES:', res);
            //message.reply( res.data[0].link)
            message.reply({
                    embed: {
                  title: res.data[0].name,
                       url: res.data[0].link,
                    
                 // image: res.data[0].description,
                
                  footer: {
                    text: `Powered by Koneko Fansub • `,
                    icon_url: "http://ekladata.com/mn4Y7yTW38eQaFVYSmwxByXRDPU@150x180.png"

                  },
                  description: res.data[0].yoast_head,
                  timestamp: new Date(),
    
                  color: 0xf55185,
                },
            },
             
            
        );

              
          })
          .catch((err) => {
            // handle error
            console.log('ERR:', err);
            message.reply(`Malheureusement votre recherche n'a pas abouti.\n N'hesite pas à faire la demande pour l'ajouter ^^.`)

        })
       
     }
}



