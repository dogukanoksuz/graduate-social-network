<?php

namespace App\Http\Controllers;

use App\Company;
use App\Company\Position;
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
        if ($request->allposts == 1) {
            $posts = Post::orderBy('created_at', 'DESC')->paginate(25);
        } else {
            $followed = Auth::user()->followings()->get()->pluck(['id']);
            $posts = Post::whereIn('user_id', $followed)->orderBy('created_at', 'DESC')->paginate(25);
        }

        return view('home', ['posts' => $posts, 'req' => $request]);
    }

    public function search(Request $request)
    {
        try {
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

    public function jobAds()
    {
        $posts = Post::where('type', 'work')
            ->orderBy('created_at', 'DESC')
            ->paginate(25);

        $companies = Company::orderBy('name', 'ASC')->get();
        $positions = Position::orderBy('name', 'ASC')->get();

        return view('jobAds',
            ['posts' => $posts, 'companies' => $companies, 'positions' => $positions]);
    }

    public function jobAdSearch(Request $request)
    {
        try {
            $this->validate($request, [
                'company' => 'required|numeric|exists:companies,id',
                'position' => 'required|numeric|exists:positions,id'
            ]);
        } catch (ValidationException $e) {
            return back()->withErrors(['Arama formunda bi şeyler oluyor???']);
        }

        $companies = Company::all();
        $company = Company::findOrFail($request->company);
        $positions = Position::all();
        $position = Position::findOrFail($request->position);

        $search_values = [
            $company->name, $position->name
        ];

        $posts = Post::where('content', 'LIKE', "%{$company->name}%")
            ->where('content', 'LIKE', "%{$position->name}%")->paginate(25);

        return view('jobAds',
            ['posts' => $posts, 'companies' => $companies, 'positions' => $positions, 'search_values' => $search_values]);
    }

    public function internAds()
    {
        $posts = Post::where('type', 'intern')->orderBy('created_at', 'DESC')->paginate(25);

        $companies = Company::orderBy('name', 'ASC')->get();
        return view('internAds', ['posts' => $posts, 'companies' => $companies]);
    }

    public function internAdSearch(Request $request)
    {
        try {
            $this->validate($request, [
                'company' => 'required|numeric|exists:companies,id',
                'staj_donemi' => 'required',
                'sure' => 'numeric'
            ]);
        } catch (ValidationException $e) {
            return back()->withErrors(['Arama formunda bi şeyler oluyor???']);
        }

        $companies = Company::all();
        $company = Company::findOrFail($request->company);

        $search_values = [
            $company->name, $request->staj_donemi, $request->sure
        ];

        if ($request->sure != 0) {
            $posts = Post::where('content', 'LIKE', "%{$company->name}%")
                ->where('content', 'LIKE', "%{$request->staj_donemi}%")
                ->where('content', 'LIKE', "%{$request->sure}%")
                ->paginate(25);
        } else {
            $posts = Post::where('content', 'LIKE', "%{$company->name}%")
                ->where('content', 'LIKE', "%{$request->staj_donemi}%")
                ->paginate(25);
        }


        return view('jobAds',
            ['posts' => $posts, 'companies' => $companies, 'search_values' => $search_values]);
    }
}
