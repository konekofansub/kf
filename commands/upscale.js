
const Discord = require('discord.js')
const og = require("open-graph");
const validUrl = require("valid-url");

module.exports =

{

   name: "upscale",
   help: prefix => `Lists all active feeds for this channel. Usage: \`${prefix}search\``,
   admin: false,

   invoke: async (args, message, bot) =>{
   
   
    
    
    
    const deepai = require('deepai'); // OR include deepai.min.js as a script tag in your HTML
    var argt = args.toString().replace(/,/g, '+');
    let truc = await message.channel.send("Upscale en cours <a:emoji_46:814085465288081448> ")

    deepai.setApiKey('cca1010d-4e06-43a1-b601-8e5f83cd20e3');

    (async function() {
        const resp = await deepai.callStandardApi("waifu2x", {
                image: argt,

                });
                truc.edit(resp.output_url);
               // message.reply(resp.output_url);
                console.log(resp);
            
               
    
      })()
}
    }