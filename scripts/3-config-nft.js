import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const bundleDrop = sdk.getBundleDropModule(
  "0xC9c469789d197b5927f8950900BBf982EBE35267",
);

(async () => {
  try {
    await bundleDrop.createBatch([
      {
        name: "Trust in Cyber",
        description: "This NFT will give you access to OrpheoDAO!",
        image: readFileSync("scripts/assets/samp.gif"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})()