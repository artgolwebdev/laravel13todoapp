<?php

namespace App\Http\Controllers;

use App\Models\Task;
use Illuminate\Http\Request;

class TaskController extends Controller
{
    public function index()
    {
        $tasks = Task::latest()->get();
        return response()->json($tasks);
    }

    public function save(Request $request)
    {
        $validated = $request->validate([
            'taskname' => 'required|string|max:255',
        ]);

        $task = Task::create([
            'taskname' => $validated['taskname'],
        ]);

        return response()->json($task, 201);
    }

    public function toggleStaus($taskId)
    {
        $task = Task::findOrFail($taskId);
        $task->isDone = !$task->isDone;
        $task->save();
        return response()->json($task);
    }

    public function delete($taskId)
    {   
        $task = Task::findOrFail($taskId);
        $task->delete();
        return response()->json(null, 204);
    }
}
