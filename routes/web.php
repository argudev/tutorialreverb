<?php

use Illuminate\Support\Facades\Route;

Route::get('/', [App\Http\Controllers\ParaTutorial::class, 'index']);