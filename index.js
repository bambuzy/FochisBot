const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log('Bambuzy bot on!');
});

// 

client.on('message', message => {
	    if (message.content === '!mevoy') {
		message.reply('https://goo.gl/JXp8sh');
	  } 
	    if (message.content === '!epziok') {
		message.reply('https://goo.gl/LxJCxC');
	  } 
	    if (message.content === '!maicol') {
		message.reply('https://goo.gl/LCrxjx');
	  } 
	} 
	
	  if (message.content == '!chala'){
		var rand1 = Math.round(Math.random()*30);
		
		if ( rand1 < 10){message.reply('La chala te mide ' + rand1 + ' cm, manicero :ok_hand: ');
		}
		if ( rand1 > 10 && rand1 < 20){message.reply('La chala te mide ' + rand1 + ' cm, chala promedio :v:  ');
		}
		if ( rand1 > 20){message.reply('La chala te mide ' + rand1 + ' cm, hmmmfff ven para aquí zapatón :smirk: ');
		}
	  }
		
		
		if(message.content == '!meme'){
			message.reply('entró');
			var rand2 = Math.round(Math.random()*5);
			switch (rand2) {
			case 1: message.reply('https://goo.gl/4W6xYU');
			break;
			case 2: message.reply('https://goo.gl/WuQz2L');
			break;
			case 3: message.reply('https://goo.gl/cSnLnG');
			break;
			case 4: message.reply('https://goo.gl/UpVggk');
			break;
			case 5: message.reply('https://goo.gl/GcjzQV');
			break;
			}
		
		}
		
		
		
		
	  
	  
	if (message.content. startsWith('!entrar')) { 
		let Canalvoz = message.member.voiceChannel;
		if (!Canalvoz || Canalvoz.type !== 'voice') {
		message.channel.send('Debes unirte primero a un canal').catch(error => message.channel.send(error));
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
	
	if (message.content.startsWith('!salir')) { 
    let Canalvoz = message.member.voiceChannel;
		if (!Canalvoz) {
			message.channel.send('No estoy en un canal de voz.');
		} else {
			message.channel.send('Dejando el canal de voz.').then(() => {
			Canalvoz.leave();
			}).catch(error => message.channel.send(error));
		}   
	}
	
	if (message.content.startsWith('!bocina')) {
		if (!message.guild.voiceConnection) return message.channel.send('¡No estoy en un canal de voz!, use `!entrar` para unirme a un canal.').catch(error => message.channel.send(error));
		
		const dispatcher = message.guild.voiceConnection.playFile(`C:/bambuzybot/sonidos/bocina.mp3`);
		
	}
	
		if (message.content.startsWith('!grito')) {
		if (!message.guild.voiceConnection) return message.channel.send('¡No estoy en un canal de voz!, use `!entrar` para unirme a un canal.').catch(error => message.channel.send(error));
		
		const dispatcher = message.guild.voiceConnection.playFile(`C:/bambuzybot/sonidos/grito.wav`);
		
	}
	
		if (message.content.startsWith('!creer')) {
		if (!message.guild.voiceConnection) return message.channel.send('¡No estoy en un canal de voz!, use `!entrar` para unirme a un canal.').catch(error => message.channel.send(error));
		
		const dispatcher = message.guild.voiceConnection.playFile(`C:/bambuzybot/sonidos/notelopuedocreer.mp3`);
		
	}
			if (message.content.startsWith('!horror')) {
		if (!message.guild.voiceConnection) return message.channel.send('¡No estoy en un canal de voz!, use `!entrar` para unirme a un canal.').catch(error => message.channel.send(error));
		
		const dispatcher = message.guild.voiceConnection.playFile(`C:/bambuzybot/sonidos/horror.mp3`);
		
	}
	
	
});

client.login('NDA1MDA1MTYzMTQxNzkxNzQ0.DUex5A.BGQ6NGFQ0_jbYwv3ukmSn53Dxiw');