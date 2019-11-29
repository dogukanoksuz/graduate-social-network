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

    // Search users
    Route::get('/search', 'HomeController@search')->name('search');

    // Profile edit, show etc.
    Route::resource('profile', 'User\ProfileController')->only([
        'index', 'show', 'edit', 'update'
    ]);

    // Create post
    Route::post('/profile/store-post/{id}', 'User\PostController@storePost')->name('profile.store_post');

    // Follow, unfollow
    Route::get('/profile/{profileId}/follow', 'User\PostController@followUser')->name('profile.follow');
    Route::get('/profile/{profileId}/unfollow', 'User\PostController@unFollowUser')->name('profile.unfollow');

    // Like
    Route::get('/post/{postId}/like', 'User\PostController@like')->name('post.like');
    Route::get('/post/{postId}/likes', 'User\PostController@likes')->name('post.likes');

    // Comments
    Route::get('/post/{postId}', 'User\PostController@listComments')->name('post.listcomments');
    Route::post('/post/{postId}', 'User\PostController@storeComments')->name('post.storecomments');

    // Message controller
    Route::get('/chat', 'User\Chat\ChatController@index')->name('chat.index');
    Route::get('/chat/{id}', 'User\Chat\ChatController@show')->name('chat.show');
    Route::post('/chat/send-message/{id}', 'User\Chat\ChatController@sendMessage')->name('chat.send');
});

// Superuser routes
Route::group(['middleware' => ['auth', 'superuser']], function () {
    Route::get('/superuser', 'HomeController@index')->name('superuser');
});
