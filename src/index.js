module.exports = function check(str, bracketsConfig) {
    var config = [],
        new_str = str;

    for (const elem of bracketsConfig) {
        config.push(elem[0] + elem[1]);
    }
    for (let i = 0; i < str.length; i++) {
        for (let j = 0; j < config.length; j++) {
            new_str = new_str.replace(config[j], '');
        }
        if (new_str.length == 0) {
            return true;
        }
    }
    return false;
}