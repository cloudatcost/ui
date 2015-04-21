<?php
define('IOD_HOST', 'db');
define('IOD_USER', 'iod');
define('IOD_PASS', '@kwdatacentre');
define('IOD_dbDB', 'iod');
//
define('CAC_HOST', '10.10.1.240');
define('CAC_USER', 'catcce');
define('CAC_PASS', 'catcce');
define('CAC_dbDB', 'catcce');
//
// Create a link to the database server
$link = mysql_pconnect(IOD_HOST, IOD_USER, IOD_PASS) or die("Try connecting to iOD:<br>".mysql_error());
mysql_select_db(IOD_dbDB, $link) or die("<br>Try connecting to iOD DB:<br>".mysql_error());

// Create a link to the database server
$cink = mysql_pconnect(CAC_HOST, CAC_USER, CAC_PASS) or die("<br>Try connecting to CAC DB:<br>".mysql_error());
mysql_select_db(CAC_dbDB, $cink) or die("<br>Try connecting to CAC DB:<br>".mysql_error());



$pending = mysql_query("SELECT * FROM iodserver WHERE CustID =  '540698852'", $link);

echo mysql_num_rows($pending);

while($userrow0 = mysql_fetch_array($pending, MYSQL_BOTH)){
	echo $userrow0["Name"]."<br><br>";
}

$result = mysql_query("show COLUMNS FROM members", $link); // run the query and assign the result to $result
while($table = mysql_fetch_assoc($result)) { // go through each row that was returned in $result
    echo $table['Field'] . "<BR>";    // print the table that was returned on that row.
}
echo "<br><br><Br>";
$result = mysql_query("show COLUMNS FROM iodserver", $link); // run the query and assign the result to $result
while($table = mysql_fetch_assoc($result)) { // go through each row that was returned in $result
    echo $table['Field'] . "<BR>";    // print the table that was returned on that row.
}

?>