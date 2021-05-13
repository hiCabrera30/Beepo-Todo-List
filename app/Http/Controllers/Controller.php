<?php

namespace App\Http\Controllers;

use Exception;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;

class Controller extends BaseController {
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;

    
    protected function flattenObject($data) {
        return json_decode(json_encode($data));
    }

    protected function resolve(string $message, $data) {
        $response = [
            "status" => "suceess",
            "message" => $message,
            "result" => $data,
        ];

        return response()->json($response, 200);
    }

    protected function reject(Exception $ex) {
        $response = [
            "status" => "error",
            "message" => $ex->getMessage(),
        ];

        return response()->json($response, 503);
    }
}
