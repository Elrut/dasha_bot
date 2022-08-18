const { Telegraf } = require('telegraf')
const bot = new Telegraf('5481983743:AAGEvUkG4Iz_uCa8umqL4RYI8d7UjD9I_zk')

let timeOut = (sec) => {
    return new Promise((res) => { setTimeout(()=>{ res() }, sec * 1000) })
}

bot.start(async (ctx) => {
    await ctx.replyWithMarkdownV2(`*Привет, детка* 🥳️\n\nСегодня твой день и я бы хотел устроить для тебя сюрприз\n🍷💋❤️😍🌷🎉`)
    await ctx.replyWithVideo('CgACAgQAAxkBAAMwYvuOVuDCZSR7736t8y-6V2BBVnIAAu0CAAKVLQxTymh8WtEfSgUpBA')
    await timeOut(4)
    await ctx.replyWithMarkdownV2(`👇Рассказываю правила дня👇️\n\n \`Кайфовать и наслаждаться\``)
    await timeOut(3)
    await ctx.replyWithMarkdownV2(`и всееее`)
    await timeOut(3)
    await ctx.replyWithMarkdownV2(`Попутно выполняя мои задания, ХиХиХи`)
    await timeOut(3)
    await ctx.replyWithMarkdownV2(`🎉🎉🎉🎉🎉🎉🎉🎉`)
    await ctx.replyWithVideo('AwACAgIAAxkBAAIBvmL-G5HJhoJi4taHkjsLsPswj2h-AAKrGQACny35S05s4-PKRELmKQQ')
    await ctx.replyWithMarkdownV2(`🎉🎉🎉🎉🎉🎉🎉🎉`)
    await timeOut(5)
    await ctx.replyWithMarkdownV2(`Отгадай ребус: 👵 🔪 😱\nи напиши ответ`)
})

bot.on('message', async (ctx) => {

    try {
        let sTest = ctx.update.message.text

        if (sTest && sTest.toUpperCase() === "ПРЕСТУПЛЕНИЕ И НАКАЗАНИЕ") { // Case 1 - Первое сообщение дома или где то еще + Телега Премиум
            await ctx.replyWithMarkdownV2(`Да ты умница`)
            await ctx.replyWithVideo('CgACAgQAAxkBAAOoYvudbWM347Mb9Gzy6vBTbnAR9dsAAvUCAAJDywxTqIiaPVOHcjEpBA')
            await timeOut(3)
            await ctx.replyWithMarkdownV2(`👇 Special video 👇`)
            await timeOut(3)
            await ctx.replyWithVideo('BAACAgIAAxkBAAICQWL-U_fwUW3VWAbLK39kO1jWjhGrAAICGwACny35S3mwxSFGm1uOKQQ')
            await ctx.replyWithMarkdownV2(`Через минуту продолжим`)
            await ctx.replyWithMarkdownV2(`И уже придумываю загадку посложнее 🤨`)
            await timeOut(60)
            await ctx.replyWithMarkdownV2(`Я передумал, ты слишком умная, через час пришлю новое задание 😆`)
            await timeOut(15)
            await ctx.replyWithMarkdownV2(`Шутка, расслабься, высылаю новое задание\\)`)
            await timeOut(3)
            await ctx.replyWithMarkdownV2(`Следующую подсказку ты найдешь тут👇`)
            await ctx.replyWithMarkdownV2(`55°31′56″N, 28°39′39″E`)
        }

        else if (sTest && sTest.toUpperCase() === "143") { // Case 2 - Заберет код в бейрут
            await ctx.replyWithVideo('CgACAgQAAxkBAAP1YvujCSgn-et8JUdKiI_jaeNDjoEAAk8DAAL3ZwRTkCc5QftuayQpBA')
            await timeOut(1)
            await ctx.replyWithMarkdownV2(`Опа, первую зону мы посетили 🔥`)
            await timeOut(3)
            await ctx.replyWithMarkdownV2(`А, что же будет дальше`)
            await timeOut(3)
            await ctx.replyWithMarkdownV2(`Хехехе`)
            await timeOut(3)
            await ctx.replyWithMarkdownV2(`Сейчас тебе пригодятся особые навыки слуха, готова?`)
        }

        else if (sTest && sTest.toUpperCase() === "ДА") { // Case 3 - Тест на слух
            await ctx.replyWithMarkdownV2(`Сколько раз она сказала О???`)
            await timeOut(2)
            await ctx.replyWithVideo('BAACAgIAAxkBAAIBI2L7pfSldES-2Caqr6GLdyKZIzcOAALRIAACn0XhSzhtjHTzkbaHKQQ')
        }

        else if (sTest && sTest.toUpperCase() === "3") { // Case 4 - Futures
            await ctx.replyWithVideo('CgACAgIAAxkBAAIBLmL7p2lfM2rN-8ANJGnLae_iyPKtAALfIAACn0XhS85FPRNePyunKQQ')
            await ctx.replyWithMarkdownV2(`ohhh myyyyy`)
            await timeOut(3)
            await ctx.replyWithMarkdownV2(`3 \\- это число конечно не большое, но у меня есть для тебя подарок`)
            await timeOut(3)
            await ctx.replyWithMarkdownV2(`🥁🥁🥁 Барабанная дробь 🥁🥁🥁`)
            await timeOut(10)
            await ctx.replyWithVideo('CAACAgIAAxkBAAIBQGL7qJBMDEuIAAFnHHHnROYXXdz9QQAChQIAAv5t9QlVEppjVPwPxikE')
            await ctx.replyWithMarkdownV2(`🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨\n                                                \n    BINANCE FUTURES 50$\n                                                \n🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨`)
            await ctx.replyWithMarkdownV2(`Адрес TRC20 в студию`)
            await timeOut(30)
            await ctx.replyWithMarkdownV2(`👇 Special video 👇`)
            await ctx.replyWithVideo('BAACAgIAAxkBAAICu2L-WeHNARtPsb15n_y5DCkMKXsuAAIhGwACny35SybwVlC87lH_KQQ')
            await ctx.replyWithMarkdownV2(`В этих цифрах ты найдешь следующую подсказку`)
            await ctx.replyWithMarkdownV2(`Для следующего пункта задания, введи число\\:`)
        }

        else if (sTest && sTest.toUpperCase() === "25") { // Case 5
            await ctx.replyWithMarkdownV2(`Как тебе подарок\\?`)
            await ctx.replyWithVideo('CgACAgQAAxkBAAIC02L-WwM9L17Yh61wHstVR6Zi79MuAAIoAwACG8kEU2SMcG10yaRKKQQ')
            await timeOut(5)
            await ctx.replyWithMarkdownV2(`Думаю отлично будет сочетаться с твоим платьем и каблуками 🤤`)
            await timeOut(3)
            await ctx.replyWithMarkdownV2(`👇 Special video 👇`)
            // todo видео родителей
        }

        else {
            await ctx.replyWithMarkdownV2(`Попробуй еще раз`)
        }
    } catch (e) {
        console.log(e)
    }

})


bot.launch()