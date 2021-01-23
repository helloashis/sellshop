<?php

use Illuminate\Support\Facades\Route;


Route::get('/', function () {

    return response()->json([
        'user' => \Auth::user()
    ], 200);

});

Route::get('/{path}', function(){
    return view('public.layout');
});
