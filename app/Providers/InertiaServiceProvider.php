<?php

namespace App\Providers;

use Illuminate\Http\Request;
use Illuminate\Support\ServiceProvider;
use Inertia\Inertia;

class InertiaServiceProvider extends ServiceProvider {

    /**
     * Register any application services.
     *
     * @return void
     */
    public function register() {
        //
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot() {
        $this->shareRequestData();
    }

    public function shareRequestData() {
        Inertia::share([
            'errors'   => function (Request $request) {
                return $request->session()->get('errors')
                ? $request->session()->get('errors')->getBag('default')->getMessages()
                : (object) [];
            },
            'response' => function (Request $request) {
                return [
                    "type"    => $request->session()->get('error') ? "error" : "success",
                    "data"    => $request->session()->get('data') ?: [],
                    "message" => $request->session()->get('error') ?: $request->session()->get('success'),
                ];
            },
        ]);
    }
}
