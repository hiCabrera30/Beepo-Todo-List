<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Requests\Tasks\CreateTaskRequest;
use App\Http\Requests\Tasks\UpdateTaskRequest;
use App\Models\Task;
use Exception;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;

class TasksController extends Controller {

    public function store(CreateTaskRequest $request) {
        try {
            $data = [
                "parent_id" => $request->get("parent_id"),
                "context"   => $request->get("context"),
                "author_id" => Auth::user()->id,
            ];
            $task = Task::create($data);

            return Redirect::route('dashboard.index');
        } catch (Exception $ex) {
            return redirect()->back()->with('error', $ex->getMessage());
        }
    }

    public function update(UpdateTaskRequest $request, Task $task) {
        try {
            $task->update($request->getFormData());

            return $this->resolve("Task successfully updated", compact("task"));
        } catch (Exception $ex) {
            return $this->reject($ex);
        }
    }

    public function toggleCompletion(Task $task) {
        try {
            $task->toggleCompletion();

            return Redirect::route('dashboard.index');
        } catch (Exception $ex) {
            return redirect()->back()->with('error', "Something went wrong.");
        }
    }

    public function destroy(Task $task) {
        try {
            $task->delete();

            return Redirect::route('dashboard.index');
        } catch (Exception $ex) {
            return redirect()->back()->with('error', "Something went wrong.");
        }
    }

}
