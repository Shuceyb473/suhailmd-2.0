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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




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

global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_06_40_12_21_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDAsXG4gICAgICAgIDE1MixcbiAgICAgICAgODgsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTMzLFxuICAgICAgICAyMCxcbiAgICAgICAgMTcwLFxuICAgICAgICAyMzUsXG4gICAgICAgIDE0NCxcbiAgICAgICAgNzQsXG4gICAgICAgIDgsXG4gICAgICAgIDY0LFxuICAgICAgICA0MyxcbiAgICAgICAgMzgsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTMzLFxuICAgICAgICAxMTAsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTU2LFxuICAgICAgICAxMzgsXG4gICAgICAgIDIxMCxcbiAgICAgICAgNDMsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjcsXG4gICAgICAgIDU0LFxuICAgICAgICA5OSxcbiAgICAgICAgMjQ1LFxuICAgICAgICAyNyxcbiAgICAgICAgODQsXG4gICAgICAgIDYzLFxuICAgICAgICAxNDQsXG4gICAgICAgIDExNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjAsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjEyLFxuICAgICAgICAxNTksXG4gICAgICAgIDM3LFxuICAgICAgICAxNTAsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTE1LFxuICAgICAgICAyLFxuICAgICAgICAxNTIsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjIwLFxuICAgICAgICAxNDksXG4gICAgICAgIDY5LFxuICAgICAgICA3MixcbiAgICAgICAgOTksXG4gICAgICAgIDQyLFxuICAgICAgICA3NCxcbiAgICAgICAgMjU1LFxuICAgICAgICAyNDUsXG4gICAgICAgIDEwNixcbiAgICAgICAgOTksXG4gICAgICAgIDExNSxcbiAgICAgICAgMTA4LFxuICAgICAgICAxMDQsXG4gICAgICAgIDYzLFxuICAgICAgICAyMjgsXG4gICAgICAgIDY4LFxuICAgICAgICAyMDgsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTY3LFxuICAgICAgICAyN1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY4LFxuICAgICAgICAxNjgsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTg0LFxuICAgICAgICAxMjksXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTY3LFxuICAgICAgICAxMTgsXG4gICAgICAgIDEwLFxuICAgICAgICAxMjMsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjM0LFxuICAgICAgICA0LFxuICAgICAgICAxNjEsXG4gICAgICAgIDEyLFxuICAgICAgICA1MSxcbiAgICAgICAgMTYzLFxuICAgICAgICAyNSxcbiAgICAgICAgNTAsXG4gICAgICAgIDI5LFxuICAgICAgICAyMDcsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTYzLFxuICAgICAgICAyNDMsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTQzLFxuICAgICAgICAyMjgsXG4gICAgICAgIDY5LFxuICAgICAgICA2OCxcbiAgICAgICAgMjUsXG4gICAgICAgIDYsXG4gICAgICAgIDY1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDMzLFxuICAgICAgICA5OCxcbiAgICAgICAgMTg3LFxuICAgICAgICAxMzAsXG4gICAgICAgIDMsXG4gICAgICAgIDExMCxcbiAgICAgICAgNDAsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTI1LFxuICAgICAgICA0MixcbiAgICAgICAgMTU3LFxuICAgICAgICA3MyxcbiAgICAgICAgMjQ0LFxuICAgICAgICA3NixcbiAgICAgICAgMzcsXG4gICAgICAgIDc5LFxuICAgICAgICAxMTIsXG4gICAgICAgIDgzLFxuICAgICAgICAxMTIsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTYwLFxuICAgICAgICA4NCxcbiAgICAgICAgMTYxLFxuICAgICAgICA1NyxcbiAgICAgICAgMTYyLFxuICAgICAgICA0LFxuICAgICAgICA5MSxcbiAgICAgICAgMTg3LFxuICAgICAgICAyMTYsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMixcbiAgICAgICAgOTRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgwLFxuICAgICAgICAxODMsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjUsXG4gICAgICAgIDI0LFxuICAgICAgICAxMTcsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjQ5LFxuICAgICAgICA1OCxcbiAgICAgICAgMTg1LFxuICAgICAgICAxMDEsXG4gICAgICAgIDE2NixcbiAgICAgICAgNjgsXG4gICAgICAgIDI0NSxcbiAgICAgICAgNCxcbiAgICAgICAgMjMsXG4gICAgICAgIDU0LFxuICAgICAgICAxNTMsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTUsXG4gICAgICAgIDAsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjI3LFxuICAgICAgICAxMzcsXG4gICAgICAgIDQ3LFxuICAgICAgICAyMzYsXG4gICAgICAgIDY1LFxuICAgICAgICA1NixcbiAgICAgICAgNjksXG4gICAgICAgIDI0NixcbiAgICAgICAgMTM5LFxuICAgICAgICAxMjZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY0LFxuICAgICAgICAyNTQsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTQ0LFxuICAgICAgICA5OSxcbiAgICAgICAgMTcxLFxuICAgICAgICA3NixcbiAgICAgICAgMTMyLFxuICAgICAgICAyNDMsXG4gICAgICAgIDUyLFxuICAgICAgICA2MyxcbiAgICAgICAgMTU5LFxuICAgICAgICAxODQsXG4gICAgICAgIDUsXG4gICAgICAgIDE0NSxcbiAgICAgICAgODYsXG4gICAgICAgIDU5LFxuICAgICAgICAxNzYsXG4gICAgICAgIDQwLFxuICAgICAgICA4OSxcbiAgICAgICAgMjMzLFxuICAgICAgICAxNixcbiAgICAgICAgMjEzLFxuICAgICAgICAxMjAsXG4gICAgICAgIDQxLFxuICAgICAgICAxODIsXG4gICAgICAgIDk3LFxuICAgICAgICAyMzUsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTk2LFxuICAgICAgICAyMjYsXG4gICAgICAgIDc5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE2OCxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgOThcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgNVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjA5LFxuICAgICAgICA5NCxcbiAgICAgICAgNTYsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTY3LFxuICAgICAgICA2NyxcbiAgICAgICAgMTk3LFxuICAgICAgICA0NCxcbiAgICAgICAgMjExLFxuICAgICAgICAxNjIsXG4gICAgICAgIDAsXG4gICAgICAgIDM2LFxuICAgICAgICAxNixcbiAgICAgICAgMCxcbiAgICAgICAgMjA4LFxuICAgICAgICAxNzUsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTE0LFxuICAgICAgICAxNTIsXG4gICAgICAgIDEzLFxuICAgICAgICA1NSxcbiAgICAgICAgMyxcbiAgICAgICAgOTgsXG4gICAgICAgIDMzLFxuICAgICAgICA2MSxcbiAgICAgICAgNzcsXG4gICAgICAgIDgxLFxuICAgICAgICA2NCxcbiAgICAgICAgMTI2LFxuICAgICAgICAxOTEsXG4gICAgICAgIDksXG4gICAgICAgIDM3LFxuICAgICAgICA2NCxcbiAgICAgICAgNzYsXG4gICAgICAgIDIwMSxcbiAgICAgICAgODcsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTc0LFxuICAgICAgICAyNDAsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjI3LFxuICAgICAgICAxNTUsXG4gICAgICAgIDg0LFxuICAgICAgICAxMDAsXG4gICAgICAgIDM4LFxuICAgICAgICAxMTMsXG4gICAgICAgIDMwLFxuICAgICAgICAyMjMsXG4gICAgICAgIDc2LFxuICAgICAgICA3NCxcbiAgICAgICAgODMsXG4gICAgICAgIDcxLFxuICAgICAgICA2MixcbiAgICAgICAgMTM2LFxuICAgICAgICAxNzksXG4gICAgICAgIDExMCxcbiAgICAgICAgNzYsXG4gICAgICAgIDc5LFxuICAgICAgICAyMTUsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjU1LFxuICAgICAgICAxMTYsXG4gICAgICAgIDEzNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogNTIsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiTmtuN2ZRUWMxeHZhRy9QcER2akV3L1k2ZStMQlpXYXlXcWlDYXJRazVYRT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwibDlEQnpvZEdTNVM3bmFleGhwRXU3QVwiLFxuICBcInBob25lSWRcIjogXCI4ZWU1ZjBhYi1kNmFmLTRmMGEtOTM4MS1mY2ZlNWNmNmRhMDdcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjAyLFxuICAgICAgMjA2LFxuICAgICAgNTcsXG4gICAgICAxODIsXG4gICAgICA0NCxcbiAgICAgIDk2LFxuICAgICAgNDEsXG4gICAgICA3LFxuICAgICAgNCxcbiAgICAgIDEzNSxcbiAgICAgIDIxOCxcbiAgICAgIDE3NyxcbiAgICAgIDI1NCxcbiAgICAgIDMxLFxuICAgICAgMjUzLFxuICAgICAgMjAwLFxuICAgICAgMjUwLFxuICAgICAgMjI4LFxuICAgICAgMTA0LFxuICAgICAgOTBcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjA1LFxuICAgICAgNDUsXG4gICAgICAzOCxcbiAgICAgIDE0MCxcbiAgICAgIDI1NSxcbiAgICAgIDE2MixcbiAgICAgIDg4LFxuICAgICAgMTQ4LFxuICAgICAgNDUsXG4gICAgICA3MyxcbiAgICAgIDE3MixcbiAgICAgIDEzNixcbiAgICAgIDc5LFxuICAgICAgMTY1LFxuICAgICAgNTgsXG4gICAgICAyNTUsXG4gICAgICAxMSxcbiAgICAgIDE1NSxcbiAgICAgIDYxLFxuICAgICAgMjAwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIk1KNFdaTlNKXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNTQxMTE4Njk2Nzk6MjdAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjUzOTA2NjU0NjgzMzI0OjI3QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ01qeXZ1UUdFT2ZGbWJzR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiYmNNTThvZWxhM2RnWDE3dk94NkgzeHg1MDF6b3RQMjFQa0VEdlpGdXVqYz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJ1OVlraUl5clFsUGZ6VDBIYzJrVFVOUVhmT1VkM04rZ2hyNXh2SmszZlY5Sm1keGU1UGJtL3MweEJJV25pdVdVaWRQSiszendLa0RvT0QvMVJXSUlBQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJBRW50SVlWU1lvZEs0MGlETm1RcXpWY1M1QWNGNTBIamxjeHI2ZXQ5ZHllZWxjdWwzNVBmMXppdyt6YVlvU1VPZlVKMXZvbkptSmVjai9Rd3dZaTNndz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNTQxMTE4Njk2Nzk6MjdAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgNTVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczNDc2MzI0M1xufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "ex black comando",


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
