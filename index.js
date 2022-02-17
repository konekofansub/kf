const path = require('path');
const fs = require('fs');
const Discord = require('discord.js');
const { prefix, token } = require('./config.json');

const client = new Discord.Client();
client.commands = new Discord.Collection();

let db = JSON.parse(fs.readFileSync("./database.json", "utf8"));








const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
  const command = require(`./commands/${file}`);
  client.commands.set(command.name, command);
}

client.on('ready', async () => {

  console.log('I am ready!');
});

client.on('message', message => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;
   
   const args = message.content.slice(prefix.length).split(/ +/);
   const command = args.shift().toLowerCase();
  
   if (!client.commands.has(command)) return;

   try {
     client.commands.get(command).execute(client, message, args);
    } catch (error) {
    console.error(error);
    message.reply('y a une couille dans le potage <:ohnon:790242996703723590> !');
    }
  });

  client.on("guildMemberAdd", member => {
    member.guild.channels.cache
      .get("657646724944363537")
      .send(
        new Discord.MessageEmbed()

        
          .setDescription(`${member} Bienvenue <:emoji_46:804282907086290947>\n pour rentrer sur le serv va valider avec les emot <#588006148544921651>  et dans <#681519608657739834> pour être ping des sorties`)
          .setColor("#00ff00")
          .setThumbnail("https://cdn.discordapp.com/icons/587936849213784074/22ea02050fecb9aedee343fd6d534dd3.png")
            .setAuthor(
              "Koneko Toujou#3793",
              "https://images-ext-2.discordapp.net/external/iZTtw-7xAJckmib3hOzdzv1q5iRAMGIgmjl0BWRSMP4/https/cdn.discordapp.com/avatars/810490720736641075/c459726c2b19bb5e16b41b697d380d96.webp",)
          
          .setFooter("Powered by Koneko Fansub","http://ekladata.com/mn4Y7yTW38eQaFVYSmwxByXRDPU@150x180.png")
          .setImage("https://cdn.discordapp.com/attachments/677644786097979424/814185120801357874/1541195588_f3d01e550c21d3ed5a64dbeeb18bb822.gif")
      );
   
  });

  client.on("message", async message =>  {

    if (message.member.hasPermission("MENTION_EVERYONE"))
      return;
  let blacklisted = ['discord.gg', 'http://steamcommuntry.ru', 'http://stores-stempowered.com', 'Discord Nitro for Free - Steam Store', '@​everyone', '@here'];
  let foundInText = false;
  for (var i in blacklisted) {
    if (message.content.toLowerCase().includes(blacklisted[i].toLowerCase())) foundInText = true;
  }

  if (foundInText) {
    message.delete();
   
  }
});

client.login(token);

