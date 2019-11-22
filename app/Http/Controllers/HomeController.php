<?php

namespace App\Http\Controllers;

use App\User\Post;
use Illuminate\Contracts\Support\Renderable;

class HomeController extends Controller
{
    /**
     * Show the application dashboard.
     *
     * @return Renderable
     */
    public function index()
    {
        $posts = Post::orderBy('created_at', 'DESC')->paginate(25);
        return view('home', ['posts' => $posts]);
    }
}
