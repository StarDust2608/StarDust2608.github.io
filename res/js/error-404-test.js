// 配置循环文本库
const textVariations = {
    Text_1: [
        'sorry！页面被炸坏了~',
        'sorry！苦力怕被玩坏了！',
        '警告：区块加载失败！',
        'ERROR: 末影珍珠传送失效'
    ],
    Text_2: [
        '这肯定不是苦力怕的问题！绝对不是！',
        '可能是Herobrine的恶作剧',
        '这肯定是服主的问题！绝对是！',
        '试试重启你的红石电路？'
    ],
    Text_3: [
        '&nbsp;&nbsp;欧尼酱不要急，来看一下其他地方吧：',
        '&nbsp;&nbsp;欧尼酱不要急，来体验我其他的地方吧：',
        '&nbsp;&nbsp;时空跳跃准备就绪：',
        '&nbsp;&nbsp;备用传送门已激活：'
    ]
}

const clickCounters = new Map()

function rotateText(element) {
    const id = element.id
    if (!clickCounters.has(id)) {
        clickCounters.set(id, 0)
    }
    
    const currentCount = clickCounters.get(id)
    const nextIndex = (currentCount + 1) % textVariations[id].length
    element.innerHTML = textVariations[id][nextIndex]
    clickCounters.set(id, nextIndex)


}

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('[id^="Text_"]').forEach(element => {
        element.addEventListener('click', () => rotateText(element))
        element.style.cursor = 'pointer'
        element.style.transition = 'all 0.3s'
    })

    let autoRotate = setInterval(() => {
        document.querySelectorAll('[id^="Text_"]').forEach(el => {
            if (!el.matches(':hover')) rotateText(el)
        })
    }, 8000)
})