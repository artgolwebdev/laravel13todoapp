<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="csrf-token" content="{{ csrf_token() }}">
        <title>{{ config('app.name', 'Laravel') }}</title>
        <link rel="stylesheet" href="{{ asset('css/bootstrap.min.css') }}">
        <link rel="stylesheet" href="{{ asset('css/styles.css') }}">
        <script>
            const APP_URL = "{{ url('/') }}";
        </script>
    </head>
    <body>

    <div class="container-fluid p-5 bg-primary">
        <h1 class="text-white text-center">To Do App</h1>
        <form id="taskForm">
            <div class="input-group mb-3">
                <input type="text" name="task" class="form-control" placeholder="New task" required="true">
                <span class="input-group-text" >
                    <input type="submit" class="btn btn-info" value="Add Task"></input> 
                </span>
            </div>
        </form>
          <ul id="tasksList" class="list-group">
            @if($tasks->isEmpty())
                <li class="list-group-item">No tasks available.</li>
            @else
                @foreach($tasks as $task)
                    @php
                        $className = $task->isDone ? 'bg-success' : '';
                    @endphp
                    <li class="list-group-item {{ $className }}">
                            <div class="d-flex justify-content-between">
                                <div class="form-check form-switch">
                                    <input class="form-check-input toggleStatus" data-taskid="{{$task->id}}" type="checkbox" {{$task->isDone == true ? 'checked' : ''}} >
                                    <label class="form-check-label" for="flexSwitchCheckDefault">{{ $task->taskname }}</label>
                                </div>
                                <div class="deleteTaskBtn" data-taskid="{{ $task->id }}">
                                    <button class="btn btn-sm btn-outline btn-warning">X</button>
                                </div>
                        </div>
                    </li>
                @endforeach
            @endif
          </ul>
    </div>


    <script src="{{ asset('js/jquery-3.7.1.min.js') }}"></script>
    <script src="{{ asset('js/bootstrap.min.js') }}"></script>
    <script src="{{ asset('js/app.js') }}"></script>



    </body>
</html>
