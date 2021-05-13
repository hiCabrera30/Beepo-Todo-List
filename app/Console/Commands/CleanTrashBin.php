<?php

namespace App\Console\Commands;

use App\Models\Task;
use Carbon\Carbon;
use Illuminate\Console\Command;

class CleanTrashBin extends Command {
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'tasks:clean-trash';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Delete tasks that reach 30 days in trash bin';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct() {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle() {
        Task::inTrashBin()
            ->where("deleted_at", "<", Carbon::now()->subDays(30))
            ->forceDelete();
    }
}
