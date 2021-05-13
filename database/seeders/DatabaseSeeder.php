<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder {

    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run() {
        User::create([
            "name" => "User 1",
            "email" => "user1@demo.com",
            "password" => bcrypt("password"),
        ]);
        User::create([
            "name" => "User 2",
            "email" => "user2@demo.com",
            "password" => bcrypt("password"),
        ]);
        User::create([
            "name" => "User 3",
            "email" => "user3@demo.com",
            "password" => bcrypt("password"),
        ]);
        User::create([
            "name" => "User 4",
            "email" => "user4@demo.com",
            "password" => bcrypt("password"),
        ]);
    }
}
