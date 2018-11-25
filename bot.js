const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});
const devs = ['506034854043975681']; // ID
client.on('message', msg => {
       var prefix = "$"
       
    let args = msg.content.split(" ").slice(1).join(" ");
  if (!devs.includes(msg.author.id)) return;
            if(msg.content.startsWith(prefix + "T24")){
                client.user.setGame('#' + args ,`https://www.twitch.tv/lister`);
            msg.channel.send(`! Done : :white_check_mark: `)
            }
            if(msg.content.startsWith(prefix + "G24")){
                client.user.setGame('#' + args ,`https://www.youtube.com/`)
            msg.channel.send(`! Done : :white_check_mark: `)
            }
})

const adminprefix = "s"; //Prefix

client.on('message', message => {
  var argresult = message.content.split(` `).slice(1).join(' ');
    if (!devs.includes(message.author.id)) return;
    
if (message.content.startsWith(adminprefix + 'G')) {
  client.user.setGame(argresult);
    message.channel.sendMessage(`**${argresult} تم تغيير بلاينق البوت إلى **`)
} else 
  if (message.content.startsWith(adminprefix + 'N')) {
client.user.setUsername(argresult).then
    message.channel.sendMessage(`**${argresult}** : تم تغيير أسم البوت إلى`)
return message.reply("**لا يمكنك تغيير الاسم يجب عليك الانتظآر لمدة ساعتين . **");
} else
  if (message.content.startsWith(adminprefix + 'A')) {
client.user.setAvatar(argresult);
  message.channel.sendMessage(`**${argresult}** : تم تغير صورة البوت`);
      } else     
if (message.content.startsWith(adminprefix + 'T')) {
  client.user.setGame(argresult, "https://www.twitch.tv/idk");
    message.channel.sendMessage(`**تم تغيير تويتش البوت إلى  ${argresult}**`)
}
});

client.login(process.env.BOT_TOKEN);
