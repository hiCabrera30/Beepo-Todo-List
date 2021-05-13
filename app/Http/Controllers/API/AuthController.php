<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\LoginRequest;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;

class AuthController extends Controller {

    public function login(LoginRequest $request) {
        if (Auth::attempt($request->getFormData())) {
            $request->session()->regenerate();

            return Redirect::route('dashboard.index');
        }

        return redirect()->back()->with('error', "The provided credentials do not match our records.");
    }

}
