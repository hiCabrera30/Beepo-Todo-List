<?php

namespace App\Http\Controllers\API;

use App\Exports\TasksExport;
use App\Http\Controllers\Controller;
use App\Http\Requests\Tasks\CreateTaskRequest;
use App\Http\Requests\Tasks\UpdateTaskRequest;
use App\Http\Resources\Tasks\BasicTaskResource;
use App\Models\Task;
use Excel;
use Exception;
use File;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Str;
use Response;

class TasksController extends Controller {

    public function store(CreateTaskRequest $request) {
        try {
            $order = Task::ofParent($request->get("parent_id"))->count() + 1;
            $data  = [
                "parent_id" => $request->get("parent_id"),
                "context"   => $request->get("context"),
                "order"     => $order,
                "author_id" => Auth::user()->id,
                "status"    => "pending",
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

    public function destroy(Task $task) {
        try {
            $task->delete();

            return Redirect::route('dashboard.index');
        } catch (Exception $ex) {
            return redirect()->back()->with('error', "Something went wrong.");
        }
    }

    public function restore(Request $request) {
        try {
            $task = Task::withTrashed()->findOrFail($request->task);
            $task->restore();

            return Redirect::route('dashboard.trash-bin');
        } catch (Exception $ex) {
            return redirect()->back()->with('error', "Something went wrong.");
        }
    }

    public function permanentDelete(Request $request) {
        try {
            $task = Task::withTrashed()->findOrFail($request->task);
            $task->forceDelete();

            return Redirect::route('dashboard.trash-bin');
        } catch (Exception $ex) {
            return redirect()->back()->with('error', "Something went wrong.");
        }
    }

    public function updateOrder(Request $request) {
        try {
            $data = $request->all();
            Task::ofParent($data["parent_id"])
                ->where("order", ">", $data["old_index"])
                ->decrement("order");

            Task::ofParent($data["parent_id"])
                ->where("order", ">=", $data["new_index"])
                ->increment("order");
            Task::where("id", $data["task_id"])
                ->update(["order" => $data["new_index"]]);

            return $this->resolve("Task successfully re-ordered", []);
        } catch (Exception $ex) {
            return $this->reject($ex);
        }
    }

    public function downloadExcel() {
        try {
            $user     = Auth::user();
            $filename = sprintf('%s.csv', uniqid(Str::snake($user->name) . '_'));

            return Excel::download(new TasksExport($user->id), $filename, \Maatwebsite\Excel\Excel::XLSX);
        } catch (Exception $ex) {
            return $this->reject($ex);
        }
    }

    public function downloadCSV() {
        try {
            $user     = Auth::user();
            $filename = sprintf('%s.csv', uniqid(Str::snake($user->name) . '_'));

            return Excel::download(new TasksExport($user->id), $filename, \Maatwebsite\Excel\Excel::CSV);
        } catch (Exception $ex) {
            return $this->reject($ex);
        }
    }

    public function downloadJSON() {
        try {
            $user  = Auth::user();
            $tasks = Task::ofUser($user->id)
                ->fetchByHeirarchy()
                ->get();
            $tasks = BasicTaskResource::collection($tasks);

            $filename = sprintf('%s.json', uniqid(Str::snake($user->name) . '_'));
            $path     = '/files/json/';
            $filepath = sprintf('%s%s', $path, $filename);

            File::ensureDirectoryExists(public_path() . $path);
            File::put(public_path($filepath), json_encode($tasks));

            return Response::download(public_path($filepath));
        } catch (Exception $ex) {
            return $this->reject($ex);
        }
    }

}
