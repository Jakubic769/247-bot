const mineflayer = require('mineflayer');

// Konfiguracja bota
const bot = mineflayer.createBot({
  host: '127.0.0.1',  // Adres serwera Minecraft (zmień na swój)
  port: 22565,        // Port serwera (domyślnie 25565)
  username: 'BotForMinecraft', // Nazwa bota
  version: '1.20.4',  // Wersja serwera
  auth: 'offline'     // Tryb offline
});

// Połączenie z serwerem
bot.on('spawn', () => {
  console.log('Bot dołączył do serwera!');
});

// Obsługa wiadomości czatu
bot.on('chat', (username, message) => {
  if (username === bot.username) return;
  console.log(`<${username}> ${message}`);
});

// Obsługa rozłączenia
bot.on('end', () => {
  console.log('Bot rozłączony z serwerem!');
});

// Obsługa błędów
bot.on('error', (err) => {
  console.error('Błąd bota:', err);
});
