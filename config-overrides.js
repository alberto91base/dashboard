const { alias, aliasJest } = require('react-app-rewire-alias');

const aliasMap = {
    '@src': 'src',
    '@router': 'src/router',
    '@containers': 'src/containers',
    '@components': 'src/components',
    '@redux': 'src/redux',
    '@services': 'src/services',
    '@hooks': 'src/hooks',
    '@lib': 'src/lib',
};

module.exports = alias(aliasMap);
module.exports.jest = aliasJest(aliasMap);
