const fs = require('fs');
// load seed phrase from local file - you must create one for yourself
const seed = fs.readFileSync(".secret").toString().trim();

const { getEntryLink, SkynetClient, genKeyPairFromSeed, convertSkylinkToBase64, convertSkylinkToBase32 } = require('skynet-js');

// create Skynet client
const client = new SkynetClient("https://siasky.net");

(async () => {
    // setup keys and skylink
    const { publicKey, privateKey } = genKeyPairFromSeed(seed);
    const dataKey = "JSONParser";
    // set here the link returned by a skynet portal after you have uploaded your dist directory 
    // ie. siasky.net upload diretctory
    const skylink = convertSkylinkToBase64("1002i3a0gteq4rpjsmd3h1nrs56ucp1aj8q0h49dre8o7t236icvq70")
    // set a registry entry to point at 'skylink'
    await client.db.setDataLink(privateKey, dataKey, skylink);
    // get the resolver skylink which references the registry entry
    const resolverSkylink = await getEntryLink(publicKey, dataKey)
    // console.log("Created link: " + resolverSkylink)
    console.log(`Created resolver link: ${resolverSkylink}`);

    console.log(`base32: ${convertSkylinkToBase32(resolverSkylink)}`);

})();
