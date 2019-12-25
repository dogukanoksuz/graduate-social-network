@extends('layouts.app')
@section('title')
    Staj ilanları - {{ config('app.name') }}
@endsection

@section('content')
    <div class="container">
        <div class="row">
            <div class="col-md-9">
                <div class="jumbotron">
                    <p class="lead">Staj ilanlarını görüntülüyorsunuz.</p>
                    <hr class="my-4">
                    <a class="btn btn-primary btn-lg" href="{{ route('home') }}" role="button">Sadece takip ettiklerimi
                        göster</a>
                </div>
                @if(!isset($search_values))
                    <div class="card mb-5">
                        <div class="card-body">
                            <form action="{{ route('intern-search') }}" method="GET">
                                @csrf
                                <div class="row">
                                    <div class="col-md-4">
                                        <label for="company">Şirket</label><br>
                                        <select name="company" id="company" class="custom-select">
                                            <option value="0" disabled selected>Şirket seçiniz</option>
                                            @foreach ($companies as $company)
                                                <option value="{{ $company->id }}">{{ $company->name }}</option>
                                            @endforeach
                                        </select>
                                    </div>
                                    <div class="col-md-4">
                                        <label for="staj_donemi">Staj dönemi</label><br>
                                        <select name="staj_donemi" id="staj_donemi" class="custom-select">
                                            <option value="0" disabled selected>Dönem seçiniz</option>
                                            <option value="Yaz">Yaz</option>
                                            <option value="Kış">Kış</option>
                                        </select>
                                    </div>
                                    <div class="col-md-2">
                                        <label for="position">Staj süresi</label><br>
                                        <input type="number" name="sure" value="0" class="form-control">
                                    </div>
                                    <div class="col-md-2">
                                        <button class="btn btn-primary w-100 h-100"><i class="fas fa-paper-plane"></i>
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                @else
                    <div class="card mb-5">
                        <div class="card-body text-center" style="font-family: 'Poppins';">
                            <b>{{ $search_values[0] }}</b> şirketindeki <b>{{ $search_values[1] }}</b> stajına
                            arama yapıyorsunuz.
                        </div>
                    </div>
                @endif
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
                                {!! $post->getPostTypeInformation() !!}
                                <div class="float-right mt-1">
                                    <a href="{{ route('post.listcomments', $post->id) }}">{{ $post->created_at->isoFormat('LLLL') }}</a>
                                </div>
                            </div>
                            <div class="card-body">
                                {{ $post->content }}
                            </div>
                            @php
                                $comments = $post->comment()->orderBy('created_at', 'DESC')->take(3)->get();
                                $likes = $post->likes()->get();
                            @endphp

                            <div class="card-footer">
                                <ul class="list-unstyled mb-0">
                                    @if(count($likes) > 0)
                                        <li class="mb-4">
                                            <a href="{{ route('post.likes', $post->id) }}">
                                                {{ count($likes) }} kişi beğendi!
                                            </a>
                                        </li>
                                    @endif
                                    <li class="@if(count($comments) != 0) mb-4 @endif">
                                        <form action="{{ route('post.storecomments', $post->id) }}" method="POST">
                                            @csrf
                                            <div class="input-group">
                                                <a href="{{ route('post.like', $post->id) }}"
                                                   class="btn btn-primary mr-2">
                                                    @if($post->isLikedByMe() == false)
                                                        <i class="fas fa-thumbs-up"></i>
                                                    @else
                                                        <i class="fas fa-thumbs-down"></i>
                                                    @endif
                                                </a>
                                                <textarea type="text" class="form-control" name="comment_content"
                                                          placeholder="Yorum yaz..." style="height:40px"></textarea>
                                                <div class="input-group-append">
                                                    <button class="btn btn-primary" type="submit"><i
                                                            class="fas fa-paper-plane"></i>
                                                    </button>
                                                </div>
                                            </div>
                                        </form>
                                    </li>
                                    @if(count($comments) != 0)
                                        @foreach($comments as $comment)
                                            <li class="float-left w-100 mb-4">
                                                <div class="float-left mr-3">
                                                    <a href="{{ route('profile.show', $comment->user()->first()->id ) }}"><img
                                                            src="{{ $comment->user()->first()->profile_picture }}"
                                                            class="card-img-top"
                                                            alt="{{ $comment->user()->first()->name }}"
                                                            style="max-width: 36px; height: auto; border-radius: 36px;">
                                                    </a>
                                                </div>

                                                <div class="float-left">
                                                    <a href="{{ route('profile.show', $comment->user()->first()->id ) }}">
                                                        {{ $comment->user()->first()->name }}
                                                    </a>
                                                    <p class="mt-2 mb-0">{{ $comment->content }}</p>
                                                </div>

                                                <small class="float-right">
                                                    {{ $comment->created_at->isoFormat('LlL') }}
                                                </small>
                                            </li>
                                        @endforeach
                                        @if(count($comments) > 2)
                                            <li>
                                                <a href="{{ route('post.listcomments', $post->id) }}"
                                                   class="text-center d-block">Yorumların devamını gör</a>
                                            </li>
                                        @endif
                                    @endif
                                </ul>
                            </div>

                        </div>
                    @endforeach
                    {{ $posts->links() }}
                @endif
            </div>
            <div class="col-md-3">
                @php
                    $user = Auth::user()
                @endphp
                @include('elements.profile_embed')
                <div class="card  mt-5 mb-5">
                    <div class="card-header">
                        Yeni üyelerimiz
                    </div>
                    <div class="card-body p-3">
                        @include('elements.new_members')
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
