import Echo from 'laravel-echo';

import Pusher from 'pusher-js';
window.Pusher = Pusher;

window.Echo = new Echo({
    broadcaster: 'reverb',
    key: import.meta.env.VITE_REVERB_APP_KEY,
    wsHost: import.meta.env.VITE_REVERB_HOST,
    wsPort: import.meta.env.VITE_REVERB_PORT ?? 80,
    wssPort: import.meta.env.VITE_REVERB_PORT ?? 443,
    forceTLS: (import.meta.env.VITE_REVERB_SCHEME ?? 'https') === 'https',
    enabledTransports: ['ws', 'wss'],
});

const connectWebSocket_updates = (webSocketChannel,webSocketListen,callback) => {
    window.Echo.channel(webSocketChannel)
        .listen(webSocketListen, async (e) => {
            // e.message
            callback(e);
        });
}

connectWebSocket_updates('tutorial', 'ParaTutorial', (e)=>{
    console.log('Se ha conectado otro navegador:'+e.message);
});