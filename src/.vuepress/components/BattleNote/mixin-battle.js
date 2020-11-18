import nextTurn from './nextTurn'
import battleStart from './battleStart'
import actionStart from './actionStart'
import selectSkill from './selectSkill'
// import inputSelectTarget from './input-select-target'
import actionEnd from './actionEnd'
import damage from './damage'
import heal from './heal'
import status from './status'
import barrier from './barrier'
import tbreak from './break'
import down from './down'
import battleEnd from './battleEnd'
import critical from './critical'
import dice from './dice'
import addBuff from './addBuff'
import removeBuff from './removeBuff'
import powerBuff from './powerBuff'
import passiveStart from './passiveStart'
import protect from './protect'
import avoid from './avoid'
import cost from './cost'
import cutin from './cutin'
export default {
  components:{
    nextTurn,
    battleStart,
    actionStart,
    selectSkill,
    'select-target': selectSkill,
    actionEnd,
    damage,
    heal,
    status,
    barrier,
    'break':tbreak,
    down,
    critical,
    dice,
    addBuff,
    removeBuff,
    powerBuff,
    battleEnd,
    'action': selectSkill,
    passiveStart,
    protect,
    avoid,
    cost,
    cutin
  }  
}
