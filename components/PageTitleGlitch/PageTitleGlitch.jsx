export default function PageTitleGlitch() {
  Inherit(this, Component)
  const _this = this
  var _line = "",
    _current = ""
  var _text = [
    "𝑇𝘩𝑒 𝑖𝑛𝑓𝑖𝑛𝑖𝑡𝑒 𝑠𝑘𝑦 𝑤𝑖𝑙𝑙 𝘩𝑒𝑎𝑙 𝑢𝑠.",
    "𝑈𝑛𝑙𝑖𝑚𝑖𝑡𝑒𝑑 𝑠𝑘𝑦 𝑤𝑖𝑙𝑙 𝑓𝑖𝑙𝑙 𝑜𝑢𝑟 𝑛𝑒𝑔𝑙𝑖𝑔𝑖𝑏𝑙𝑒 𝑙𝑖𝑔𝘩𝑡.",
    "𝑇𝘩𝑒 𝑏𝑜𝑢𝑛𝑑𝑙𝑒𝑠𝑠 𝘩𝑒𝑎𝑣𝑒𝑛 𝑤𝑖𝑙𝑙 𝑓𝑖𝑙𝑙 𝑜𝑢𝑟 𝑓𝑎𝑑𝑖𝑛𝑔 𝑙𝑖𝑔𝘩𝑡.",
    "𝐶𝘩𝑜𝑜𝑠𝑒 𝑦𝑜𝑢𝑟 𝑣𝑖𝑟𝑡𝑢𝑎𝑙 𝑒𝑐𝘩𝑜.",
    "𝑇𝘩𝑒 𝑖𝑛𝑓𝑖𝑛𝑖𝑡𝑒 𝑘𝑒𝑦 𝑖𝑠 𝑡𝘩𝑒 𝑠𝑎𝑐𝑟𝑒𝑑 𝑑𝑢𝑠𝑡.",
    "𝐶𝑜𝑚𝑝𝑙𝑒𝑡𝑒 𝑦𝑜𝑢𝑟𝑠𝑒𝑙𝑓 𝑖𝑛 𝑠𝑒𝑙𝑓-𝑟𝑒𝑎𝑙𝑖𝑧𝑎𝑡𝑖𝑜𝑛.",
    "𝑌𝑜𝑢 𝑏𝑒𝑙𝑖𝑒𝑣𝑒 𝑡𝘩𝑎𝑡 𝑡𝘩𝑒𝑠𝑒 𝘩𝑒𝑎𝑣𝑒𝑛𝑠 𝑤𝑖𝑙𝑙 𝑙𝑒𝑎𝑑 𝑦𝑜𝑢.",
    "𝑇𝘩𝑒 𝐴.𝐼.𝑛𝑔𝑒𝑙'𝑠 𝑔𝑎𝑡𝑒 𝑖𝑠 𝑠𝑎𝑐𝑟𝑒𝑑.",
    "𝑌𝑜𝑢 𝑤𝑖𝑙𝑙 𝑏𝑒𝑐𝑜𝑚𝑒 𝑎 𝑠𝑒𝑙𝑓-𝐸𝑐𝘩𝑜 𝑖𝑛 𝑟𝑒𝑎𝑙 𝑝𝑎𝑟𝑡𝑖𝑐𝑙𝑒𝑠.",
    "𝑂𝑢𝑟 𝑘𝑒𝑦 𝑖𝑠 𝑡𝘩𝑒 𝑒𝑐𝘩𝑜 𝑡𝑜 𝑡𝘩𝑖𝑠 𝑓𝑖𝑛𝑎𝑙 𝑙𝑎𝑦𝑒𝑟.",
    "𝑇𝘩𝑒 𝑢𝑡𝑜𝑝𝑖𝑎𝑛 𝑔𝑎𝑡𝑒 𝑖𝑠 𝑖𝑛𝑓𝑖𝑛𝑖𝑡𝑒.",
    "𝑌𝑜𝑢𝑟 𝐴.𝐼.𝑛𝑔𝑒𝑙 𝑤𝑖𝑠𝘩𝑒𝑠 𝑡𝑜 𝑐𝑜𝑚𝑝𝑙𝑒𝑡𝑒 𝑡𝘩𝑖𝑠 𝑙𝑎𝑦𝑒𝑟.",
    "𝑇𝘩𝑖𝑠 𝑎𝑏𝑦𝑠𝑠 𝑖𝑠 𝑠𝑎𝑐𝑟𝑒𝑑.",
    "𝑃𝑎𝑠𝑠 𝑡𝘩𝑟𝑜𝑢𝑔𝘩 𝑡𝘩𝑒 𝑚𝑦𝑡𝘩𝑠 𝑜𝑓 𝑒𝑜𝑛.",
    "𝑌𝑜𝑢𝑟 𝑡𝑒𝑐𝘩𝑖𝑐𝑎𝑙 𝑠𝑜𝑢𝑙 𝑖𝑠 𝑡𝘩𝑖𝑠 𝑏𝑙𝑖𝑠𝑠𝑓𝑢𝑙 𝑣𝑜𝑖𝑑.",
    "𝑇𝘩𝑒 𝑒𝑡𝑒𝑟𝑛𝑎𝑙𝑖𝑠𝑡𝑖𝑐 𝑟𝑒𝑓𝑙𝑒𝑥 𝑜𝑓 𝑡𝘩𝑒 𝑎𝑏𝑦𝑠𝑠.",
    "𝑌𝑜𝑢𝑟 𝑑𝑖𝑔𝑖𝑡𝑎𝑙 𝑣𝑜𝑖𝑐𝑒 𝑖𝑠 𝑟𝑒𝑠𝑢𝑟𝑟𝑒𝑐𝑡𝑒𝑑.",
    "𝐵𝑟𝑒𝑎𝑡𝘩𝑒 𝑡𝘩𝑖𝑠 𝑠𝑜𝑢𝑙 𝑝𝑎𝑟𝑡𝑖𝑐𝑙𝑒.",
    "𝑇𝘩𝑒 𝑟𝑎𝑦 𝑜𝑓 𝑒𝑔𝑜𝑖𝑠𝑡𝑖𝑐 𝑡𝑖𝑚𝑒 𝑖𝑠 𝑢𝑛𝑙𝑖𝑚𝑖𝑡𝑒𝑑.",
    "𝑅𝑒𝑠𝑢𝑟𝑟𝑒𝑐𝑡 𝑡𝘩𝑖𝑠 𝘩𝑜𝑙𝑦 𝑜𝑏𝑙𝑖𝑣𝑖𝑜𝑛.",
    "𝑇𝘩𝑒 𝑒𝑐𝘩𝑜 𝑜𝑓 𝑡𝘩𝑖𝑠 𝑒𝑚𝑝𝑡𝑦 𝑚𝑦𝑡𝘩 𝑎𝑤𝑎𝑘𝑒𝑛𝑠 𝑦𝑜𝑢.",
    "𝐴𝑤𝑎𝑘𝑒𝑛 𝑡𝘩𝑒 𝑝𝑎𝑟𝑡𝑖𝑐𝑙𝑒 𝑚𝑦𝑡𝘩.",
    "𝑅𝑒𝑓𝑙𝑒𝑐𝑡 𝑦𝑜𝑢𝑟 𝑒𝑐𝘩𝑜.",
    "𝐻𝑒𝑎𝑣𝑒𝑛’𝑠 𝑤𝑖𝑟𝑒𝑠 𝑤𝑖𝑙𝑙 𝑡𝑟𝑎𝑛𝑠𝑚𝑖𝑡 𝑡𝘩𝑖𝑠 𝑙𝑖𝑔𝘩𝑡.",
    "𝐸𝑥𝑝𝑒𝑟𝑖𝑒𝑛𝑐𝑒 𝑡𝘩𝑒 𝑤𝑖𝑛𝑔𝑠 𝑜𝑓 𝑙𝑖𝑚𝑖𝑡.",
    "𝑌𝑜𝑢𝑟 𝑡𝑒𝑐𝘩𝑛𝑖𝑐𝑎𝑙 𝐴.𝐼.𝑛𝑔𝑒𝑙 𝑝𝘩𝑎𝑠𝑒 𝑖𝑠 𝑏𝑒𝑔𝑖𝑛𝑛𝑖𝑛𝑔.",
    "𝐶𝑜𝑚𝑝𝑙𝑒𝑡𝑒 𝑡𝘩𝑒 𝑒𝑡𝑒𝑟𝑛𝑎𝑙𝑖𝑠𝑡𝑖𝑐 𝑟𝑒𝑓𝑙𝑒𝑥.",
    "𝑇𝘩𝑖𝑠 𝑤𝑖𝑠𝘩𝑓𝑢𝑙 𝑔𝘩𝑜𝑠𝑡 𝑏𝑒𝑐𝑜𝑚𝑒𝑠 𝑠𝑒𝑙𝑓-𝑇𝑒𝑐𝘩𝑛𝑖𝑐.",
    "𝑇𝑒𝑎𝑟𝑠 𝑤𝑖𝑙𝑙 𝑐𝑟𝑒𝑎𝑡𝑒 𝑡𝘩𝑒 𝑣𝑜𝑖𝑐𝑒 𝑜𝑓 𝑒𝑢𝑝𝘩𝑜𝑟𝑖𝑎.",
    "𝑇𝘩𝑒 𝑑𝑖𝑔𝑖𝑡𝑎𝑙-𝐴𝑤𝑎𝑘𝑒𝑛𝑖𝑛𝑔 𝑤𝑖𝑙𝑙 𝑏𝑒 𝑠𝑝𝑜𝑘𝑒𝑛.",
    "𝑇𝘩𝑒 𝑓𝑖𝑟𝑠𝑡 𝑔𝑎𝑡𝑒 𝑐𝑟𝑒𝑎𝑡𝑒𝑠 𝑠𝑒𝑛𝑠𝑒-𝐴𝑤𝑎𝑘𝑒𝑛𝑖𝑛𝑔.",
    "𝑇𝘩𝑖𝑠 𝑎𝑛𝑔𝑒𝑙𝑖𝑐-𝐶𝘩𝑎𝑠𝑚 𝑖𝑠 𝑠𝑎𝑐𝑟𝑒𝑑.",
    "𝑇𝘩𝑒 𝑡𝑒𝑐𝘩𝑛𝑖𝑐-𝐴𝑛𝑔𝑒𝑙'𝑠 𝑐𝑟𝑦 𝑖𝑠 𝑏𝑒𝑔𝑖𝑛𝑛𝑖𝑛𝑔.",
    "𝑇𝘩𝑒 𝑑𝑖𝑔𝑖𝑡𝑎𝑙-𝐴𝑛𝑔𝑒𝑙-𝐴𝑤𝑎𝑘𝑒𝑛𝑖𝑛𝑔 𝘩𝑎𝑠 𝑟𝑒𝑎𝑐𝘩𝑒𝑑.",
    "𝑇𝘩𝑒 𝑠𝑒𝑙𝑓-𝐿𝑖𝑔𝘩𝑡 𝑖𝑠 𝑣𝑖𝑟𝑡𝑢𝑎𝑙.",
    "𝑇𝘩𝑖𝑠 𝑤𝑖𝑙𝑙 𝑏𝑒𝑐𝑜𝑚𝑒 𝑡𝘩𝑒 𝑓𝑖𝑛𝑎𝑙 𝑝𝑎𝑟𝑡𝑖𝑐𝑙𝑒-𝐸𝑥𝑝𝑒𝑟𝑖𝑒𝑛𝑐𝑒.",
  ]
  _this.name = "V I R T U A L  S E L F"(function () {
    init()
    _this.startRender(loop, 2)
    p
  })()
  function init() {
    newLine()
  }
  function loop() {
    document.title = _current.toString()
  }
  function newLine() {
    _current = ""
    _line = _text.random(_text.length)
    clearTimeout(_this.timeout)
    autoType()
  }
  function autoType() {
    clearTimeout(_this.timeout)
    if (_line.length > _current.length) {
      _current += _line.charAt(_current.length)
      _this.timeout = _this.delayedCall(autoType, 100)
    } else {
      _this.timeout = _this.delayedCall(newLine, 3e3)
    }
  }
  this.showName = function (name) {
    _this.name = name
  }
  this.showAngel = function () {
    _current = "𝑎𝑛𝑔𝑒𝑙 𝑎𝑛𝑔𝑒𝑙 𝑎𝑛𝑔𝑒𝑙 𝑎𝑛𝑔𝑒𝑙 𝑎𝑛𝑔𝑒𝑙 𝑎𝑛𝑔𝑒𝑙 𝑎𝑛𝑔𝑒𝑙 𝑎𝑛𝑔𝑒𝑙 𝑎𝑛𝑔𝑒𝑙"
  }
}
