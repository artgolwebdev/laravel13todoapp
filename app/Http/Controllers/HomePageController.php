<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Task;

class HomePageController extends Controller
{
    public function index()
    {
        $tasks = Task::latest()->get();
        return view('welcome', compact('tasks'));
    }
}
