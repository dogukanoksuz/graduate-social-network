<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class CheckIfSuperuser
{
    /**
     * Handle an incoming request.
     *
     * @param Request $request
     * @param Closure $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        if (Auth::check() && Auth::user()->is_superuser) {
            return $next($request);
        }

        return redirect(route('home'))->withErrors(['Superuser erişiminiz yok.', 'Kullanıcı: ' . Auth::user()->id]);
    }
}
