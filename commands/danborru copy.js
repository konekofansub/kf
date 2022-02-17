const Discord = require('discord.js');

module.exports = {
    name: 'sb',
    aliases: ['dbu'],
    usage: "Use dbu <tag or no> to see get a random image from selected tag(s)",
    require: "Your channel need to be NSFW",

 async execute(client, message, args) {
    if (message.channel.nsfw || !message.guild) {
        const req = require('../https.js');
        const xml2js = require('xml2js');
        var parser = new xml2js.Parser();
        var argt = args.toString().replace(/,/g, '+');
        var url = 'https://safebooru.org/index.php?page=dapi&s=post&limit=100&q=index&tags='+argt;
        let msg = await message.channel.send("Generating <a:emoji_46:814085465288081448> ") 
        message.delete();

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
                            "Koneko Toujou#3793",
                            "https://media.discordapp.net/attachments/812446026237607998/861591182168293376/930eaa35b7e9f6fe0c95a5c2fdce84d7.png?width=540&height=540",)
                        .setFooter("Powered by Koneko Fansub || Safebooru", "http://ekladata.com/mn4Y7yTW38eQaFVYSmwxByXRDPU@150x180.png")
                        message.channel.send(embed);
                } else {
                    message.channel.send("Nobody here but us chickens!");
                }
            });
        });
        msg.delete();

}
    else
        message.channel.send("This channel is not NSFW!");
}  
}