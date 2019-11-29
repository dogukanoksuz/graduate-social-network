@extends('layouts.app')
@section('title')
    Gönderi beğenileri - {{ config('app.name') }}
@endsection

@section('content')
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <h4>Gönderi beğenileri</h4>
                <hr>
            </div>
            @foreach($users as $user)
                <div class="col-md-6 justify-content-center align-items-center mb-3">
                    <a href="{{ route('profile.show', $user->id) }}">
                        <img src="{{ $user->profile_picture }}" alt="{{ $user->name }}" class="float-left mr-3"
                             style="width: 36px; border-radius: 36px">
                        <span style="float: left;" class="mt-1">{{ $user->name }}</span>
                    </a>
                    @if (Auth::user()->isFollowing($user->id))
                        <a href="{{ route('profile.unfollow', $user->id) }}" class="btn btn-primary float-right"><i
                                class="fas fa-user-minus"></i></a>
                    @else
                        <a href="{{ route('profile.follow', $user->id) }}" class="btn btn-primary float-right"><i
                                class="fas fa-user-plus"></i></a>
                    @endif
                </div>
            @endforeach
        </div>
    </div>
@endsection
