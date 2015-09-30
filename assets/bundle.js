!function e(r, o, f) {
  function n(c, s) {
    if (!o[c]) {
      if (!r[c]) {
        var u = "function" == typeof require && require;
        if (!s && u)return u(c, !0);
        if (t)return t(c, !0);
        var i = new Error("Cannot find module '" + c + "'");
        throw i.code = "MODULE_NOT_FOUND", i
      }
      var a = o[c] = {exports: {}};
      r[c][0].call(a.exports, function (e) {
        var o = r[c][1][e];
        return n(o ? o : e)
      }, a, a.exports, e, r, o, f)
    }
    return o[c].exports
  }

  for (var t = "function" == typeof require && require, c = 0; c < f.length; c++)n(f[c]);
  return n
}({
  1: [function (e, r, o) {
    var f;
    f = e("./scripts/sub.coffee"), console.log("Yeah!")
  }, {"./scripts/sub.coffee": 4}], 2: [function (e, r, o) {
    var f;
    f = e("./sub.coffee"), f = e("../entry.coffee"), console.log("reverser")
  }, {"../entry.coffee": 1, "./sub.coffee": 4}], 3: [function (e, r, o) {
    var f;
    f = e("./reverser.coffee"), console.log("slave")
  }, {"./reverser.coffee": 2}], 4: [function (e, r, o) {
    var o, f;
    f = e("./slave.coffee"), console.log("this is sub!"), o = {kingsName: "Cloud"}
  }, {"./slave.coffee": 3}]
}, {}, [1]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcHAvZW50cnkuY29mZmVlIiwiYnVuZGxlLmpzIiwiYXBwL3NjcmlwdHMvcmV2ZXJzZXIuY29mZmVlIiwiYXBwL3NjcmlwdHMvc2xhdmUuY29mZmVlIiwiYXBwL3NjcmlwdHMvc3ViLmNvZmZlZSJdLCJuYW1lcyI6WyJlIiwidCIsIm4iLCJyIiwicyIsIm8iLCJ1IiwiYSIsInJlcXVpcmUiLCJpIiwiZiIsIkVycm9yIiwiY29kZSIsImwiLCJleHBvcnRzIiwiY2FsbCIsImxlbmd0aCIsMSwibW9kdWxlIiwibWFpbiIsImNvbnNvbGUiLCJsb2ciLCIuL3NjcmlwdHMvc3ViLmNvZmZlZSIsMiwic3ViIiwiLi4vZW50cnkuY29mZmVlIiwiLi9zdWIuY29mZmVlIiwzLCJyZXZlcnNlciIsIi4vcmV2ZXJzZXIuY29mZmVlIiw0LCJzbGF2ZSIsImtpbmdzTmFtZSIsIi4vc2xhdmUuY29mZmVlIl0sIm1hcHBpbmdzIjoiQ0FBQSxRQUFBQSxHQUFBQyxFQUFBQyxFQUFBQyxHQUFBLFFBQUFDLEdBQUFDLEVBQUFDLEdBQUEsSUFBQUosRUFBQUcsR0FBQSxDQUFBLElBQUFKLEVBQUFJLEdBQUEsQ0FBQSxHQUFBRSxHQUFBLGtCQUFBQyxVQUFBQSxPQUFBLEtBQUFGLEdBQUFDLEVBQUEsTUFBQUEsR0FBQUYsR0FBQSxFQUFBLElBQUFJLEVBQUEsTUFBQUEsR0FBQUosR0FBQSxFQUFBLElBQUFLLEdBQUEsR0FBQUMsT0FBQSx1QkFBQU4sRUFBQSxJQUFBLE1BQUFLLEdBQUFFLEtBQUEsbUJBQUFGLEVBQUEsR0FBQUcsR0FBQVgsRUFBQUcsSUFBQVMsV0FBQWIsR0FBQUksR0FBQSxHQUFBVSxLQUFBRixFQUFBQyxRQUFBLFNBQUFkLEdBQUEsR0FBQUUsR0FBQUQsRUFBQUksR0FBQSxHQUFBTCxFQUFBLE9BQUFJLEdBQUFGLEVBQUFBLEVBQUFGLElBQUFhLEVBQUFBLEVBQUFDLFFBQUFkLEVBQUFDLEVBQUFDLEVBQUFDLEdBQUEsTUFBQUQsR0FBQUcsR0FBQVMsUUFBQSxJQUFBLEdBQUFMLEdBQUEsa0JBQUFELFVBQUFBLFFBQUFILEVBQUEsRUFBQUEsRUFBQUYsRUFBQWEsT0FBQVgsSUFBQUQsRUFBQUQsRUFBQUUsR0FBQSxPQUFBRCxLQUFBYSxHQUFBLFNBQUFULEVBQUFVLEVBQUFKLEdDQUEsR0FBQUssRUFBQUEsR0FBT1gsRUFBUSx3QkFFZlksUUFBUUMsSUFBSSxXQ01UQyx1QkFBdUIsSUFBSUMsR0FBRyxTQUFTZixFQUFRVSxFQUFPSixHQ1J6RCxHQUFBVSxFQUFBQSxHQUFNaEIsRUFBUSxnQkFDZGdCLEVBQU1oQixFQUFRLG1CQUVkWSxRQUFRQyxJQUFJLGNEZVRJLGtCQUFrQixFQUFFQyxlQUFlLElBQUlDLEdBQUcsU0FBU25CLEVBQVFVLEVBQU9KLEdFbEJyRSxHQUFBYyxFQUFBQSxHQUFXcEIsRUFBUSxxQkFFbkJZLFFBQVFDLElBQUksV0Z3QlRRLG9CQUFvQixJQUFJQyxHQUFHLFNBQVN0QixFQUFRVSxFQUFPSixHRzFCdEQsR0FBQUEsR0FBQWlCLENBQUFBLEdBQVF2QixFQUFRLGtCQUVoQlksUUFBUUMsSUFBSSxnQkFFWlAsR0FDRWtCLFVBQVcsV0hpQ1ZDLGlCQUFpQixTQUFTIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwibWFpbiA9IHJlcXVpcmUoJy4vc2NyaXB0cy9zdWIuY29mZmVlJyk7XHJcblxyXG5jb25zb2xlLmxvZygnWWVhaCEnKTtcclxuXHJcbiIsbnVsbCwic3ViID0gcmVxdWlyZSAnLi9zdWIuY29mZmVlJztcclxuc3ViID0gcmVxdWlyZSAnLi4vZW50cnkuY29mZmVlJztcclxuXHJcbmNvbnNvbGUubG9nICdyZXZlcnNlciciLCJyZXZlcnNlciA9IHJlcXVpcmUgJy4vcmV2ZXJzZXIuY29mZmVlJ1xyXG5cclxuY29uc29sZS5sb2cgJ3NsYXZlJyIsInNsYXZlID0gcmVxdWlyZSAnLi9zbGF2ZS5jb2ZmZWUnXHJcblxyXG5jb25zb2xlLmxvZyAndGhpcyBpcyBzdWIhJ1xyXG5cclxuZXhwb3J0cyA9IHtcclxuICBraW5nc05hbWU6IFwiQ2xvdWRcIlxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
/**/