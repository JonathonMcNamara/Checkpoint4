import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"

class AppState extends EventEmitter {
  // /** @type {import('./Models/Value').Value[]} */
  // values = []
  
  /** @type {import('./Models/BigImage').BigImage[]} */
  bigImage = {}
  
  /** @type {import('./Models/Clock').Clock[]} */
  clock = {}
  
  /** @type {import('./Models/Weather').Weather[]} */
  weather = {}

  /** @type {import('./Models/Weather').Weather[]} */
  quote = {}

  /** @type {import('./Models/Task').Task[]} */
  tasks = []
}

export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
