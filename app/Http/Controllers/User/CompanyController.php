<?php

namespace App\Http\Controllers\User;

use App\Company;
use App\Http\Controllers\Controller;

class CompanyController extends Controller
{
    public function index()
    {
        $companies = Company::paginate(25);
        return view('company.index', ['companies' => $companies]);
    }
}
