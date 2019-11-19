<?php

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

use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;

Auth::routes();

// User routes
Route::group(['middleware' => ['auth']], function () {
    Route::get('/', 'HomeController@index')->name('home');
    Route::resource('profile', 'User\ProfileController')->only([
        'index', 'show', 'edit', 'update'
    ]);
});

// Superuser routes
Route::group(['middleware' => ['superuser']], function () {
    Route::get('/superuser', 'HomeController@index')->name('superuser');
});
