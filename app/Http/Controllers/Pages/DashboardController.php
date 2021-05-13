<?php

namespace App\Http\Controllers\Pages;

use App\Http\Controllers\Controller;
use App\Http\Resources\Users\BasicUserResource;
use App\Models\Task;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class DashboardController extends Controller {

    public function index() {
        $tasks = Task::ofUser(Auth::user()->id)
            ->fetchByHeirarchy()
            ->sortByOrder()
            ->get();
        $statuses = [
            "pending",
            "complete",
            "cancelled",
        ];

        return inertia("dashboard/HomePage", compact("tasks", "statuses"));
    }

    public function chart() {
        $tasks = Task::ofUser(Auth::user()->id)
            ->groupBy("status")
            ->select("status", DB::raw("COUNT(id) as amount"))
            ->get();
        $taskStats = $this->flattenObject($tasks);

        return inertia("dashboard/ChartPage", compact("taskStats"));
    }

    public function trashBin() {
        $tasks = Task::ofUser(Auth::user()->id)
            ->inTrashBin()
            ->orderBy("deleted_at", "desc")
            ->isRestorable()
            ->get();
        

        return inertia("dashboard/TrashBinPage", compact("tasks"));
    }

}
