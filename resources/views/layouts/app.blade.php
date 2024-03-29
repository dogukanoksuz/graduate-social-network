<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>@yield('title', config('app.name', 'Mezun'))</title>

    <!-- Styles -->
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
</head>
<body>
<div id="preloader">
    <div class="loader">
        <div class="loader-figure"></div>
        <p class="loader-label">{{ config('app.name', 'Mezun') }}</p>
    </div>
</div>
<div id="app">
    <nav class="navbar navbar-expand-md navbar-dark bg-dark fixed-top"
         style="box-shadow: 0 0.46875rem 2.1875rem rgba(90,97,105,.1), 0 0.9375rem 1.40625rem rgba(90,97,105,.1), 0 0.25rem 0.53125rem rgba(90,97,105,.12), 0 0.125rem 0.1875rem rgba(90,97,105,.1)">
        <div class="container">
            <a class="navbar-brand" href="{{ url('/') }}">
                <i class="fas fa-user-graduate mr-2"></i>{{ config('app.name', 'Laravel') }}
            </a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent" aria-expanded="false"
                    aria-label="{{ __('Toggle navigation') }}">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                    @guest

                    @else
                        <li class="nav-item">
                            <a href="{{ route('companies.list') }}" class="nav-link">Firmalar</a>
                        </li>
                        <li class="nav-item">
                            <a href="{{ route('jobs') }}" class="nav-link">İş İlanları</a>
                        </li>
                        <li class="nav-item">
                            <a href="{{ route('intern') }}" class="nav-link">Staj İlanları</a>
                        </li>
                        <li class="nav-item">
                            <a href="{{ route('home', ['allposts' => 1]) }}" class="nav-link">Tüm Gönderiler</a>
                        </li>
                    @endguest
                </ul>

                <ul class="navbar-nav ml-auto">
                    @guest
                        <li class="nav-item">
                            <a class="nav-link" href="{{ route('login') }}">{{ __('Login') }}</a>
                        </li>
                        @if (Route::has('register'))
                            <li class="nav-item">
                                <a class="nav-link" href="{{ route('register') }}">{{ __('Register') }}</a>
                            </li>
                        @endif
                    @else
                        <form class="form-inline mr-3" action="{{ route('search') }}" method="GET">
                            <div class="input-group">
                                <input type="text" class="form-control" name="s" placeholder="Kullanıcı arama..."
                                       style="border-radius: .325rem 0 0 .325rem">
                                <div class="input-group-append">
                                    <button class="btn btn-primary" type="submit"><i class="fas fa-search"></i></button>
                                </div>
                            </div>
                        </form>

                        <li class="nav-item dropdown">
                            <a id="navbarDropdown" class="nav-link dropdown-toggle" href="#" role="button"
                               data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" v-pre>
                                <img class="mr-2" src="{{ Auth::user()->profile_picture }}"
                                     alt="{{ Auth::user()->name }}"
                                     style="max-height: 36px; width: auto; border-radius: 32px;">{{ Auth::user()->name }}
                                <span class="caret"></span>
                            </a>

                            <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
                                <a href="{{ route('profile.show', Auth::user()->id) }}" class="dropdown-item">
                                    Profil
                                </a>

                                <a href="{{ route('chat.index') }}" class="dropdown-item">
                                    Mesajlar
                                </a>

                                @if (Auth::user()->is_superuser)
                                    <a href="{{ route('superuser.index') }}" class="dropdown-item">
                                        Superuser
                                    </a>
                                @endif

                                <a class="dropdown-item" href="{{ route('logout') }}"
                                   onclick="event.preventDefault();
                                                     document.getElementById('logout-form').submit();">
                                    {{ __('Logout') }}
                                </a>

                                <form id="logout-form" action="{{ route('logout') }}" method="POST"
                                      style="display: none;">
                                    @csrf
                                </form>
                            </div>
                        </li>
                    @endguest
                </ul>
            </div>
        </div>
    </nav>


    <main class="py-4">
        @if ($errors->any())
            <div class="container mb-5">
                <div class="alert alert-danger">
                    @foreach ($errors->all() as $error)
                        {{ $error }}<br>
                    @endforeach
                </div>
            </div>
        @endif

        @if ($message = Session::get('success'))
            <div class="container mb-5">
                <div class="alert alert-success">
                    {{ $message }}
                </div>
            </div>
        @endif
        @yield('content')
    </main>

    <footer class="footer">
        <div class="container text-center" style="font-family: 'Poppins'">
            Copyright &copy; {{ \Carbon\Carbon::now()->format('Y') }} {{ config('app.name', 'Mezun') }}, <a
                href="https://dogukan.dev">N.E.T. Code</a>
        </div>
    </footer>
</div>
<!-- Scripts -->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
<script src="{{ asset('js/app.js') }}"></script>
@yield('scriptContent')
</body>
</html>
