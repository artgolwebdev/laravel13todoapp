<?php

use Illuminate\Support\Facades\Route;

use App\Http\Controllers\HomePageController;
use App\Http\Controllers\TaskController;

Route::get('/', [HomePageController::class, 'index']);


Route::get('/tasks', [TaskController::class, 'index']);
Route::post('/tasks', [TaskController::class, 'save']);
Route::post('/tasks/{id}/toggle', [TaskController::class, 'toggleStaus']);
Route::delete('/tasks/{id}', [TaskController::class, 'delete']);

