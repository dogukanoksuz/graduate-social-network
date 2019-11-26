<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\User;
use App\User\Post;
use Illuminate\Contracts\View\Factory;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Auth;
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
        if (Auth::user()->id == $id) {
            $user = User::where('id', $id);
            try {
                $this->validate($request, [
                    'name' => 'required|string|max:255',
                    'email' => 'required|email|unique:users,email,' . $id,
                    'profile_picture' => 'image|mimes:jpeg,png,jpg,gif,svg|max:2048',
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
                'email' => $request->email
            ]);

            if (!empty($request->password)) {
                $user->update(['password' => Hash::make($request->password)]);
            }

            return back()->with('success', 'Başarıyla kayıt edildi!');
        }
        return back();
    }

    /**
     * Store newly created post
     *
     * @param Request $request
     * @param $id
     * @return RedirectResponse
     */
    public function storePost(Request $request, $id)
    {
        try {
            $this->validate($request, [
                'post_content' => 'required|max:1000'
            ]);
        } catch (ValidationException $e) {
            return back()->withErrors(['1000 karakterden fazla içerik giremezsiniz.']);
        }

        $post = Post::create([
            'content' => $request->post_content,
            'user_id' => $id
        ]);

        return back()->with('success', 'Başarıyla eklendi');
    }
}
