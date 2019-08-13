<?php

use Illuminate\Http\Request;

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

Route::group(['prefix' => 'contact'], function() {
    Route::get('/', 'ContactController@index');
    Route::get('{id}', 'ContactController@show');
    Route::post('/', 'ContactController@store');
    Route::put('{id}', 'ContactController@update');
    Route::delete('{id}', 'ContactController@destroy');

});


Route::middleware('auth:api')->get('/user', function (Request $request) {
    return response()->json($request->user());
});
