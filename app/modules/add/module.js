define([
    'angular',

    'modules/add/item/config',
    'modules/add/block/config'
], function (angular) {
    'use strict';

    return angular.module('module.add', [
        'module.add.item',
        'module.add.block'
    ]);
});