<?php

namespace App\Http\Controllers;

use App\Events\ParaTutorial as EventsParaTutorial;
use Illuminate\Http\Request;

class ParaTutorial extends Controller
{
    public function index()
    {
        event(new EventsParaTutorial);
        return view('welcome');
    }
}
