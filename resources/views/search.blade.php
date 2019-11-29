@extends('layouts.app')
@section('title')
    {{ $req->s }} araması - {{ config('app.name') }}
@endsection

@section('content')
    <div class="container">
        <div class="row">
            @foreach($users as $user)
                <a href="{{ route('profile.show', $user->id) }}">
                    <div class="col-md-3">
                        <div class="card">
                            <img src="{{ $user->profile_picture }}" class="card-img-top"
                                 alt="{{ $user->name }}">
                            <div class="card-body text-center" style="padding: 15px">
                                <h5 class="card-title">{{ $user->name }}</h5>
                                @if (Auth::user()->id === $user->id)
                                    <a href="{{ route('profile.edit', $user->id) }}" class="btn btn-primary"><i
                                            class="fas fa-user-edit mr-1"></i>Profili Düzenle</a>
                                @else
                                    <a href="{{ route('chat.show', $user->id) }}" class="btn btn-primary"><i
                                            class="fas fa-edit"></i></a>
                                    @if (Auth::user()->isFollowing($user->id))
                                        <a href="{{ route('profile.unfollow', $user->id) }}" class="btn btn-primary"><i
                                                class="fas fa-user-minus"></i></a>
                                    @else
                                        <a href="{{ route('profile.follow', $user->id) }}" class="btn btn-primary"><i
                                                class="fas fa-user-plus"></i></a>
                                    @endif
                                @endif
                            </div>
                        </div>
                    </div>
                </a>
            @endforeach
            {{ $users->links() }}
        </div>
    </div>
@endsection
