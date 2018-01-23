const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log('I am ready!');
});

client.on('message', message => {
	  if (message.content === 'ping') {
		message.reply('pong');
	  }

  
	if (message.content. startsWith(prefix + 'entrar')) { 
		let Canalvoz = message.member.voiceChannel;
		if (!Canalvoz || Canalvoz.type !== 'voice') {
		message.channel.send('¡Necesitas unirte a un canal de voz primero!.').catch(error => message.channel.send(error));
		} else if (message.guild.voiceConnection) {
		message.channel.send('Ya estoy conectado en un canal de voz.');
		} else {
		 message.channel.send('Conectando...').then(m => {
			  Canalvoz.join().then(() => {
				   m.edit(':white_check_mark: | Conectado exitosamente.').catch(error => message.channel.send(error));
			 }).catch(error => message.channel.send(error));
		 }).catch(error => message.channel.send(error));
		}
	}



	if (message.content.startsWith(prefix + 'wiki')) {
		if (!message.guild.voiceConnection) return message.channel.send('¡No estoy en un canal de voz!, use `-join` para unirme a un canal.').catch(error => message.channel.send(error));
		const dispatcher = message.guild.voiceConnection.playFile(`C:\bambuzybot\sonidos\Wikiwiki2.mp3`);
	}


  
});

client.login('NDA1MDA1MTYzMTQxNzkxNzQ0.DUex5A.BGQ6NGFQ0_jbYwv3ukmSn53Dxiw');