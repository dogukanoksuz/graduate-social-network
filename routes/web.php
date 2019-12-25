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
    Route::get('/',
        'HomeController@index')
        ->name('home');

    Route::get('/jobs',
        'HomeController@jobAds')
        ->name('jobs');

    Route::get('/intern',
        'HomeController@internAds')
        ->name('intern');

    Route::get('/search/intern',
        'HomeController@internAdSearch')
        ->name('intern-search');

    Route::get('/search/jobs',
        'HomeController@jobAdSearch')
        ->name('job-search');

    // Search users
    Route::get('/search',
        'HomeController@search')
        ->name('search');

    // Profile edit, show etc.
    Route::resource('profile',
        'User\ProfileController')
        ->only([
            'index', 'show', 'edit', 'update'
        ]);

    Route::get('/profile/{id}/edit-details',
        'User\ProfileController@edit_details')
        ->name('profile.edit_details');

    Route::put('/profile/{id}/edit-details',
        'User\ProfileController@update_details')
        ->name('profile.update_details');

    // Create post
    Route::post('/profile/store-post/{id}',
        'User\PostController@storePost')
        ->name('profile.store_post');

    // Follow, unfollow
    Route::get('/profile/{profileId}/follow',
        'User\ProfileController@followUser')
        ->name('profile.follow');

    Route::get('/profile/{profileId}/unfollow',
        'User\ProfileController@unFollowUser')
        ->name('profile.unfollow');

    Route::get('/profile/{profileId}/followers',
        'User\ProfileController@followers')
        ->name('profile.followers');

    Route::get('/profile/{profileId}/following',
        'User\ProfileController@following')
        ->name('profile.following');

    // Like
    Route::get('/post/{postId}/like',
        'User\PostController@like')
        ->name('post.like');

    Route::get('/post/{postId}/likes',
        'User\PostController@likes')
        ->name('post.likes');

    // Comments
    Route::get('/post/{postId}',
        'User\PostController@listComments')
        ->name('post.listcomments');

    Route::post('/post/{postId}',
        'User\PostController@storeComments')
        ->name('post.storecomments');

    // Message controller
    Route::get('/chat',
        'User\Chat\ChatController@index')
        ->name('chat.index');

    Route::get('/chat/{id}',
        'User\Chat\ChatController@show')
        ->name('chat.show');

    Route::post('/chat/send-message/{id}',
        'User\Chat\ChatController@sendMessage')
        ->name('chat.send');

    // Companies
    Route::get('/company',
        'User\CompanyController@index')
        ->name('companies.list');

    Route::get('/company/{id}',
        'User\CompanyController@show')
        ->name('companies.show');
});

// Superuser routes
Route::group(['middleware' => ['auth', 'superuser']], function () {
    Route::get('/superuser',
        'SuperuserController@index')
        ->name('superuser.index');

    // Company controller
    Route::resource('/superuser/company',
        'Superuser\CompanyController')
        ->except('show');

    // Position controller
    Route::resource('/superuser/company/position',
        'Superuser\PositionController')
        ->except('show');

    // systeminfo
    Route::get('/superuser/systeminfo',
        'SuperuserController@systeminfo')
        ->name('superuser\systeminfo');
});
