!function e(o,r,n){function t(i,s){if(!r[i]){if(!o[i]){var c="function"==typeof require&&require;if(!s&&c)return c(i,!0);if(f)return f(i,!0);var u=new Error("Cannot find module '"+i+"'");throw u.code="MODULE_NOT_FOUND",u}var p=r[i]={exports:{}};o[i][0].call(p.exports,function(e){var r=o[i][1][e];return t(r?r:e)},p,p.exports,e,o,r,n)}return r[i].exports}for(var f="function"==typeof require&&require,i=0;i<n.length;i++)t(n[i]);return t}({1:[function(e,o,r){var n,t,f;t=e("./scripts/sub.coffee"),f=e("./scripts/slave.coffee"),n=e("./scripts/wings/wings.coffee"),console.log(n),console.log("Yeah!")},{"./scripts/slave.coffee":3,"./scripts/sub.coffee":4,"./scripts/wings/wings.coffee":6}],2:[function(e,o,r){var n;n=e("./sub.coffee"),n=e("../entry.coffee"),console.log("reverser")},{"../entry.coffee":1,"./sub.coffee":4}],3:[function(e,o,r){var n;n=e("./reverser.coffee"),console.log("slave")},{"./reverser.coffee":2}],4:[function(e,o,r){var r,n;n=e("./slave.coffee"),console.log("this is sub!"),r={kingsName:"Cloud"}},{"./slave.coffee":3}],5:[function(e,o,r){var n;n={},n.Store=function(){function e(e){this.serverAddress=e}return e.prototype.insert=function(e){},e.prototype.update=function(e,o){},e.prototype.remove=function(e){},e.prototype.find=function(e){},e.prototype.findOne=function(e){},e.prototype.customFind=function(e,o){},e}(),o.exports=n},{}],6:[function(e,o,r){var n,t,f;f=e("./photonics.coffee"),t="undefined"==typeof window,n={isServer:t,isClient:!t},o.exports=n},{"./photonics.coffee":5}]},{},[1]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcHAvZW50cnkuY29mZmVlIiwiYnVuZGxlLmpzIiwiYXBwL3NjcmlwdHMvcmV2ZXJzZXIuY29mZmVlIiwiYXBwL3NjcmlwdHMvc2xhdmUuY29mZmVlIiwiYXBwL3NjcmlwdHMvc3ViLmNvZmZlZSIsImFwcC9zY3JpcHRzL3dpbmdzL3Bob3Rvbmljcy5jb2ZmZWUiLCJhcHAvc2NyaXB0cy93aW5ncy93aW5ncy5jb2ZmZWUiXSwibmFtZXMiOlsiZSIsInQiLCJuIiwiciIsInMiLCJvIiwidSIsImEiLCJyZXF1aXJlIiwiaSIsImYiLCJFcnJvciIsImNvZGUiLCJsIiwiZXhwb3J0cyIsImNhbGwiLCJsZW5ndGgiLDEsIm1vZHVsZSIsIldpbmdzIiwibWFpbiIsInNsYXZlIiwiY29uc29sZSIsImxvZyIsIi4vc2NyaXB0cy9zbGF2ZS5jb2ZmZWUiLCIuL3NjcmlwdHMvc3ViLmNvZmZlZSIsIi4vc2NyaXB0cy93aW5ncy93aW5ncy5jb2ZmZWUiLDIsInN1YiIsIi4uL2VudHJ5LmNvZmZlZSIsIi4vc3ViLmNvZmZlZSIsMywicmV2ZXJzZXIiLCIuL3JldmVyc2VyLmNvZmZlZSIsNCwia2luZ3NOYW1lIiwiLi9zbGF2ZS5jb2ZmZWUiLDUsIlBob3RvbmljcyIsIlN0b3JlIiwic2VydmVyQWRkcmVzcyIsInRoaXMiLCJwcm90b3R5cGUiLCJpbnNlcnQiLCJvcHRpb25zIiwidXBkYXRlIiwiaWQiLCJyZW1vdmUiLCJmaW5kIiwiZmluZE9uZSIsImN1c3RvbUZpbmQiLCJuYW1lIiw2LCJpc1NlcnZlciIsInBob3RvbmljcyIsIndpbmRvdyIsImlzQ2xpZW50IiwiLi9waG90b25pY3MuY29mZmVlIl0sIm1hcHBpbmdzIjoiQ0FBQSxRQUFBQSxHQUFBQyxFQUFBQyxFQUFBQyxHQUFBLFFBQUFDLEdBQUFDLEVBQUFDLEdBQUEsSUFBQUosRUFBQUcsR0FBQSxDQUFBLElBQUFKLEVBQUFJLEdBQUEsQ0FBQSxHQUFBRSxHQUFBLGtCQUFBQyxVQUFBQSxPQUFBLEtBQUFGLEdBQUFDLEVBQUEsTUFBQUEsR0FBQUYsR0FBQSxFQUFBLElBQUFJLEVBQUEsTUFBQUEsR0FBQUosR0FBQSxFQUFBLElBQUFLLEdBQUEsR0FBQUMsT0FBQSx1QkFBQU4sRUFBQSxJQUFBLE1BQUFLLEdBQUFFLEtBQUEsbUJBQUFGLEVBQUEsR0FBQUcsR0FBQVgsRUFBQUcsSUFBQVMsV0FBQWIsR0FBQUksR0FBQSxHQUFBVSxLQUFBRixFQUFBQyxRQUFBLFNBQUFkLEdBQUEsR0FBQUUsR0FBQUQsRUFBQUksR0FBQSxHQUFBTCxFQUFBLE9BQUFJLEdBQUFGLEVBQUFBLEVBQUFGLElBQUFhLEVBQUFBLEVBQUFDLFFBQUFkLEVBQUFDLEVBQUFDLEVBQUFDLEdBQUEsTUFBQUQsR0FBQUcsR0FBQVMsUUFBQSxJQUFBLEdBQUFMLEdBQUEsa0JBQUFELFVBQUFBLFFBQUFILEVBQUEsRUFBQUEsRUFBQUYsRUFBQWEsT0FBQVgsSUFBQUQsRUFBQUQsRUFBQUUsR0FBQSxPQUFBRCxLQUFBYSxHQUFBLFNBQUFULEVBQUFVLEVBQUFKLEdDQUEsR0FBQUssR0FBQUMsRUFBQUMsQ0FBQUQsR0FBT1osRUFBUSx3QkFDZmEsRUFBUWIsRUFBUSwwQkFDaEJXLEVBQVFYLEVBQVEsZ0NBRWhCYyxRQUFRQyxJQUFJSixHQUVaRyxRQUFRQyxJQUFJLFdDUVRDLHlCQUF5QixFQUFFQyx1QkFBdUIsRUFBRUMsK0JBQStCLElBQUlDLEdBQUcsU0FBU25CLEVBQVFVLEVBQU9KLEdDZHJILEdBQUFjLEVBQUFBLEdBQU1wQixFQUFRLGdCQUNkb0IsRUFBTXBCLEVBQVEsbUJBRWRjLFFBQVFDLElBQUksY0RxQlRNLGtCQUFrQixFQUFFQyxlQUFlLElBQUlDLEdBQUcsU0FBU3ZCLEVBQVFVLEVBQU9KLEdFeEJyRSxHQUFBa0IsRUFBQUEsR0FBV3hCLEVBQVEscUJBRW5CYyxRQUFRQyxJQUFJLFdGOEJUVSxvQkFBb0IsSUFBSUMsR0FBRyxTQUFTMUIsRUFBUVUsRUFBT0osR0doQ3RELEdBQUFBLEdBQUFPLENBQUFBLEdBQVFiLEVBQVEsa0JBRWhCYyxRQUFRQyxJQUFJLGdCQUVaVCxHQUNFcUIsVUFBVyxXSHVDVkMsaUJBQWlCLElBQUlDLEdBQUcsU0FBUzdCLEVBQVFVLEVBQU9KLEdJNUNuRCxHQUFBd0IsRUFBQUEsTUFFTUEsRUFBVUMsTUFBQSxXQUNELFFBQUFBLEdBQUNDLEdBQUFDLEtBQUNELGNBQURBLEVKK0RkLE1BWkFELEdBQU1HLFVJbEROQyxPQUFRLFNBQUNDLEtKb0RUTCxFQUFNRyxVSW5ETkcsT0FBUSxTQUFDQyxFQUFJRixLSnFEYkwsRUFBTUcsVUlwRE5LLE9BQVEsU0FBQ0QsS0pzRFRQLEVBQU1HLFVJckROTSxLQUFNLFNBQUNKLEtKdURQTCxFQUFNRyxVSXRETk8sUUFBUyxTQUFDTCxLSndEVkwsRUFBTUcsVUl2RE5RLFdBQVksU0FBQ0MsRUFBTVAsS0p5RFpMLEtJdkRUckIsRUFBT0osUUFBVXdCLE9KOERYYyxHQUFHLFNBQVM1QyxFQUFRVSxFQUFPSixHS3pFakMsR0FBQUssR0FBQWtDLEVBQUFDLENBQUFBLEdBQVk5QyxFQUFRLHNCQUNwQjZDLEVBQTZCLG1CQUFWRSxRQUVuQnBDLEdBQ0VrQyxTQUFVQSxFQUNWRyxVQUFXSCxHQUdibkMsRUFBT0osUUFBVUssSUxnRmRzQyxxQkFBcUIsU0FBUyIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIm1haW4gPSByZXF1aXJlKCcuL3NjcmlwdHMvc3ViLmNvZmZlZScpXHJcbnNsYXZlID0gcmVxdWlyZSgnLi9zY3JpcHRzL3NsYXZlLmNvZmZlZScpXHJcbldpbmdzID0gcmVxdWlyZSgnLi9zY3JpcHRzL3dpbmdzL3dpbmdzLmNvZmZlZScpXHJcblxyXG5jb25zb2xlLmxvZyhXaW5ncyk7XHJcblxyXG5jb25zb2xlLmxvZygnWWVhaCEnKTsiLG51bGwsInN1YiA9IHJlcXVpcmUgJy4vc3ViLmNvZmZlZSc7XHJcbnN1YiA9IHJlcXVpcmUgJy4uL2VudHJ5LmNvZmZlZSc7XHJcblxyXG5jb25zb2xlLmxvZyAncmV2ZXJzZXInIiwicmV2ZXJzZXIgPSByZXF1aXJlICcuL3JldmVyc2VyLmNvZmZlZSdcclxuXHJcbmNvbnNvbGUubG9nICdzbGF2ZSciLCJzbGF2ZSA9IHJlcXVpcmUgJy4vc2xhdmUuY29mZmVlJ1xyXG5cclxuY29uc29sZS5sb2cgJ3RoaXMgaXMgc3ViISdcclxuXHJcbmV4cG9ydHMgPSB7XHJcbiAga2luZ3NOYW1lOiBcIkNsb3VkXCJcclxufSIsIlBob3RvbmljcyA9IHt9XHJcblxyXG5jbGFzcyBQaG90b25pY3MuU3RvcmVcclxuICBjb25zdHJ1Y3RvcjogKEBzZXJ2ZXJBZGRyZXNzKSAtPlxyXG4gIGluc2VydDogKG9wdGlvbnMpIC0+XHJcbiAgdXBkYXRlOiAoaWQsIG9wdGlvbnMpIC0+XHJcbiAgcmVtb3ZlOiAoaWQpIC0+XHJcbiAgZmluZDogKG9wdGlvbnMpIC0+XHJcbiAgZmluZE9uZTogKG9wdGlvbnMpIC0+XHJcbiAgY3VzdG9tRmluZDogKG5hbWUsIG9wdGlvbnMpIC0+XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IFBob3Rvbmljc1xyXG4iLCJwaG90b25pY3MgPSByZXF1aXJlKCcuL3Bob3Rvbmljcy5jb2ZmZWUnKVxyXG5pc1NlcnZlciAgPSB0eXBlb2Ygd2luZG93IGlzICd1bmRlZmluZWQnXHJcblxyXG5XaW5ncyA9IHtcclxuICBpc1NlcnZlcjogaXNTZXJ2ZXJcclxuICBpc0NsaWVudDogIWlzU2VydmVyXHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gV2luZ3MiXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
