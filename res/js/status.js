/*const apiUrl = 'https://api.imlazy.ink/mcapi/?type=json&host=Love.tcping.fun&name&=ZSI桢春依梦&getmotd';*/
const apiUrl = 'https://api.imlazy.ink/mcapi/?name=Minecraft%20%E6%9C%8D%E5%8A%A1%E5%99%A8&host=frp-era.top:38961&type=json'
    
fetch(apiUrl)
.then(response => response.arrayBuffer())
.then(buffer => {
    const decoder = new TextDecoder('UTF-8');
    const text = decoder.decode(buffer);
    const data = JSON.parse(text);

    document.getElementById('name').textContent = data.name;
    document.getElementById('status').textContent = data.status;
    document.getElementById('maxPlayers').textContent = data.players_max;
    document.getElementById('onlinePlayers').textContent = data.players_online;

    const playersBody = document.getElementById('Online_players_list');
    if (data.players) {
        const fragment = document.createDocumentFragment();
        data.players.forEach((player, index) => {
            const row = document.createElement('tr');
            const avatarUrl = `https://crafatar.com/avatars/${player.id}?size=64`;
            row.innerHTML = `
                <td>${index + 1}</td>
                <td><img src="${avatarUrl}" alt="玩家头像" style="width: 40px; height: 40px;"></td>
                <td>${player.id}</td>
                <td>${player.name}</td>
            `;
            fragment.appendChild(row);
        });
        playersBody.appendChild(fragment);
    }

        document.getElementById('version').textContent = data.version;
        
    })

function escapeHtml(text) {
    return text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#039;');
}
    