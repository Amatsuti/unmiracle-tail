import dice from './dice'
import diceShot from './diceShot'
import remark from './remark'
import status from './status'
import textNote from './textNote'
import messageOpen from './messageOpen'
import setBg from './setBg'
import introduction from './introduction'
import telop from './telop'
import heading from './heading'
import linkText from './linkText'
export default {
  components:{
    dice,
    diceShot,
    remark,
    status,
    textNote,
    messageOpen,
    setBg,
    introduction,
    'message-close': messageOpen,
    'black-out': messageOpen,
    'fade-in': messageOpen,
    'fade-out': messageOpen,
    'clear': messageOpen,
    'weather': messageOpen,
    telop,
    heading,
    linkText
  },
}
