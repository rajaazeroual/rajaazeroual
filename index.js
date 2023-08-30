javascript
const { create, Client } = require('@open-wa/wa-automate');

const start = async (client) => {
console.log(`Logged in as ${client.user.name}`);

// إرسال رسالة عند استلام رسالة جديدة
client.onMessage(async (message) => {
const sender = message.from;
const text = message.body;
console.log(`Received a message from ${sender}: ${text}`);

// الرد على الرسالة
if (text === 'Hello') {
await client.sendText(sender, 'Hi there!');
}
});
};

// إنشاء وتسجيل الدخول باستخدام رقم الهاتف
create().then((client) => start(client));







 






