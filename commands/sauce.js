 const config = require('../config.json'),
  sagiri = require('sagiri'),
  isImageUrl = require('is-image-url'),
  path = require('path');

module.exports =
{
	name: "sauce",
	help: prefix => `Adds a feed to this channel. Usage: \`${prefix}add url\``,
	admin: false,
	invoke: async (args, msg, bot) => {
    const search = new sagiri(config.saucenaoAPIKey, {numRes: 1 });
    let truc = await msg.channel.send("Generating <a:emoji_46:814085465288081448> ")
    let getSauce = function(image) {
      search.getSauce(image).then(response => {
        let data = response[0];
        console.log(response)
        let results = {
          thumbnail: data.original.header.thumbnail,
          similarity: data.similarity,
          material: data.original.data.material || 'none',
          characters: data.original.data.characters || 'none',
          creator: data.original.data.creator || 'none',
          site: data.site,
          url: data.url
        };
        const minSimilarity = 30;
        if (minSimilarity <= ~~results.similarity) {
          truc.edit("Voilà ce que j'ai trouvé <:choupi:790242996800323604>");
          msg.channel.send({
            embed: {
              'title': 'Image sauce',
              'image': {
                url: results.thumbnail
              },
              footer: {
                text: 'Powered by Koneko Fansub || Trace.moe'
              },
              'fields': [{
                'name': 'Similitude',
                'value': `${results.similarity}%`
              },  {
                'name': 'Créateur',
                'value': results.creator
              }, {
                'name': 'Source',
                'value': `**[${results.site}](${results.url})**`
              }],
              'color': 0xFA77ED
              
            }
            
          });
          msg.channel.send("Si cela vient d'un animé, faire `kf!whatanime`");
          
        } else {
          console.error('No Results found!');
          truc.edit('Pas de résultat <:emoji_5:638906549963849729>');
        }
      }).catch((error) => {
        console.error(error.message);
        error = error.toString();
        if (error.includes('You need an image') || error.includes('Supplied URL is not usable') || error.includes('Error: Got HTML response while expecting JSON')|| error.includes('Server-side error occurred. Error Code: 4')) {
          console.error('API Error!');
          truc.edit(`Erreur API, contactez mon créateur.`);
          return;
        }
      });
    };
    if (!msg.attachments.array()[0] && !args[0]) {
      console.error('Image attachment/URL not found!');
      truc.edit(`Merci d'ajouter une image/URL !! <:790001108126400513:815349035174592522>`).then(sent => sent.delete({ timeout: 5e3 }));
      msg.delete();
     
    } else if (msg.attachments.array()[0]) {
      console.log('Image attachment found!');
      if (isImageUrl(msg.attachments.array()[0].url)// && !notSupportedExts.has(path.extname(msg.attachments.array()[0].url).slice(1).toLowerCase()
      ) {
        getSauce(msg.attachments.array()[0].url);
      } else {
        console.error('The file/extention is not an image!');
        truc.edit(`L'extension ou le fichier n'est pas pris en charge\nGomenasai <:743654218510106645:836953604509794364>\nEssaye avec une URL.`).then(sent => sent.delete({ timeout: 5e3 }));;
        msg.delete();
      }
    } else if (args[0]) {
      console.log('Image URL found!');
      if (isImageUrl(args[0])// && !notSupportedExts.has(path.extname(args[0]).slice(1).toLowerCase())
      ) {
        getSauce(args[0]);
      } else {
        console.error('The file/extention is not an image!');
        truc.edit(`L'extension ou le fichier n'est pas pris en charge\nGomenasai <:743654218510106645:836953604509794364>\nEssaye en important l'image.`).then(sent => sent.delete({ timeout: 5e3 }));;
        msg.delete();
      }
    }
  }};