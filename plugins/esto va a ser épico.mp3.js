import util from 'util'
import path from 'path'

let handler = async (m, { conn }) => {
if (!db.data.chats[m.chat].audios && m.isGroup) throw 0
let vn = './media/esto va a ser épico.mp3'
conn.sendFile(m.chat, vn, 'esto va a ser épico.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true 
})
}
handler.customPrefix = /esto va a ser épico|esto va a ser epico/
handler.command = new RegExp
handler.register = true
export default handler
