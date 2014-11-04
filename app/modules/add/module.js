define([
    'angular',

    'modules/add/item/config',
    'modules/add/group/config',
    'modules/add/block/config'
], function (angular) {
    'use strict';

    return angular.module('module.add', [
        'module.add.item',
        'module.add.group',
        'module.add.block'
    ]);
});