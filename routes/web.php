<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('public.layout');
});


//Route::prefix('admin')->group(base_path('routes/admin.php'));

Route::prefix('users')->group(base_path('routes/user.php'));


Auth::routes();

Route::get('/admin/home', 'HomeController@index')->name('home');

Route::post('/add-category', 'CategoryController@create');

Route::get('/{anypath}', 'HomeController@index')->where('path', '.*');

