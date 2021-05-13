<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Task extends Model {

    use HasFactory, SoftDeletes;
    



    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'parent_id', 'context', 'author_id', "status", "order",
    ];

    public function parent() {
        return $this->belongsTo(self::class, "parent_id");
    }

    public function items() {
        return $this->hasMany(self::class, "parent_id");
    }

    public function subTasks() {
        return $this->hasMany(self::class, "parent_id")->with([
            "subTasks" => function ($subTasks) {
                $subTasks->sortByOrder();
            }
        ]);
    }

    public function scopeOfUser($query, $user_id) {
        return $query->where("author_id", $user_id);
    }
    public function scopeOfParent($query, $parent_id = null) {
        return $parent_id
            ? $query->where("parent_id", $parent_id)
            : $query->whereNull("parent_id");
    }

    public function scopeFetchByHeirarchy($query) {
        return $query->whereNull("parent_id")
            ->with("subTasks");
    }

    public function scopeInTrashBin($query) {
        return $query->withTrashed()
            ->whereNotNull("deleted_at");
    }

    public function scopeSortByOrder($query) {
        return $query->orderBy("order");
    }

    public function scopeIsRestorable($query) {
        return $query->where(function ($query) {
            return $query->whereNull("parent_id")
                ->orWhere(function ($query) {
                    return $query
                        ->whereNotNull("parent_id")
                        ->whereHas("parent", function ($parent) {
                            $parent->whereNull("deleted_at");
                        });
                });
        });
    }
    


}
