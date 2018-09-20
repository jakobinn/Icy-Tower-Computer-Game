// =======
// GLOBALS
// =======


"use strict";


var g_canvas = document.getElementById("myCanvas");
var g_ctx = g_canvas.getContext("2d");
var g_viewY = 0;
var g_OffSet = 0;
var g_worldtime = 0;
var g_startDrop = false;
var g_duration = 0;
var g_powerText = "";
var posStarX = 0;
var posStarY = 0;
var guyVelY = 0;


var NOMINAL_UPDATE_INTERVAL = 16.666;

var SECS_TO_NOMINALS = 1000 / NOMINAL_UPDATE_INTERVAL;

var BRICKFIELD_GUTTER = 50;
var BRICKFIELD_WIDTH = g_canvas.width - (BRICKFIELD_GUTTER * 2);
var BRICKFIELD_COLUMNS = 16;
var BRICK_SIZE = BRICKFIELD_WIDTH / BRICKFIELD_COLUMNS;

var g_timeThresh = 30 * SECS_TO_NOMINALS;
var g_timeThreshMultiplier = 1;