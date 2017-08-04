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
            console.log(archive.pointer() + ' total bytes');
            console.log('archiver has been finalized and the output file descriptor has closed.');
            resolve();
        });

        archive.on('error', function (err) {
            reject(err);
            throw err;
        });

        common(archive, officeFile, output);
    });
};