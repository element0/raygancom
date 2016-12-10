#!/usr/local/bin/divine

<!doctype html>
<html>
  <head>
    <meta charset="utf-8">
    <meta http-equiv="x-ua-compatible" content="ie=edge">
    <meta name="viewport" content="width=device-width, intial-scale=1.0">
    <link rel="stylesheet" type="text/css" href="https://fonts.googleapis.com/css?family=Permanent+Marker|Raleway:300|Hind+Vadodara:300">
    <link rel="stylesheet" href="css/app.css">
    <link rel="stylesheet" href="css/raygandev.css">
  <body class="raygancom-body">
    $raygancom_site


raygancom_site
    raygancom_top_of_page
    $raygancom_content
    $raygancom_credits
    $javascripts
    
raygancom_content .raygancom-content
        $raygancom_os
        $raygancom_navbar
        $raygancom_resultlist

raygancom_os
    .raygancom-os-area
        $raygancom_about

        $artsplash
    
        $raygancom_ctrl


raygancom_ctrl

raygancom_about
    .raygancom-about-area
	$artsplash
	.raygancom-pic-area
	  <img src="img/raygan_cool_cropsqr.png" class="raygancom-pic raygancom-pic-open" />
        .raygancom-contact-area
	  .raygancom-contact-email
	    <a href="mailto:raygan@raygan.com" class="raygancom-link-black">
	      "raygan@raygan.com
	  .raygancom-link-menu-area
            .raygancom-link-menu-item
	      <a href="http://www.imdb.com/name/nm1580289" class="raygancom-link-black">
	        "imdb
	    .raygancom-link-menu-item
	      <a href="https://github.com/element0/" class="raygancom-link-black">
	        "github


artsplash .raygancom-artsplash
    <img src="img/snowscape_crop_s25.png" class="raygancom-artsplash-img"/>    


raygancom_navbar.raygancom-nav-area
    .raygancom-nav-menu-area
        <div class="raygancom-ctrl-menu-item raygancom-lowerline" onclick='navToggle("nav_films", "films");'>
	    <a href="#films" onclick='navToggle("nav_films", "films")' class="raygancom-nav-link-dormant" id="nav_films">
	        "Films
        <div class="raygancom-ctrl-menu-item raygancom-lowerline" onclick='navToggle("nav_illus", "illus")'>
	    <a href="#illus" onclick='navToggle("nav_illus", "illus")' class="raygancom-nav-link-dormant" id="nav_illus">
	        "Illus
        <div class="raygancom-ctrl-menu-item" onclick='navToggle("nav_softw", "softw")'>
	    <a href="#softw" onclick='navToggle("nav_softw", "softw")' class="raygancom-nav-link-dormant" id="nav_softw">
	        "Softw


	

raygancom_resultlist.raygancom-results-frontpage


raygancom_credits
    "Copyright &copy; 2016 Raygan Henley,
    "DreamBoy Software

javascripts
    <script src="js/vendor/angular.min.js">
    <script src="js/vendor/jquery.js">
    <script src="js/app.js"> 
    
