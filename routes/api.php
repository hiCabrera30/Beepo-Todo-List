<?php

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

    Route::name("tasks.update-order")->put("/tasks/update-order", "TasksController@updateOrder");

    Route::name("tasks.download-excel")->get("/tasks/download-excel", "TasksController@downloadExcel");
    Route::name("tasks.download-csv")->get("/tasks/download-csv", "TasksController@downloadCSV");
    Route::name("tasks.download-json")->get("/tasks/download-json", "TasksController@downloadJSON");

    Route::name("tasks.restore")->patch("/tasks/{task}/restore", "TasksController@restore");
    Route::name("tasks.permanent-delete")->delete("/tasks/{task}/permanent-delete", "TasksController@permanentDelete");

    Route::resource('tasks', "TasksController")
        ->only(["store", "update", "destroy"]);

});
