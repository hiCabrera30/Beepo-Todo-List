<?php

namespace App\Managers;

use App\Models\Task;

class TaskManager {

    public function getTaskStatuses($userId = null) {
        $statuses = [ "pending", "complete", "cancelled" ];
        
        $tasks = $userId ? Task::ofUser($userId) : Task::query();

            $customStatuses = $tasks->select("status")
                ->groupBy("status")
                ->whereNotIn("status", $statuses)
                ->get()
                ->map(function ($task) {
                    return $task->status;
                })
                ->toArray();

        return array_merge($statuses, $customStatuses);
    }


    public function insertTaskToList(array $data) {
        $task = Task::findOrFail($data["task_id"]);

        // Re-order previous list
        Task::ofParent($data["old_parent_id"])
            ->where("order", ">", $task->order)
            ->decrement("order");

        // Re-order new list
        Task::ofParent($data["new_parent_id"])
            ->where("order", ">=", $data["new_index"])
            ->increment("order");

        // Update task order to new list
        $task->update([
            "order"     => $data["new_index"],
            "parent_id" => $data["new_parent_id"],
        ]);
    }

    public function updateTaskOrder(array $data) {
        // Adjust list when task is taken away
        Task::ofParent($data["parent_id"])
            ->where("order", ">", $data["old_index"])
            ->decrement("order");

        // Adjust list when task is returned
        Task::ofParent($data["parent_id"])
            ->where("order", ">=", $data["new_index"])
            ->increment("order");

        // Update task order to list
        Task::where("id", $data["task_id"])
            ->update(["order" => $data["new_index"]]);
    }

}