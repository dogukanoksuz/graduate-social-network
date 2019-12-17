<?php

namespace App\Http\Controllers\Superuser;

use App\Company\Position;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Validation\ValidationException;

class PositionController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return Response
     */
    public function index()
    {
        $positions = Position::paginate(50);

        return view('superuser.position', ['positions' => $positions]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return Response
     */
    public function create()
    {
        return view('superuser.position_create');
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
                'name' => 'max:50|required'
            ]);
        } catch (ValidationException $e) {
            return redirect(route('position.index'))->withErrors(['Girdiğiniz isim maksimum 50 karakter olmalıdır.']);
        }

        $position = Position::create([
            'name' => $request->name
        ]);

        return redirect(route('position.index'))->with('success', 'Başarıyla eklendi!');
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param int $id
     * @return Response
     */
    public function edit($id)
    {
        $position = Position::findOrFail($id);

        return view('superuser.position_edit', ['position' => $position]);
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
        try {
            $this->validate($request, [
                'name' => 'max:50|required'
            ]);
        } catch (ValidationException $e) {
            return redirect(route('position.index'))->withErrors(['Girdiğiniz isim maksimum 50 karakter olmalıdır.']);
        }

        $position = Position::findOrFail($id);

        $position->update([
            'name' => $request->name
        ]);

        return redirect(route('position.index'))->with('success', 'Başarıyla düzenlendi!');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param int $id
     * @return Response
     */
    public function destroy($id)
    {
        $position = Position::findOrFail($id);
        $position->destroy($id);

        return redirect(route('position.index'))->with('success', 'Başarıyla silindi');
    }
}
