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
          <ul id="tasksList" class="list-group"></ul>
    </div>


    <script src="{{ asset('js/jquery-3.7.1.min.js') }}"></script>
    <script src="{{ asset('js/bootstrap.min.js') }}"></script>
    <script src="{{ asset('js/app.js') }}"></script>



    </body>
</html>
