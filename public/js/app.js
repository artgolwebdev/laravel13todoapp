$.ajaxSetup({
    headers: {
        'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
    }
});


function buildList(){
    var tasksListHolder = $('#tasksList');
    $(tasksListHolder).html('');
    var tasks = [];
    $.ajax({
        url: APP_URL + '/tasks',
        method: 'GET',
        success: function (response) {
            tasks = response;
            console.log(tasks);
            $.each(tasks,function(){
                var task = this;
                console.log(task);
                var className = (task.isDone == 1) ? 'bg-success' : '';
                var taskHtml = `<li class="list-group-item ${className}">
                                    <div class="d-flex justify-content-between">
                                    <div class="form-check form-switch">
                                            <input class="form-check-input toggleStatus" data-taskid="${task.id}" type="checkbox" ${task.isDone == true ? 'checked' : ''} >
                                            <label class="form-check-label" for="flexSwitchCheckDefault">${task.taskname}</label>
                                    </div>
                                        <div class="deleteTaskBtn" data-taskid="${task.id}">
                                            <button class="btn btn-sm btn-outline btn-warning">X</button>
                                        </div>
                                    </div>  
                                </div>
                            </li>`;
                $(tasksListHolder).append(taskHtml);            
            })
        }
    });
}

$(document).ready(function() {
    console.log('hi');

    // Get all task and build list
    buildList();


    // Create new task
    $('#taskForm').on('submit',function(e){
        e.preventDefault();
        var form = $(this);
        var task = $(form).find('input[name="task"]').val();
        console.log("task : " + task);
        if(!task){
            alert("Task is required");
            return;
        }
        $.ajax({
            url: APP_URL + '/tasks',
            method: 'POST',
            data: { taskname: task},
            success: function (task) {
                console.log('created:', task);
                $(form)[0].reset();
                buildList();
            },
            error: function (error) {
                    console.error(error);
            }
        });
    });

    // Delete task
    $('body').on('click','.deleteTaskBtn' ,function() {
        var taskId = $(this).data('taskid');
        console.log("taskId :"+ taskId);
        if(!taskId){
            return;
        }
        if(confirm("Are you sure you want to delete this task?")){
            $.ajax({
                url: '/tasks/' + taskId,
                method: 'DELETE',
                success : function(response){
                    console.log(response);
                     buildList();
                },
                error: function (error) {
                    console.error(error);
                }
            });
        }
    });

    // Toggle Task Status 
    $('body').on('click','.toggleStatus' ,function() {
        var taskHTML = $(this);
        var taskId = $(taskHTML).data('taskid');
        console.log("taskId: "+taskId);
           $.ajax({
                url: '/tasks/' + taskId + '/toggle',
                method: 'POST',
                success : function(response){
                    console.log(response);
                    $(taskHTML).parent().parent().parent().toggleClass('bg-success');
                },
                error: function (error) {
                    console.error(error);
                }
            });
    });
});