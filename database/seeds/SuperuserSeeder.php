<?php

use Illuminate\Database\Seeder;

class SuperuserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('users')->insert([
            'name' => 'Doğukan Öksüz',
            'email' => 'me@dogukan.dev',
            'password' => Hash::make('divergent'),
            'is_superuser' => true
        ]);
    }
}
