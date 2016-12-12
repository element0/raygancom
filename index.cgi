#!/usr/local/bin/divine

<!doctype html>
<html ng-app="raygancom">
  <head>
    <script src="js/vendor/angular.min.js">
	<script src="js/vendor/angular-resource.min.js">
	<script src="js/vendor/angular-route.min.js">
    '<meta charset="utf-8">
	'<base href="">
    <meta http-equiv="x-ua-compatible" content="ie=edge">
    <meta name="viewport" content="width=device-width, intial-scale=1.0">
    '<link rel="stylesheet" type="text/css" href="https://fonts.googleapis.com/css?family=Permanent+Marker|Raleway:300|Hind+Vadodara:300">
    '<link rel="stylesheet" href="css/app.css">
    '<link rel="stylesheet" href="css/raygandev.css">
  <body class="raygancom-body">
    $raygancom_site


raygancom_site
	<div ng-controller="RaygancomController">
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
		<table>
			<div ng-repeat="nav_item in nav" class="{{navSetItemStyle($last)}}">
				<a href="{{'#!/' + nav_item.name}}" class="{{navSetActive(nav_item.name)}}" id="nav_{{nav_item.name}}">{{nav_item.title}}
	

raygancom_resultlist .raygancom-results-frontpage
    <div ng-view>


raygancom_credits
    "Copyright &copy; 2016 Raygan Henley,
    "DreamBoy Software

javascripts
    <script src="js/app-ng.js"> 
    
