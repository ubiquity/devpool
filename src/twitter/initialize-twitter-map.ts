import { commitTwitterMap } from "../git";

export type TwitterMap = Record<string, string>;

export async function initializeTwitterMap() {
  let twitterMap: TwitterMap = {};
  try {
    const response = await fetch("https://raw.githubusercontent.com/0x4007/devpool-directory/__STORAGE__/twitter-map.json");
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    twitterMap = await response.json();
  } catch (error) {
    console.log("Couldn't fetch twitter map, creating a new one");
    await commitTwitterMap(twitterMap);
  }
  return twitterMap;
}
