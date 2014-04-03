(function() {
    !function() {
        var d3 = {
            version: "3.4.4"
        };
        d3.min = function(array, f) {
            var i = -1, n = array.length, a, b;
            if (arguments.length === 1) {
                while (++i < n && !((a = array[i]) != null && a <= a)) a = undefined;
                while (++i < n) if ((b = array[i]) != null && a > b) a = b;
            } else {
                while (++i < n && !((a = f.call(array, array[i], i)) != null && a <= a)) a = undefined;
                while (++i < n) if ((b = f.call(array, array[i], i)) != null && a > b) a = b;
            }
            return a;
        };
        d3.zip = function() {
            if (!(n = arguments.length)) return [];
            for (var i = -1, m = d3.min(arguments, d3_zipLength), zips = new Array(m); ++i < m; ) {
                for (var j = -1, n, zip = zips[i] = new Array(n); ++j < n; ) {
                    zip[j] = arguments[j][i];
                }
            }
            return zips;
        };
        function d3_zipLength(d) {
            return d.length;
        }
        if (typeof define === "function" && define.amd) {
            define(d3);
        } else if (typeof module === "object" && module.exports) {
            module.exports = d3;
        } else {
            this.d3 = d3;
        }
    }();
})();