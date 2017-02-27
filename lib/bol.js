'use babel'

import { CompositeDisposable } from 'atom'
import BolProvider from './bol-provider'

export default {



  // subscriptions: null,

  activate () {
  //   // Events subscribed to in atom's system can be easily cleaned up with a CompositeDisposable
  //   this.subscriptions = new CompositeDisposable()
  require('atom-package-deps').install('main-bol')
  },

  //   // Register command that toggles this view
  // deactivate () {
  //   this.subscriptions.dispose()
  // },

  getOptionProvider () {
    return new BolProvider()
  }

}
