module.exports = async (client) => {
  client.user.setActivity("DoggyBlox");
  console.log(`Successfully logged in as ${client.user.tag}`) ;
}