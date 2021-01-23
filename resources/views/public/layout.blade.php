<!doctype html>
<html class="no-js" lang="">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="x-ua-compatible" content="ie=edge">
        <title>Home || Sellshop</title>
        <meta name="description" content="">
        <meta name="viewport" content="width=device-width, initial-scale=1">
		<!-- favicon -->
        <link rel="shortcut icon" type="image/x-icon" href="{{ asset('assets/img/') }}/favicon.ico">

        <link rel="apple-touch-icon" href="apple-touch-icon.png">


        <link rel="stylesheet" href="{{ asset('css/all.css') }}">

    </head>
    <body>
        <!--[if lt IE 8]>
            <p class="browserupgrade">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.</p>
        <![endif]-->
    <div id="content">
        <!-- header section start -->
        <header-component></header-component>
        <!-- header section end -->

        <router-view></router-view>
        

        <!-- footer section start -->
        <footer-component></footer-component>
        <!-- footer section end -->

    </div>


        <!-- all js here -->
        <script src="{{ asset('js/all.js') }}"></script>
        <script src="{{ asset('js/public.js') }}"></script>

		<!-- nivo.slider JS -->
        <script src="{{ asset('assets/')}}/js/jquery.nivo.slider.pack.js"></script>

		<!-- load-more js -->
        <script src="{{ asset('assets/')}}/js/load-more.js"></script>

		<!-- main js -->
        <script src="{{ asset('assets/')}}/js/main.js"></script>

    </body>
</html>
