echo "Fetching busts..."
node ./subScripts/busts.js
echo "Busts fetch script done!"
echo "Fetching badge images..."
node ./subScripts/badges.js
echo "Badge images fetch script done!"
echo "Fetching updates from discord..."
node ./subScripts/getUpdates.js
echo "All done!"