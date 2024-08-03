const hre = require("hardhat");
const { encryptDataField, decryptNodeResponse } = require("@swisstronik/utils");
const fs = require("fs");

const sendShieldedQuery = async (provider, destination, data) => {
  const rpclink = hre.network.config.url;
  const [encryptedData, usedEncryptedKey] = await encryptDataField(rpclink, data);
  const response = await provider.call({
