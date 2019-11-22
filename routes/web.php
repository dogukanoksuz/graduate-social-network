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
    // Index list
    Route::get('/', 'HomeController@index')->name('home');

    // Profile edit, show etc.
    Route::resource('profile', 'User\ProfileController')->only([
        'index', 'show', 'edit', 'update'
    ]);

    // Profile post store
    Route::post('/profile/store-post/{id}', 'User\ProfileController@storePost')->name('profile.store_post');

    // Message controller
    Route::get('/chat', 'User\Chat\ChatController@index')->name('chat.index');
    Route::get('/chat/{id}', 'User\Chat\ChatController@show')->name('chat.show');
    Route::post('/chat/store/{id}', 'User\Chat\ChatController@storeChat')->name('chat.store');
});

// Superuser routes
Route::group(['middleware' => ['superuser']], function () {
    Route::get('/superuser', 'HomeController@index')->name('superuser');
});
