//test the function livePoint
//livePoint returns the number of the living cells around a certain cell
module('livePoint test');
QUnit.test( "Map 1\n 0 0 0\n 0 0 0\n 0 0 0", function() {
	TableSize = 3;
	map = [[false, false, false], [false, false, false], [false, false, false]];
	ok(livePoint(1, 1) == 0, "Point(1, 1) passed!");
	ok(livePoint(0, 0) == 0, "Point(0, 0) passed!");
	ok(livePoint(2, 0) == 0, "Point(2, 0) passed!");
	ok(livePoint(0, 2) == 0, "Point(0, 2) passed!");
	ok(livePoint(2, 2) == 0, "Point(2, 2) passed!");
});	
QUnit.test( "Map 2\n 1 0 0\n 0 0 0\n 0 0 0", function() {
	TableSize = 3;
	map = [[true, false, false], [false, false, false], [false, false, false]];
	ok(livePoint(1, 1) == 1, "Point(1, 1) passed!");
	ok(livePoint(0, 0) == 0, "Point(0, 0) passed!");
	ok(livePoint(2, 0) == 1, "Point(2, 0) passed!");
	ok(livePoint(0, 2) == 1, "Point(0, 2) passed!");
	ok(livePoint(2, 2) == 1, "Point(2, 2) passed!");
});	
QUnit.test( "Map 3\n 1 1 0\n 0 0 0\n 0 0 0", function() {
	TableSize = 3;
	map = [[true, true, false], [false, false, false], [false, false, false]];
	ok(livePoint(1, 1) == 2, "Point(1, 1) passed!");
	ok(livePoint(0, 0) == 1, "Point(0, 0) passed!");
	ok(livePoint(2, 0) == 2, "Point(2, 0) passed!");
	ok(livePoint(0, 2) == 2, "Point(0, 2) passed!");
	ok(livePoint(2, 2) == 2, "Point(2, 2) passed!");
});	
QUnit.test( "Map 4\n 1 1 1\n 0 0 0\n 0 0 0", function() {
	TableSize = 3;
	map = [[true, true, true], [false, false, false], [false, false, false]];
	ok(livePoint(1, 1) == 3, "Point(1, 1) passed!");
	ok(livePoint(0, 0) == 2, "Point(0, 0) passed!");
	ok(livePoint(2, 0) == 3, "Point(2, 0) passed!");
	ok(livePoint(0, 2) == 2, "Point(0, 2) passed!");
	ok(livePoint(2, 2) == 3, "Point(2, 2) passed!");
});	
QUnit.test( "Map 5\n 1 1 1\n 0 0 1\n 0 0 0", function() {
	TableSize = 3;
	map = [[true, true, true], [false, false, true], [false, false, false]];
	ok(livePoint(1, 1) == 4, "Point(1, 1) passed!");
	ok(livePoint(0, 0) == 3, "Point(0, 0) passed!");
	ok(livePoint(2, 0) == 4, "Point(2, 0) passed!");
	ok(livePoint(0, 2) == 3, "Point(0, 2) passed!");
	ok(livePoint(2, 2) == 4, "Point(2, 2) passed!");
});		
QUnit.test( "Map 6\n 1 1 1\n 0 0 1\n 0 0 1", function() {
	TableSize = 3;
	map = [[true, true, true], [false, false, true], [false, false, true]];
	ok(livePoint(1, 1) == 5, "Point(1, 1) passed!");
	ok(livePoint(0, 0) == 4, "Point(0, 0) passed!");
	ok(livePoint(2, 0) == 5, "Point(2, 0) passed!");
	ok(livePoint(0, 2) == 4, "Point(0, 2) passed!");
	ok(livePoint(2, 2) == 4, "Point(2, 2) passed!");
});	
QUnit.test( "Map 7\n 1 1 1\n 0 0 1\n 0 1 1", function() {
	TableSize = 3;
	map = [[true, true, true], [false, false, true], [false, true, true]];
	ok(livePoint(1, 1) == 6, "Point(1, 1) passed!");
	ok(livePoint(0, 0) == 5, "Point(0, 0) passed!");
	ok(livePoint(2, 0) == 6, "Point(2, 0) passed!");
	ok(livePoint(0, 2) == 5, "Point(0, 2) passed!");
	ok(livePoint(2, 2) == 5, "Point(2, 2) passed!");
});
QUnit.test( "Map 8\n 1 1 1\n 0 0 1\n 1 1 1", function() {
	TableSize = 3;
	map = [[true, true, true], [false, false, true], [true, true, true]];
	ok(livePoint(1, 1) == 7, "Point(1, 1) passed!");
	ok(livePoint(0, 0) == 6, "Point(0, 0) passed!");
	ok(livePoint(2, 0) == 6, "Point(2, 0) passed!");
	ok(livePoint(0, 2) == 6, "Point(0, 2) passed!");
	ok(livePoint(2, 2) == 6, "Point(2, 2) passed!");
});
QUnit.test( "Map 9\n 1 1 1\n 1 0 1\n 1 1 1", function() {
	TableSize = 3;
	map = [[true, true, true], [true, false, true], [true, true, true]];
	ok(livePoint(1, 1) == 8, "Point(1, 1) passed!");
	ok(livePoint(0, 0) == 7, "Point(0, 0) passed!");
	ok(livePoint(2, 0) == 7, "Point(2, 0) passed!");
	ok(livePoint(0, 2) == 7, "Point(0, 2) passed!");
	ok(livePoint(2, 2) == 7, "Point(2, 2) passed!");
});


//test the function createNewMap
//createNewMap outputs the value of each cell in the next period
module('newMap test');
TableSize = 3;
createMap();	//initialize the 2d arraies map and newMap
QUnit.test( "Map 1\n 0 0 0\n 0 0 0\n 0 0 0", function() {
	TableSize = 3;
	map = [[false, false, false], [false, false, false], [false, false, false]];
	createNewMap();
	ok(map[1][1] == false, "Point(1, 1) passed!");
	ok(map[0][0] == false, "Point(0, 0) passed!");
	ok(map[2][0] == false, "Point(2, 0) passed!");
	ok(map[0][2] == false, "Point(0, 2) passed!");
	ok(map[2][2] == false, "Point(2, 2) passed!");
});	
QUnit.test( "Map 2\n 1 0 0\n 0 0 0\n 0 0 0", function() {
	TableSize = 3;
	map = [[true, false, false], [false, false, false], [false, false, false]];
	createNewMap();
	ok(map[1][1] == false, "Point(1, 1) passed!");
	ok(map[0][0] == false, "Point(0, 0) passed!");
	ok(map[2][0] == false, "Point(2, 0) passed!");
	ok(map[0][2] == false, "Point(0, 2) passed!");
	ok(map[2][2] == false, "Point(2, 2) passed!");
});	
QUnit.test( "Map 3\n 1 1 0\n 0 0 0\n 0 0 0", function() {
	TableSize = 3;
	map = [[true, true, false], [false, false, false], [false, false, false]];
	createNewMap();
	ok(map[1][1] == false, "Point(1, 1) passed!");
	ok(map[0][0] == false, "Point(0, 0) passed!");
	ok(map[2][0] == false, "Point(2, 0) passed!");
	ok(map[0][2] == false, "Point(0, 2) passed!");
	ok(map[2][2] == false, "Point(2, 2) passed!");
});	
QUnit.test( "Map 4\n 1 1 1\n 0 0 0\n 0 0 0", function() {
	TableSize = 3;
	map = [[true, true, true], [false, false, false], [false, false, false]];
	createNewMap();
	ok(map[1][1] == true, "Point(1, 1) passed!");
	ok(map[0][0] == true, "Point(0, 0) passed!");
	ok(map[2][0] == true, "Point(2, 0) passed!");
	ok(map[0][2] == true, "Point(0, 2) passed!");
	ok(map[2][2] == true, "Point(2, 2) passed!");
});	
QUnit.test( "Map 5\n 1 1 1\n 0 0 1\n 0 0 0", function() {
	TableSize = 3;
	map = [[true, true, true], [false, false, true], [false, false, false]];
	createNewMap();
	ok(map[1][1] == false, "Point(1, 1) passed!");
	ok(map[0][0] == true, "Point(0, 0) passed!");
	ok(map[2][0] == false, "Point(2, 0) passed!");
	ok(map[0][2] == true, "Point(0, 2) passed!");
	ok(map[2][2] == false, "Point(2, 2) passed!");
});		
QUnit.test( "Map 6\n 1 1 1\n 0 0 1\n 0 0 1", function() {
	TableSize = 3;
	map = [[true, true, true], [false, false, true], [false, false, true]];
	createNewMap();
	ok(map[1][1] == false, "Point(1, 1) passed!");
	ok(map[0][0] == false, "Point(0, 0) passed!");
	ok(map[2][0] == false, "Point(2, 0) passed!");
	ok(map[0][2] == false, "Point(0, 2) passed!");
	ok(map[2][2] == false, "Point(2, 2) passed!");
});	
QUnit.test( "Map 7\n 1 1 1\n 0 0 1\n 0 1 1", function() {
	TableSize = 3;
	map = [[true, true, true], [false, false, true], [false, true, true]];
	createNewMap();
	ok(map[1][1] == false, "Point(1, 1) passed!");
	ok(map[0][0] == false, "Point(0, 0) passed!");
	ok(map[2][0] == false, "Point(2, 0) passed!");
	ok(map[0][2] == false, "Point(0, 2) passed!");
	ok(map[2][2] == false, "Point(2, 2) passed!");
});
QUnit.test( "Map 8\n 1 1 1\n 0 0 1\n 1 1 1", function() {
	TableSize = 3;
	map = [[true, true, true], [false, false, true], [true, true, true]];
	createNewMap();
	ok(map[1][1] == false, "Point(1, 1) passed!");
	ok(map[0][0] == false, "Point(0, 0) passed!");
	ok(map[2][0] == false, "Point(2, 0) passed!");
	ok(map[0][2] == false, "Point(0, 2) passed!");
	ok(map[2][2] == false, "Point(2, 2) passed!");
});
QUnit.test( "Map 9\n 1 1 1\n 1 0 1\n 1 1 1", function() {
	TableSize = 3;
	map = [[true, true, true], [false, false, true], [true, true, true]];
	createNewMap();
	ok(map[1][1] == false, "Point(1, 1) passed!");
	ok(map[0][0] == false, "Point(0, 0) passed!");
	ok(map[2][0] == false, "Point(2, 0) passed!");
	ok(map[0][2] == false, "Point(0, 2) passed!");
	ok(map[2][2] == false, "Point(2, 2) passed!");
});
QUnit.test( "Map 10\n 0 0 0\n 0 1 0\n 0 0 0", function() {
	TableSize = 3;
	map = [[false, false, false], [false, true, false], [false, false, false]];
	createNewMap();
	ok(map[1][1] == false, "Point(1, 1) passed!");
	ok(map[0][0] == false, "Point(0, 0) passed!");
	ok(map[2][0] == false, "Point(2, 0) passed!");
	ok(map[0][2] == false, "Point(0, 2) passed!");
	ok(map[2][2] == false, "Point(2, 2) passed!");
});	
QUnit.test( "Map 11\n 1 0 0\n 0 1 0\n 0 0 0", function() {
	TableSize = 3;
	map = [[true, false, false], [false, true, false], [false, false, false]];
	createNewMap();
	ok(map[1][1] == false, "Point(1, 1) passed!");
	ok(map[0][0] == false, "Point(0, 0) passed!");
	ok(map[2][0] == false, "Point(2, 0) passed!");
	ok(map[0][2] == false, "Point(0, 2) passed!");
	ok(map[2][2] == false, "Point(2, 2) passed!");
});	
QUnit.test( "Map 12\n 1 1 0\n 0 1 0\n 0 0 0", function() {
	TableSize = 3;
	map = [[true, true, false], [false, true, false], [false, false, false]];
	createNewMap();
	ok(map[1][1] == true, "Point(1, 1) passed!");
	ok(map[0][0] == true, "Point(0, 0) passed!");
	ok(map[2][0] == true, "Point(2, 0) passed!");
	ok(map[0][2] == true, "Point(0, 2) passed!");
	ok(map[2][2] == true, "Point(2, 2) passed!");
});	
QUnit.test( "Map 13\n 1 1 1\n 0 1 0\n 0 0 0", function() {
	TableSize = 3;
	map = [[true, true, true], [false, true, false], [false, false, false]];
	createNewMap();
	ok(map[1][1] == true, "Point(1, 1) passed!");
	ok(map[0][0] == true, "Point(0, 0) passed!");
	ok(map[2][0] == false, "Point(2, 0) passed!");
	ok(map[0][2] == true, "Point(0, 2) passed!");
	ok(map[2][2] == false, "Point(2, 2) passed!");
});	
QUnit.test( "Map 14\n 1 1 1\n 0 1 1\n 0 0 0", function() {
	TableSize = 3;
	map = [[true, true, true], [false, true, true], [false, false, false]];
	createNewMap();
	ok(map[1][1] == false, "Point(1, 1) passed!");
	ok(map[0][0] == false, "Point(0, 0) passed!");
	ok(map[2][0] == false, "Point(2, 0) passed!");
	ok(map[0][2] == false, "Point(0, 2) passed!");
	ok(map[2][2] == false, "Point(2, 2) passed!");
});		
QUnit.test( "Map 15\n 1 1 1\n 0 1 1\n 0 0 1", function() {
	TableSize = 3;
	map = [[true, true, true], [false, true, true], [false, false, true]];
	createNewMap();
	ok(map[1][1] == false, "Point(1, 1) passed!");
	ok(map[0][0] == false, "Point(0, 0) passed!");
	ok(map[2][0] == false, "Point(2, 0) passed!");
	ok(map[0][2] == false, "Point(0, 2) passed!");
	ok(map[2][2] == false, "Point(2, 2) passed!");
});	
QUnit.test( "Map 16\n 1 1 1\n 0 1 1\n 0 1 1", function() {
	TableSize = 3;
	map = [[true, true, true], [false, true, true], [false, true, true]];
	createNewMap();
	ok(map[1][1] == false, "Point(1, 1) passed!");
	ok(map[0][0] == false, "Point(0, 0) passed!");
	ok(map[2][0] == false, "Point(2, 0) passed!");
	ok(map[0][2] == false, "Point(0, 2) passed!");
	ok(map[2][2] == false, "Point(2, 2) passed!");
});
QUnit.test( "Map 17\n 1 1 1\n 0 0 1\n 1 1 1", function() {
	TableSize = 3;
	map = [[true, true, true], [false, true, true], [true, true, true]];
	createNewMap();
	ok(map[1][1] == false, "Point(1, 1) passed!");
	ok(map[0][0] == false, "Point(0, 0) passed!");
	ok(map[2][0] == false, "Point(2, 0) passed!");
	ok(map[0][2] == false, "Point(0, 2) passed!");
	ok(map[2][2] == false, "Point(2, 2) passed!");
});
QUnit.test( "Map 18\n 1 1 1\n 1 1 1\n 1 1 1", function() {
	TableSize = 3;
	map = [[true, true, true], [false, true, true], [true, true, true]];
	createNewMap();
	ok(map[1][1] == false, "Point(1, 1) passed!");
	ok(map[0][0] == false, "Point(0, 0) passed!");
	ok(map[2][0] == false, "Point(2, 0) passed!");
	ok(map[0][2] == false, "Point(0, 2) passed!");
	ok(map[2][2] == false, "Point(2, 2) passed!");
});
