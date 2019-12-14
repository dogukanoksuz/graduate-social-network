@extends('layouts.app')
@section('title')
    Pano - {{ config('app.name') }}
@endsection

@section('content')
    <div class="container">
        <div class="row">
            <div class="col-md-9">
                @if ($req->allposts == 1)
                    <h4>Tüm gönderileri görüntülüyorsunuz.</h4>
                    <br>
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
                @php
                    $user = Auth::user()
                @endphp
                @include('profile.profile_embed')
            </div>
        </div>
    </div>
@endsection
