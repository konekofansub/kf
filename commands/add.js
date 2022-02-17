module.exports = {
    name: "add",
   description: "Ajout d'un role",
   async execute(client, message, args) {

      let role = message.guild.roles.cache.find(r => r.name === args.toString());
      if (role) {
          if (message.member.roles.cache.has(role.id)) return message.channel.send("Vous avez déjà ce role");
          if (role.permissions.has('KICK_MEMBERS')) return message.channel.send("Vous ne pouvez pas avoir ce role");
        
        
          
        
        message.member.roles.add(role)
        .then(m => message.channel.send(`Tu as désormais le role`))
        .then(sent => sent.delete({ timeout: 5e3 }))
        .catch(e => console.log(e));
        message.delete();
        
      } else {
          message.channel.send("Le role n'existe pas");
          
      }
      message.delete();
    }
    
  }
  