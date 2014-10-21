define([
    'angular',
    '../bazalt',
    'bz',

    'base/config',
    //'modules/auth/config',
    'modules/add/config',

    'views'
], function (angular) {
    'use strict';

    return angular.module('app', [
        'bz',

        'base',

        //'module.auth',
        'module.add',

        'views'
    ]);
});