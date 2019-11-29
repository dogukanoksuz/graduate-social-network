<?php

namespace App\Http\Controllers;

use App\User;
use App\User\Post;
use Illuminate\Contracts\Support\Renderable;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\ValidationException;

class HomeController extends Controller
{
    /**
     * Show the application dashboard.
     *
     * @param Request $request
     * @return Renderable
     */
    public function index(Request $request)
    {
        if($request->followed == 1)
        {
            $followed = Auth::user()->followings()->get()->pluck(['id']);
            $posts = Post::whereIn('user_id', $followed)->orderBy('created_at', 'DESC')->paginate(25);
        } else {
            $posts = Post::orderBy('created_at', 'DESC')->paginate(25);
        }

        return view('home', ['posts' => $posts, 'req' => $request]);
    }

    public function search(Request $request)
    {
        try
        {
            $this->validate($request, [
                's' => 'required|max:100'
            ]);
        } catch (ValidationException $e) {
            return back()->withErrors(['Formu boş bırakmasan iyi olur sanki?']);
        }

        $users = User::where('name', 'LIKE', "%{$request->s}%")
            ->paginate(15);

        return view('search', ['users' => $users, 'req' => $request]);
    }
}
