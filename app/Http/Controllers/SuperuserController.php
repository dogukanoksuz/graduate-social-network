<?php

namespace App\Http\Controllers;

use App\Company;
use App\User;

class SuperuserController extends Controller
{
    public function index()
    {
        return view('superuser.index');
    }

    public function systeminfo()
    {
        $info = [
            'company_count' => Company::count(),
            'user_count' => User::count()
        ];

        return view('superuser.systeminfo', ['info' => $info]);
    }
}
