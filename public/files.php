<?php
  $path = $_GET['path'];
  print '[';
  if ($handle = opendir($path)) {
    $files = array();

    while (false !== ($file = readdir($handle))) {
      if ('.' === $file) continue;
      if ('..' === $file) continue;

      $files[] = $file;
    }
    closedir($handle);

    natsort($files);

    $firstTime = true;
    foreach ($files as $file)
    {
      if (!$firstTime) {
        print ",";
      }
      $firstTime = false;
      $fileParts = explode(".", $file);
      $displayName = $fileParts[0];

      print "{\"name\":\"$displayName\", \"url\":\"$path/$file\"}";
    }
  }
  print ']';  
?>
