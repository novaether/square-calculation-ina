const { tambah, kurang, kali, bagi } = require('calculate-indo')

function luasPersegi(a) {
    return kali(a, a)
}

function kelilingPersegi(a) {
    return kali(tambah(a, a), 2)
}

module.exports = {
    luasPersegi,
    kelilingPersegi
}