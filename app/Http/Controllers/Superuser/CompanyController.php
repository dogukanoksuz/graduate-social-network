<?php

namespace App\Http\Controllers\Superuser;

use App\Company;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Validation\ValidationException;

class CompanyController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return Response
     */
    public function index()
    {
        $companies = Company::paginate(50);
        return view('superuser.company', ['companies' => $companies]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return Response
     */
    public function create()
    {
        return view('superuser.company_create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param Request $request
     * @return Response
     */
    public function store(Request $request)
    {
        try {
            $this->validate($request, [
                'name' => 'required|string|max:255',
                'picture' => 'required|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
                'contact_info' => 'max:500',
                'address' => 'max:500',
                'company_info' => 'max:500'
            ]);
        } catch (ValidationException $e) {
            return back()->withErrors(['Girdinizde hata bulunuyor.']);
        }

        $imageName = time() . '.' . $request->picture->extension();
        $request->picture->move(public_path('storage/company'), $imageName);

        $company = Company::create([
            'name' => $request->name,
            'picture' => '/storage/company/' . $imageName,
            'contact_info' => $request->contact_info,
            'address' => $request->address,
            'company_info' => $request->company_info
        ]);

        return redirect(route('company.index'))->with('success', 'Firma başarıyla oluşturuldu!');
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param int $id
     * @return Response
     */
    public function edit($id)
    {
        $company = Company::findOrFail($id)->get()->first();

        return view('superuser.company_edit', ['company' => $company]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param Request $request
     * @param int $id
     * @return Response
     */
    public function update(Request $request, $id)
    {
        $company = Company::where('id', $id);
        try {
            $this->validate($request, [
                'name' => 'required|string|max:255',
                'picture' => 'image|mimes:jpeg,png,jpg,gif,svg|max:2048',
                'contact_info' => 'max:500',
                'company_info' => 'max:500',
                'address' => 'max:500',
            ]);
        } catch (ValidationException $e) {
            return redirect(route('company.index'))->withErrors(['Girdinizde hata bulunuyor.']);
        }

        if (!empty($request->picture)) {
            $imageName = time() . '.' . $request->picture->extension();
            $request->picture->move(public_path('storage/company'), $imageName);
            $company->update([
                'picture' => '/storage/company/' . $imageName
            ]);
        }

        $company->update([
            'name' => $request->name,
            'address' => $request->address,
            'contact_info' => $request->contact_info,
            'company_info' => $request->company_info
        ]);

        return redirect(route('company.index'))->with('success', 'Başarıyla düzenlendi!');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param int $id
     * @return Response
     */
    public function destroy($id)
    {
        $company = Company::findOrFail($id);
        $company->destroy($id);

        return redirect(route('company.index'))->with('success', 'Başarıyla silindi!');
    }
}
