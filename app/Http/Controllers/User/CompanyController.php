<?php

namespace App\Http\Controllers\User;

use App\Company;
use App\Http\Controllers\Controller;
use App\User;
use Illuminate\Support\Facades\DB;

class CompanyController extends Controller
{
    public function index()
    {
        $companies = Company::paginate(25);
        return view('company.index', ['companies' => $companies]);
    }

    public function show($id)
    {
        $company = Company::findOrFail($id);

        $employeeIds = DB::table('user_company_position')->where('company_id', $id)->get()->pluck(['user_id']);
        $employees = User::whereIn('id', $employeeIds)->get();

        return view('company.show', ['company' => $company, 'employees' => $employees]);
    }
}
