'use babel'

function getOptions (luaVersion) {
  return require('../api/bol.json')
}

const optionsCache = {}
function getCachedOptions (luaVersion, reviveOptions) {
  const cachedValue = optionsCache[luaVersion]
  if(cachedValue) { return cachedValue }
  const options = reviveOptions(getOptions(luaVersion))
  if(!options) { return }
  optionsCache[luaVersion] = options
  return options
}

export default class BolProvider {
  priority = 20;

  getOptions = async function (request, getPreviousOptions, utils, cache) {
    const previousOptions = await getPreviousOptions()
    const luaVersion = '5.2'
    const stdOptions = getCachedOptions(luaVersion, utils.reviveOptions)
    if (!stdOptions) { return { options: previousOptions } }
    return utils.mergeOptionsCached(previousOptions, stdOptions, cache)
  }
}
