/*jslint nomen: true */
/*globals module, require, __dirname */
var archiver = require('archiver');
var promise = require('bluebird');

var common = require('./common');

module.exports = function (output, officeFile, fileName) {
    'use strict';
    return new Promise(function (resolve, reject) {
        var archive = archiver('zip');

        output.on('close', function () {
            resolve();
        });

        archive.on('error', function (err) {
            reject(err);
            throw err;
        });

        common(archive, officeFile, output);
    });
};