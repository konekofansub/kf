"use strict";

const Discord = require("discord.js");
const Rss = require("./rss");
const EventEmitter = require("events");
const og = require("open-graph");
const validUrl = require("valid-url");
const fs = require("fs")


process.on('unhandledRejection', err => { throw err; });

const bot = {};
bot.config = require("./config.json");

bot.commands = new Map();
addCommand("add");
addCommand("add rôles");
addCommand("anal");
addCommand("avatar");
addCommand("ban");
addCommand("blowjob");
addCommand("boobs");
addCommand("clear");
addCommand("cumsluts");
addCommand("feed");
addCommand("feets");
addCommand("femdom");
addCommand("foxgirl");
addCommand("futa");
addCommand("glebooru");
addCommand("help");
addCommand("help Actions");
addCommand("help Modération");
addCommand("help Sauce");
addCommand("help Koneko Fansub");
addCommand("help Utiles");
addCommand("help copy");
addCommand("help images NSWF");
addCommand("hentai");
addCommand("hug");
addCommand("kiss");
addCommand("kitsune");
addCommand("konachan");
addCommand("kuni");
addCommand("latest");
addCommand("list");
addCommand("neko");
addCommand("pat");
addCommand("bite");
addCommand("pussy");
addCommand("remove");
addCommand("say");
addCommand("demande");
addCommand("safebooru");
addCommand("search");
addCommand("slap");
addCommand("tickle");
addCommand("tits");
addCommand("serverinfo");
addCommand("trap");
addCommand("reupload");
addCommand("rules34");
addCommand("invit");
addCommand("sauce");
addCommand("shy");
addCommand("kill");
addCommand("lick");
addCommand("slip");
addCommand("confused");
addCommand("cry");
addCommand("angry");
addCommand("happy");
addCommand("scared");
addCommand("smug");
addCommand("tenor");
addCommand("yande.re");
addCommand("yuri");
addCommand("waifu.post copy");
addCommand('rolereaction');
addCommand('upscale')






function addCommand(name)
{
	const command = require(`./commands/${name}`);
	bot.commands.set(command.name, command);
}

bot.rss = new Rss(bot.config.pollInterval);
bot.rss.load("feeds.json");

bot.discord = new Discord.Client();
bot.discord.mongoose = require ("mongoose");
bot.discord.on("error", err => console.error(`Error: ${err.error}`));
bot.discord.once("ready", () => bot.rss.on("item", onItem));
bot.discord.on("message", onMessage);

bot.discord.login(bot.config.token);
bot.discord.on('ready', async () => {

    console.log('I am ready!');
    bot.discord.user.setStatus("dnd");
    setTimeout(() => {
		bot.discord.user.setActivity('V2 de Koneko Toujou v1 Soon OP !!!');
    }, 100)    
  
  });
  
  
  
  

async function onItem(item)


{
	try
	{
		const channel = await bot.discord.channels.fetch(item.channel);
		

		if (channel)
		{
			let contenu = item.contenu;
			if (!contenu.toLowerCase().startsWith("http")) // Discord replaces \ with / in links, so escaping them is bad.
			{
				contenu = Discord.Util.escapeMarkdown(contenu);
			}
			function ogSync(url) {
				return new Promise(function (resolve, reject) {
					og(url, function (err, meta) {
						if (meta == 0) reject(false);
						else resolve(meta);
					});
				});
			}
			let img = null;
				if(validUrl.isUri(`${contenu}`)) {
				img = await ogSync(`${contenu}`);
				console.log(img); // et là tu cherches le bon lien
				img = img?.image?.url;
			}
			
			let des = null;
			if(validUrl.isUri(`${contenu}`)) {
			des = await ogSync(`${contenu}`);
			des = des?.title;
		}

		let name_s = null;
		if(validUrl.isUri(`${contenu}`)) {
			name_s = await ogSync(`${contenu}`);
		name_s = name_s?.site_name;
	}
	let site = null;
		if(validUrl.isUri(`${contenu}`)) {
			site = await ogSync(`${contenu}`);
		site = site?.url;
	}
		


		await channel.send({
			content: des,
			embed: {
			  title: Discord.Util.escapeMarkdown(item.title),
				   url: contenu,
				
			  image: {url : img},
			
			  footer: {
				text: `Powered by Koneko Fansub • ${name_s} `,
				icon_url: "http://ekladata.com/mn4Y7yTW38eQaFVYSmwxByXRDPU@150x180.png"
			  },
			  timestamp: new Date(),

			  color: 0xf55185,
			},
		},
		 
		
	);

	
		
		}
	}
	catch (err)
	{
		console.error(`Error sending message for ${item.contenu} to ${item.channel}: ${err}`);
	}


}

async function onMessage(message)
{
	if (message.content.startsWith(bot.config.prefix))
	{
		try
		{
			const [commandName, ...args] = message.content.substr(bot.config.prefix.length).split(" ");
			const command = bot.commands.get(commandName);
			if (command)
			{
				if (command.admin && !bot.config.admins.includes(message.author.id))
				{
					await message.channel.send("You do not have permission to use this command.");
					return;
				}

				await command.invoke(args, message, bot);
			}
		}
		catch (err)
		{
			console.error(`Error processing command from ${message.channel}: ${err}`);
		}
	}
	

	bot.discord.once(`message`, async message => {
		if (!message.member.hasPermission("ADMINISTRATOR")) return;

		const bannedWords = [`DEJI MEETS GIRL`]

	
		try {
			if (bannedWords.some(word => message.content.toUpperCase().includes(word))) {
				await message.channel.send(`Oe un ecchi est sorti`);
			}
		} catch (e) {
			console.log(e);
		}
	});
	
	bot.discord.once(`message`, async message => {
		const bannedWords = [`R18 - Koneko Fansub`]

	
		try {
			if (bannedWords.some(word => message.content.toUpperCase().includes(word))) {
				await message.channel.send(`Hentai est sorti`);
			}
		} catch (e) {
			console.log(e);
		}
	});
	bot.discord.once(`message`, async message => {
	//
		const bannedWords = [`BIDULE`]

	
		try {
			if (bannedWords.some(word => message.content.toUpperCase().includes(word))) {
				await message.channel.send(`<@&897956439480467506>`);
			}
		} catch (e) {
			console.log(e);
		}
	});
	
	bot.discord.on("message", async message =>  {

		if (message.member.hasPermission("MENTION_EVERYONE"))
		  return   ;
	  let blacklisted = ['discord.gg', 'https://discordrgift.ru/gift/2Ar5PQnVKGtk','https://discord-give.net/getinfo','https://dlscorcl.gift/', 'http://steamcommuntry.ru', 'http://stores-stempowered.com', 'https://dlscord.app/airdrop/nitro', 'http://discocrd.gift/airdrop/nitro', 'http://discocrd-nitro.com/gift', 'https://discord-app.net/nitro/gifts', 'https://dicsordgift.com/airdrop', 'https://discocl.xyz', 'https://discord-app.net/', 'https://steamdlscord.com/airdrop', '@everyone', '@here'];
	  let foundInText = false;
	  for (var i in blacklisted) {
		if (message.content.toLowerCase().includes(blacklisted[i].toLowerCase())) foundInText = true;
	  }
	
	  if (foundInText) {
		message.delete();
	   
	  }
	});
}


