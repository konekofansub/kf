const Discord = require("discord.js");

module.exports =
 {

    name: "test",
	help: prefix => `Lists all active feeds for this channel. Usage: \`${prefix}dmd\``,
	admin: false,
	invoke: async (args, message, bot) =>{

if(message.member.hasPermission('BAN_MEMBERS')){
const channel = '619902906631716869'
const CGB = message.guild.roles.cache.find(role => role.name === 'CGB')
const Megaton = message.guild.roles.cache.find(role => role.name === 'Megaton')
const Ninjala = message.guild.roles.cache.find(role => role.name === 'Ninjala')
const S7 = message.guild.roles.cache.find(role => role.name === 'Spécial_7')
const Godzilla = message.guild.roles.cache.find(role => role.name === 'Godzilla-SP')



const EmotNinjala = `💥`
const EmotCGB = '👨‍🎓'
const EmotMegaton = '🛠'
const EmotS7 = '🔎'
const EmotGodzilla = '🦖'


const testerEmbed = new Discord.MessageEmbed()
.setColor('#28f7f0')
.setTitle('Roles')
.setDescription('__**Saison Hiver**__\n\n💥 : `Ninjala`\n\n__**Saison Antérieures :**__\n\n🛠 : `Megaton-Kyuu Musashi`\n🦖 : Godzilla SP\n👨‍🎓 : `Chuubyou Gekihatsu Boy`\n🔎 : `Keishichou Tokumu Bu Tokushu Kyouakuhan Taisaku Shitsu Dai Nana Ka : Tokunana` ')

let messageEmbed = await message.channel.send(testerEmbed)
messageEmbed.react(EmotNinjala);
messageEmbed.react(EmotCGB);
messageEmbed.react(EmotMegaton);
messageEmbed.react(EmotS7);
messageEmbed.react(EmotGodzilla);


message.delete();

bot.discord.on('messageReactionAdd', async (reaction, user) => {
if(reaction.message.partial) await reaction.fetch();
if(reaction.partial) await reaction.fetch();
if(user.bot) return;
if(!reaction.message.guild) return;

if(reaction.message.channel.id === channel){
if(reaction.emoji.name === EmotNinjala){
await reaction.message.guild.members.cache.get(user.id).roles.add(Ninjala);
}
} else{
return;
}
});

bot.discord.on('messageReactionAdd', async (reaction, user) => {
    if(reaction.message.partial) await reaction.fetch();
    if(reaction.partial) await reaction.fetch();
    if(user.bot) return;
    if(!reaction.message.guild) return;
    
    if(reaction.message.channel.id === channel){
    if(reaction.emoji.name === EmotCGB){
    await reaction.message.guild.members.cache.get(user.id).roles.add(CGB);
    }
    } else{
    return;
    }
    });

    bot.discord.on('messageReactionAdd', async (reaction, user) => {
        if(reaction.message.partial) await reaction.fetch();
        if(reaction.partial) await reaction.fetch();
        if(user.bot) return;
        if(!reaction.message.guild) return;
        
        if(reaction.message.channel.id === channel){
        if(reaction.emoji.name === EmotMegaton){
        await reaction.message.guild.members.cache.get(user.id).roles.add(Megaton);
        }
        } else{
        return;
        }
        });
        bot.discord.on('messageReactionAdd', async (reaction, user) => {
            if(reaction.message.partial) await reaction.fetch();
            if(reaction.partial) await reaction.fetch();
            if(user.bot) return;
            if(!reaction.message.guild) return;
            
            if(reaction.message.channel.id === channel){
            if(reaction.emoji.name === EmotS7){
            await reaction.message.guild.members.cache.get(user.id).roles.add(S7);
            }
            } else{
            return;
            }
            });
            bot.discord.on('messageReactionAdd', async (reaction, user) => {
                if(reaction.message.partial) await reaction.fetch();
                if(reaction.partial) await reaction.fetch();
                if(user.bot) return;
                if(!reaction.message.guild) return;
                
                if(reaction.message.channel.id === channel){
                if(reaction.emoji.name === EmotGodzilla){
                await reaction.message.guild.members.cache.get(user.id).roles.add(Godzilla);
                }
                } else{
                return;
                }
                });
        

    bot.discord.on('messageReactionRemove', async (reaction, user) => {
        if(reaction.message.partial) await reaction.fetch();
        if(reaction.partial) await reaction.fetch();
        if(user.bot) return;
        if(!reaction.message.guild) return;
        
        if(reaction.message.channel.id === channel){
        if(reaction.emoji.name === EmotNinjala){
        await reaction.message.guild.members.cache.get(user.id).roles.remove(Ninjala);
        }
        } else{
        return;
        }
        });
        
        bot.discord.on('messageReactionRemove', async (reaction, user) => {
            if(reaction.message.partial) await reaction.fetch();
            if(reaction.partial) await reaction.fetch();
            if(user.bot) return;
            if(!reaction.message.guild) return;
            
            if(reaction.message.channel.id === channel){
            if(reaction.emoji.name === EmotCGB){
            await reaction.message.guild.members.cache.get(user.id).roles.remove(CGB);
            }
            } else{
            return;
            }
            });
        
            bot.discord.on('messageReactionRemove', async (reaction, user) => {
                if(reaction.message.partial) await reaction.fetch();
                if(reaction.partial) await reaction.fetch();
                if(user.bot) return;
                if(!reaction.message.guild) return;
                
                if(reaction.message.channel.id === channel){
                if(reaction.emoji.name === EmotMegaton){
                await reaction.message.guild.members.cache.get(user.id).roles.remove(Megaton);
                }
                } else{
                return;
                }
                });
                bot.discord.on('messageReactionRemove', async (reaction, user) => {
                    if(reaction.message.partial) await reaction.fetch();
                    if(reaction.partial) await reaction.fetch();
                    if(user.bot) return;
                    if(!reaction.message.guild) return;
                    
                    if(reaction.message.channel.id === channel){
                    if(reaction.emoji.name === EmotS7){
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(S7);
                    }
                    } else{
                    return;
                    }
                    });
                    bot.discord.on('messageReactionRemove', async (reaction, user) => {
                        if(reaction.message.partial) await reaction.fetch();
                        if(reaction.partial) await reaction.fetch();
                        if(user.bot) return;
                        if(!reaction.message.guild) return;
                        
                        if(reaction.message.channel.id === channel){
                        if(reaction.emoji.name === EmotGodzilla){
                        await reaction.message.guild.members.cache.get(user.id).roles.remove(Godzilla);
                        }
                        } else{
                        return;
                        }
                        });

}
}}