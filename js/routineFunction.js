function routineFunction() {
    var d = new Date();
    var weekday = new Array(7);
    weekday[0] = "<br /><h2>Sunday</h2><h3><p>DBMS=>7:10 to 8:45<p>TOC=>8:45 to 10:15<p>TW=>10:45 to 12:15</h3>";
    weekday[1] = "<br /><h2>Holiday</h2>";
    weekday[2] = "<br /><h2>Tuesday</h2><h3><p>TOC=>7:10 to 8:45<p>SAD=>8:45 to 10:15<p>TW=>10:45 to 12:15</h3>";
    weekday[3] = "<br /><h2>Wednesday</h2><h3><p>CG=>7:10 to 8:45<p>SAD=>8:45 to 10:15<p>DBMS=>10:45 to 12:15</h3>";
    weekday[4] = "<br /><h2>Thursday</h2><h3><p>DBMS=>7:10 to 8:45<p>SAD=>8:45 to 10:15<p>DBMS/CG=>10:45 to 12:15</h3>";
    weekday[5] = "<br /><h2>Friday</h2><h3><p>CG=>7:10 to 8:45<p>CS=>8:45 to 10:15<p>DBMS/CG=>10:45 to 12:15</h3>";
    weekday[6] = "<br /><h2>Saturday</h2><h3><p>TW=>7:10 to 8:45<p>CS=>8:45 to 10:15<p>TOC=>10:45 to 12:15</h3>";

    var n = weekday[d.getDay()];
    document.getElementById("Routine").innerHTML = n;
}