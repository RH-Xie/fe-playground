function spread(src, sub) {
  for(let key of Object.keys(sub)) {
      src[key] = sub[key]
  }
  return src
}
function spreadToDomain(src, sub) {
  for(let key of Object.keys(sub)) {
    if(typeof sub[key] === 'string') {
      eval(`var ${key} = "${sub[key]}"`)
    } else if(Array.isArray(sub[key])) {
      eval(`var ${key} = [${sub[key]}]`)
    } else {
      eval(`var ${key} = ${sub[key]}`)
    }
    src[key] = sub[key]
  }
  return src
}
const obja = {name: "123", value: "456"}
const objb = {name: 9, default: [5]}
const destruct = {}
console.log(spread(obja, objb))
console.log(spreadToDomain(destruct, objb))
console.log("name", name)