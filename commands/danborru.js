const Discord = require('discord.js');

module.exports = {
    name: 'gb',
    aliases: ['dbu'],
    usage: "Use dbu <tag or no> to see get a random image from selected tag(s)",
    require: "Your channel need to be NSFW",

 async execute(client, message, args) {
    if (message.channel.nsfw || !message.guild) {
        const req = require('../https.js');
        const xml2js = require('xml2js');
        var parser = new xml2js.Parser();
        var argt = args.toString().replace(/,/g, '+');
        var url = 'https://gelbooru.com/index.php?page=dapi&s=post&limit=100&q=index&tags='+argt;
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
                        .setAuthor(
                            "Koneko Toujou#3793",
                            "https://images-ext-2.discordapp.net/external/iZTtw-7xAJckmib3hOzdzv1q5iRAMGIgmjl0BWRSMP4/https/cdn.discordapp.com/avatars/810490720736641075/c459726c2b19bb5e16b41b697d380d96.webp",)
                        .setFooter("Powered by Koneko Fansub || gelbooru", "http://ekladata.com/mn4Y7yTW38eQaFVYSmwxByXRDPU@150x180.png")
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