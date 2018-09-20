var g_levels = [];

g_levels.push([
[0,0,0,0,0,0,0,0,0,0,0,0,2,2,2,2],
[0,0,0,0,0,0,1,1,1,1],
[0,0,0,0,0,0,0,0,0,4,4,4,4],
[0,0,0,0,0,0,0,0,0,0,2,2,2,2],
[0,0,0,0,0,4,4,4,4],
[0,0,0,0,2,2,2,2],
[0,0,2,2,2,2],
[0,0,0,0,0,0,0,0,0,3,3,3,3],
[0,0,0,0,0,0,0,4,4,4,4],
[0,0,0,0,0,0,0,0,0,0,0,3,3,3,3],
[0,2,2,2,2],
[0,0,0,0,0,0,0,4,4,4,4],
[0,0,2,2,2,2],
[0,0,0,0,5,5,5,5],
[0,0,0,0,0,0,0,0,4,4,4,4],
[0,0,0,0,0,0,0,0,0,0,0,2,2,2,2],
[0,0,0,0,3,3,3,3],
[0,0,3,3,3,3],
[0,0,0,0,0,0,0,3,3,3,3],
[0,0,0,0,0,2,2,2,2],
[2,2,2,2],
[0,0,0,0,0,0,0,0,0,0,0,0,2,2,2,2],
[0,0,0,0,0,0,0,0,0,0,0,0,4,4,4,4],
[0,0,0,0,0,0,0,5,5,5,5],
[0,0,0,0,0,0,0,0,0,0,0,0,3,3,3,3],
[0,0,0,0,0,0,0,0,1,1,1,1],
[0,4,4,4,4],
[0,0,0,0,0,1,1,1,1],
[0,0,0,0,0,0,0,2,2,2,2],
[0,0,0,0,2,2,2,2],
[0,0,0,3,3,3,3],
[0,0,0,0,3,3,3,3],
[0,0,0,0,0,3,3,3,3],
[0,0,0,0,0,0,0,0,2,2,2,2],
[0,0,0,0,0,0,0,3,3,3,3],
[0,0,0,0,0,0,0,3,3,3,3],
[0,0,0,0,0,0,0,0,1,1,1,1],
[0,0,0,0,0,0,0,0,1,1,1,1],
[0,0,0,0,0,0,2,2,2,2],
[0,0,0,0,0,0,0,0,5,5,5,5],
[0,0,0,0,0,1,1,1,1],
[0,0,0,0,0,0,0,0,0,0,0,0,5,5,5,5],
[0,0,0,0,0,0,0,0,4,4,4,4],
[0,0,0,0,0,0,0,0,2,2,2,2],
[0,0,0,1,1,1,1],
[0,0,4,4,4,4],
[0,0,0,0,0,0,0,4,4,4,4],
[0,0,0,0,0,0,0,0,0,0,0,2,2,2,2],
[0,0,0,0,0,0,0,0,3,3,3,3,3],
[0,0,0,0,0,0,0,0,0,0,0,0,2,2,2,2],
[0,5,5,5,5],
[0,0,0,0,2,2,2,2],
[0,0,0,0,0,0,0,2,2,2,2,2],
[0,0,0,0,0,0,0,0,0,0,5,5,5,5,5],
[0,1,1,1,1],
[0,0,0,0,0,0,4,4,4,4],
[0,0,0,0,0,0,0,0,0,0,0,0,0,3,3],
[0,0,0,0,4,4,4,4],
[0,0,0,1,1,1,1],
[0,0,0,3,3,3,3],
[0,0,0,0,0,0,0,0,0,0,0,4,4,4,4],
[0,0,0,1,1,1,1],
[0,0,0,4,4,4,4],
[0,0,0,0,0,0,0,0,0,1,1,1,1],
[3,3,3,3],
[0,0,0,4,4,4,4,4],
[0,0,0,2,2,2,2],
[0,0,0,0,0,0,2,2,2,2],
[0,0,0,0,0,0,0,0,0,3,3,3,3],
[0,0,0,0,0,0,0,0,0,0,2,2,2,2],
[0,5,5,5,5],
[0,0,0,0,0,0,0,1,1,1,1],
[0,0,0,0,0,0,0,0,0,0,5,5,5,5],
[0,0,0,0,0,0,0,0,0,3,3,3,3],
[5,5,5,5],
[0,0,0,0,0,0,4,4,4,4],
[0,0,0,0,0,0,0,0,0,3,3,3,3],
[0,0,0,0,0,0,0,0,2,2,2,2],
[0,0,5,5,5,5],
[0,0,0,0,0,0,0,0,4,4,4,4],
[0,0,0,0,0,0,0,0,0,3,3,3,3],
[0,0,4,4,4,4,4],
[0,0,0,0,0,0,0,0,0,2,2,2,2],
[0,0,0,2,2,2,2],
[0,0,0,0,0,0,0,0,2,2,2,2],
[0,0,0,3,3,3,3],
[0,0,4,4,4,4],
[0,0,0,0,0,0,0,0,0,0,0,0,3,3,3,3],
[0,0,0,0,0,0,0,0,3,3,3,3],
[0,0,0,0,3,3,3,3],
[0,0,1,1,1,1],
[0,0,0,0,0,0,0,0,0,0,0,1,1,1,1],
[0,0,5,5,5,5],
[0,0,0,0,0,0,0,0,4,4,4,4],
[0,0,0,0,0,0,0,2,2,2,2],
[0,2,2,2,2],
[0,2,2,2,2],
[0,0,0,0,0,3,3,3,3],
[0,0,0,0,0,0,0,0,0,0,0,4,4,4,4],
[0,0,0,0,0,0,0,5,5,5,5,5]
]);

g_levels.push([
[2,2,2,2],
[0,0,0,0,0,4,4,4,4],
[0,0,0,0,0,0,0,0,2,2,2,2],
[0,0,0,0,0,0,0,0,0,0,0,2,2,2,2],
[0,0,0,0,0,0,0,0,0,0,3,3,3,3],
[0,0,0,0,0,0,0,0,0,2,2,2,2,2],
[0,0,0,0,0,0,0,0,0,0,2,2,2,2],
[0,0,0,0,0,0,2,2,2,2],
[0,0,0,4,4,4,4],
[0,0,0,0,0,0,0,0,0,0,5,5,5,5],
[0,0,0,0,0,0,0,0,0,0,0,2,2,2,2],
[0,0,0,0,0,0,1,1,1,1],
[0,0,4,4,4,4],
[0,0,0,0,1,1,1,1],
[0,0,0,0,0,0,0,0,0,0,0,4,4,4,4,4],
[0,0,0,0,0,0,0,4,4,4,4],
[0,0,0,0,0,0,4,4,4,4],
[0,0,0,0,0,0,0,0,0,2,2,2,2],
[0,0,0,0,0,0,5,5,5,5,5],
[0,0,0,0,0,0,0,0,0,3,3,3,3],
[0,0,0,0,5,5,5,5],
[0,0,0,3,3,3,3],
[0,0,0,0,0,0,0,0,0,0,0,2,2,2],
[0,0,0,0,0,0,0,0,0,0,0,5,5,5,5],
[0,0,0,2,2,2,2,2],
[0,0,0,0,0,0,0,3,3,3,3,3],
[0,0,0,0,0,2,2,2,2,2],
[0,0,0,0,5,5,5,5],
[0,0,0,0,0,0,0,0,0,0,2,2,2,2],
[0,0,0,0,0,0,0,0,1,1,1,1],
[0,3,3,3,3],
[0,0,0,0,0,0,0,0,0,0,1,1,1,1,1],
[0,0,0,0,2,2,2,2],
[0,0,0,0,0,4,4,4,4],
[0,0,0,0,4,4,4,4,4],
[0,0,0,0,0,0,0,0,0,4,4,4,4],
[0,0,0,3,3,3,3],
[0,0,0,0,0,0,0,4,4,4,4],
[0,0,0,0,0,0,2,2,2,2],
[0,0,0,3,3,3,3],
[0,1,1,1,1],
[0,0,0,0,0,0,0,0,1,1],
[0,0,0,0,0,0,0,0,0,0,0,0,2,2],
[0,0,0,0,0,0,0,0,0,0,0,3,3,3,3],
[0,0,0,0,0,0,0,0,0,0,5,5,5,5],
[0,0,3,3,3,3],
[0,0,0,0,0,0,0,0,4,4,4,4],
[0,0,0,0,0,0,0,0,2,2],
[0,0,0,0,2,2,2,2],
[0,0,0,0,0,0,0,4,4,4,4],
[0,0,0,0,0,0,0,0,0,0,5,5],
[0,0,0,0,0,0,0,5,5,5,5],
[0,0,0,0,0,0,4,4],
[0,0,0,0,0,0,0,0,0,0,3,3,3,3,3],
[2,2,2,2],
[0,0,0,0,0,0,0,0,2,2,2,2],
[0,0,0,1,1,1,1],
[0,0,0,0,0,0,0,3,3,3,3],
[0,0,0,0,0,0,4,4,4,4,4],
[4,4,4,4,4],
[4,4,4,4,4],
[0,0,0,0,0,0,0,0,0,0,0,0,2,2,2,2],
[0,0,0,0,0,0,0,5,5,5,5],
[0,0,0,0,0,0,0,0,0,0,2,2,2,2],
[4,4,4,4],
[0,0,0,0,0,0,0,0,2,2,2,2],
[0,0,0,0,3,3,3,3,3],
[0,0,0,0,0,0,4,4,4,4],
[0,0,0,0,0,0,2,2,2,2],
[0,0,0,0,0,1,1,1],
[0,0,0,0,0,0,3,3,3,3],
[4,4,4,4],
[0,0,0,0,0,0,0,0,0,0,0,1,1,1,1],
[0,0,0,0,0,0,0,4,4,4,4],
[0,0,0,0,0,2,2,2,2],
[0,0,0,0,0,5,5,5,5],
[0,0,0,0,0,0,2,2,2,2],
[0,0,0,0,0,0,0,0,4,4,4,4],
[0,0,0,0,0,0,0,0,0,2,2,2,2],
[0,0,2,2,2,2],
[0,2,2,2,2],
[0,0,0,0,0,0,0,0,0,0,0,0,4,4,4,4],
[0,0,0,0,0,0,0,0,0,0,0,2,2,2,2],
[0,0,0,0,0,0,0,0,0,0,0,0,0,5,5],
[0,5,5,5,5,5],
[0,0,0,0,0,0,1,1,1,1],
[0,0,0,0,0,3,3,3,3],
[0,0,0,0,0,0,0,0,0,0,0,0,2,2,2,2],
[0,0,0,3,3,3,3,3],
[0,0,0,1,1,1,1],
[0,0,0,0,0,0,0,0,0,0,0,4,4,4,4],
[0,0,0,3,3,3,3],
[0,0,0,0,0,0,0,0,0,5,5,5,5],
[3,3,3,3],
[0,0,0,0,0,0,4,4,4,4],
[0,0,0,0,3,3,3,3],
[0,0,0,0,0,0,0,0,0,2,2,2,2],
[3,3,3,3],
[0,0,0,0,0,2,2,2,2],
[0,0,0,0,0,5,5,5,5,5]
]);

g_levels.push([
[0,0,0,0,3,3],
[0,0,0,0,0,0,1,1,1,1,1],
[0,4,4,4,4],
[0,0,5,5,5,5],
[0,0,1,1,1,1],
[0,0,0,0,0,3,3,3,3,3],
[0,0,0,0,0,0,0,0,0,0,2,2,2,2],
[0,0,0,0,0,0,0,0,5,5],
[0,0,0,0,0,0,0,0,2,2,2,2,2],
[0,0,0,0,0,0,0,0,0,3,3,3,3,3],
[0,0,0,0,0,0,0,0,0,0,0,3,3],
[0,0,0,4,4,4,4],
[0,0,0,0,0,0,0,0,0,0,0,0,4,4,4,4],
[5,5,5,5],
[0,0,0,0,1,1,1,1,1],
[0,0,0,0,0,1,1,1,1],
[0,0,0,2,2,2,2],
[2,2,2,2,2],
[2,2,2,2],
[0,0,4,4,4,4],
[0,0,0,0,0,0,3,3,3,3],
[0,3,3],
[0,0,2,2,2,2],
[0,0,5,5,5,5,5],
[0,0,0,0,0,0,0,0,0,0,5,5,5,5,5],
[0,0,0,0,0,0,0,0,0,0,4,4,4,4],
[3,3,3,3],
[0,0,0,0,0,0,0,0,0,0,3,3,3,3],
[0,0,5,5,5,5],
[0,0,0,0,0,0,3,3,3,3],
[0,0,0,0,0,0,0,0,0,0,5,5,5,5],
[0,1,1,1,1],
[4,4,4,4],
[0,0,0,2,2,2,2],
[0,0,0,0,0,0,0,0,1,1,1,1],
[0,0,0,0,5,5,5,5],
[0,2,2,2,2],
[0,0,0,0,0,0,0,0,0,0,4,4,4,4],
[0,0,0,0,0,0,0,2,2,2,2],
[0,0,0,0,0,0,0,4,4,4,4,4],
[0,4,4,4,4],
[3,3,3,3],
[0,0,0,0,0,0,5,5,5,5,5],
[0,0,0,0,0,0,0,0,0,2,2,2,2],
[0,0,0,0,2,2,2,2],
[0,5,5,5,5],
[0,0,2,2,2,2,2],
[0,0,0,0,0,0,0,0,2,2,2,2],
[3,3,3,3],
[0,0,1,1,1,1],
[0,0,0,0,0,0,0,0,0,2,2],
[0,0,0,0,0,0,0,0,0,0,3,3,3,3],
[1,1,1,1],
[0,0,0,2,2,2,2,2],
[0,0,0,0,0,4,4,4],
[0,0,0,4,4,4,4],
[0,0,0,0,0,0,0,0,4,4],
[0,0,3,3,3,3],
[0,0,0,3,3,3,3],
[0,0,0,0,0,1,1,1,1],
[5,5,5,5],
[0,0,0,0,0,0,3,3,3,3],
[0,0,0,0,4,4,4,4],
[0,0,0,0,0,4,4],
[0,0,0,0,0,0,0,0,0,0,0,1,1,1,1],
[0,0,0,4,4,4,4],
[0,0,0,0,0,0,0,2,2,2,2],
[0,0,1,1,1,1],
[0,0,0,0,0,0,0,4,4,4,4],
[4,4,4,4],
[0,0,0,0,0,2,2,2,2],
[0,0,0,0,0,0,0,3,3,3,3],
[0,4,4,4,4,4],
[0,0,0,0,0,0,0,5,5,5,5],
[0,0,0,0,0,0,0,0,0,0,1,1,1,1],
[0,0,0,0,0,0,0,0,0,0,0,0,0,2,2],
[0,0,0,0,0,5,5,5,5],
[0,0,0,0,0,0,0,0,0,0,0,3,3],
[0,0,0,0,3,3,3,3,3],
[0,0,0,0,0,0,1,1,1,1,1],
[0,4,4,4,4],
[0,0,0,0,0,0,0,0,0,0,1,1,1,1],
[0,0,0,0,0,1,1,1,1],
[0,0,0,0,0,0,0,0,0,4,4,4,4],
[0,0,0,0,0,0,3,3,3,3],
[0,0,0,0,0,0,0,0,5,5,5,5],
[0,0,1,1,1,1,1],
[0,0,0,0,0,0,0,0,0,0,3,3,3,3],
[0,0,0,0,0,0,0,0,0,4,4,4,4],
[0,0,0,0,0,3,3,3,3],
[0,4,4,4,4],
[0,0,0,0,0,0,0,0,0,0,0,0,3,3,3,3],
[0,0,0,0,0,0,0,0,2,2,2,2],
[0,0,0,0,0,0,0,4,4,4,4,4],
[0,0,0,3,3,3,3],
[5,5,5,5],
[0,0,0,0,0,0,0,0,0,3,3,3,3],
[0,0,0,0,0,0,0,0,3,3,3,3],
[0,0,0,0,0,0,0,0,0,0,1,1,1,1],
[3,3,3,3]
]);

g_levels.push([
[0,0,0,0,0,0,0,0,0,0,0,0,3,3,3,3],
[4,4,4,4],
[0,5,5,5,5],
[0,0,0,0,0,0,0,0,0,5,5,5,5],
[0,0,0,0,0,3,3],
[0,0,0,0,2,2,2,2,2],
[0,0,0,0,2,2,2,2],
[0,4,4,4,4],
[0,0,0,0,0,0,0,0,0,0,0,0,3,3,3,3],
[0,0,0,4,4,4,4],
[0,0,0,0,0,0,2,2,2,2],
[0,0,0,0,0,1,1,1,1],
[0,0,0,0,0,0,0,3,3,3,3],
[0,0,0,0,0,0,0,0,0,0,0,4,4,4,4],
[0,0,0,0,3,3,3,3,3],
[0,0,0,0,0,0,0,0,0,0,0,0,5,5,5,5],
[0,0,0,0,0,0,0,0,0,4,4,4,4],
[0,0,2,2,2,2],
[0,0,0,0,0,0,0,0,0,0,2,2,2,2],
[0,0,0,0,1,1,1,1],
[5,5,5,5],
[0,0,0,0,0,0,0,3,3,3,3,3],
[0,0,0,0,0,0,0,0,0,0,2,2,2,2],
[0,0,0,0,0,0,0,0,0,0,0,3,3,3,3],
[0,0,5,5,5,5],
[0,0,0,0,0,0,0,5,5,5,5,5],
[0,0,0,0,0,0,0,0,2,2,2,2],
[0,0,0,0,0,0,0,0,0,3,3,3,3],
[0,0,0,0,0,0,0,0,1,1,1,1],
[0,0,2,2,2,2],
[0,0,0,0,3,3,3,3],
[0,0,0,0,0,1,1,1,1,1],
[0,0,0,0,0,0,0,3,3,3,3],
[3,3,3,3],
[0,0,0,3,3,3,3],
[0,0,4,4,4,4],
[0,0,0,0,0,0,0,0,0,0,0,4,4,4,4],
[0,4,4],
[0,0,0,0,0,0,0,0,0,0,0,2,2,2,2],
[0,0,0,0,0,0,0,0,0,0,4,4,4,4],
[0,0,0,0,2,2,2,2],
[3,3,3,3],
[0,4,4,4,4],
[0,0,0,0,0,0,0,0,0,0,0,3,3,3,3],
[0,1,1,1,1,1],
[0,0,0,0,0,0,3,3,3,3],
[0,0,0,0,0,4,4,4,4],
[0,0,0,0,0,0,0,0,0,1,1,1,1],
[0,0,0,0,0,0,0,0,5,5,5,5],
[0,0,0,0,0,0,0,0,0,0,0,0,2,2,2,2],
[0,0,0,0,0,0,0,0,0,0,0,2,2,2,2],
[0,0,0,0,0,0,0,0,0,0,0,2,2,2,2],
[0,0,0,0,3,3,3,3],
[0,0,0,0,0,0,0,0,0,0,1,1,1,1],
[3,3,3,3],
[1,1,1,1],
[0,0,0,0,0,3,3,3,3],
[0,0,0,0,0,0,0,0,0,0,2,2,2,2],
[0,0,0,0,5,5,5,5],
[0,3,3,3,3],
[0,0,0,3,3,3,3,3],
[0,0,0,0,0,0,0,0,0,2,2,2,2],
[0,0,0,0,4,4,4,4],
[0,0,0,2,2,2,2],
[0,0,2,2,2,2],
[0,2,2,2,2,2],
[1,1,1,1],
[0,0,0,0,0,0,3,3,3,3],
[0,0,0,0,0,0,0,0,0,0,2,2,2,2],
[0,0,0,0,0,0,0,0,0,0,0,3,3,3,3],
[0,0,0,0,2,2,2,2],
[0,0,0,0,3,3,3,3],
[0,0,0,0,0,0,4,4,4,4],
[0,0,4,4,4,4],
[0,0,0,3,3,3,3],
[0,0,0,0,4,4,4,4],
[0,0,0,0,0,0,0,0,4,4,4,4],
[0,0,4,4,4,4],
[0,0,0,0,0,0,0,0,3,3,3,3],
[0,0,0,0,0,0,0,0,0,0,0,2,2,2,2,2],
[3,3,3,3],
[0,0,0,0,0,0,0,0,0,0,0,0,5,5,5,5],
[0,0,3,3,3,3],
[0,0,0,0,0,0,0,2,2,2,2],
[0,0,0,0,4,4,4,4],
[0,0,0,0,0,0,0,0,0,0,1,1,1,1],
[0,0,0,0,0,0,1,1,1,1],
[0,0,0,0,0,0,0,0,0,0,4,4,4,4],
[0,0,0,0,0,0,2,2,2,2],
[1,1,1,1],
[0,0,0,0,1,1,1,1],
[0,0,0,0,0,0,0,0,1,1,1,1],
[0,0,0,0,0,0,0,0,0,0,5,5,5,5],
[0,0,2,2,2,2,2],
[0,0,2,2,2,2],
[0,4,4,4,4],
[0,0,2,2,2,2],
[0,0,0,0,0,0,0,0,2,2,2,2],
[0,0,0,1,1,1,1],
[0,0,0,0,2,2,2,2]
]);

g_levels.push([
[0,0,0,0,0,0,0,0,0,0,0,2,2,2,2],
[0,0,1,1,1,1],
[0,0,0,0,0,2,2,2,2],
[0,0,0,0,0,0,0,0,0,0,0,2,2,2,2,2],
[0,0,0,0,0,2,2,2,2,2],
[0,0,4,4,4,4],
[0,0,0,5,5,5,5],
[0,0,0,0,0,0,5,5,5,5],
[0,0,0,0,0,0,0,0,3,3,3,3],
[0,0,0,0,0,0,0,0,2,2,2,2],
[0,3,3,3,3],
[1,1,1,1],
[0,0,0,0,0,2,2,2,2],
[0,0,0,0,0,0,5,5,5],
[0,0,0,0,0,0,0,0,0,0,0,0,4,4],
[0,0,0,0,0,0,1,1,1],
[0,0,0,0,0,0,0,0,0,0,4,4,4,4],
[2,2,2,2],
[0,0,0,0,0,2,2,2,2,2],
[0,0,0,0,0,0,2,2,2,2],
[0,0,0,0,0,0,0,0,0,0,0,3,3,3,3,3],
[0,0,0,0,0,5,5,5,5],
[4,4,4,4],
[0,0,0,0,0,0,5,5,5,5,5],
[0,0,0,0,0,3,3,3,3],
[0,0,0,0,0,0,0,1,1,1,1,1],
[0,0,0,0,0,0,1,1,1,1],
[0,0,0,0,0,0,0,0,4,4,4,4],
[0,0,0,0,0,0,0,0,3,3,3,3,3],
[0,0,4,4,4,4],
[2,2,2,2],
[0,0,0,0,0,0,0,0,0,0,0,3,3,3,3],
[0,0,0,0,0,0,0,0,0,0,1,1,1,1,1],
[0,0,0,0,0,0,0,2,2,2,2],
[0,0,0,0,0,0,0,0,0,0,0,2,2,2,2],
[0,0,0,0,0,0,0,0,0,0,0,2,2,2],
[0,2,2,2,2],
[0,0,0,5,5,5,5],
[0,0,0,0,0,0,0,0,0,0,0,5,5,5,5],
[0,0,0,0,0,0,0,0,0,0,4,4,4],
[5,5,5,5],
[0,0,0,0,2,2,2,2],
[0,0,0,4,4,4,4,4],
[0,0,0,0,0,2,2,2,2],
[0,0,0,0,0,0,0,0,1,1,1,1],
[0,0,0,0,0,0,0,0,0,2,2,2,2],
[0,0,0,0,0,0,0,0,0,0,0,0,3,3,3,3],
[0,0,2,2,2,2],
[0,0,0,0,4,4,4,4],
[0,0,0,0,0,0,0,0,0,0,0,3,3,3,3,3],
[0,0,0,4,4,4,4],
[0,0,0,0,0,0,0,0,1,1,1,1],
[0,0,0,0,0,0,0,3,3,3,3],
[0,0,0,0,0,0,0,0,0,2,2,2,2],
[0,0,0,2,2,2,2],
[0,0,0,0,0,0,0,0,0,0,0,2,2,2,2],
[0,0,4,4,4,4],
[0,0,0,0,0,0,0,0,0,0,0,0,3,3,3,3],
[0,0,0,0,2,2,2,2],
[0,0,0,2,2,2,2],
[0,0,0,0,0,1,1,1,1],
[0,0,2,2,2,2],
[0,0,0,0,0,0,1,1,1,1],
[0,0,0,0,0,0,0,3,3,3,3],
[0,0,0,0,0,0,0,0,0,0,4,4,4,4],
[0,0,0,0,0,0,0,0,0,3,3,3,3],
[3,3,3,3],
[0,0,0,0,0,0,0,0,4,4,4,4],
[0,0,0,0,0,0,0,0,0,2,2,2,2],
[0,0,0,0,0,0,0,2,2,2,2,2],
[0,2,2,2,2],
[0,0,0,0,0,2,2,2,2],
[0,3,3,3,3],
[0,0,0,0,0,0,0,0,0,1,1,1,1],
[0,0,0,0,0,0,0,0,4,4,4,4],
[0,0,0,0,0,0,0,0,4,4,4,4,4],
[0,0,4,4,4,4],
[0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1],
[0,0,0,0,0,0,2,2,2,2],
[0,0,0,0,0,3,3,3,3],
[0,0,0,0,5,5,5,5],
[0,0,0,0,0,0,0,0,0,0,4,4,4,4],
[0,4,4],
[0,0,0,0,0,0,0,0,0,4,4,4,4,4],
[0,0,0,0,0,0,0,2,2,2,2,2],
[0,0,0,0,0,2,2,2,2],
[0,0,0,0,0,0,0,0,0,0,2,2,2,2],
[0,0,0,5,5,5,5],
[0,0,0,0,0,0,0,5,5,5,5,5],
[0,0,0,0,0,0,0,0,0,0,0,3,3,3,3],
[0,0,0,0,3,3,3,3],
[0,0,0,0,0,0,4,4,4,4],
[0,0,0,0,0,0,0,5,5,5,5],
[0,0,2,2,2,2],
[0,0,0,0,0,0,5,5,5,5],
[0,0,0,0,0,0,0,0,0,0,5,5,5,5],
[0,3,3,3,3],
[0,0,1,1,1,1],
[0,0,0,0,0,0,0,0,0,4,4,4,4],
[0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1]
]);

