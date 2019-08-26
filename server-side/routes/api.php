<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

//'middleware' => 'auth:api'

//Route::group(['prefix' => 'contact', 'namespace' => 'Api'], function() {
//    Route::get('/', 'ContactController@index');
//
//    Route::group(['middleware' => 'admin'], function () {
//        Route::get('{id}', 'ContactController@show');
//        Route::post('/', 'ContactController@store');
//        Route::put('{id}', 'ContactController@update');
//    });
//
//    Route::delete('{id}', 'ContactController@destroy')->middleware('superAdmin');
//});

Route::group(['prefix' => 'contact', 'namespace' => 'Api'], function() {
    Route::get('/', 'ContactController@index');
    Route::get('{id}', 'ContactController@show');
    Route::post('/', 'ContactController@store');
    Route::put('{id}', 'ContactController@update');
    Route::delete('{id}', 'ContactController@destroy');
});


Route::middleware('auth:api')->get('/user', function (Request $request) {
    return response()->json($request->user());
});
