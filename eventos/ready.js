module.exports = (client) => {
   client.user.setPresence({
       status:"online",
       activity: {
          name: "πΏππ π»πππππππ",
          type: "PLAYING"
       }
   })
}
