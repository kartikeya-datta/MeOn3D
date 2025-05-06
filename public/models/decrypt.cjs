const crypto = require("crypto");
const fs = require("fs");

const decryptFile = (inputFile, outputFile, password) => {
  const encryptedData = fs.readFileSync(inputFile);

  // Extract IV (first 16 bytes)
  const iv = encryptedData.slice(0, 16);

  // Encrypted content is after the IV
  const encryptedContent = encryptedData.slice(16);

  // Recreate the key
  const key = crypto.createHash("sha256").update(password).digest();

  // Create decipher
  const decipher = crypto.createDecipheriv("aes-256-cbc", key, iv);

  // Decrypt
  const decryptedData = Buffer.concat([
    decipher.update(encryptedContent),
    decipher.final(),
  ]);

  // Write decrypted data to output file
  fs.writeFileSync(outputFile, decryptedData);

  console.log("Decryption complete!");
};

// Usage
decryptFile("character.enc", "character.glb", "Character3D#@");
