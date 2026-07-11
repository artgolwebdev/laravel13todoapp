$.ajaxSetup({
    headers: {
        'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
    }
});
window.tasksListHolder = $('#tasksList');
// build task html inside the list
function buildTaskList(task){
    var className = (task.isDone == 1) ? 'bg-success' : '';
    var taskHtml = `<li class="list-group-item ${className}">
                        <div class="d-flex justify-content-between">
                        <div class="form-check form-switch">
                                <input class="form-check-input toggleStatus" data-taskid="${task.id}" type="checkbox" ${task.isDone == true ? 'checked' : ''} >
                                <label class="form-check-label" for="flexSwitchCheckDefault">${task.taskname}</label>
                        </div>
                             <div class="editTaskBtn" data-taskid="${task.id}">
                                <button class="btn btn-sm btn-outline btn-secondary">edit</button>
                            </div>
                            <div class="deleteTaskBtn" data-taskid="${task.id}">
                                <button class="btn btn-sm btn-outline btn-warning">X</button>
                            </div>
                        </div>  
                    </div>
                </li>`;
    $(tasksListHolder).prepend(taskHtml); 
}

$(document).ready(function() {

    // Create new task
    $('#taskForm').on('submit',function(e){
        e.preventDefault();
        var form = $(this);
        var task = $(form).find('input[name="task"]').val();
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
                buildTaskList(task);
            },
            error: function (error) {
                    console.error(error);
            }
        });
    });

    // Delete task
    $('body').on('click','.deleteTaskBtn' ,function() {
        var taskId = $(this).data('taskid');
        var liElement = $(this).closest('li');

        if(!taskId){
            return;
        }
        if(confirm("Are you sure you want to delete this task?")){
            $.ajax({
                url: '/tasks/' + taskId,
                method: 'DELETE',
                success : function(response){
                    console.log(response);
                    $(liElement).remove();
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
           $.ajax({
                url: '/tasks/' + taskId + '/toggle',
                method: 'POST',
                success : function(response){
                    $(taskHTML).parent().parent().parent().toggleClass('bg-success');
                },
                error: function (error) {
                    console.error(error);
                }
            });
    });
});