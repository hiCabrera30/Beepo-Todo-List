<?php

namespace App\Http\Controllers\Pages;

use App\Http\Controllers\Controller;
use App\Http\Resources\Users\BasicUserResource;
use App\Models\Task;
use Illuminate\Support\Facades\Auth;

class DashboardController extends Controller {

    public function index() {
        $user = Auth::user();
        $tasks = Task::ofUser($user->id)
            ->fetchByHeirarchy()
            ->get();
        $statuses = [
            "pending",
            "complete",
            "cancelled",
        ];
        
        $user = $this->flattenObject(new BasicUserResource($user));

        return inertia("dashboard/DashboardPage", compact("user", "tasks", "statuses"));
    }

}
