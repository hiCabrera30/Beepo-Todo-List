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
Route::middleware(["auth"])->group(function () {

    Route::name("dashboard.index")->get("/", "DashboardController@index")
        ->middleware(["auth"]);

    Route::name("auth.logout")->get("/logout", "AuthController@logout");

});

Route::middleware(["guest"])->group(function () {

    Route::name("auth.login")->get("/login", "AuthController@login");

});

