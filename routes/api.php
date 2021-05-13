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

Route::group(['middleware' => ["guest"]], function () {

    Route::name("auth.login")->post("/login", "AuthController@login");

});

Route::group(['middleware' => ["auth"]], function () {

    Route::resource('tasks', "TasksController")
        ->only(["store", "update", "destroy"]);

});
