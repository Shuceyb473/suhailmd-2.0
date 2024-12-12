const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "+254111869679";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_09_28_12_12_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkyLFxuICAgICAgICAxODEsXG4gICAgICAgIDcxLFxuICAgICAgICAxODEsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjEzLFxuICAgICAgICAyMDUsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTA2LFxuICAgICAgICAxMCxcbiAgICAgICAgMzEsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTYwLFxuICAgICAgICAzMixcbiAgICAgICAgNTIsXG4gICAgICAgIDcyLFxuICAgICAgICAzOSxcbiAgICAgICAgMjIwLFxuICAgICAgICAxNTMsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjM5LFxuICAgICAgICAyMjcsXG4gICAgICAgIDE0NixcbiAgICAgICAgNzUsXG4gICAgICAgIDE0NSxcbiAgICAgICAgNDgsXG4gICAgICAgIDc5LFxuICAgICAgICAyOCxcbiAgICAgICAgNzMsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjgsXG4gICAgICAgIDExNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzNSxcbiAgICAgICAgODEsXG4gICAgICAgIDEyLFxuICAgICAgICAxNSxcbiAgICAgICAgODIsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTc1LFxuICAgICAgICAyNDksXG4gICAgICAgIDgwLFxuICAgICAgICAxODYsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjUsXG4gICAgICAgIDE5LFxuICAgICAgICAxNSxcbiAgICAgICAgMjM0LFxuICAgICAgICAyNCxcbiAgICAgICAgNjMsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjE3LFxuICAgICAgICAyMjksXG4gICAgICAgIDIxNixcbiAgICAgICAgMjUsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjQ0LFxuICAgICAgICA3OCxcbiAgICAgICAgMjYsXG4gICAgICAgIDI1NSxcbiAgICAgICAgNTMsXG4gICAgICAgIDI1MixcbiAgICAgICAgNjEsXG4gICAgICAgIDIyNixcbiAgICAgICAgOTFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDg4LFxuICAgICAgICA4NCxcbiAgICAgICAgMjAzLFxuICAgICAgICAxNSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxNTQsXG4gICAgICAgIDYwLFxuICAgICAgICAxMjIsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTEzLFxuICAgICAgICAxNjAsXG4gICAgICAgIDEwMixcbiAgICAgICAgODAsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjMxLFxuICAgICAgICA2NCxcbiAgICAgICAgMTYsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTExLFxuICAgICAgICA3MCxcbiAgICAgICAgMjQxLFxuICAgICAgICAxOTAsXG4gICAgICAgIDgsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTI0LFxuICAgICAgICAxNzYsXG4gICAgICAgIDc3LFxuICAgICAgICAyMjYsXG4gICAgICAgIDIwLFxuICAgICAgICA5MixcbiAgICAgICAgMjgsXG4gICAgICAgIDk0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjE1LFxuICAgICAgICAyMzMsXG4gICAgICAgIDUzLFxuICAgICAgICAxMixcbiAgICAgICAgMzMsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTk5LFxuICAgICAgICAxMTMsXG4gICAgICAgIDU0LFxuICAgICAgICAyNDgsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTU3LFxuICAgICAgICAxNTgsXG4gICAgICAgIDIzNixcbiAgICAgICAgNjEsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjQsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTIzLFxuICAgICAgICA1NixcbiAgICAgICAgMTQyLFxuICAgICAgICAzMyxcbiAgICAgICAgMSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxMjEsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxNjUsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjA1LFxuICAgICAgICAyNVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTE2LFxuICAgICAgICAyNDMsXG4gICAgICAgIDY5LFxuICAgICAgICA2NCxcbiAgICAgICAgNTUsXG4gICAgICAgIDgxLFxuICAgICAgICAyMzMsXG4gICAgICAgIDExOSxcbiAgICAgICAgMzQsXG4gICAgICAgIDEzNixcbiAgICAgICAgOTIsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTMsXG4gICAgICAgIDcxLFxuICAgICAgICAyMzksXG4gICAgICAgIDExMCxcbiAgICAgICAgMjEwLFxuICAgICAgICAyMzYsXG4gICAgICAgIDc0LFxuICAgICAgICAzNCxcbiAgICAgICAgOSxcbiAgICAgICAgNTMsXG4gICAgICAgIDUsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTM4LFxuICAgICAgICA2NixcbiAgICAgICAgMjUxLFxuICAgICAgICAxNjcsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTExXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExMyxcbiAgICAgICAgMTQsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTUwLFxuICAgICAgICA0OSxcbiAgICAgICAgMTE5LFxuICAgICAgICAyNDUsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTMxLFxuICAgICAgICA0MSxcbiAgICAgICAgMTE1LFxuICAgICAgICAxMDUsXG4gICAgICAgIDkwLFxuICAgICAgICAyNTQsXG4gICAgICAgIDE5OCxcbiAgICAgICAgNzYsXG4gICAgICAgIDM5LFxuICAgICAgICAyOCxcbiAgICAgICAgMTQsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTIzLFxuICAgICAgICA0NixcbiAgICAgICAgNTIsXG4gICAgICAgIDM0LFxuICAgICAgICAxMTgsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTgwLFxuICAgICAgICAxMTEsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjI3LFxuICAgICAgICAxMjUsXG4gICAgICAgIDg5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAxMTFcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDkwXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI4LFxuICAgICAgICA4LFxuICAgICAgICAxNTMsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjA1LFxuICAgICAgICAyOCxcbiAgICAgICAgMjEyLFxuICAgICAgICAyMjEsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTI5LFxuICAgICAgICAxNzIsXG4gICAgICAgIDEwLFxuICAgICAgICAyNTUsXG4gICAgICAgIDM3LFxuICAgICAgICAyMjksXG4gICAgICAgIDE2MCxcbiAgICAgICAgNTcsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxNTMsXG4gICAgICAgIDE5NixcbiAgICAgICAgNjcsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTEyLFxuICAgICAgICAyMzAsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTc2LFxuICAgICAgICAyMTcsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTQyLFxuICAgICAgICAyMjQsXG4gICAgICAgIDIyLFxuICAgICAgICAyMDksXG4gICAgICAgIDUxLFxuICAgICAgICAxODYsXG4gICAgICAgIDEsXG4gICAgICAgIDU2LFxuICAgICAgICAyMDYsXG4gICAgICAgIDQwLFxuICAgICAgICAyMjAsXG4gICAgICAgIDE4OCxcbiAgICAgICAgNDIsXG4gICAgICAgIDExNyxcbiAgICAgICAgNTgsXG4gICAgICAgIDE0MixcbiAgICAgICAgNDgsXG4gICAgICAgIDYwLFxuICAgICAgICAxOTUsXG4gICAgICAgIDE0LFxuICAgICAgICAxNzEsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTcyLFxuICAgICAgICAxMDksXG4gICAgICAgIDM2LFxuICAgICAgICAyNTAsXG4gICAgICAgIDY0LFxuICAgICAgICA4MSxcbiAgICAgICAgMTExLFxuICAgICAgICA0MixcbiAgICAgICAgNyxcbiAgICAgICAgMTYyLFxuICAgICAgICAxNTUsXG4gICAgICAgIDI5LFxuICAgICAgICAxMzdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDQ1LFxuICBcImFkdlNlY3JldEtleVwiOiBcIjJma1RVUDlVRlRnVDJlNTJmZTZPczF1Qm0yN0hoZFNEa1FyOCs4aEtpQm89XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcImdtazgyR2ViUWJpMU5sSmRwRmVSbWdcIixcbiAgXCJwaG9uZUlkXCI6IFwiZDVjNGNmM2YtM2NlMy00ODY2LWFkY2MtZDExNTQ1MTAzMjU3XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE4NCxcbiAgICAgIDMzLFxuICAgICAgMTAzLFxuICAgICAgMjM2LFxuICAgICAgODcsXG4gICAgICA1MyxcbiAgICAgIDQzLFxuICAgICAgMTgzLFxuICAgICAgMTIwLFxuICAgICAgMjM3LFxuICAgICAgMTUyLFxuICAgICAgMjQ3LFxuICAgICAgMjA4LFxuICAgICAgMTk2LFxuICAgICAgMTgwLFxuICAgICAgOTMsXG4gICAgICAyMzQsXG4gICAgICAyMTUsXG4gICAgICAyMjMsXG4gICAgICAxNzNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTIsXG4gICAgICA0NSxcbiAgICAgIDE1OCxcbiAgICAgIDIyMCxcbiAgICAgIDUsXG4gICAgICAxOTAsXG4gICAgICAxNDgsXG4gICAgICAyMjUsXG4gICAgICAxNDYsXG4gICAgICAxOTEsXG4gICAgICA3OSxcbiAgICAgIDE2OCxcbiAgICAgIDE2NCxcbiAgICAgIDE2NixcbiAgICAgIDE2LFxuICAgICAgNTksXG4gICAgICAxMDcsXG4gICAgICAyMzYsXG4gICAgICA1MSxcbiAgICAgIDg1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkNEUEI0RDFBXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNTQxMTE4Njk2Nzk6MjZAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjUzOTA2NjU0NjgzMzI0OjI2QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ01meXZ1UUdFS3ZaNnJvR0dBTWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiYmNNTThvZWxhM2RnWDE3dk94NkgzeHg1MDF6b3RQMjFQa0VEdlpGdXVqYz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCI3VmlCbFhrdGtYUDY4RldiTW5pdFFNS3c1QTlqS1c0MS9QVWNGNXg3bmE4VnRtbzB3bHhxSEFIQzhvamNqdVFLeUZvcGdwQjBzb2tybjZhTG9jSlNCdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJXbTQrNkt1aHdTOXloN0NuaXNFSzhzYmNVQ2Q0bU1GUFRvTS9aVEJvYTdEMS9KRGszd1FZRTVxelRSeFJISHBETFowRzN4d0VoZmJ1RG1LaXVncGVodz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNTQxMTE4Njk2Nzk6MjZAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgNTVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczMzk5NTY5NSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUNuZFwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBQ25kLmpzb24iOiAie1wia2V5RGF0YVwiOlwiK0UycjN2QkhrUWJBaWxJWDUxbi81cHc2YnQ0SmdjMDRVcFR4V1dBam1BQT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxODIxMzU4NDA3LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MzMzOTg4NTkzODRcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "ex black",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-xmd",
  ownername:process.env.OWNER_NAME|| "ex black",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
