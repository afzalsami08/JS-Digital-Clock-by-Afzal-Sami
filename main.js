setInterval(
    () => {

        var a = new Date();

        // Day Area

        var b = a.getDay();

        var c = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

        document.getElementById('day').innerHTML = c[b];

        // Hour Area 

        var d = a.getHours();

        var e = document.getElementById('hour');

        var f = a.getHours() - 12;

        d = (d < 10) ? '0' + d : d;
        f = (f < 10) ? '0' + f : f;

        if (d > 12) {
            e.innerHTML = f;
        } else {
            e.innerHTML = d;
        }

        // Minutes Area 

        var g = a.getMinutes();

        g = (g < 10) ? '0' + g : g;

        document.getElementById('minute').innerHTML = g;

        // Seconds Area 

        var h = a.getSeconds();

        h = (h < 10) ? '0' + h : h;

        document.getElementById('second').innerHTML = h;

        // Value Area

        if (d < 12) {
            document.getElementById('am_pm').innerHTML = 'AM';
        } else {
            document.getElementById('am_pm').innerHTML = 'PM';
        }

        // Date Area

        var i = a.getDate();

        i = (i < 10) ? '0' + i : i;

        document.getElementById('date').innerHTML = i;

        // Month Area

        var j = a.getMonth();

        var k = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

        document.getElementById('month').innerHTML = k[j];

        // Year Area

        document.getElementById('year').innerHTML = a.getFullYear();

        // Greeting Area

        var l = document.getElementById('greeting');
        var m = document.getElementById('good');

        if (d >= 5 && d < 11) {
            l.innerHTML = 'Morning';
            m.style.color = l.style.color = '#0080ff';
        } else if (d >= 11 && d < 16) {
            l.innerHTML = 'Afternoon';
            m.style.color = l.style.color = '#ffff00';
        } else if (d >= 16 && d < 21) {
            l.innerHTML = 'Evening';
            m.style.color = l.style.color = '#ff8000';
        } else if (d >= 21 || d < 5) {
            l.innerHTML = 'Night';
            m.style.color = l.style.color = '#f00';
        } else {
            l.innerHTML = 'invalid';
        }

    }
);
