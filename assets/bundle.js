!function e(o,n,r){function t(i,s){if(!n[i]){if(!o[i]){var c="function"==typeof require&&require;if(!s&&c)return c(i,!0);if(f)return f(i,!0);var u=new Error("Cannot find module '"+i+"'");throw u.code="MODULE_NOT_FOUND",u}var p=n[i]={exports:{}};o[i][0].call(p.exports,function(e){var n=o[i][1][e];return t(n?n:e)},p,p.exports,e,o,n,r)}return n[i].exports}for(var f="function"==typeof require&&require,i=0;i<r.length;i++)t(r[i]);return t}({1:[function(e,o,n){var r,t,f,i;r=e("./scripts/wings/wings.coffee"),t=e("./scripts/sub.coffee"),i=e("./scripts/slave.coffee"),f=e("../plugins/photonics/main.coffee"),r.isClient&&(window.Photonics=f),console.log(r,f)},{"../plugins/photonics/main.coffee":6,"./scripts/slave.coffee":3,"./scripts/sub.coffee":4,"./scripts/wings/wings.coffee":5}],2:[function(e,o,n){var r;r=e("./sub.coffee"),r=e("../entry.coffee"),console.log("reverser")},{"../entry.coffee":1,"./sub.coffee":4}],3:[function(e,o,n){var r;r=e("./reverser.coffee"),console.log("slave")},{"./reverser.coffee":2}],4:[function(e,o,n){var n,r;r=e("./slave.coffee"),console.log("this is sub!"),n={kingsName:"Cloud"}},{"./slave.coffee":3}],5:[function(e,o,n){var r,t;t="undefined"==typeof window,r={isServer:t,isClient:!t},o.exports=r},{}],6:[function(e,o,n){var r;r={},r.Store=function(){function e(e){this.serverAddress=e}return e.prototype.insert=function(e){},e.prototype.update=function(e,o){},e.prototype.remove=function(e){},e.prototype.find=function(e){},e.prototype.findOne=function(e){},e.prototype.customFind=function(e,o){},e}(),o.exports=r},{}]},{},[1]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcHAvZW50cnkuY29mZmVlIiwiYnVuZGxlLmpzIiwiYXBwL3NjcmlwdHMvcmV2ZXJzZXIuY29mZmVlIiwiYXBwL3NjcmlwdHMvc2xhdmUuY29mZmVlIiwiYXBwL3NjcmlwdHMvc3ViLmNvZmZlZSIsImFwcC9zY3JpcHRzL3dpbmdzL3dpbmdzLmNvZmZlZSIsInBsdWdpbnMvcGhvdG9uaWNzL21haW4uY29mZmVlIl0sIm5hbWVzIjpbImUiLCJ0IiwibiIsInIiLCJzIiwibyIsInUiLCJhIiwicmVxdWlyZSIsImkiLCJmIiwiRXJyb3IiLCJjb2RlIiwibCIsImV4cG9ydHMiLCJjYWxsIiwibGVuZ3RoIiwxLCJtb2R1bGUiLCJXaW5ncyIsIm1haW4iLCJwaG90b25pY3MiLCJzbGF2ZSIsImlzQ2xpZW50Iiwid2luZG93IiwiUGhvdG9uaWNzIiwiY29uc29sZSIsImxvZyIsIi4uL3BsdWdpbnMvcGhvdG9uaWNzL21haW4uY29mZmVlIiwiLi9zY3JpcHRzL3NsYXZlLmNvZmZlZSIsIi4vc2NyaXB0cy9zdWIuY29mZmVlIiwiLi9zY3JpcHRzL3dpbmdzL3dpbmdzLmNvZmZlZSIsMiwic3ViIiwiLi4vZW50cnkuY29mZmVlIiwiLi9zdWIuY29mZmVlIiwzLCJyZXZlcnNlciIsIi4vcmV2ZXJzZXIuY29mZmVlIiw0LCJraW5nc05hbWUiLCIuL3NsYXZlLmNvZmZlZSIsNSwiaXNTZXJ2ZXIiLDYsIlN0b3JlIiwic2VydmVyQWRkcmVzcyIsInRoaXMiLCJwcm90b3R5cGUiLCJpbnNlcnQiLCJvcHRpb25zIiwidXBkYXRlIiwiaWQiLCJyZW1vdmUiLCJmaW5kIiwiZmluZE9uZSIsImN1c3RvbUZpbmQiLCJuYW1lIl0sIm1hcHBpbmdzIjoiQ0FBQSxRQUFBQSxHQUFBQyxFQUFBQyxFQUFBQyxHQUFBLFFBQUFDLEdBQUFDLEVBQUFDLEdBQUEsSUFBQUosRUFBQUcsR0FBQSxDQUFBLElBQUFKLEVBQUFJLEdBQUEsQ0FBQSxHQUFBRSxHQUFBLGtCQUFBQyxVQUFBQSxPQUFBLEtBQUFGLEdBQUFDLEVBQUEsTUFBQUEsR0FBQUYsR0FBQSxFQUFBLElBQUFJLEVBQUEsTUFBQUEsR0FBQUosR0FBQSxFQUFBLElBQUFLLEdBQUEsR0FBQUMsT0FBQSx1QkFBQU4sRUFBQSxJQUFBLE1BQUFLLEdBQUFFLEtBQUEsbUJBQUFGLEVBQUEsR0FBQUcsR0FBQVgsRUFBQUcsSUFBQVMsV0FBQWIsR0FBQUksR0FBQSxHQUFBVSxLQUFBRixFQUFBQyxRQUFBLFNBQUFkLEdBQUEsR0FBQUUsR0FBQUQsRUFBQUksR0FBQSxHQUFBTCxFQUFBLE9BQUFJLEdBQUFGLEVBQUFBLEVBQUFGLElBQUFhLEVBQUFBLEVBQUFDLFFBQUFkLEVBQUFDLEVBQUFDLEVBQUFDLEdBQUEsTUFBQUQsR0FBQUcsR0FBQVMsUUFBQSxJQUFBLEdBQUFMLEdBQUEsa0JBQUFELFVBQUFBLFFBQUFILEVBQUEsRUFBQUEsRUFBQUYsRUFBQWEsT0FBQVgsSUFBQUQsRUFBQUQsRUFBQUUsR0FBQSxPQUFBRCxLQUFBYSxHQUFBLFNBQUFULEVBQUFVLEVBQUFKLEdDQUEsR0FBQUssR0FBQUMsRUFBQUMsRUFBQUMsQ0FBQUgsR0FBUVgsRUFBUSxnQ0FDaEJZLEVBQVFaLEVBQVEsd0JBQ2hCYyxFQUFRZCxFQUFRLDBCQUNoQmEsRUFBWWIsRUFBUSxvQ0FFWVcsRUFBTUksV0FBdENDLE9BQU9DLFVBQVlKLEdBRW5CSyxRQUFRQyxJQUFJUixFQUFPRSxLQ1doQk8sbUNBQW1DLEVBQUVDLHlCQUF5QixFQUFFQyx1QkFBdUIsRUFBRUMsK0JBQStCLElBQUlDLEdBQUcsU0FBU3hCLEVBQVFVLEVBQU9KLEdDbEIxSixHQUFBbUIsRUFBQUEsR0FBTXpCLEVBQVEsZ0JBQ2R5QixFQUFNekIsRUFBUSxtQkFFZGtCLFFBQVFDLElBQUksY0R5QlRPLGtCQUFrQixFQUFFQyxlQUFlLElBQUlDLEdBQUcsU0FBUzVCLEVBQVFVLEVBQU9KLEdFNUJyRSxHQUFBdUIsRUFBQUEsR0FBVzdCLEVBQVEscUJBRW5Ca0IsUUFBUUMsSUFBSSxXRmtDVFcsb0JBQW9CLElBQUlDLEdBQUcsU0FBUy9CLEVBQVFVLEVBQU9KLEdHcEN0RCxHQUFBQSxHQUFBUSxDQUFBQSxHQUFRZCxFQUFRLGtCQUVoQmtCLFFBQVFDLElBQUksZ0JBRVpiLEdBQ0UwQixVQUFXLFdIMkNWQyxpQkFBaUIsSUFBSUMsR0FBRyxTQUFTbEMsRUFBUVUsRUFBT0osR0loRG5ELEdBQUFLLEdBQUF3QixDQUFBQSxHQUE2QixtQkFBVm5CLFFBRW5CTCxHQUNFd0IsU0FBVUEsRUFDVnBCLFVBQVdvQixHQUViekIsRUFBT0osUUFBVUssT0p1RFh5QixHQUFHLFNBQVNwQyxFQUFRVSxFQUFPSixHSzdEakMsR0FBQVcsRUFBQUEsTUFFTUEsRUFBVW9CLE1BQUEsV0FDRCxRQUFBQSxHQUFDQyxHQUFBQyxLQUFDRCxjQUFEQSxFTGdGZCxNQVpBRCxHQUFNRyxVS25FTkMsT0FBUSxTQUFDQyxLTHFFVEwsRUFBTUcsVUtwRU5HLE9BQVEsU0FBQ0MsRUFBSUYsS0xzRWJMLEVBQU1HLFVLckVOSyxPQUFRLFNBQUNELEtMdUVUUCxFQUFNRyxVS3RFTk0sS0FBTSxTQUFDSixLTHdFUEwsRUFBTUcsVUt2RU5PLFFBQVMsU0FBQ0wsS0x5RVZMLEVBQU1HLFVLeEVOUSxXQUFZLFNBQUNDLEVBQU1QLEtMMEVaTCxLS3hFVDNCLEVBQU9KLFFBQVVXLFlMK0VOIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiV2luZ3MgPSByZXF1aXJlKCcuL3NjcmlwdHMvd2luZ3Mvd2luZ3MuY29mZmVlJylcclxubWFpbiAgPSByZXF1aXJlKCcuL3NjcmlwdHMvc3ViLmNvZmZlZScpXHJcbnNsYXZlID0gcmVxdWlyZSgnLi9zY3JpcHRzL3NsYXZlLmNvZmZlZScpXHJcbnBob3RvbmljcyA9IHJlcXVpcmUoJy4uL3BsdWdpbnMvcGhvdG9uaWNzL21haW4uY29mZmVlJylcclxuXHJcbndpbmRvdy5QaG90b25pY3MgPSBwaG90b25pY3MgaWYgV2luZ3MuaXNDbGllbnRcclxuXHJcbmNvbnNvbGUubG9nKFdpbmdzLCBwaG90b25pY3MpIixudWxsLCJzdWIgPSByZXF1aXJlICcuL3N1Yi5jb2ZmZWUnO1xyXG5zdWIgPSByZXF1aXJlICcuLi9lbnRyeS5jb2ZmZWUnO1xyXG5cclxuY29uc29sZS5sb2cgJ3JldmVyc2VyJyIsInJldmVyc2VyID0gcmVxdWlyZSAnLi9yZXZlcnNlci5jb2ZmZWUnXHJcblxyXG5jb25zb2xlLmxvZyAnc2xhdmUnIiwic2xhdmUgPSByZXF1aXJlICcuL3NsYXZlLmNvZmZlZSdcclxuXHJcbmNvbnNvbGUubG9nICd0aGlzIGlzIHN1YiEnXHJcblxyXG5leHBvcnRzID0ge1xyXG4gIGtpbmdzTmFtZTogXCJDbG91ZFwiXHJcbn0iLCJpc1NlcnZlciAgPSB0eXBlb2Ygd2luZG93IGlzICd1bmRlZmluZWQnXHJcblxyXG5XaW5ncyA9XHJcbiAgaXNTZXJ2ZXI6IGlzU2VydmVyXHJcbiAgaXNDbGllbnQ6ICFpc1NlcnZlclxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBXaW5ncyIsIlBob3RvbmljcyA9IHt9XHJcblxyXG5jbGFzcyBQaG90b25pY3MuU3RvcmVcclxuICBjb25zdHJ1Y3RvcjogKEBzZXJ2ZXJBZGRyZXNzKSAtPlxyXG4gIGluc2VydDogKG9wdGlvbnMpIC0+XHJcbiAgdXBkYXRlOiAoaWQsIG9wdGlvbnMpIC0+XHJcbiAgcmVtb3ZlOiAoaWQpIC0+XHJcbiAgZmluZDogKG9wdGlvbnMpIC0+XHJcbiAgZmluZE9uZTogKG9wdGlvbnMpIC0+XHJcbiAgY3VzdG9tRmluZDogKG5hbWUsIG9wdGlvbnMpIC0+XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IFBob3RvbmljcyJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
