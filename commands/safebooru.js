const Discord = require('discord.js');

module.exports = {
    name: 'sb',
    aliases: ['dbu'],
    usage: "Use dbu <tag or no> to see get a random image from selected tag(s)",
    require: "Your channel need to be NSFW",

 invoke: async (args, message, bot) => {
   
        const req = require('../commands/https.js');
        const xml2js = require('xml2js');
        var parser = new xml2js.Parser();
        var argt = args.toString().replace(/,/g, '+');
        var url = `https://rule34.xxx/index.php?page=dapi&s=post&q=index&tags=${argt}`;
        let msg = await message.channel.send("Generating <a:emoji_46:814085465288081448> ") 

        req(url).then((prom) => {
            parser.parseString(prom, function (err, result) {
                var postCount = result.posts.$.count;
                if (postCount > 100) {
                    postCount = 100;
                }
                if (postCount > 0) {
                    var picNum = Math.floor(Math.random() * postCount) + 0;
                    var Pic = result.posts.post[picNum].$.file_url;
                    const embed = new Discord.MessageEmbed()
                        .setColor('#202225')           
                        .setImage(Pic)
                        .setDescription(`[**Si l'image ne s'affiche pas, cliquez ici**](${Pic})`)
                        .setAuthor(
                            "Koneko Toujou",
                            "https://konekofansub.gq/wp-content/uploads/2021/10/206ccfd530548da188c69bebca21d41b.png",)
                  
                          
                          
                          .setFooter(
                            "Powered by Koneko Fansub || Safebooru",
                            "https://konekofansub.gq/wp-content/uploads/2021/10/2905f2334c6fea514aa9daf2a0dd11db.png"
                          )
                       message.channel.send(embed);
                       console.log(embed)
                  
                } else {
                    message.channel.send("Je n'ai trouvé aucune image <a:618889722349092885:861606176759742464>");
                }
            });
        });
        msg.delete();

}
    
}  
