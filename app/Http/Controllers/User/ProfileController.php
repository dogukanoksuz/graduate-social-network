<?php

namespace App\Http\Controllers\User;

use App\Company;
use App\Company\Position;
use App\Http\Controllers\Controller;
use App\User;
use Illuminate\Contracts\View\Factory;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\ValidationException;
use Illuminate\View\View;


class ProfileController extends Controller
{
    /**
     * Display profile
     *
     * @return Factory|View
     */
    public function index()
    {
        $user = Auth::user();
        $posts = $user->post()->orderBy('created_at', 'DESC')->paginate(5);
        return view('profile.show', ['user' => $user, 'posts' => $posts]);
    }

    /**
     * Display the specified resource.
     *
     * @param int $id
     * @return Response
     */
    public function show($id)
    {
        $user = User::where('id', $id)->first();
        if ($user == null) {
            return abort(404);
        }
        $posts = $user->post()->orderBy('created_at', 'DESC')->paginate(5);

        return view('profile.show', ['user' => $user, 'posts' => $posts]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param int $id
     * @return Response
     */
    public function edit($id)
    {
        if (Auth::user()->id == $id) {
            $user = User::where('id', $id)->first();
            return view('profile.edit', ['user' => $user]);
        }
        return back();
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
        if (Auth::user()->id == $id || Auth::user()->is_superuser) {
            $user = User::where('id', $id);
            try {
                $this->validate($request, [
                    'name' => 'required|string|max:255',
                    'email' => 'required|email|unique:users,email,' . $id,
                    'profile_picture' => 'image|mimes:jpeg,png,jpg,gif,svg,webp|max:2048',
                    'about' => 'max:500'
                ]);
            } catch (ValidationException $e) {
                return back()->withErrors(['Girdinizde hata bulunuyor.']);
            }

            if (!empty($request->profile_picture)) {
                $imageName = time() . '.' . $request->profile_picture->extension();
                $request->profile_picture->move(public_path('storage/profile'), $imageName);
                $user->update([
                    'profile_picture' => '/storage/profile/' . $imageName
                ]);
            }

            $user->update([
                'name' => $request->name,
                'email' => $request->email,
                'about' => $request->about
            ]);

            if (!empty($request->password)) {
                $user->update(['password' => Hash::make($request->password)]);
            }

            return back()->with('success', 'Başarıyla kayıt edildi!');
        }
        return back();
    }


    /**
     * Follow new user
     *
     * @param $profileId
     * @return RedirectResponse
     */
    public function followUser($profileId)
    {
        $user = User::find($profileId);
        if (!$user) {
            return redirect()->back()->with('error', 'Böyle bir kullanıcı bulunmamakta.');
        }

        $user->followers()->attach(auth()->user()->id);
        return back()->with('success', 'Kullanıcı takip edildi');
    }

    /**
     * Unfollow user
     *
     * @param int $profileId
     * @return RedirectResponse
     */
    public function unFollowUser(int $profileId)
    {
        $user = User::find($profileId);
        if (!$user) {
            return redirect()->back()->with('error', 'Kullanıcı bulunamadı.');
        }
        $user->followers()->detach(auth()->user()->id);
        return back()->with('success', 'Kullanıcı takipten çıkıldı.');
    }

    public function followers($profileId)
    {
        $user = User::find($profileId);
        $followers = $user->followers;

        return view('profile.followers', ['users' => $followers]);
    }

    public function following($profileId)
    {
        $user = User::find($profileId);
        $following = $user->followings;

        return view('profile.following', ['users' => $following]);
    }

    public function edit_details($id)
    {
        if (Auth::user()->id == $id) {
            $user = User::findOrFail($id);
            $companies = Company::all();
            $positions = Position::all();
            return view('profile.edit_details',
                ['user' => $user, 'positions' => $positions, 'companies' => $companies]);
        }
        return back();
    }

    public function update_details(Request $request, $id)
    {
        if (Auth::user()->id != $id)
            back();

        /*try {
            $this->validate($request, [
                'tc_no' => 'numeric|required|unique:users,tc_no',
                'phone_no' => 'numeric|required|unique:users,phone_no',
                'company' => 'required|exists:companies,id',
                'position' => 'required|exists:positions,id'
            ]);
        } catch (ValidationException $e) {
            return back()->withErrors(['Doğrulama hatası']);
        }*/

        $user = User::findOrFail($id);

        $user->update([
            'tc_no' => $request->tc_no,
            'phone_no' => $request->phone_no
        ]);

        $workDetails = DB::table('user_company_position')
            ->updateOrInsert([
                'user_id' => $id,
                'company_id' => $request->company,
                'position_id' => $request->position
            ]);

        return back()->with('success', 'Bilgileriniz başarıyla düzenlendi!');
    }
}

