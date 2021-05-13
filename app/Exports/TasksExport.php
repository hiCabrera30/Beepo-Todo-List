<?php

namespace App\Exports;

use App\Http\Resources\Tasks\BasicTaskResource;
use App\Models\Task;
use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\WithHeadings;

class TasksExport implements FromCollection, WithHeadings {

    protected $userId;
    protected $parentId;

    public function __construct($userId, $parentId = null) {
        $this->userId = $userId;
        $this->parentId = $parentId;
    }

    /**
     * @return \Illuminate\Support\Collection
     */
    public function collection() {
        $tasks = Task::ofUser($this->userId)
            ->ofParent($this->parentId)
            ->get();

        return BasicTaskResource::collection($tasks);
    }

    public function headings(): array {
        return [
            'Context',
            'Status',
            'Created at',
        ];
    }
}
