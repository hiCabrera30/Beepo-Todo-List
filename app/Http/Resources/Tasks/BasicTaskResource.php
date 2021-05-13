<?php

namespace App\Http\Resources\Tasks;

use Illuminate\Http\Resources\Json\JsonResource;

class BasicTaskResource extends JsonResource {

    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request) {
        return [
            "context"    => $this->context,
            "status"     => $this->status,
            "created_at" => $this->created_at->format("F d, Y h:i A"),

            "subTasks"   => self::collection($this->whenLoaded("subTasks")),
        ];
    }
}
