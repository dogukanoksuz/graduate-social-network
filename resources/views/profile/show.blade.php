@extends('layouts.app')
@section('title')
    {{ $user->name }} - {{ config('app.name') }}
@endsection

@section('content')
    <div class="container">
        <div class="row">
            <div class="col-md-3">
                <div class="card">
                    <img src="https://semantic-ui.com/images/avatar2/large/elyse.png" class="card-img-top"
                         alt="{{ $user->name }}">
                    <div class="card-body text-center" style="padding: 15px">
                        <h5 class="card-title">{{ $user->name }}</h5>
                        <p class="card-text">Kullanıcı hakkında kısmı gelecek</p>
                        @if (Auth::user()->id === $user->id)
                            <a href="{{ route('profile.edit', $user->id) }}" class="btn btn-primary">Profili Düzenle</a>
                        @endif
                    </div>
                </div>
            </div>
            <div class="col-md-9">
                @if (Auth::user()->id === $user->id)
                    <div class="card mb-5">
                        <div class="card-header">
                            Yeni bir paylaşım yap
                        </div>
                        <div class="card-body">
                            abcdef
                        </div>
                    </div>
                @endif

                @if (!empty($posts))
                    @foreach ($posts as $post)
                        <div class="card mb-5">
                            <div class="card-header">
                                <a href="{{ route('profile.show', $user->id) }}"><img
                                        src="https://semantic-ui.com/images/avatar2/large/elyse.png"
                                        class="card-img-top"
                                        alt="{{ $user->name }}"
                                        style="max-width: 36px; height: auto; border-radius: 36px;">
                                    &nbsp; {{ $user->name }}</a>
                            </div>
                            <div class="card-body">
                                {{ $post->content }}
                            </div>
                        </div>
                    @endforeach
                    {{ $posts->links() }}
                @endif
            </div>
        </div>
    </div>
@endsection
