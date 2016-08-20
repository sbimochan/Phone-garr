function routineFunction() {
    var d = new Date();
    var weekday = new Array(7);
    weekday[0] = "<br /><h2>Sunday</h2><h3><p>SE=>7:10 to 8:45<p>CDC=>8:45 to 10:15<p>RTS=>10:45 to 12:15</h3>";
    weekday[1] = "<br /><h2>Holiday</h2>";
    weekday[2] = "<br /><h2>Tuesday</h2><h3><p>RTS=>7:10 to 8:45<p>CDC=>8:45 to 10:15<p>IP(Lab)=>10:45 to 12:15</h3>";
    weekday[3] = "<br /><h2>Wednesday</h2><h3><p>SE=>7:10 to 8:45<p>CDC=>8:45 to 10:15</h3>";
    weekday[4] = "<br /><h2>Thursday</h2><h3><p>E-comm/IP=>7:10 to 8:45<p>WT=>8:45 to 10:15</h3>";
    weekday[5] = "<br /><h2>Friday</h2><h3><p>SE=>7:10 to 8:45<p>WT=>8:45 to 10:15</h3>";
    weekday[6] = "<br /><h2>Saturday</h2><h3><p>E-comm/IP=>7:10 to 8:45<p>WT=>8:45 to 10:15</h3>";

    var n = weekday[d.getDay()];
    document.getElementById("Routine").innerHTML = n;
}
