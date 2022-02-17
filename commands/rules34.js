const Discord = require('discord.js');
const fetch = require('node-fetch')
const xml2js = require('xml2js');

module.exports = {
    name: 'r34',
    aliases: ['dbu'],
    usage: "Use dbu <tag or no> to see get a random image from selected tag(s)",
    require: "Your channel need to be NSFW",

 invoke: async (args, message, bot) => {
    if (message.channel.nsfw ||!message.guild) {
      const arguments = args[0] ? args[0] : ''
  const url = encodeURI('https://rule34.xxx/index.php?page=dapi&s=post&q=index&tags='+arguments);
  let msg = await message.channel.send("Generating <a:emoji_46:814085465288081448> ") 

  try {
    const response = await fetch(url)
    apiData = await response.text()

    var parser = new xml2js.Parser();
    parser.parseStringPromise(apiData).then(function (r34Result) {
      let postCount = r34Result.posts.$.count - 1;
      if(postCount > 100) {
        postCount = 100;
      }
      if(postCount > 0) {
        var picNum = Math.floor(Math.random() * postCount) + 0;
        var r34Pic = r34Result.posts.post[picNum].$.file_url;
        try {
          fetch(r34Pic, {method: 'HEAD'}).then(function (r34PicResponse){
            r34PicSize = r34PicResponse.headers.get("Content-Length");
            if(parseInt(r34PicSize, 10) < 8000000) {
                const embed = new Discord.MessageEmbed()
                .setColor('#202225')           
                .setImage(r34Pic)
                .setDescription(`[**Si l'image ne s'affiche pas, cliquez ici**](${r34Pic})`)
                .setAuthor(
                    "Koneko Toujou",
                    "https://konekofansub.gq/wp-content/uploads/2021/10/206ccfd530548da188c69bebca21d41b.png",)
          
                  
                  
                  .setFooter(
                    "Powered by Koneko Fansub || Rules 34",
                    "https://konekofansub.gq/wp-content/uploads/2021/10/2905f2334c6fea514aa9daf2a0dd11db.png"
                  )
                  message.channel.send(embed);
                  console.log(embed)
            } else {
              message.channel.send("File was too large ;__;");
            }
          }).catch(function (error) {
            console.log(error);
          })
        } catch (error) {
          console.log(error);
        }
      } else {
        message.channel.send("Je n'ai trouvé aucune image <a:618889722349092885:861606176759742464>");
      }
    })
    .catch(function (error) {
      console.log(error)
    });
  } catch (error) {
    console.log(error)
  }msg.delete();

}

}

}
