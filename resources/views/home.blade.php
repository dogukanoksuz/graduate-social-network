@extends('layouts.app')
@section('title')
    Pano - {{ config('app.name') }}
@endsection

@section('content')
    <div class="container">
        <div class="row">

            <div class="col-md-9">
                @if (!empty($posts))
                    @foreach ($posts as $post)
                        <div class="card mb-5">
                            <div class="card-header">
                                <a href="{{ route('profile.show', $post->user()->first()->id) }}"><img
                                        src="{{ $post->user()->first()->profile_picture }}"
                                        class="card-img-top"
                                        alt="{{ $post->user()->first()->name }}"
                                        style="max-width: 36px; height: auto; border-radius: 36px;">
                                    &nbsp; {{ $post->user()->first()->name }}</a>
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
            <div class="col-md-3">
                <div class="card mb-5">
                    <div class="card-header">
                        Yeni bir paylaşım yap
                    </div>
                    <div class="card-body p-3">
                        <form action="{{ route('profile.store_post', Auth::user()->id) }}" method="POST">
                            @csrf
                            <textarea type="text" class="form-control" name="post_content"
                                      placeholder="Bugün ne hissediyorsun?"></textarea>
                            <button class="btn btn-primary w-100 mt-2" type="submit"><i class="fas fa-paper-plane"></i>
                            </button>

                        </form>
                    </div>
                </div>

                <div class="card">
                    <img src="{{ Auth::user()->profile_picture }}" class="card-img-top"
                         alt="{{ Auth::user()->name }}">
                    <div class="card-body text-center" style="padding: 15px">
                        <h5 class="card-title">{{ Auth::user()->name }}</h5>
                        <p class="card-text">Kullanıcı hakkında kısmı gelecek</p>
                        <a href="{{ route('profile.edit', Auth::user()->id) }}" class="btn btn-primary"><i
                                class="fas fa-user-edit mr-1"></i>Profili Düzenle</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
