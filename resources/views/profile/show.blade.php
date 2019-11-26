@extends('layouts.app')
@section('title')
    {{ $user->name }} - {{ config('app.name') }}
@endsection

@section('content')
    <div class="container">
        <div class="row">
            <div class="col-md-3">
                <div class="card">
                    <img src="{{ Auth::user()->profile_picture }}" class="card-img-top"
                         alt="{{ $user->name }}">
                    <div class="card-body text-center" style="padding: 15px">
                        <h5 class="card-title">{{ $user->name }}</h5>
                        <p class="card-text">Kullanıcı hakkında kısmı gelecek</p>
                        @if (Auth::user()->id === $user->id)
                            <a href="{{ route('profile.edit', $user->id) }}" class="btn btn-primary"><i
                                    class="fas fa-user-edit mr-1"></i>Profili Düzenle</a>
                        @else
                            <a href="{{ route('chat.show', $user->id) }}" class="btn btn-primary"><i
                                    class="fas fa-edit mr-1"></i>Yeni Mesaj</a>
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
                        <div class="card-body p-3">
                            <form action="{{ route('profile.store_post', $user->id) }}" method="POST">
                                @csrf
                                <div class="input-group">
                                    <textarea type="text" class="form-control" name="post_content"
                                              placeholder="Bugün ne hissediyorsun?"></textarea>
                                    <div class="input-group-append">
                                        <button class="btn btn-primary" type="submit"><i
                                                class="fas fa-paper-plane mr-1"></i> Paylaş
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                @endif

                @if (!empty($posts))
                    @foreach ($posts as $post)
                        <div class="card mb-5">
                            <div class="card-header">
                                <a href="{{ route('profile.show', $user->id) }}"><img
                                        src="{{ $user->profile_picture }}"
                                        class="card-img-top"
                                        alt="{{ $user->name }}"
                                        style="max-width: 36px; height: auto; border-radius: 36px;">
                                    &nbsp; {{ $user->name }}</a>
                                <div class="float-right mt-1">
                                    {{ $post->created_at->isoFormat('LLLL') }}
                                </div>
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
