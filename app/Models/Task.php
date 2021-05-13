<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Task extends Model {

    use HasFactory;
    



    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'parent_id', 'context', 'author_id', "status",
    ];

    public function items() {
        return $this->hasMany(self::class, "parent_id");
    }

    public function subTasks() {
        return $this->hasMany(self::class, "parent_id")->with("subTasks");
    }

    public function scopeOfUser($query, $user_id) {
        return $query->where("author_id", $user_id);
    }

    public function scopeFetchByHeirarchy($query) {
        return $query->whereNull("parent_id")
            ->with("subTasks");
    }
    


}
